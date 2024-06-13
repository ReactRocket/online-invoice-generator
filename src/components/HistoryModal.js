import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "../firebase/firebase";
import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-responsive-dt";
import Loader from "./Loader";

const HistoryModal = ({toggle}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const dataRef = ref(db, "formData");
      onValue(dataRef, (snapshot) => {
        const dataList = [];
        snapshot.forEach((childSnapshot) => {
          const item = childSnapshot.val();
          item.id = childSnapshot.key;
          dataList.push(item);
        });
        setData(dataList);
      });
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Initialize DataTable after data has been set
    if (data.length > 0) {
      const table = $("#myTable").DataTable({
        destroy: true, // Allows reinitialization
        responsive: true,
      });

      return () => {
        table.destroy(); // Cleanup DataTable on component unmount
      };
    }
  }, [data]);

  return (
    <div class="fixed z-50 inset-0 flex items-center justify-center overflow-hidden">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <div class="bg-white rounded-lg  shadow-xl transform transition-all h-[80%] w-[70%] p-10 overflow-auto relative">
        <button onClick={()=> toggle(false)} className="absolute top-3 right-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="red"
            class="bi bi-x-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
          </svg>
        </button>
        {data.length === 0 ? (
          <Loader />
        ) : (
          <table id="myTable">
            <thead>
              <tr>
                <th>Bill No</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Address</th>
                <th>State</th>
                <th>City</th>
                <th>Zip</th>
                <th>Months</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td> {item.billNo}</td>
                  <td> {item.name}</td>
                  <td> {item.phone}</td>
                  <td> {item.amount}</td>
                  <td> {item.date}</td>
                  <td> {item.address}</td>
                  <td> {item.state}</td>
                  <td> {item.city}</td>
                  <td> {item.zip}</td>
                  <td> {item.months}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default HistoryModal;
