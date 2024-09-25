import cover from "./public/images/cover_art.png";
import logo from "./public/images/nearth_logo.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center">
        <Image 
          src={logo} 
          alt="Logo" 
          width={500} 
          height={500} 
          className="w-[calc(60%-100px)] max-w-full h-auto mx-auto"
        />
      <p className="text-xl mb-40">Where art meets science</p>
      <Image 
        src={cover} 
        alt="Cover Art" 
        width={500} 
        height={500} 
        className="w-[calc(100%-100px)] max-w-full h-auto mx-auto"
      />
    </main>
  );
}
