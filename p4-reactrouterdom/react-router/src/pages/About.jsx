import { RiTeamFill } from "react-icons/ri";

export default function About() {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-6">
        <RiTeamFill size={70}/>
        <h1 className="text-4xl font-black text-blue-400 mb-4">Tentang Kami</h1>
        <p className="text-slate-400 text-center max-w-lg">
           Toko ini adalah toko resmi dan original menjual berbagai macam produk dengan harga terjangkau.
        </p>
    </div>
  );
};