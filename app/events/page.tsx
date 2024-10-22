import Image from "next/image";
import workshops from "../public/images/Workshops.png";
import gallery from "../public/images/The_Gallery.png";
import nearthTalks from "../public/images/NearthTalks.png";

export default function Events() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4">
      <div className="flex flex-col items-center m-2">
        <div className="text-lg font-bold mb-2">WORKSHOPS</div>
        <Image src={workshops} alt="Workshops" className="w-full h-auto" />
      </div>
      <div className="flex flex-col items-center m-2">
        <div className="text-lg font-bold mb-2">GALLERY</div>
        <Image src={gallery} alt="Gallery" className="w-full h-auto" />
      </div>
      <div className="flex flex-col items-center m-2">
        <div className="text-lg font-bold mb-2">NEARTH TALKS</div>
        <Image src={nearthTalks} alt="Nearth Talks" className="w-full h-auto" />
      </div>
    </div>
  );
}
