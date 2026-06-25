import { NavLink } from "react-router-dom";
import { listMenu } from "../data/navbar";

export default function Navbar () {
  return (
    <nav className="fixed top-0 w-full bg-slate-900 border-b border-slate-800 px-8 py-4 flex justify-between items-center text-white z-50 backdrop-blur-md bg-opacity-90">
        <div className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-wider text-yellow-400">
            SHOP
            </span>
        </div>
        
        <div className="flex gap-6 items-center text-sm font-semibold">
            {listMenu.map((item, index) => (
            <NavLink 
                key={index}
                to={item.path} 
                className={({ isActive }) => 
                `transition-colors duration-200 hover:text-yellow-400 ${
                    isActive ? "text-yellow-400" : "text-slate-300"
                }`
                }
            >
                {item.name}
            </NavLink>
            ))}
        </div>
    </nav>
  );
};