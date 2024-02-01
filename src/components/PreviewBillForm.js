import React from "react";

const PreviewBillForm = ({ formData, componentRef }) => {
  return (
    <div className="h-full w-full " ref={componentRef}>
      <div className=" bg-white border-2 my-5 border-gray-400  rounded-lg shadow-lg px-8 py-10 max-w-xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="text-gray-700 text-2xl text-center w-full font-semibold ">
            KIRAN NAGIN PATIL
          </div>
        </div>
        <div className="flex  justify-between items-center border-b-2 border-gray-300 pb-8 mb-2">
          <div>
            <div className="text-gray-700 ">
              Office : 1/47 Tekra Faliya, Kumbharia Surat
            </div>
            <div className="text-gray-700 ">Contact M. No.- 8469576595</div>
            <div className="text-gray-700 ">P.A. NO : BTCPP5218D</div>
          </div>
          <div className="text-gray-700">
            <div className="font-bold text-xl mb-2">INVOICE</div>
            <div className="text-sm">Bill No: 1</div>
            <div className="text-sm">Date:{formData.date || "00/00/0000"}</div>
          </div>
        </div>
        <div className="border-b-2 border-gray-300 pb-5 mb-2">
          <div>
            <fieldset className="border-2 rounded-lg p-2">
              <legend className="text-lg font-semibold text-gray-700">
                Customer Details
              </legend>
              <div>
                <div className="flex gap-1 pb-2 w-full">
                  <div className="w-1/4 pl-2 font-semibold">Name</div>:
                  <div className="w-3/4 pr-2 border-b  border-gray-400">
                    {formData.name || "Enter Name Here"}
                  </div>
                </div>
                <div className="flex gap-1 pb-2 w-full">
                  <div className="w-1/4 pl-2 font-semibold">Address</div>:
                  <div className="w-3/4 pr-2 border-b  border-gray-400">
                    {formData.address || "Enter Address Here"}
                  </div>
                </div>
                <div className="flex gap-1 pb-2 w-full">
                  <div className="w-1/4 pl-2 font-semibold">Phone</div>:
                  <div className="w-3/4 pr-2 border-b  border-gray-400">
                    {formData.phone || "Enter Phone Here"}
                  </div>
                </div>
                <div className="flex gap-1 pb-2 w-full">
                  <div className="flex gap-1 pb-2 w-full">
                    <div className="md:w-1/4 pl-2 font-semibold">City</div>:
                    <div className="md:w-3/4 pr-2 border-b  border-gray-400">
                      {formData.city || "City"}
                    </div>
                  </div>
                  <div className="flex gap-1 pb-2 w-full">
                    <div className="md:w-1/4 pl-2 font-semibold">State</div>:
                    <div className="md:w-3/4 pr-2 border-b  border-gray-400">
                      {formData.state || "State"}
                    </div>
                  </div>
                  <div className="flex gap-1 pb-2 w-full">
                    <div className="md:w-1/4 pl-2 font-semibold">Zip</div>:
                    <div className="md:w-3/4 pr-2 border-b  border-gray-400">
                      {formData.zip || "Zip"}
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>

        <table className="w-full text-left mb-8">
          <thead>
            <tr>
              <th className="text-gray-700 font-bold uppercase py-2">Sr.NO</th>
              <th className="text-gray-700 font-bold uppercase py-2">
                Description
              </th>
              <th className="text-gray-700 font-bold uppercase py-2">Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 text-gray-700">1.</td>
              <td className="py-4 text-gray-700">
                ENERGY CONSULTING CHARGE MONTH OF {formData.month || "..."}
              </td>
              <td className="py-4 text-gray-700">₹ {formData.amount || "00.00"}</td>
            </tr>
          </tbody>
        </table>

        <div className="mb-5">
          <fieldset className="flex justify-between border-2 rounded-lg p-2">
            <legend className="text-lg font-semibold text-gray-700">
              Payment Details
            </legend>
            <div>
              <div className="flex flex-col gap-2 pb-2 w-full">
                <div className=" pl-2 font-semibold">Payment Method</div>
                <div className=" pr-2 border text-center rounded-xl border-gray-400">
                  {formData.payment_method || "Cash"}
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-end mb-8">
                <div className="text-gray-700 mr-2">Subtotal:</div>
                <div className="text-gray-700">₹ {formData.amount || "00.00"}</div>
              </div>
              <div className="flex justify-end mb-8">
                <div className="text-gray-700 mr-2">Total:</div>
                <div className="text-gray-700 font-bold text-xl">
                  ₹ {formData.amount || "00.00"}
                </div>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="border-t-2 border-gray-300 pt-5 mb-5"></div>
        <div className="flex justify-between">
          <span className="text-gray-700 font-semibold">RECIEVER</span>
          <b>FOR , KIRAN N PATIL</b>
        </div>
      </div>
    </div>
  );
};

export default PreviewBillForm;
