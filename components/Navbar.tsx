"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Usermenu from "./Usermenu";

const Navbar = () => {
    return (
        <div className="flex w-full sm:h-24 h-16 sm:shadow-lg shadow-sm fixed z-10 bg-white justify-between">
            <div className="max-sm:hidden">
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    className="px-2 my-auto"
                    width={250}
                    height={250}
                />
            </div>
            <div className="sm:hidden">
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    className="px-2 my-auto"
                    width={175}
                    height={175}
                />
            </div>
            <div className="flex max-sm:hidden  gap-6 my-auto mr-8">
                <Button variant={"secondary"}>
                    Login
                </Button>
                <Button variant={"primary"}>
                    SignUp
                </Button>
            </div>
            <div className="sm:hidden">
                <Usermenu />
            </div>
        </div>

    )
}

export default Navbar