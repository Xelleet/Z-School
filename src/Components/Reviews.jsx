import React from "react";

function Reviews(){
    return(
        <div className="py-12 text-center">
            <h1 className="text-2xl font-bold">Что говорят наши ученики:</h1>
            <div className="p-4 shadow-lg">
                <p className="italic">Классно, больше не возьму!  <p className="bold">Маленький Тим</p></p>
            </div>
            <div className="p-4 shadow-lg">
                <p className="italic">После этого курса я спился 👍  <p className="bold">Дядя Витя</p></p>
            </div>
        </div>
    )
}

export default Reviews;