
import React from "react";
import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  })

  const handleClick = () => {
    alert(`ФИО: ${form.firstName} ${form.lastName}\nНомер телефона: ${form.phone}\nEmail адрес: ${form.email}`);
  };

  return (
    <div className="container">
      <div className="container-form">
        First Name:
        <label>
          <input type="text"
          value={form.firstName}
          onChange={e => {
            setForm({
              ...form,
              firstName: e.target.value
            });
          }}
          />
        </label>
          Last Name:
        <label>
          <input type="text"
          value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
          />
        </label>
          Phone Number:
        <label>
          <input type="number"
          value={form.phone}
          onChange={e => {
            setForm({
              ...form,
              phone: e.target.value
            });
          }}
          />
        </label>
        Email:
        <label>
          <input type="email"
          value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
          />
        </label>
        <button type="submit" onClick={handleClick}>Зарегистрироваться</button>
      </div>    
    </div>
    
  );

}