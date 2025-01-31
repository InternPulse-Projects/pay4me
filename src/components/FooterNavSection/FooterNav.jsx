import Logo from "../../assets/Logo.svg";
import supportIcon from "../../assets/support.svg";
import instagramIcon from "../../assets/instagramIcon.svg";
import xIcon from "../../assets/xIcon.svg";
import facebookIcon from "../../assets/facebookIcon.svg";
import tiktokIcon from "../../assets/tiktokIcon.svg";
import youtubeIcon from "../../assets/youtubeIcon.svg";
import DLButtons from "../../assets/dlbuttons.svg";

function FooterNav() {
  return (
    <section className="w-full flex flex-col justify-center px-30 py-10 sm:px-25 space-y-4 max-sm:px-10 items-center">
      <div className="grid grid-cols-5 w-full space-y-10 border-0">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-row items-center space-x-2">
            <img src={Logo} alt="logo" className="w-8" />
            <h1 className="w-ful font-bold text-sm">Pay4Me App</h1>
          </div>

          <span className="flex flex-row text-sm text-slate-500 gap-x-2">
            <img src={supportIcon} alt="support-icon" />
            Support@pay4me.app
          </span>

          <div className="flex flex-row space-x-2">
            <img src={instagramIcon} alt="icon" />
            <img src={xIcon} alt="icon" />
            <img src={facebookIcon} alt="icon" />
            <img src={tiktokIcon} alt="icon" />
            <img src={youtubeIcon} alt="icon" />
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h1 className="font-semibold">Company</h1>
          <span className="text-xs text-slate-500">About</span>
          <span className="text-xs text-slate-500">Blog</span>
          <span className="text-xs text-slate-500">How it works</span>
          <span className="text-xs text-slate-500">Careers</span>
        </div>
        <div className="flex flex-col space-y-4">
          <h1>Resources</h1>
          <span className="text-xs text-slate-500">Android Reviews</span>
          <span className="text-xs text-slate-500">IOS Reviews</span>
          <span className="text-xs text-slate-500">Testimonials</span>
          <span className="text-xs text-slate-500">FAQs</span>
        </div>
        <div className="flex flex-col space-y-4">
          <h1>Legal</h1>
          <span className="text-xs text-slate-500">Terms of Service</span>
          <span className="text-xs text-slate-500">Terms of Service</span>
          <span className="text-xs text-slate-500">Privacy Policy</span>
          <span className="text-xs text-slate-500">KYC/AML Policy</span>
        </div>

        <div>
          <img src={DLButtons} alt="download-buttons" className="w-full" />
          <span className="w-full text-xs text-slate-500">
            Depending on your mobile device, download our awesome native app to
            start enjoying all the benefits of pay4Me.
          </span>
        </div>
      </div>

      <div className="text-sm text-slate-500">© 2020 - 2024 Pay4Me, Inc.</div>

      <div className="flex flex-row space-x-2 ">
        <img src alt="logo-bottom" width={80} />
        <span className="text-xs text-slate-500">
          Pay4Me is a financial technology company making it easier for
          international students and immigrants to pay their tuition and fees in
          minutes. We offer our products and services in partnership with
          licensed transmitters and banking partners in their respective
          jurisdictions. All trademarks, logos, and brand names are the property
          of their respective owners. All company, product, and service names
          used on this website are for identification purposes only. Use of
          these names, trademarks and brands do not imply endorsement.
        </span>
      </div>
    </section>
  );
}

export default FooterNav;
