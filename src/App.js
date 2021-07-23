import React, { useState } from "react";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Logut = () => {
    console.log("Logout");
  };

  return <div className="App">Hello</div>;
}

export default App;
