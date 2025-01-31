import { brands } from "../../data";

function Brands() {
  return (
    <section className="-mt-10 px-5 border">
      <h1 className="w-full text-center text-slate-500 text-sm py-2">
        LEADING BRAND PARTNER WITH US
      </h1>
      <div className="flex flex-row items-center justify-center border-0">
        {brands.map((b) => (
          <div key={b.id} className="">
            <img src={b.image} alt="brand" className="object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Brands;
