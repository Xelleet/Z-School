import React from "react";

function Prices(){
    return(
        <div className="py-12 text-center">
            <h1 className="text-2xl font-bold">Выберите тариф</h1>
            <div className="flex justify-center gap-6 mt-6">
                <div className="p-6 shadow-lg">
                    <p className="text-xl font-bold">Базовый</p>
                    <p className="text-xl font-bold">1500 у.е.</p>
                    <button className="bg-green-500 text-white mt-4">Купить</button>
                </div>
                <div className="p-6 shadow-lg">
                    <p>Профессиональный</p>
                    <p className="text-xl font-bold">3000 у.е.</p>
                    <button className="bg-green-500 text-white mt-4">Купить</button>
                </div>
                <div className="p-6 shadow-lg">
                    <p className="text-xl font-bold">Вип</p>
                    <p className="text-xl font-bold">Много у.е.</p>
                    <button className="bg-green-500 text-white mt-4">Купить</button>
                </div>
            </div>
        </div>
    )
}

export default Prices;