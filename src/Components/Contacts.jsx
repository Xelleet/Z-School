import React from "react";

function Contacts(){
    return(
        <section id="контакты" className="py-12 text-center">
        <h3 className="text-2xl font-bold">Свяжитесь с нами</h3>
        <div className="mt-6 max-w-lg mx-auto">
          <input name="name" placeholder="Имя" className="mb-4" />
          <input name="email" placeholder="Email" className="mb-4" />
          <textarea name="message" placeholder="Сообщение" className="mb-4" />
          <button className="bg-blue-600 text-white">Отправить</button>
        </div>
      </section>
    )
}

export default Contacts;