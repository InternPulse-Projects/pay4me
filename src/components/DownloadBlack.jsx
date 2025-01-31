import Button from "./Button";
import whiteApple from "../assets/whiteApple.svg";
import whitePlay from "../assets/whitePlay.svg";

function DownloadBlack() {
  return (
    <div className="flex flex-row space-x-4 border-0">
      <Button className="w-full bg-black py-3 px-4 items-center lg:block max-sm:hidden sm:hidden cursor-pointer rounded-full">
        <div className="flex flex-row items-center content-center space-x-2 border-0">
          <img src={whiteApple} alt="apple-white-logo" />
          <span className="flex flex-col text-xs text-white font-medium">
            <small>Download on</small>
            <big>Appstore</big>
          </span>
        </div>
      </Button>
      <Button className="w-full bg-black py-3 px-4 items-center lg:block max-sm:hidden sm:hidden cursor-pointer rounded-full">
        <div className="flex flex-row items-center content-center space-x-2 border-0">
          <img src={whitePlay} alt="palystore-white-logo" />
          <span className="flex flex-col text-xs text-white font-medium">
            <small>Download on</small>
            <big>Playstore</big>
          </span>
        </div>
      </Button>
      {/* <img src={DownloadButtons} alt="download" /> */}
    </div>
  );
}

export default DownloadBlack;
