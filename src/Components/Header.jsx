import React from "react";

function Header(){
    return(
        <div>
            <header className="bg-blue-600 text-white p-5 flex justify-between items-center drop-shadow-md">
                <img src="" alt="logo"/>
                <a href="#">О курсе</a>
                <a href="#">О программе</a>
                <a href="#">Отзывы</a>
                <a href="#">Цены</a>
                <a href="#">Контакты</a>
            </header>
        </div>
    )
}

export default Header;