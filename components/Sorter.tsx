import clsx from "clsx";
import { Search } from "lucide-react";

export default function Sorter({isDark, recipes} : {
  isDark: boolean
  recipes: {
    title: string;
    category: string;
    cook_time: string;
    header_color: string;
    short_description: string;
    ingredients: string;
    instructions: string;
  }[]
}){
  return(
    <div className={clsx("flex flex-col gap-5 justify-between py-5 px-5 rounded-xl outline-2 lg:flex-row lg:gap-2",
      isDark ? "bg-gray-700 outline-gray-600" : "bg-white outline-gray-200"
    )}>

      {/* search input s obrazkem */}
      <div className={clsx("flex flex-row gap-2 p-2 rounded-lg outline-1 outline-gray-300 focus-within:ring-3 focus-within:ring-emerald-500 focus-within:outline-0",
        isDark ? "bg-slate-800 text-white" : "bg-gray-100 text-black"
      )}>
        <Search/>
        <input 
          className="outline-none w-full focus:placeholder:text-transparent lg:w-70"
          type="text"
          placeholder="Search for recipes..."
        />
      </div>

      {/* seznam tlacitek (budou vytvoreny podle kategorie) */}
      <div className={clsx("flex flex-row justify-center gap-3 flex-wrap",
        isDark ? "text-white" : "text-black"
      )}>

        <button className={clsx("font-bold px-3 py-1 rounded-xl text-sm transition capitalize",
          isDark ? "bg-slate-900 hover:bg-slate-800" : "bg-gray-100 hover:bg-gray-200"
        )}>
          All
        </button>

        {
          recipes.map((item, index) => {
            return(
              <button key={index} className={clsx("font-bold px-3 py-1 rounded-xl text-sm transition capitalize",
                isDark ? "bg-slate-900 hover:bg-slate-800" : "bg-gray-100 hover:bg-gray-200"
              )}>
                {
                  item.category
                }
              </button>
            );
          })
        }

      </div>
    </div>
  );
}