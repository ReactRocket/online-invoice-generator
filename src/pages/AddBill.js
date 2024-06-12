import React, { useState, useEffect, useRef } from "react";
import AddBillForm from "../components/AddBillForm";
import PreviewBillForm from "../components/PreviewBillForm";
import { useReactToPrint } from "react-to-print";

const AddBill = ({ signOut, userData, setLoading }) => {
  const [formData, setFormData] = useState({});

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const logout = () => {
    if (window.confirm("Do you want to logout?")) {
      signOut();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="w-full min-h-screen p-5 flex flex-col md:flex-row">
      <button onClick={handlePrint} className="fixed z-40 bottom-5 right-5 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-printer hover:text-blue-500 hover:scale-125 transition-all ease-in-out duration-300"
          viewBox="0 0 16 16"
        >
          <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
          <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1" />
        </svg>
      </button>
      <span
        onClick={logout}
        className="fixed z-40 top-5 right-5 cursor-pointer"
      >
        <img
          className="h-10 w-10 rounded-full"
          src={userData?.photoURL}
          alt={userData?.displayName}
        ></img>
      </span>
      <AddBillForm
        formData={formData}
        handlePrint={handlePrint}
        handleChange={handleChange}
        setFormData={setFormData}
      />
      <PreviewBillForm formData={formData} componentRef={componentRef} />
    </div>
  );
};

export default AddBill;
