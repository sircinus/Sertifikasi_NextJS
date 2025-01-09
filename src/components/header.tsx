import Link from "next/link";

export default function Header() {
    return (
        <>
        <div className="w-screen p-8 bg-black flex justify-between">
            <div>
            <p className="font-bold relative w-fit before:absolute text-white before:inset-0 before:bg-black before:animate-typewriter after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
after:bg-white">Romeo Kurniawan</p>
            </div>
            <div>
                <ul className=" flex text-white gap-5">
                    <li><Link href="./about">About</Link></li>
                    <li><Link href="./tech">Techs</Link></li>
                    <li>Contact</li>
                </ul>
            </div>
            
        </div>
        </>
    )
}