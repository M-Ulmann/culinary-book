import Utensils from '@/public/utensils.png'
import Image from "next/image";
import { MoonStar, Sun} from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

export default function Header({isDark, setIsDark} : {
  isDark: boolean
  setIsDark: Dispatch<SetStateAction<boolean>>
}) {
  return(
    <header className={clsx("flex flex-row items-center justify-between h-20 border-b px-5 fixed w-full backdrop-blur-lg z-10 2xl:px-60 xl:px-30 md:px-10",
        isDark ? "bg-gray-700/80" : "bg-white/80 border-b-green-200"
      )}>

      {/* leva strana headeru */}
      <div className="flex flex-row items-center gap-5">

        <Image 
          src={Utensils}
          width={50}
          height={50}
          alt="utensils"
        />

        <div>
          <p className="text-2xl font-extrabold bg-linear-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent uppercase sm:text-3xl">
            culinary
          </p>
          <p className="text-md text-gray-400 tracking-widest sm:text-lg">
            recipe book
          </p>
        </div>
      </div>

      {/* prava strana headeru s tlacitkem pro dark mode */}
      <button className={clsx("flex flex-row gap-2 px-3 py-2 rounded-xl outline-1 outline-gray-300 bg-white shadow-lg capitalize font-bold tracking-wide text-purple-800 text-sm hover:bg-blue-100 transition",
        isDark ? "text-yellow-500" : "text-purple-800"
      )}
        onClick={() => {setIsDark(!isDark)}}
      >
        
        {isDark ? <Sun /> : <MoonStar />}

        <span className=" hidden sm:inline-block">
          {isDark ? "Light Mode" : "Dark mode"}
        </span>
      </button>
    </header>
  );
}