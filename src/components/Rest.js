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
                    <div className="overflow-y-auto">
                        Chat Content. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Nesciunt praesentium at illo fuga
                        magni ea, totam reiciendis, dolor quos exercitationem
                        explicabo, nam magnam error sapiente officia qui in
                        velit! Sapiente quos placeat incidunt, natus, assumenda
                        suscipit aut quidem doloribus voluptatibus temporibus
                        necessitatibus cupiditate nam? Est reiciendis illum,
                        porro provident, odit aliquid animi perspiciatis ducimus
                        id illo commodi praesentium cupiditate quae sunt at
                        deleniti maxime repellendus, quos sed iusto nisi debitis
                        sint assumenda? Voluptatum adipisci ipsam nesciunt minus
                        aliquid ea natus ducimus rerum. Fuga, illo nam
                        asperiores eos nulla nihil quae quis velit nisi deleniti
                        veniam vel cum consequatur consequuntur amet sint dolore
                        autem hic inventore ea sequi. Optio consectetur
                        architecto, sapiente autem enim eaque hic porro rerum.
                        Voluptatum dolor nulla vero, libero inventore ea,
                        blanditiis iusto dignissimos quo quisquam minima aperiam
                        quibusdam possimus unde velit distinctio dolore quos qui
                        nobis eligendi iure suscipit! Placeat ipsa obcaecati vel
                        iusto quae commodi voluptatem repellat non ducimus
                        temporibus dignissimos, maxime laudantium deleniti
                        inventore doloremque perspiciatis? Blanditiis culpa
                        architecto modi assumenda doloremque perspiciatis sunt
                        ducimus eius debitis fuga alias in aut vel illo sapiente
                        voluptates veniam ipsam, excepturi ab maxime aperiam.
                        Reprehenderit tenetur laboriosam dolorum atque rerum
                        nisi velit odio, commodi iure sit repellat dolores
                        consequuntur nostrum. Id autem quia tempore, cum ex
                        repellendus, libero rem ducimus sapiente, dolore rerum?
                        Illum magnam incidunt veniam sit aliquam, provident non
                        minima voluptas. Inventore blanditiis aliquam distinctio
                        assumenda modi ratione dolor veniam eaque asperiores
                        perspiciatis animi at, consequatur fugit, culpa quia
                        soluta temporibus. Quaerat alias maiores quia nam eum
                        ipsum dicta aut, obcaecati illum ratione impedit
                        possimus reiciendis repellendus officia molestias
                        ducimus totam aliquid dolores dolorem saepe rerum fugit!
                        Quasi dolor tenetur a dicta tempore optio quos, incidunt
                        suscipit enim officia doloribus voluptate quaerat
                        dolores est? Nemo voluptatem amet autem molestias
                        voluptatibus ab quibusdam sed consequatur quisquam
                        eligendi incidunt veniam ipsum ipsam sapiente
                        consectetur, earum soluta illo cum iste. Accusantium
                        blanditiis quis odio quas vitae aut expedita deserunt
                        delectus impedit totam quaerat quam quia unde
                        praesentium, nam a omnis earum nulla, velit nobis
                        libero. Tenetur tempora voluptatum, dolor esse nobis
                        odio, id, consequatur porro aperiam vitae quia dolorem!
                        Facilis modi repudiandae similique harum nam optio, amet
                        quae consequuntur dolorem autem fugit provident
                        doloremque necessitatibus, nostrum esse deserunt commodi
                        ducimus quidem! Obcaecati quae exercitationem at
                        accusantium culpa voluptatibus expedita! Ullam nam
                        expedita quasi iure sapiente aut architecto, saepe
                        magnam reiciendis corrupti corporis voluptatum. Suscipit
                        a tempore optio culpa temporibus molestias similique.
                        In, tempore, facere, excepturi nulla tempora eaque modi
                        animi blanditiis voluptatum autem sunt soluta cupiditate
                        porro non nobis harum reiciendis suscipit. Ea in
                        doloremque nobis quia accusamus perferendis ullam
                        reprehenderit omnis architecto vel blanditiis ut
                        expedita voluptatem nihil aut velit exercitationem atque
                        deserunt, quam enim sint. Rem, nobis fugit. Eveniet ut
                        deleniti temporibus itaque velit. Veritatis, soluta
                        expedita, esse totam reprehenderit dolor facere rem
                        alias nulla perferendis facilis corporis! Repellendus,
                        dolorum perspiciatis. Iste fugiat natus soluta! Aperiam
                        saepe aut quis accusantium ipsum numquam optio beatae
                        alias in animi, culpa tempore atque? Eaque libero
                        perferendis enim. Mollitia dicta fugiat vero
                        consequatur. In temporibus velit harum nihil porro sed
                        asperiores quia dolorem. Nisi quod dolore ipsam ipsum,
                        natus explicabo qui perspiciatis quidem molestias sequi
                        voluptas possimus unde. Minus numquam, expedita, dolor
                        nobis minima fugit maxime voluptas voluptate ut ipsa
                        harum hic cupiditate necessitatibus tenetur magnam aut
                        incidunt amet! Voluptate in voluptas iste, debitis
                        corrupti sit cumque magni quae? Nobis error minima ex
                        beatae est sequi modi, assumenda facilis explicabo
                        repellat laboriosam eos praesentium quisquam asperiores
                        libero? Eaque error cum ratione sed, et harum tenetur
                        obcaecati, soluta perferendis tempore animi quia
                        excepturi architecto, porro veniam! A, alias laboriosam.
                        Obcaecati neque vero ratione aut perferendis ducimus
                        numquam quasi, nemo culpa tempora nobis magnam non?
                        Magni, hic praesentium. Assumenda quaerat adipisci ullam
                        numquam et optio voluptatibus dolorum fugiat iure
                        mollitia suscipit repudiandae quisquam enim aliquid,
                        dolore quo ad? Quas, cumque vero. Velit temporibus
                        laboriosam nisi vitae esse? Sunt nihil ad magni
                        voluptatem tempore reiciendis, ipsa sequi quae tenetur,
                        maiores minus ab id impedit. Labore nemo provident sit
                        modi harum minus temporibus non voluptate possimus
                        minima commodi deserunt voluptatibus ea, illo dolorum
                        soluta odio, est quaerat blanditiis corporis veniam,
                        veritatis totam quisquam? Quod corporis obcaecati
                        repellendus explicabo repudiandae praesentium illum,
                        minima velit odio nisi corrupti alias pariatur numquam
                        sit accusamus. Sit reprehenderit voluptatum sunt dolorem
                        blanditiis! Magni natus voluptatibus, accusantium nihil
                        doloremque inventore impedit, explicabo nostrum ullam a
                        soluta itaque iure, cupiditate quisquam sed ratione
                        molestiae. Assumenda dolorum, beatae, aliquam ratione
                        blanditiis harum perferendis, neque quas magni ab illo
                        deserunt a possimus consequuntur quisquam rem quaerat at
                        quo. Blanditiis officia voluptatem rerum quos magni ad
                        eos dignissimos quisquam dolores laboriosam perspiciatis
                        labore numquam autem soluta esse necessitatibus,
                        voluptates a at voluptas enim illo? Nostrum quibusdam
                        laborum, quis ipsam dignissimos eveniet quisquam
                        exercitationem nisi libero eaque. Dolor provident sequi
                        cupiditate, adipisci possimus ducimus id iste culpa est.
                        Officia magni est inventore odio tempora, repellat totam
                        recusandae ducimus architecto sapiente aperiam impedit
                        ex quod reiciendis dolorum non, error modi aspernatur
                        eos quaerat aliquam. Numquam dolor deleniti eligendi
                        explicabo, iste, voluptatum nisi praesentium recusandae
                        temporibus repellendus dolore aperiam natus possimus
                        itaque. Quis rem illo molestias esse! Delectus omnis
                        tenetur tempora. Inventore soluta ad aut expedita
                        facilis ipsa aliquid sint eveniet possimus. Molestias
                        nobis delectus, eveniet at provident nesciunt maxime
                        officia nisi debitis, repudiandae eligendi minus dolor
                        cumque ratione hic beatae quas ea exercitationem?
                        Veritatis vel dolor autem magnam voluptatum? Sapiente
                        sunt incidunt ea reiciendis animi ratione, porro
                        mollitia ipsam vitae odio quo rem repellendus,
                        consequuntur consectetur officiis asperiores eos error
                        corrupti laborum. Assumenda doloribus vel asperiores
                        praesentium rem exercitationem odit iusto maiores
                        labore, minima iste neque ab animi sequi vitae quia
                        itaque odio! Dignissimos eligendi adipisci et molestias
                        voluptate, ut veniam recusandae facilis aliquid
                        veritatis saepe dolores alias illo eveniet? Repellat
                        harum, quo, pariatur animi perferendis fuga est impedit
                        alias nulla laudantium exercitationem veniam cumque
                        delectus fugit iure id eos. Cum, doloremque sequi.
                        Impedit odit iusto ipsam assumenda similique eligendi
                        magnam, nam sint voluptas vero, quod nemo illo
                        recusandae enim error distinctio harum at porro! Ea,
                        dicta ab nostrum necessitatibus voluptatem perspiciatis
                        totam repellat itaque molestias quaerat sed dolor quod
                        dolore ex rerum suscipit exercitationem architecto
                        nobis! Officiis animi iusto vel aliquid excepturi
                        suscipit quibusdam perferendis dolores atque eligendi
                        ipsa accusantium in, et quam voluptatum illo unde, amet
                        praesentium tenetur minima sapiente. Ipsam dicta quo
                        esse et distinctio iste natus aut blanditiis in?
                        Molestiae fugiat ad temporibus. Dolores, maxime
                        voluptatibus inventore voluptatem asperiores nostrum
                        itaque sequi id in labore nemo aperiam omnis placeat ex,
                        laborum rem blanditiis repudiandae? Perferendis illum
                        vero eaque veniam repellendus esse deleniti atque.
                        Assumenda voluptates fuga dolorum neque id unde
                        molestiae? Enim perspiciatis rem, eaque sequi
                        reprehenderit quaerat cumque, veniam cum aspernatur odio
                        possimus, pariatur soluta quos sit est aut ullam
                        obcaecati assumenda necessitatibus. Aut hic dolorum
                        similique sed corrupti architecto, harum dignissimos
                        sapiente quam voluptas possimus minima! Saepe adipisci a
                        commodi rem at quos asperiores, qui atque laborum
                        eligendi accusamus labore numquam quidem? Consequuntur,
                        esse unde, ex nihil voluptas mollitia in nisi obcaecati
                        similique explicabo architecto, repudiandae odio vero.
                        Quidem distinctio reiciendis, labore maxime vel cumque
                        amet dolore quaerat nisi nulla repudiandae suscipit
                        rerum veritatis numquam facere earum harum obcaecati
                        aperiam doloribus qui quibusdam. Suscipit a aliquid
                        tenetur voluptatum odio consequatur.
                    </div>
                    <div className="bg-gray-700">Chat Input box</div>
                </div>
                {/* <div className="bg-indigo-600 w-56 flex-none overflow-y-auto">
                    User Sidebar. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque earum atque, facilis repudiandae dolore eius officia aut pariatur soluta doloribus vitae illum minus ducimus mollitia nobis in laborum at quae voluptas placeat beatae sint? Tempore in maiores quod, itaque dolore mollitia architecto maxime eos necessitatibus quia doloribus, perspiciatis recusandae nulla reiciendis quas dolores, blanditiis repudiandae est. Fugiat adipisci consequuntur vel dolor itaque optio. Temporibus harum corrupti nemo delectus veritatis totam doloremque consectetur nam ipsa iusto, officia repellat optio ipsam quidem enim asperiores. Dicta saepe ratione nam? Porro tempora rerum a amet, debitis ipsa. Exercitationem voluptates accusamus, sunt nihil mollitia unde? Nemo dignissimos vitae odit reprehenderit fugiat, rem est accusantium nisi voluptate consequuntur minus quas. Culpa odit corporis, explicabo eos accusamus voluptate aliquam provident, tempore ipsam quas expedita quidem dolorum totam impedit facere odio ea ipsum ab. Eveniet quisquam quasi nesciunt minima atque accusamus vel architecto incidunt impedit eos repellat sapiente ratione, natus soluta cumque iusto quae id? Inventore suscipit nisi non accusantium reiciendis maiores a commodi quasi atque cupiditate provident minus, deserunt ut necessitatibus dolorum numquam ex voluptates mollitia molestias at totam, nobis dignissimos. Sapiente, reiciendis iste! Eos deleniti odit ipsa minima corrupti vitae distinctio ullam suscipit, obcaecati repellendus exercitationem aspernatur cum repellat aut autem eius nam saepe doloribus vel quisquam ducimus optio labore! Illo ea, repellendus similique omnis aliquam architecto pariatur magni facere obcaecati earum! Quo reiciendis sint voluptatum odit quibusdam, dignissimos deleniti laudantium dolorum rerum nesciunt vero provident ad error doloremque asperiores fugit placeat maiores excepturi voluptates! Recusandae, voluptatibus repellendus iste ea, suscipit sunt voluptas numquam placeat atque cumque accusamus fugit? At, iste consectetur. Tenetur minus quaerat aliquam. Neque sed recusandae dolorem animi sit consequatur, tempora incidunt qui amet beatae sint molestiae perspiciatis ex quis ea ad odio nulla reprehenderit tenetur iusto quaerat quam maxime nesciunt eaque. Magni fuga nemo voluptatibus ratione ad mollitia modi inventore voluptatum minus id sed dolor quibusdam adipisci quam ipsam placeat, totam facere, sunt ullam nisi eius debitis quisquam quia. Suscipit, veritatis iusto obcaecati voluptatibus, facere nesciunt commodi velit vitae at eius possimus iure alias dicta exercitationem, tempora sint molestias. Dolore, necessitatibus? Quasi, ipsum. Labore exercitationem delectus pariatur veritatis quis? Consequatur saepe vel odit, cum quis, cupiditate sapiente molestias, nam minima laboriosam et modi suscipit alias a culpa perferendis ipsa maiores quibusdam? Maxime aut rerum unde nostrum dolor. Corporis obcaecati, incidunt assumenda distinctio aliquam architecto saepe ab nostrum sequi dicta, consectetur reiciendis consequuntur totam hic magnam cupiditate repudiandae a, optio illo quaerat ea. Velit molestiae sapiente veritatis, impedit soluta in quidem minus aperiam exercitationem expedita sunt fugiat excepturi atque modi dolor laborum eos eius! Totam quisquam vitae explicabo distinctio, natus esse nobis cum illo voluptates nesciunt expedita dolor ratione vero odio delectus accusantium quos optio id ad minus quaerat animi, labore beatae. Quae, accusamus! Voluptate, vel sit! Natus ullam unde libero, mollitia exercitationem officiis excepturi? Inventore cumque, consectetur corporis, consequatur aspernatur, obcaecati dolor libero iusto veniam aut delectus. Culpa libero laboriosam dolor, mollitia enim earum iure numquam voluptas, incidunt corrupti quos velit magnam ratione maiores iste! Labore inventore incidunt fugiat beatae tempora, laudantium quo sit vitae harum libero aliquam quas blanditiis dolores expedita et odio, explicabo minus doloribus itaque esse aliquid? Deleniti, perspiciatis laboriosam. Vero quae iste dolor obcaecati doloribus consectetur sequi, nobis ea facere? Animi vel unde deleniti expedita distinctio. Sapiente vitae, rem obcaecati laborum ad aspernatur, natus fuga, officia doloremque quod labore nisi explicabo voluptate beatae est? Nesciunt et explicabo quaerat ut. Eius rem natus culpa, ratione quidem voluptas odio tenetur eum commodi optio odit quas, quo accusamus placeat alias incidunt illo delectus est. Fuga ullam ab vel, dolorem quam error sed, accusamus, similique deserunt voluptatem perferendis est esse deleniti consequuntur. Nihil rerum harum placeat accusamus tempore tempora omnis soluta veniam. Eveniet iure quas fuga ipsum eligendi corporis nostrum maxime nisi impedit, repellat laudantium, totam nesciunt in inventore quis nobis sint ab sapiente. Magni ea explicabo cum reiciendis doloremque, provident aliquid maxime iure temporibus nobis excepturi pariatur nostrum ab accusamus est in vel doloribus. Eveniet ex accusamus dignissimos laudantium praesentium veniam, inventore voluptate officiis labore dolorem, illum adipisci! Laboriosam possimus est repudiandae deleniti dolorem enim culpa quo quam excepturi animi adipisci sit quae fugit, accusamus facilis temporibus molestias obcaecati fuga dolor tempore odit aliquid quis neque! Qui possimus in corrupti doloribus officiis rem deserunt doloremque accusamus ex magni impedit odit ipsa similique explicabo, ratione quisquam dignissimos, fuga obcaecati reprehenderit saepe dolorum repellat? Quo nam cupiditate sit ratione, modi consequuntur perspiciatis laboriosam praesentium nesciunt sunt laudantium illo architecto non repellendus nulla officia. Enim labore nostrum laborum velit deleniti ducimus fuga assumenda iusto est nesciunt nobis error ea laudantium doloremque, cum eligendi repellendus odit pariatur nihil tenetur quaerat quas architecto sed dolorem! Atque delectus obcaecati laudantium porro, ratione voluptatem consequuntur vero harum voluptas neque quod minus cupiditate est magni iusto necessitatibus maiores laborum, iste illum officia magnam ipsam a? Obcaecati natus optio in nemo quidem saepe quos sint facilis, minima enim consequuntur dolorum unde necessitatibus nam, ducimus incidunt corporis ad adipisci aliquam iste laborum dolor quisquam ab? Fuga culpa quasi eligendi reiciendis iure nemo tempora quam quibusdam id facilis. Repellendus eveniet eum illum suscipit eius, error, voluptates similique eligendi fugiat distinctio corrupti repellat quia? Velit obcaecati dolor harum eligendi eveniet exercitationem, debitis necessitatibus enim fugit, ad accusamus architecto cumque nulla alias dolore numquam repellendus! Magni at natus illum labore totam temporibus harum eaque libero reprehenderit voluptates nulla veniam in sequi quam expedita delectus error maxime atque accusamus, impedit porro blanditiis rem nam nihil. Natus cupiditate, ipsam ad placeat odit libero iure. Obcaecati animi praesentium at quaerat excepturi, aspernatur minima et amet tenetur laudantium perspiciatis suscipit? Harum dolore sint optio esse, corporis praesentium? Impedit iure, architecto maxime adipisci provident ad dolorem consectetur ipsam accusantium. Libero, culpa sint. Distinctio officiis ullam alias blanditiis id ea error laudantium nesciunt natus fugiat doloribus earum sunt, magni veritatis obcaecati neque rerum ratione, molestias repudiandae saepe voluptas provident. Quam architecto ea fuga ipsum aspernatur enim ad nesciunt explicabo in, unde id officiis quo sit incidunt quisquam iste nobis praesentium repudiandae voluptas, veritatis vitae sequi accusantium placeat! Quam et ipsa quod tenetur vero accusantium quasi, velit amet praesentium, sed impedit blanditiis deserunt voluptate minus inventore. Aliquid repudiandae animi tempora debitis, eligendi nihil libero aut officia quasi sed fugiat praesentium dolor blanditiis voluptas. Eos provident fugiat inventore quos numquam laboriosam beatae omnis quis! Error, quod, excepturi quasi explicabo quis dolorum libero voluptatibus enim reprehenderit veniam harum officiis praesentium mollitia? Vitae reprehenderit perspiciatis molestiae dolores tempora accusamus officia alias soluta suscipit, architecto, facilis, quia odio illo. Amet rerum ad iure vitae dolorem eum architecto culpa? Consequatur eum quasi corrupti aspernatur placeat modi quaerat ea qui vel quas in ipsum non nemo labore unde, ad saepe cumque nostrum. Quidem iste nulla voluptatem. Delectus harum quibusdam molestiae officiis, nisi cupiditate dolores. Maiores voluptatem provident expedita, deleniti quisquam odio velit! Recusandae adipisci laborum deleniti dolorum amet perferendis facilis nostrum, nemo neque cum delectus, repellat totam laudantium sit voluptatem! Aut fugit dolor at optio ipsum recusandae consequuntur animi exercitationem necessitatibus! Doloremque debitis sunt explicabo perferendis consequuntur at neque iste id ea maiores error consequatur adipisci vero amet omnis tempora fuga quae praesentium ex fugiat, veritatis earum eum vitae. Itaque eveniet error corporis, debitis ipsa ipsum vel!
                </div> */}
            </div>
        </div>
    );
};

export default Rest;
