import Image from 'next/image'

export default function Introduction() {
    return(
        <>
        <div className="w-screen h-[450px] bg-stone-800 p-8 text-white">
            <div className="flex justify-between">
                <div className="w-5/8 mx-5">
                    <p className="font-bold text-2xl">Teknik Informatika</p>
                    <p className="font-extrabold text-6xl w-fit hover:text-red-500 duration-300">Romeo Kurniawan</p>
                    <p className="my-1 font-light text-2xl"> November 2004</p>
                    <p className="my-5 font-light text-justify">Halo, saya adalah mahasiswa yang sedang mempelajari pemrograman, terutama pada:</p> 
                    <ul className="my-5 font-light text-justify">
                        <li>- Pemrograman Front End HTML, CSS, JS</li>
                        <li>- Pemrograman Mobile React-Native</li>
                        <li>- Pemrograman Backend API Express.js</li>
                        <li>- React Framework Next.js</li>
                    </ul>
                </div>
                <div className="relative w-80 items-center h-80">
                    <Image src={"/img/profile.jpg"} alt="Romeo Kurniawan" fill={true} priority={true} className="rounded-3xl object-cover hover:scale-105 duration-200"/>
                </div>
            </div>
        </div>
        </>
    )
}