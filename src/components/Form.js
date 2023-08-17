import React, { useState } from 'react';
import "./Form.css"

function Form({ uyeEkle }) {
  const [yeniUye, setYeniUye] = useState({
    name: '',
    email: '',
    role: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setYeniUye({ ...yeniUye, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    uyeEkle(yeniUye);
    setYeniUye({ name: '', email: '', role: '' });
  };
  return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='formElement'>
        Name:
        <input type="text" name="name" value={yeniUye.name} onChange={handleChange} />
      </label>
      <label className='formElement'>
        Email:
        <input type="email" name="email" value={yeniUye.email} onChange={handleChange} />
      </label>
      <label className='formElement'>
        Role:
        <input type="text" name="role" value={yeniUye.role} onChange={handleChange} />
      </label>
      <button className='formButton' type="submit">Üye Ekle</button>
    </form>
  );
}
export default Form;