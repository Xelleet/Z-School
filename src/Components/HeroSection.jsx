import React from "react";

function Hero(){
    return(
        <div>
            <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20">
                <h1>Начни карьеру в IT с нуля</h1>
                <h2>"Онлайн-курс по программированию с возможной гарантией трудоустройства."</h2>
                <div className="mt-6 flex justify-center gap-4">
                    <button className="bg-yellow-400 text-black">Узнать больше</button>
                    <button className="bg-yellow-400 text-black">Записаться</button>
                </div>
            </section>
        </div>
    )
}

export default Hero;