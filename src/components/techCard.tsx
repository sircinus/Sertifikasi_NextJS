import Image from "next/image";

type TechCard = {
    imageURL: string;
    techStack: string;
};

export default function TechCard({imageURL, techStack}: TechCard) {
    return (
        <>
            <div className="w-40 h-40 flex gap-2 justify-center items-center shadow-lg overflow-hidden rounded-3xl bg-slate-300 bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 flex-col hover:bg-gray-600 hover:scale-105 duration-300">
                <div className="relative object-cover w-20 h-20">
                <Image src={imageURL} alt="a" fill={true} />
                
                </div>
                <p className="text-white">{techStack}</p>
            </div>
        </>
    );
}