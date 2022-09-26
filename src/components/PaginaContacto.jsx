import React from 'react'
import contact_1 from '../asset/contact/contact_1.webp'


export const PaginaContacto = () => {


  const sendForm = (e) => {
    e.preventDefault();
    console.log("Mensaje Enviado");
  }

  return (
    <div className='m-10'>
    <form action="">
      <div className="mb-3 w-50 m-auto">
        <label for="exampleFormControlInput1" className="form-label">Quieres contactarnos???</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ingresa tu  nombre...."/>
      </div>
      <div className="mb-3 w-50 m-auto">
        <label for="exampleFormControlInput1" className="form-label">Dejanos tu email</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
      </div>
      <div className="mb-3 w-50 m-auto">
        <label for="exampleFormControlTextarea1" className="form-label">Dejanos tu mensaje</label>
        <textarea className="form-control mb-2" id="exampleFormControlTextarea1" rows="2"></textarea>
        <input type="submit"/>
      </div>
        
      </form>
    </div>
  )
}
