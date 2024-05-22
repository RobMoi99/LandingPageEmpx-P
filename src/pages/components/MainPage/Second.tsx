import { FaPlay } from "react-icons/fa";
import aa from "../../../images/poster.png"

// Second part of the first page
export default function Second() {
  return (
    <div id="our-vision" className=" bg-secondBackgroundGray pb-24 h-screen ">
      <div className="h-full flex flex-col items-center justify-center gap-12">
        <h1 className=" text-4xl  font-custom1 font-bold text-whiteReplace mt-32">Our Vision</h1>
        <div className="utlg:px-12   max-w-5xl  rounded-[80px] flex justify-center items-center text-7xl "><video src="src/video/video.mp4" width="100%" height="100%" controls poster="./poster.webp" className="object-cover rounded-3xl">
          {/* ADD BACKUP  https://www.youtube.com/watch?v=BAx2GaMW2qA*/}
          Your browser does not support the video tag.
        </video>
        </div>
      </div>
    </div>
  )
}