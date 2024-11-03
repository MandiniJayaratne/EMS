import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import EmployeeComponent from "./components/EmployeeComponent";
import Home from "./components/HomeComponent";
import "./Home.css";
import "./App.css";
import ContactComponent from "./components/ContactComponent";

function App() {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {}, []);

  return (
    <>
      <BrowserRouter>
        <HeaderComponent />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <ListEmployeeComponent />
              </>
            }
          />
          <Route path="/add-employee" element={<EmployeeComponent />} />
          <Route path="/edit-employee/:id" element={<EmployeeComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
