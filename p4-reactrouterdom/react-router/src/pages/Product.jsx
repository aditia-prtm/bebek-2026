import { FaCartPlus } from "react-icons/fa";
import { listProduk } from "../data/product";

export default function Product() {
  
  return (
    <div className="min-h-screen text-white p-10 flex flex-col items-center justify-center">
        <div className="flex items-center gap-3 mb-2">
            <FaCartPlus size={70} />
        </div>
        <h1 className="text-4xl font-extrabold text-emerald-400 mb-8 tracking-tight">
            Daftar Produk
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            {listProduk.map((produk, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden">
                <div>
                    <div className="mb-4 bg-slate-850 p-3 rounded-xl w-fit">
                        <produk.icon className="text-yellow-400" size={32} />
                    </div>
                    <span className="text-xs font-medium text-emerald-400 uppercase tracking-wider">{produk.category}</span>
                    <h3 className="text-lg font-bold text-white mt-1">
                        {produk.name}
                    </h3>
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <span className="text-md font-extrabold text-white">{produk.price}</span>
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 text-xs font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer">
                        Beli
                    </button>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
};