"use client";
import Link from "next/link";
import { useState } from "react";

const pages = ["Home", "Cardápio", "Sobre nós"];
export default function HeaderLinks() {
    const [page, setPage] = useState(0);

    const handleLinkClick = (index: number) => {
        setPage(index);
    };
    return (
        <ul className="flex gap-20 font-body group">
            {pages.map((link, index) => {
                return (
                    <Link
                        href={`/`}
                        className={`${
                            index === page ? "text-white" : "text-zinc-500"
                        } hover:text-white transition-all`}
                        key={index.toString()}
                        onClick={() => {
                            handleLinkClick(index);
                        }}
                    >
                        {link}
                    </Link>
                );
            })}
        </ul>
    );
}
