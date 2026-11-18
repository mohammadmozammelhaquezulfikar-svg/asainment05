import React, { use } from "react";
import Techcard from "./card/Techcard";
import YourStack from "./YourStack";

const Cardsection = ({ playersPromise }) => {
    const players = use(playersPromise);
    
    return (
        <section className="bg-white">
            <div className="mt-8 grid lg:grid-cols-[1fr_280px] gap-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((tech) => (
            <Techcard key={tech.id} tech={tech} />
        ))}
    </div>
    <YourStack />
</div>
        </section>
    );
};

export default Cardsection;