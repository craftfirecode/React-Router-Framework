import {NavLink} from "react-router";
import * as React from "react";

export const FooterContainer = () => {
    return (


        <footer className="container mx-auto px-5">
            <div className="rounded-lg shadow-sm my-4 dark:bg-gray-800">
                <div className="w-full p-4 flex gap-4">
                    <NavLink
                        className={({isActive}) =>
                            isActive ? "text-black" : "text-gray-500 transition-colors duration-450 hover:text-black"
                        }
                        to={"/impressum"}>
                        Impressum
                    </NavLink>
                    <NavLink
                        className={({isActive}) =>
                            isActive ? "text-black" : "text-gray-500 transition-colors duration-450 hover:text-black"
                        }
                        to={"/datenschutz"}>
                        Datenschutz
                    </NavLink>
                    <NavLink
                        className={({isActive}) =>
                            isActive ? "text-black" : "text-gray-500 transition-colors duration-450 hover:text-black"
                        }
                        target="_blank"
                        to={"http://www.craftfire.de"}>
                        Portfolio
                    </NavLink>
                </div>
            </div>
        </footer>

    )
}