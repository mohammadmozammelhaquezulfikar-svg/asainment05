import { use, useState } from "react";
import Techcard from "./card/Techcard";
import YourStack from "./YourStack";

const Cardsection = ({ playersPromise }) => {
    const players = use(playersPromise);

    const [stack, setStack] = useState([]);

    const handleAdd = (tech) => {
        const alreadyAdded = stack.some((item) => item.id === tech.id);

        if (alreadyAdded) {
            return;
        }

        setStack([...stack, tech]);
    };

    const handleRemove = (id) => {
        setStack(stack.filter((item) => item.id !== id));
    };

    const handleRemoveAll = () => {
        setStack([]);
    };

    return (
        <section className="bg-white">
            <div className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold">
                    Explore the <span className="text-pink-600">Technologies</span>
                </h2>

                <div className="mt-8 grid lg:grid-cols-[1fr_280px] gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {players.map((tech) => (
                            <Techcard key={tech.id} tech={tech} handleAdd={handleAdd} />
                        ))}
                    </div>

                    <YourStack
                        stack={stack}
                        handleRemove={handleRemove}
                        handleRemoveAll={handleRemoveAll}
                    />
                </div>
            </div>
        </section>
    );
};

export default Cardsection;