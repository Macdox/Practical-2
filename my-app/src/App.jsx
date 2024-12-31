import React from "react";
import { BrowserRouter, Navigate, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgetpassword from "./pages/Forgetpassword";
import DashboardPage from "./pages/DashboardPage";
import { useAuthstore } from "./Stores/authstores";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, teacher } = useAuthstore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, teacher } = useAuthstore();

  if (isAuthenticated && !teacher.isVerified) {
    
    return <Navigate  to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
          <DashboardPage />
          </ProtectedRoute>
        } 
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <Login/>
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Forgetpassword" element={<Forgetpassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
