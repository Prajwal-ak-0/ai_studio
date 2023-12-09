"use client";

import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <div className="sm:flex hidden w-full h-24 shadow-lg sm:fixed z-10 bg-white justify-between">
            <div className="">
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    className="px-2 my-auto"
                    width={250}
                    height={250}
                />
            </div>
            <div className="flex gap-6 my-auto mr-8">
                <Button variant={"secondary"}>
                    Login
                </Button>
                <Button variant={"primary"}>
                    SignUp
                </Button>
            </div>
        </div>

    )
}

export default Navbar