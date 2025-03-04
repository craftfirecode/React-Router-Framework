import * as React from 'react';
import {Menu} from '@base-ui-components/react/menu';
import {Link, NavLink} from "react-router";
import {MenuIcon, UserIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";

export default function MegaMenu() {
    const [isSheetOpen, setIsSheetOpen] = React.useState(false);

    const handleNavLinkClick = () => {
        setIsSheetOpen(false);
    };

    return (
        <div className="container mx-auto px-5">
            <nav
                className="bg-[#7c85ffdb] relative z-1 p-4 m-4 rounded  mx-auto flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/">
                        <img src="/brand.png" className="h-[20px]" alt="Logo"/>
                    </Link>
                    <div className="hidden lg:flex gap-4">
                        <NavLink
                            className={({isActive}) =>
                                isActive ? "text-white" : "text-black transition-colors duration-450 hover:text-white"
                            }
                            to={"/"}>
                            Home
                        </NavLink>
                        <NavLink
                            className={({isActive}) =>
                                isActive ? "text-white" : "text-black transition-colors duration-450 hover:text-white"
                            }
                            to={"/About"}>
                            About
                        </NavLink>
                        <NavLink
                            className={({isActive}) =>
                                isActive ? "text-white" : "text-black transition-colors duration-450 hover:text-white"
                            }
                            to={"/team"}>
                            Team
                        </NavLink>
                    </div>

                </div>
                <div className="hidden lg:flex items-center gap-4">
                    <Menu.Root openOnHover>
                        <Menu.Trigger
                            className="flex h-10 items-center justify-center gap-4 rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100 data-[popup-open]:bg-gray-100">
                            Posts<ChevronDownIcon className="-mr-1"/>
                        </Menu.Trigger>
                        <Menu.Portal>
                            <Menu.Positioner className="outline-none z-1" sideOffset={8}>
                                <Menu.Popup
                                    className="origin-[var(--transform-origin)] rounded-md bg-[canvas] p-5 text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
                                    <Menu.Arrow
                                        className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
                                        <ArrowSvg/>
                                    </Menu.Arrow>
                                    <div className="flex flex-col gap-3">
                                        <Link to={"/blog/5"}>
                                            <Menu.Item
                                                className="flex cursor-default py-2 pr-8 pl-4 leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
                                                Blog 5
                                            </Menu.Item>
                                        </Link>
                                        <Link to={"/blog/10"}>
                                            <Menu.Item
                                                className="flex cursor-default py-2 pr-8 pl-4 leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
                                                Blog 10
                                            </Menu.Item>
                                        </Link>
                                        <Link to={"/blog/15"}>
                                            <Menu.Item
                                                className="flex cursor-default py-2 pr-8 pl-4 leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
                                                Blog 15
                                            </Menu.Item>
                                        </Link>
                                    </div>
                                </Menu.Popup>
                            </Menu.Positioner>
                        </Menu.Portal>
                    </Menu.Root>
                    <Menu.Root openOnHover>
                        <Menu.Trigger
                            className="flex h-10 items-center justify-center gap-4 rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100 data-[popup-open]:bg-gray-100">
                            <UserIcon/>
                            Account<ChevronDownIcon className="-mr-1"/>
                        </Menu.Trigger>
                        <Menu.Portal>
                            <Menu.Positioner className="outline-none z-1" sideOffset={8}>
                                <Menu.Popup
                                    className="origin-[var(--transform-origin)] rounded-md bg-[canvas] p-5 text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
                                    <Menu.Arrow
                                        className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
                                        <ArrowSvg/>
                                    </Menu.Arrow>
                                    <Link to={"/account"}>
                                        <Menu.Item>
                                            <Button className="w-[200px] text-[16px]" size="lg">Einloggen</Button>
                                        </Menu.Item>
                                    </Link>
                                </Menu.Popup>
                            </Menu.Positioner>
                        </Menu.Portal>
                    </Menu.Root>
                </div>
                <div className="flex lg:hidden">
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger>
                            <MenuIcon/>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="text-[16px]">Menu</SheetTitle>
                                <div className="mt-3 flex flex-col gap-3">
                                    <NavLink
                                        className={({isActive}) =>
                                            isActive ? "text-black" : "text-gray-500 transition-colors duration-450 hover:text-black"
                                        }
                                        to={"/"}
                                        onClick={handleNavLinkClick}>
                                        Home
                                    </NavLink>
                                    <NavLink
                                        className={({isActive}) =>
                                            isActive ? "text-black" : "text-gray-500 transition-colors duration-450 hover:text-black"
                                        }
                                        to={"/About"}
                                        onClick={handleNavLinkClick}>
                                        About
                                    </NavLink>
                                    <NavLink
                                        className={({isActive}) =>
                                            isActive ? "text-black" : "text-gray-500 transition-colors duration-450 hover:text-black"
                                        }
                                        to={"/team"}
                                        onClick={handleNavLinkClick}>
                                        Team
                                    </NavLink>
                                    <NavLink
                                        className={({isActive}) =>
                                            isActive ? "text-black" : "text-gray-500 transition-colors duration-450 hover:text-black"
                                        }
                                        to={"/blog"}
                                        onClick={handleNavLinkClick}>
                                        Blog
                                    </NavLink>
                                    <NavLink
                                        className={({isActive}) =>
                                            isActive ? "text-black" : "text-gray-500 transition-colors duration-450 hover:text-black"
                                        }
                                        to={"/account"}
                                        onClick={handleNavLinkClick}>
                                        Account
                                    </NavLink>
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </div>

    );
}

function ArrowSvg(props: React.ComponentProps<'svg'>) {
    return (
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
            <path
                d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
                className="fill-[canvas]"
            />
            <path
                d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
                className="fill-gray-200 dark:fill-none"
            />
            <path
                d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
                className="dark:fill-gray-300"
            />
        </svg>
    );
}

function ChevronDownIcon(props: React.ComponentProps<'svg'>) {
    return (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" {...props}>
            <path d="M1 3.5L5 7.5L9 3.5" stroke="currentcolor" strokeWidth="1.5"/>
        </svg>
    );
}