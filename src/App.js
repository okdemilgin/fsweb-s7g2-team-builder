import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [takim, setTakim] = useState([
    {
      name: "Ilgın Ökdem",
      email: "okdemilgin@gmail.com",
      role: "Full-Stack Web Developer",
    },
    {
      name: "Segah Durak",
      email: "segahdurak@gmail.com",
      role: "Full-Stack Web Developer",
    },
    {
      name: "Elif Durak",
      email: "elifdurak@gmail.com",
      role: "Full-Stack Web Developer",
    },
  ]);
  const uyeEkle = (uye) => {
    setTakim([...takim, uye]);
  };
  return (
    <div>
      <div className="App">
        <h1>WORKINTECH EKİBİ</h1>
        {takim.map((item, index) => (
          <div className="uye" key={index}>
            <h2>{item.name}</h2>
            <h3>
              {item.role} - {item.email}
            </h3>
          </div>
        ))}
      </div>
      <Form uyeEkle={uyeEkle} />
    </div>
  );
}
export default App;