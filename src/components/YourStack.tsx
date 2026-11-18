const YourStack = ({ stack, handleRemove, handleRemoveAll }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-bold text-lg">Your Stack</h3>

            {stack.length === 0 ? (
                <p className="mt-1 text-sm text-gray-500">
                    No technologies selected yet.
                </p>
            ) : (
                <>
                    <ul className="mt-3 space-y-2">
                        {stack.map((tech) => (
                            <li
                                key={tech.id}
                                className="flex items-center justify-between text-sm bg-gray-100 px-3 py-2 rounded-lg"
                            >
                                {tech.name}
                                <button
                                    onClick={() => handleRemove(tech.id)}
                                    className="text-red-500 hover:text-red-700 font-bold"
                                >
                                    ✕
                                </button>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={handleRemoveAll}
                        className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white text-sm py-2 rounded-lg"
                    >
                        Remove All
                    </button>
                </>
            )}
        </div>
    );
};

export default YourStack;