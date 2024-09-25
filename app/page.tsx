import cover from "./public/images/cover_art.png";
import logo from "./public/images/nearth_logo.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-4 sm:px-0">
        <Image 
          src={logo} 
          alt="Logo" 
          width={500} 
          height={500} 
          className="w-3/4 sm:w-1/2 md:w-2/5 lg:w-1/3 max-w-full h-auto mx-auto"
        />
      <p className="text-lg sm:text-xl mb-12 sm:mb-20 md:mb-32 lg:mb-40">Where art meets science</p>
      <Image 
        src={cover} 
        alt="Cover Art" 
        width={500} 
        height={500} 
        className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 max-w-full h-auto mx-auto"
      />
    </main>
  );
}
