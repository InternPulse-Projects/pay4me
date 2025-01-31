import QRScan from "../../assets/QR.svg";
function Download() {
  return (
    <section className="w-full flex justify-center px-30 py-10 sm:px-25 max-sm:px-10 items-center border-0">
      <div className="w-full bg-[#EDF5E2] flex flex-col px-20 py-20 max-sm:px-5 space-y-10 rounded-xl border-0">
        <div className="w-full flex flex-row max-sm:flex-col sm:flex-col sm:space-y-4 max-sm:space-y-4 justify-between items-center border-0">
          <div className="flex flex-col space-y-4 border-0">
            <h1
              className="w-96 max-sm:w-full font-semibold lg:text-center md:text-center sm:text-center lg:text-4xl 
              max-sm:text-center max-sm:text-2xl md:text-2xl sm:text-2xl border-0 self-center"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Download the Pay4Me app Today!
            </h1>
            <p className="w-[65%] sm:w-full max-sm:w-full max-sm:text-center px-5 text-sm text-slate-500">
              Our custom QR code will take you to your app store to download our
              awesome native apps
            </p>
          </div>

          <div className="bg-white px-4 py-4 rounded-xl w-60">
            <img src={QRScan} alt="qr-scan" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Download;
