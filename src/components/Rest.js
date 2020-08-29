import React from "react";

const Rest = () => {
    return (
        <div className="flex-1 flex overflow-y-hidden">
            <div className="bg-gray-800 w-56 flex-none  flex flex-col justify-between">
                <div className="overflow-y-auto">
                    <ul className="px-2 py-3">
                        <li className="text-gray-500 px-2 py-2 hover:text-gray-200 hover:bg-gray-900 bg-gray-750 rounded">
                            <a href="#" className="flex items-center">
                                <div>
                                    <img
                                        src={require("../assets/dp1.jpg")}
                                        className="h-10 w-10 mr-4 rounded-full"
                                    />
                                </div>
                                <div class="text-sm">
                                    <p class="text-gray-200 leading-none">
                                        Jonathan Reinink
                                    </p>
                                    <p class="text-gray-600">Aug 18</p>
                                </div>
                            </a>
                        </li>
                        <li className="text-gray-500 px-2 py-2 hover:text-gray-200 hover:bg-gray-900">
                            <a href="#" className="flex items-center">
                                <div>
                                    <img
                                        src={require("../assets/dp1.jpg")}
                                        className="h-10 w-10 mr-4 rounded-full"
                                    />
                                </div>
                                <div class="text-sm">
                                    <p class="text-gray-200 leading-none">
                                        Jonathan Reinink
                                    </p>
                                    <p class="text-gray-600">Aug 18</p>
                                </div>
                            </a>
                        </li>
                        <li className="text-gray-500 px-2 py-2 hover:text-gray-200 hover:bg-gray-900">
                            <a href="#" className="flex items-center">
                                <div>
                                    <img
                                        src={require("../assets/dp1.jpg")}
                                        className="h-10 w-10 mr-4 rounded-full"
                                    />
                                </div>
                                <div class="text-sm">
                                    <p class="text-gray-200 leading-none">
                                        Jonathan Reinink
                                    </p>
                                    <p class="text-gray-600">Aug 18</p>
                                </div>
                            </a>
                        </li>

                        <li className="text-gray-500 px-2 py-2 hover:text-gray-200 hover:bg-gray-900">
                            <a href="#" className="flex items-center">
                                <div>
                                    <img
                                        src={require("../assets/dp1.jpg")}
                                        className="h-10 w-10 mr-4 rounded-full"
                                    />
                                </div>
                                <div class="text-sm">
                                    <p class="text-gray-200 leading-none">
                                        Jonathan Reinink
                                    </p>
                                    <p class="text-gray-600">Aug 18</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="bg-gray-850 px-2 py-2 flex items-center justify-between">
                    <div className="flex">
                        <a href="#">
                            <img
                                src={require("../assets/dp1.jpg")}
                                alt="avatar"
                                className="h-8 w-8 rounded-full"
                            />
                        </a>
                        <div className="text-xs ml-2">
                            <div className="text-white">johndoe</div>
                            <div className="text-gray-500 text-xxs">#9898</div>
                        </div>
                    </div>
                    <div className="flex items-center text-gray-500">
                        <a href="#" className="hover:text-white">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path>
                                <path d="M0 0h24v24H0z" fill="none"></path>
                            </svg>
                        </a>
                        <a href="#" className="ml-3 hover:text-white">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M0 0h24v24H0z"
                                    opacity=".1"
                                    fill="none"
                                ></path>
                                <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"></path>
                            </svg>
                        </a>
                        <a href="#" className="ml-3 hover:text-white">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className=" flex-1 flex justify-between">
                <div className="bg-gray-750 flex-1 flex flex-col justify-between">
                    <div className="yexy-sm text-gray-400 overflow-y-auto">
                        <div className="flex mx-6 my-3 py-4 border-t border-gray-700">
                            <div className="flex-none">
                                <a href="#">
                                    <img
                                        src={require("../assets/dp1.jpg")}
                                        alt="avatar"
                                        className="w-10 h-10 rounded-full"
                                    />
                                </a>
                            </div>
                            <div className="ml-5">
                                <div>
                                    <a
                                        href="#"
                                        className="text-white hover:underline"
                                    >
                                        johndoe
                                    </a>
                                    <span className="text-xs text-gray-600 ml-1">
                                        07/19/2019
                                    </span>
                                </div>
                                <div>
                                    <div>yeah hahaha</div>
                                    <div>some other comment</div>
                                    <div>why are you so awesome</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mx-6 my-3 py-4 border-t border-gray-700">
                            <div className="flex-none">
                                <a href="#">
                                    <img
                                        src={require("../assets/dp1.jpg")}
                                        alt="avatar"
                                        className="w-10 h-10 rounded-full"
                                    />
                                </a>
                            </div>
                            <div className="ml-5">
                                <div>
                                    <a
                                        href="#"
                                        className="text-white hover:underline"
                                    >
                                        johndoe
                                    </a>
                                    <span className="text-xs text-gray-600 ml-1">
                                        07/19/2019
                                    </span>
                                </div>
                                <div>
                                    <div>
                                        Here are the{" "}
                                        <a
                                            href="#"
                                            className="text-blue-400 hover:underline"
                                        >
                                            Tailwind docs
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mx-6 my-3 py-4 border-t border-gray-700">
                            <div className="flex-none">
                                <a href="#">
                                    <img
                                        src={require("../assets/dp1.jpg")}
                                        alt="avatar"
                                        className="w-10 h-10 rounded-full"
                                    />
                                </a>
                            </div>
                            <div className="ml-5">
                                <div>
                                    <a
                                        href="#"
                                        className="text-white hover:underline"
                                    >
                                        johndoe
                                    </a>
                                    <span className="text-xs text-gray-600 ml-1">
                                        07/19/2019
                                    </span>
                                </div>
                                <div>
                                    <div>
                                        Does that result in the raw svg being
                                        inlined in the DOM?
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mx-6 my-3 py-4 border-t border-gray-700">
                            <div className="flex-none">
                                <a href="#">
                                    <img
                                        src={require("../assets/dp1.jpg")}
                                        alt="avatar"
                                        className="w-10 h-10 rounded-full"
                                    />
                                </a>
                            </div>
                            <div className="ml-5">
                                <div>
                                    <a
                                        href="#"
                                        className="text-white hover:underline"
                                    >
                                        johndoe
                                    </a>
                                    <span className="text-xs text-gray-600 ml-1">
                                        07/19/2019
                                    </span>
                                </div>
                                <div>
                                    <div>
                                        This is handy if you don't want to load
                                        SVG as a separate file.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mx-6 my-3 py-4 border-t border-gray-700">
                            <div className="flex-none">
                                <a href="#">
                                    <img
                                        src={require("../assets/dp1.jpg")}
                                        alt="avatar"
                                        className="w-10 h-10 rounded-full"
                                    />
                                </a>
                            </div>
                            <div className="ml-5">
                                <div>
                                    <a
                                        href="#"
                                        className="text-white hover:underline"
                                    >
                                        johndoe
                                    </a>
                                    <span className="text-xs text-gray-600 ml-1">
                                        07/19/2019
                                    </span>
                                </div>
                                <div>
                                    <div>
                                        Exactly the same way as in Vue{" "}
                                        <a
                                            href="#"
                                            className="text-indigo-400 hover:underline"
                                        >
                                            @impulse
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mx-6 my-3 py-4 border-t border-gray-700">
                            <div className="flex-none">
                                <a href="#">
                                    <img
                                        src={require("../assets/dp1.jpg")}
                                        alt="avatar"
                                        className="w-10 h-10 rounded-full"
                                    />
                                </a>
                            </div>
                            <div className="ml-5">
                                <div>
                                    <a
                                        href="#"
                                        className="text-white hover:underline"
                                    >
                                        johndoe
                                    </a>
                                    <span className="text-xs text-gray-600 ml-1">
                                        07/19/2019
                                    </span>
                                </div>
                                <div>
                                    <div>
                                        I think it can slow down the page if
                                        there's too much bloat in the document.
                                    </div>
                                    <div>
                                        Compared to loading it externally.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex mx-6 my-3 py-4 border-t border-gray-700">
                            <div className="flex-none">
                                <a href="#">
                                    <img
                                        src={require("../assets/dp1.jpg")}
                                        alt="avatar"
                                        className="w-10 h-10 rounded-full"
                                    />
                                </a>
                            </div>
                            <div className="ml-5">
                                <div>
                                    <a
                                        href="#"
                                        className="text-white hover:underline"
                                    >
                                        johndoe
                                    </a>
                                    <span className="text-xs text-gray-600 ml-1">
                                        07/19/2019
                                    </span>
                                </div>
                                <div>
                                    <div>
                                        Comparison would be better if it's not
                                        also comparing an vector svg to a raster
                                        gif, it's a difference in rendering too.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-750 h-24 flex items-center mx-3 border-t border-gray-600">
                        <button className="px-2 py-2 h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white border-r border-gray-600">
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 496 512"
                            >
                                <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"></path>
                            </svg>
                        </button>
                        <div className="flex-1">
                            <input
                                type="text"
                                className="w-full text-sm h-10 px-2 py -2 bg-gray-700 text-gray-200 focus:outline-none"
                            />
                        </div>
                        <div className="px-2 py-2 bg-gray-700 rounded-r flex items-center h-10">
                            <button className="h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white">
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="paper-plane"
                                    className="w-4 h-4 svg-inline--fa fa-paper-plane fa-w-16"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
                                    ></path>
                                </svg>
                                {/* <svg
                                    className="w-6 h-6"
                                    viewBox="0 0 358 318"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M358 159L0 0L34 136L159 159L34 182L0 318L358 159Z"
                                        fill="black"
                                    />
                                </svg> */}

                                {/* <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm448-288h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40zm-72 320h160c17.7 0 32-14.3 32-32V320H288v160z"></path>
                                </svg> */}
                            </button>
                            <button className="h-10 bg-gray-700 rounded-l text-gray-500 hover:text-white ml-3">
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"></path>
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className="bg-indigo-600 w-56 flex-none overflow-y-auto">
                    User Sidebar. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque earum atque, facilis repudiandae dolore eius officia aut pariatur soluta doloribus vitae illum minus ducimus mollitia nobis in laborum at quae voluptas placeat beatae sint? Tempore in maiores quod, itaque dolore mollitia architecto maxime eos necessitatibus quia doloribus, perspiciatis recusandae nulla reiciendis quas dolores, blanditiis repudiandae est. Fugiat adipisci consequuntur vel dolor itaque optio. Temporibus harum corrupti nemo delectus veritatis totam doloremque consectetur nam ipsa iusto, officia repellat optio ipsam quidem enim asperiores. Dicta saepe ratione nam? Porro tempora rerum a amet, debitis ipsa. Exercitationem voluptates accusamus, sunt nihil mollitia unde? Nemo dignissimos vitae odit reprehenderit fugiat, rem est accusantium nisi voluptate consequuntur minus quas. Culpa odit corporis, explicabo eos accusamus voluptate aliquam provident, tempore ipsam quas expedita quidem dolorum totam impedit facere odio ea ipsum ab. Eveniet quisquam quasi nesciunt minima atque accusamus vel architecto incidunt impedit eos repellat sapiente ratione, natus soluta cumque iusto quae id? Inventore suscipit nisi non accusantium reiciendis maiores a commodi quasi atque cupiditate provident minus, deserunt ut necessitatibus dolorum numquam ex voluptates mollitia molestias at totam, nobis dignissimos. Sapiente, reiciendis iste! Eos deleniti odit ipsa minima corrupti vitae distinctio ullam suscipit, obcaecati repellendus exercitationem aspernatur cum repellat aut autem eius nam saepe doloribus vel quisquam ducimus optio labore! Illo ea, repellendus similique omnis aliquam architecto pariatur magni facere obcaecati earum! Quo reiciendis sint voluptatum odit quibusdam, dignissimos deleniti laudantium dolorum rerum nesciunt vero provident ad error doloremque asperiores fugit placeat maiores excepturi voluptates! Recusandae, voluptatibus repellendus iste ea, suscipit sunt voluptas numquam placeat atque cumque accusamus fugit? At, iste consectetur. Tenetur minus quaerat aliquam. Neque sed recusandae dolorem animi sit consequatur, tempora incidunt qui amet beatae sint molestiae perspiciatis ex quis ea ad odio nulla reprehenderit tenetur iusto quaerat quam maxime nesciunt eaque. Magni fuga nemo voluptatibus ratione ad mollitia modi inventore voluptatum minus id sed dolor quibusdam adipisci quam ipsam placeat, totam facere, sunt ullam nisi eius debitis quisquam quia. Suscipit, veritatis iusto obcaecati voluptatibus, facere nesciunt commodi velit vitae at eius possimus iure alias dicta exercitationem, tempora sint molestias. Dolore, necessitatibus? Quasi, ipsum. Labore exercitationem delectus pariatur veritatis quis? Consequatur saepe vel odit, cum quis, cupiditate sapiente molestias, nam minima laboriosam et modi suscipit alias a culpa perferendis ipsa maiores quibusdam? Maxime aut rerum unde nostrum dolor. Corporis obcaecati, incidunt assumenda distinctio aliquam architecto saepe ab nostrum sequi dicta, consectetur reiciendis consequuntur totam hic magnam cupiditate repudiandae a, optio illo quaerat ea. Velit molestiae sapiente veritatis, impedit soluta in quidem minus aperiam exercitationem expedita sunt fugiat excepturi atque modi dolor laborum eos eius! Totam quisquam vitae explicabo distinctio, natus esse nobis cum illo voluptates nesciunt expedita dolor ratione vero odio delectus accusantium quos optio id ad minus quaerat animi, labore beatae. Quae, accusamus! Voluptate, vel sit! Natus ullam unde libero, mollitia exercitationem officiis excepturi? Inventore cumque, consectetur corporis, consequatur aspernatur, obcaecati dolor libero iusto veniam aut delectus. Culpa libero laboriosam dolor, mollitia enim earum iure numquam voluptas, incidunt corrupti quos velit magnam ratione maiores iste! Labore inventore incidunt fugiat beatae tempora, laudantium quo sit vitae harum libero aliquam quas blanditiis dolores expedita et odio, explicabo minus doloribus itaque esse aliquid? Deleniti, perspiciatis laboriosam. Vero quae iste dolor obcaecati doloribus consectetur sequi, nobis ea facere? Animi vel unde deleniti expedita distinctio. Sapiente vitae, rem obcaecati laborum ad aspernatur, natus fuga, officia doloremque quod labore nisi explicabo voluptate beatae est? Nesciunt et explicabo quaerat ut. Eius rem natus culpa, ratione quidem voluptas odio tenetur eum commodi optio odit quas, quo accusamus placeat alias incidunt illo delectus est. Fuga ullam ab vel, dolorem quam error sed, accusamus, similique deserunt voluptatem perferendis est esse deleniti consequuntur. Nihil rerum harum placeat accusamus tempore tempora omnis soluta veniam. Eveniet iure quas fuga ipsum eligendi corporis nostrum maxime nisi impedit, repellat laudantium, totam nesciunt in inventore quis nobis sint ab sapiente. Magni ea explicabo cum reiciendis doloremque, provident aliquid maxime iure temporibus nobis excepturi pariatur nostrum ab accusamus est in vel doloribus. Eveniet ex accusamus dignissimos laudantium praesentium veniam, inventore voluptate officiis labore dolorem, illum adipisci! Laboriosam possimus est repudiandae deleniti dolorem enim culpa quo quam excepturi animi adipisci sit quae fugit, accusamus facilis temporibus molestias obcaecati fuga dolor tempore odit aliquid quis neque! Qui possimus in corrupti doloribus officiis rem deserunt doloremque accusamus ex magni impedit odit ipsa similique explicabo, ratione quisquam dignissimos, fuga obcaecati reprehenderit saepe dolorum repellat? Quo nam cupiditate sit ratione, modi consequuntur perspiciatis laboriosam praesentium nesciunt sunt laudantium illo architecto non repellendus nulla officia. Enim labore nostrum laborum velit deleniti ducimus fuga assumenda iusto est nesciunt nobis error ea laudantium doloremque, cum eligendi repellendus odit pariatur nihil tenetur quaerat quas architecto sed dolorem! Atque delectus obcaecati laudantium porro, ratione voluptatem consequuntur vero harum voluptas neque quod minus cupiditate est magni iusto necessitatibus maiores laborum, iste illum officia magnam ipsam a? Obcaecati natus optio in nemo quidem saepe quos sint facilis, minima enim consequuntur dolorum unde necessitatibus nam, ducimus incidunt corporis ad adipisci aliquam iste laborum dolor quisquam ab? Fuga culpa quasi eligendi reiciendis iure nemo tempora quam quibusdam id facilis. Repellendus eveniet eum illum suscipit eius, error, voluptates similique eligendi fugiat distinctio corrupti repellat quia? Velit obcaecati dolor harum eligendi eveniet exercitationem, debitis necessitatibus enim fugit, ad accusamus architecto cumque nulla alias dolore numquam repellendus! Magni at natus illum labore totam temporibus harum eaque libero reprehenderit voluptates nulla veniam in sequi quam expedita delectus error maxime atque accusamus, impedit porro blanditiis rem nam nihil. Natus cupiditate, ipsam ad placeat odit libero iure. Obcaecati animi praesentium at quaerat excepturi, aspernatur minima et amet tenetur laudantium perspiciatis suscipit? Harum dolore sint optio esse, corporis praesentium? Impedit iure, architecto maxime adipisci provident ad dolorem consectetur ipsam accusantium. Libero, culpa sint. Distinctio officiis ullam alias blanditiis id ea error laudantium nesciunt natus fugiat doloribus earum sunt, magni veritatis obcaecati neque rerum ratione, molestias repudiandae saepe voluptas provident. Quam architecto ea fuga ipsum aspernatur enim ad nesciunt explicabo in, unde id officiis quo sit incidunt quisquam iste nobis praesentium repudiandae voluptas, veritatis vitae sequi accusantium placeat! Quam et ipsa quod tenetur vero accusantium quasi, velit amet praesentium, sed impedit blanditiis deserunt voluptate minus inventore. Aliquid repudiandae animi tempora debitis, eligendi nihil libero aut officia quasi sed fugiat praesentium dolor blanditiis voluptas. Eos provident fugiat inventore quos numquam laboriosam beatae omnis quis! Error, quod, excepturi quasi explicabo quis dolorum libero voluptatibus enim reprehenderit veniam harum officiis praesentium mollitia? Vitae reprehenderit perspiciatis molestiae dolores tempora accusamus officia alias soluta suscipit, architecto, facilis, quia odio illo. Amet rerum ad iure vitae dolorem eum architecto culpa? Consequatur eum quasi corrupti aspernatur placeat modi quaerat ea qui vel quas in ipsum non nemo labore unde, ad saepe cumque nostrum. Quidem iste nulla voluptatem. Delectus harum quibusdam molestiae officiis, nisi cupiditate dolores. Maiores voluptatem provident expedita, deleniti quisquam odio velit! Recusandae adipisci laborum deleniti dolorum amet perferendis facilis nostrum, nemo neque cum delectus, repellat totam laudantium sit voluptatem! Aut fugit dolor at optio ipsum recusandae consequuntur animi exercitationem necessitatibus! Doloremque debitis sunt explicabo perferendis consequuntur at neque iste id ea maiores error consequatur adipisci vero amet omnis tempora fuga quae praesentium ex fugiat, veritatis earum eum vitae. Itaque eveniet error corporis, debitis ipsa ipsum vel!
                </div> */}
            </div>
        </div>
    );
};

export default Rest;
