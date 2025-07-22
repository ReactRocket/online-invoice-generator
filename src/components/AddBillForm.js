import React, { useRef, useEffect } from "react";
import { ref, push } from "firebase/database";
import { db } from "../firebase/firebase";

const AddBillForm = ({ formData, handleChange, handlePrint, setFormData }) => {
  const form = useRef();

  useEffect(() => {
    form.current.name.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      handlePrint();
      const formRefDB = ref(db, "formData");
      await push(formRefDB, formData);
      form.current.reset();
      setFormData({});
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const inputClass =
    "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500";

  const inputProps = (name, type, placeholder = "") => ({
    required: true,
    name,
    type,
    value: formData[name] || "",
    onChange: handleChange,
    className: inputClass,
    placeholder,
  });

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="w-full h-full md:px-10 flex flex-col gap-5"
    >
      <fieldset className="border-2 rounded-lg p-5">
        <legend className="text-lg font-semibold text-gray-700">Customer Details</legend>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="name" className="block uppercase text-xs font-bold mb-2 text-gray-700">Name</label>
            <input id="name" {...inputProps("name", "text", "Enter Name")} />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="phone" className="block uppercase text-xs font-bold mb-2 text-gray-700">Phone</label>
            <input id="phone" {...inputProps("phone", "number", "Enter Phone")} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="address" className="block uppercase text-xs font-bold mb-2 text-gray-700">Address</label>
            <input id="address" {...inputProps("address", "text", "Enter Address")} />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="billNo" className="block uppercase text-xs font-bold mb-2 text-gray-700">Bill No.</label>
            <input id="billNo" {...inputProps("billNo", "number", "Enter Bill No.")} />
          </div>
        </div>
        {/* <div className="flex flex-wrap -mx-3 mb-2">
          {["city", "state", "zip"].map((field, i) => (
            <div key={field} className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label htmlFor={field} className="block uppercase text-xs font-bold mb-2 text-gray-700">
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                id={field}
                {...inputProps(field, field === "zip" ? "number" : "text", field === "zip" ? "90210" : field)}
              />
            </div>
          ))}
        </div> */}
      </fieldset>

      <fieldset className="border-2 rounded-lg p-5">
        <legend className="text-lg font-semibold text-gray-700">Payment Details</legend>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="date" className="block uppercase text-xs font-bold mb-2 text-gray-700">Date</label>
            <input id="date" {...inputProps("date", "date")} />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="month" className="block uppercase text-xs font-bold mb-2 text-gray-700">Month</label>
            <input id="month" {...inputProps("month", "text", "Enter Month")} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="payment_method" className="block uppercase text-xs font-bold mb-2 text-gray-700">
              Payment Method
            </label>
            <div className="relative">
              <select
                id="payment_method"
                name="payment_method"
                required
                onChange={handleChange}
                value={formData.payment_method || "Cash"}
                className={`${inputClass} pr-8`}
              >
                <option value="Cash">Cash</option>
                <option value="Cheque">Cheque</option>
                <option value="Online">Online</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="amount" className="block uppercase text-xs font-bold mb-2 text-gray-700">Rate</label>
            <input id="amount" {...inputProps("amount", "number", "₹0.00")} />
          </div>
          <div className="w-full md:w-1/2 px-3 mt-5">
            <label htmlFor="qty" className="block uppercase text-xs font-bold mb-2 text-gray-700">Qty</label>
            <input id="qty" {...inputProps("qty", "number", "0")} />
          </div>
        </div>

        {formData.payment_method === "Bank Transfer" && (
          <div className="flex flex-wrap -mx-3 mb-6">
            {[
              { id: "bank_name", label: "Account Name", type: "text" },
              { id: "account_no", label: "Account No", type: "number" },
              { id: "ifsc", label: "IFSC Code", type: "text" },
            ].map(({ id, label, type }) => (
              <div className="w-full md:w-1/3 px-3 mb-6" key={id}>
                <label htmlFor={id} className="block uppercase text-xs font-bold mb-2 text-gray-700">
                  {label}
                </label>
                <input disabled id={id} {...inputProps(id, type, label)} />
              </div>
            ))}
          </div>
        )}
      </fieldset>

      <div className="flex gap-5 justify-around items-center">
        <button type="submit" className="bg-blue-400 hover:bg-blue-500 px-5 py-2 rounded-md text-white font-semibold">
          Save
        </button>
        <button type="reset" className="bg-gray-400 hover:bg-gray-500 px-5 py-2 rounded-md text-white font-semibold">
          Reset
        </button>
      </div>
    </form>
  );
};

export default AddBillForm;
