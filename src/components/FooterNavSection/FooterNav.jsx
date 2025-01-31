import Logo from "../../assets/Logo.svg";
function FooterNav() {
  return (
    <section className="w-full flex justify-center px-30 py-10 sm:px-25 max-sm:px-10 items-center">
      <div className="grid grid-cols-4 w-full space-y-10 border">
        <div className="flex flex-row items-center space-x-2">
          <img src={Logo} alt="logo" className="w-8" />
          <h1 className="w-ful font-bold text-sm">Pay4Me App</h1>
        </div>
      </div>
    </section>
  );
}

export default FooterNav;
