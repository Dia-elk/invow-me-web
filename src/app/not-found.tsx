import Link from "next/link";
import React from "react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-sm mb-6">Oups ! Cette page n’existe pas ou a été déplacée.</p>
            <Link href={"/"}   className={' w-fit bg-secondary font-black px-8 py-4 text-xs select-none cursor-pointer rounded-lg text-background hover:bg-primary hover:text-[#052d32] transition-all duration-300'}>
                Retour à l’accueil
            </Link>
        </div>
    );
}
