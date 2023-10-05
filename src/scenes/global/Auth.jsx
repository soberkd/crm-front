import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import LoginPage from "../auth/Login";
import SignUpPage from "../auth/SignUp";
import Topbar from "./Topbar";

function Auth({ onLogin }) {
  const [isSidebar, setIsSidebar] = useState();

  return (
    <div className="app">
      <main className="content">
        <Topbar setIsSidebar={setIsSidebar} />
          <Routes >
            <Route path="/" element={<LoginPage onLogin={onLogin}  />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
      </main>
    </div>
  );
}

export default Auth;
