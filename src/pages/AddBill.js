import React, { useState, useEffect, useRef } from "react";
import AddBillForm from "../components/AddBillForm";
import PreviewBillForm from "../components/PreviewBillForm";
import { useReactToPrint } from "react-to-print";
import HistoryModal from "../components/HistoryModal";

const AddBill = ({ signOut, userData, setLoading }) => {
  const [formData, setFormData] = useState({});
  const [historyModalToggle, setHistoryModalToggle] = useState(false);

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
    <>
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
        <button onClick={()=> setHistoryModalToggle(true)} className="fixed z-40 bottom-14 right-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-clock-history"
            viewBox="0 0 16 16"
          >
            <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
            <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
            <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
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
      {historyModalToggle && <HistoryModal toggle={setHistoryModalToggle} />}
    </>
  );
};

export default AddBill;
