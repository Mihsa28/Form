import { useState } from "react";
import "./App.css";
import Form from "./Components/Form.js";


const App = () => {
  const heading = ["FirstName", "MiddleName", "LastName", "Email", "Phone Number", "Month", "Day", "Year", "City", "District", "Country", "State" ,"Edit",  ]
  return (
    <div className="app">
      
      <Form />
      
    </div>
  );
};

export default App;