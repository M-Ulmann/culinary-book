import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

export default function MainTitle({isDark, setCreateRecipe}:{
  isDark: boolean,
  setCreateRecipe: Dispatch<SetStateAction<boolean>>
}){
  return (
    <div className="flex flex-col gap-10 lg:flex-row">

      {/* nazev + obrazek */}
      <div className="flex flex-row justify-center px-20 py-12 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/kitchen.jpg')] bg-size-[100%_350%] bg-position-[0px_300px] flex-6/8 rounded-3xl outline-5 outline-emerald-500">
        <div className="flex flex-col items-center outline-5 outline-emerald-500 rounded-xl px-5 py-3 bg-black/80 sm:px-20 sm:py-5">
          <h1 className="text-2xl font-extrabold uppercase tracking-widest text-white text-center mb-2 sm:text-4xl">
            culinary book
          </h1>
          <p className="text-green-300 capitalize text-center text-sm sm:text-md">
            your personal homemade recipe collection
          </p>
        </div>
      </div>

      {/* tlacitko na formular */}
      <button className={clsx("flex-2/8 flex flex-col py-10 lg:py-0 items-center justify-center gap-5 rounded-3xl outline-5 outline-emerald-500/70 outline-dashed hover:outline-emerald-500 transition group",
        isDark ? "hover:bg-gray-700" : "hover:bg-green-100"
      )}
        onClick={() => {setCreateRecipe(true)}}
      >
        <p className={clsx("text-6xl bg-emerald-500 px-4 rounded-xl text-white group-hover:scale-110 transition")}>
          +
        </p>
        <p className={clsx("uppercase text-xl font-extrabold tracking-wider ",
          isDark ? "text-emerald-500" : "text-emerald-700"
        )}>
          add a recipe
        </p>
      </button>
    </div>
  );
}