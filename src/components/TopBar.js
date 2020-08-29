import React from "react";

const TopBar = () => {
    return (
        <div className="flex text-white h-12">
            <div className="bg-gray-800 w-56 flex-none flex items-center justify-between border-b border-gray-900 px-3 py-2">
                <div>Tailwind CSS</div>
                <button>
                    {" "}
                    <svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                    >
                        <path
                            class="heroicon-ui"
                            d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
                        ></path>
                    </svg>
                </button>
            </div>
            <div className="bg-gray-750 flex-1 flex items-center justify-between border-b border-gray-900 px-4">
                <div className="flex items-center">
                    <div className="text-gray-500 text-2xl">#</div>
                    <div className="ml-2 text-sm text-white">general</div>
                    <div className="border-l pl-3 ml-3 border-gray-600 text-sm text-gray-400">
                        general discussion of Tailwind CSS
                    </div>
                </div>

                <div className="flex items-center">
                    <a href="#" className="ml-4">
                        a
                    </a>
                    <a href="#" className="ml-4">
                        a
                    </a>
                    <a href="#" className="ml-4">
                        <form className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="rounded bg-gray-900 text-gray-200 text-s px-2 py-1"
                            />
                            <span
                                className="absolute right-0 top-0 mr-1"
                                style={{ top: "6px" }}
                            >
                                {" "}
                                <svg
                                    class="w-4 h-4 text-gray-500 hover:text-gray-200"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                >
                                    <path
                                        class="heroicon-ui"
                                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                                    ></path>
                                </svg>
                            </span>
                        </form>
                    </a>
                    <a href="#" className="ml-4">
                        a
                    </a>
                    <a href="#" className="ml-4">
                        a
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
