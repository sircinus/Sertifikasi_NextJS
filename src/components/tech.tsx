import TechCard from './techCard';

export default function Tech() {
    return (
        <>
            <div className="text-white bg-gray-900 w-screen min-h-[300px] p-8">
                <p className="text-4xl font-bold mb-4">Halaman Tech</p>
                <div className="w-32 border-2 mb-8" />
                <div className="flex justify-center items-center w-full flex-wrap gap-5">
                {/* Daftar Tech Card*/}
                <TechCard imageURL="/img/react_native.png" techStack="React Native" />
                <TechCard imageURL="/img/javascript.png" techStack="JavaScript" />
                <TechCard imageURL="/img/cplusplus.webp" techStack="C++" />
                </div>
            </div>
        </>
    );
}