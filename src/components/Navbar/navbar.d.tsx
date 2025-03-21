"use client";

import Link from "next/link";
import { ReactElement } from "react";
import { FaBots } from "react-icons/fa6";
import { IoMenuOutline, IoSearchOutline } from "react-icons/io5";
import $ from "jquery";
import "./navbar.css";

export default function Navbar(): ReactElement {
    return (
        <nav className="base navbar gap-16 w-full sm:px-8 py-4">
            <div className="navbar-start gap-3 text-center">
                <button className="btn btn-square btn-ghost" onClick={() => {
                    const sidebar = $(".base.sidebar");
                    sidebar.toggleClass("active-sidebar");
                    $(".base.layout").toggleClass("ml-layout-72");
                }}>
                    <IoMenuOutline className="text-2xl" />
                </button>
                <span className="inline-flex text-center items-center font-bold text-4xl text-accent">
                    <FaBots fontSize={72} />forge
                    <span className="text-base-100">.com</span>
                </span>
            </div>
            <div className="navbar-end gap-4">
                <Link href="/docs/getting-started" className="btn btn-md btn-primary rounded-full hidden md:flex">Login</Link>
                <div className="flex items-center justify-center rounded-full bg-base-100 inset-shadow-sm">
                    <input type="text" placeholder="Search" className="w-72 input input-md input-ghost focus:outline-none bg-base-300 rounded-full hidden min-sm:block min-sm:w-48 min-sm:bg-base-100" />
                    <button className="btn btn-circle btn-accent shadow-md" onClick={function() {
                        $(".base.navbar div.navbar-end div").toggleClass("active-searcharea");
                        $(".base.navbar div.navbar-end div > input").toggleClass("hidden");
                    }}>
                        <IoSearchOutline className="text-black" />
                    </button>
                </div>
            </div>
        </nav>
    )
}