import Button from "./Button";
import storeIcon from "../assets/storeIcon.svg";
function DownloadButton() {
  return (
    <Button className="bg-[#AFE274] py-3 px-4 cursor-pointer rounded-full">
      <div className="flex flex-row items-center content-center space-x-2 border-0">
        <span className="text-lg font-medium">Download app</span>
        <img src={storeIcon} alt="store-logo" />
      </div>
    </Button>
  );
}

export default DownloadButton;
