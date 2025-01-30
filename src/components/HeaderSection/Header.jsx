import Logo from "../../assets/Logo.svg";
import storeIcon from "../../assets/storeIcon.svg";
import Button from "../Button";
import Nav from "./Nav";
function Header() {
  return (
    <section className="w-full py-4 lg:px-40 md:px-10 sm:px-40 max-sm:px-2 border-0">
      <header className="w-full bg-[#242323] rounded-full flex flex-row justify-between items-center py-2 px-3 border-0">
        <div className="flex flex-row items-center space-x-2">
          <img src={Logo} alt="logo" className="w-8" />
          <h1 className="w-full text-white font-bold text-sm">Pay4Me App</h1>
        </div>

        <Nav />

        <Button className="bg-[#AFE274] py-3 px-4 lg:block max-sm:hidden sm:hidden cursor-pointer rounded-full">
          <div className="flex flex-row items-center content-center space-x-2 border-0">
            <span className="text-lg font-medium">Download app</span>
            <img src={storeIcon} alt="store-logo" />
          </div>
        </Button>
      </header>
    </section>
  );
}

export default Header;
