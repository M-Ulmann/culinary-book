import clsx from "clsx";
import { Tag, Pencil, Trash, Clock } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function Recipe({isDark, setViewRecipe, item} : {
  isDark: boolean
  setViewRecipe: Dispatch<SetStateAction<boolean>>
  item: {
    title: string
    category: string
    cook_time: string
    header_color: string
    short_description: string
    ingredients: string
    instructions: string
  }
}){
  return(
    <div className={clsx("rounded-2xl outline-4 outline-emerald-500 hover:shadow-2xl hover:-translate-y-1.5 transition",
      isDark ? "bg-zinc-900" : "bg-white"
    )}>

      {/* vrchni cast s kategorii a moznosti upravit/odstranit recept*/}
      <div className="flex flex-row justify-between items-start h-20 rounded-t-2xl px-5 py-3"
        style={{backgroundColor: item.header_color}}
      >
        <div className="flex flex-row gap-1 items-center bg-black/30 text-white px-3 py-1 rounded-md font-bold uppercase text-sm tracking-wider">
          <Tag size={15}/>
          <p>
            {item.category}
          </p>
        </div>

        <div className="flex flex-row gap-3 items-center bg-black/30 text-white px-2 py-1 rounded-md uppercase">
          <button className="hover:text-amber-400">
            <Pencil size={20}/>
          </button>

          <button className="hover:text-amber-400">
            <Trash size={20}/>
          </button>
        </div>
      </div>

      {/* hlavni cast receptu */}
      <section className="flex flex-col p-7 gap-3">

        {/* nazev / jednoduchy popis */}
        <div className="flex flex-col gap-2 pb-3 border-b border-b-gray-300 ">
          <h3 className={clsx("text-xl font-extrabold capitalize",
            isDark ? "text-white" : "text-black"
          )}>
            {
              item.title
            }
          </h3>
          <p className={clsx("text-sm min-h-11 line-clamp-2",
            isDark ? "text-gray-400" : "text-gray-500"
          )}>
            {
              item.short_description
            }
          </p>
        </div>

        {/* cas / ingredience */}
        <div className="flex flex-row justify-between">
          <div className={clsx("flex flex-row gap-1 text-sm items-center font-bold",
            isDark ? "text-emerald-400" : "text-emerald-600"
          )}>
            <Clock size={20}/>
            <p>
              {item.cook_time}
            </p>
          </div>

          <p className="text-gray-400 text-sm font-bold">
            5 ingredients
          </p>
        </div>

        {/* tlacitko ukaze recept */}
        <button className="bg-black py-3 text-white font-bold uppercase tracking-wider rounded-xl text-sm hover:bg-emerald-600 transition"
          onClick={() => {setViewRecipe(true)}}
        >
          view details
        </button>
      </section>

      
    </div>
  );
}