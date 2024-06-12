// Login.js
import React, { useEffect, useState } from "react";
import { auth, signInWithGoogle } from "../firebase/firebase";
import AddBill from "../pages/AddBill";
import Loader from "../components/Loader";
import logo from "../assets/favicon.ico";
const Login = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      setUser(JSON.parse(sessionStorage.getItem("user")));
    }
  }, []);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setUser(user);
  //     if (user) {
  //       sessionStorage.setItem("user", JSON.stringify(user));
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithGoogle();
      console.log(result.user);

      if (result.user.email === "agnivesh60@gmail.com") {
        setUser(result.user);
        sessionStorage.setItem("user", JSON.stringify(result.user));
          setLoading(false);
      } else {
        alert("Invalid Email!");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error logging in with Google", error);
    }
  };

  const handleLogout = () => {
    auth.signOut();
    setUser(null);
    sessionStorage.removeItem("user");
  };

  return (
    <div className="login-container">
      {loading && <Loader />}
      {user ? (
        <AddBill
          signOut={handleLogout}
          userData={user}
          setLoading={setLoading}
        />
      ) : (
        <div class="flex items-center justify-center min-h-screen bg-gray-100 ">
          <div className="flex flex-col justify-center items-center gap-5">
            <img src={logo} alt="logo" />
            <h1 className="text-2xl font-semibold text-gray-800">
              Online Bill Book
            </h1>
            <button
              onClick={handleLogin}
              class="flex items-center bg-white  border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 gap-4 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
