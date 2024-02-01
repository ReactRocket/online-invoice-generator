import React from "react";

const AddBillForm = ({ formData, handleChange, handlePrint, setFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const invoice_kiran_arr_str = localStorage.getItem("invoice_kiran");
    let invoice_kiran_arr = [];

    if (invoice_kiran_arr_str) {
      // Parse the stored string into an array of objects
      invoice_kiran_arr = JSON.parse(invoice_kiran_arr_str);
    }

    // Push formData into the array
    invoice_kiran_arr.push(formData);

    // Store the updated array back into localStorage
    localStorage.setItem("invoice_kiran", JSON.stringify(invoice_kiran_arr));

    // Reset formData
    setFormData({});

    // You have not provided the definition of handlePrint(), assuming it's defined elsewhere
    handlePrint();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full md:px-10 flex flex-col gap-5 "
    >
      <fieldset className=" border-2 rounded-lg p-5">
        <legend className="text-lg font-semibold text-gray-700">
          Customer Details
        </legend>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            <input
              required
              onChange={handleChange}
              value={formData.name}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              name="name"
              placeholder="Enter Name "
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Phone
            </label>
            <input
              required
              onChange={handleChange}
              value={formData.phone}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              name="phone"
              placeholder="Enter Phone "
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Address
            </label>
            <input
              required
              onChange={handleChange}
              value={formData.address}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              name="address"
              placeholder="Enter Address "
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              City
            </label>
            <input
              required
              onChange={handleChange}
              value={formData.city}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              name="city"
              placeholder="City"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              State
            </label>
            <input
              required
              onChange={handleChange}
              value={formData.state}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              type="text"
              name="state"
              placeholder="State"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Zip
            </label>
            <input
              required
              onChange={handleChange}
              value={formData.zip}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              name="zip"
              type="number"
              placeholder="90210"
            />
          </div>
        </div>
      </fieldset>
      <fieldset className=" border-2 rounded-lg p-5">
        <legend className="text-lg font-semibold text-gray-700">
          Payment Details
        </legend>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-date"
            >
              Date
            </label>
            <input
              required
              onChange={handleChange}
              value={formData.date}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-date"
              type="date"
              name="date"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-month"
            >
              Month
            </label>
            <input
              required
              onChange={handleChange}
              value={formData.month}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-month"
              type="text"
              name="month"
              placeholder="Enter Month"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-payment"
            >
              Payment Method
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-payment"
                name="payment_method"
                required
                onChange={handleChange}
                value={formData.payment_method}
              >
                <option defaultValue="Cash">Cash</option>
                <option value="Cheque">Cheque</option>
                <option value="Online">Online</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-amount"
            >
              Rate
            </label>
            <input
              required
              onChange={handleChange}
              value={formData.amount}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-amount"
              type="number"
              name="amount"
              placeholder="₹0.00"
            />
          </div>
        </div>
      </fieldset>
      <div className="flex gap-5 justify-around items-center">
        <button
          type="submit"
          className="bg-blue-400 cursor-pointer hover:bg-blue-500 px-5 py-2 rounded-md text-white font-semibold"
        >
          Save
        </button>
        <button
          type="reset"
          className="bg-gray-400 cursor-pointer hover:bg-gray-500 px-5 py-2 rounded-md text-white font-semibold"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default AddBillForm;
