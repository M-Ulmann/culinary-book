import clsx from "clsx";
import { XIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function ShowRecipe({isDark, setViewRecipe, viewRecipe, singleRecipe, ingredientList} : {
  isDark: boolean
  setViewRecipe: Dispatch<SetStateAction<boolean>>
  viewRecipe: boolean
  singleRecipe: {
    title: string;
    category: string;
    header_color: string;
    short_description: string;
    ingredients: string;
    instructions: string;
}
  ingredientList: () => string[]
}){

  return(
    <section className={clsx("flex-col z-20 w-11/12 max-h-9/12 overflow-y-scroll mx-5 self-center bg-white fixed top-1/2 -translate-y-1/2 rounded-2xl md:w-175",
      viewRecipe ? "flex" : "hidden"
    )}>

      {/* tag a krizek */}
      <div className="flex flex-row h-30 items-start justify-between p-5"
        style={{backgroundColor: singleRecipe.header_color}}
      >

        <p className="flex flex-row gap-1 items-center bg-black/30 text-white px-3 py-1 rounded-md font-bold uppercase text-sm tracking-wider">
          {
            singleRecipe.category
          }
        </p>

        <button className="bg-black/40 text-white p-1.5 rounded-lg hover:bg-black/35"
          onClick={() => {setViewRecipe(false)}}
        >
          <XIcon/>
        </button>
      </div>

      <div className={clsx("flex flex-col gap-5 p-5",
        isDark ? "bg-gray-800 text-white" : "bg-white text-black"
      )}>

        {/* nazev a popisek */}
        <div className="flex flex-col gap-2">
          <h3 className="font-extrabold capitalize text-3xl tracking-tighter">
            {
              singleRecipe.title
            }
          </h3>
          <p className={clsx("text-sm",
            isDark ? "text-gray-400" : "text-gray-500"
          )}>
            {
              singleRecipe.short_description
            }
          </p>
        </div>

        {/* ingredience */}
        <div className="flex flex-col gap-3">
          <h4 className="uppercase font-extrabold tracking-wider"
            style={{color: singleRecipe.header_color}}
          >
            ingredients
          </h4>

          <ul className="grid grid-cols-2 gap-3 list-disc list-inside marker:text-2xl ">
            {
              ingredientList().map((ingredient, index) => {
                return(
                  <li className="p-1 rounded-lg"
                  style={{backgroundColor: `color-mix(in srgb, ${singleRecipe.header_color} 20%, transparent)`, color: singleRecipe.header_color}}
                    key={index} 
                  >
                    <span className={clsx(
                      isDark ? "text-white" : "text-black"
                    )}>
                      {
                        ingredient
                      }
                    </span>
                  </li>
                );
              })
            }
          </ul>
        </div>

        {/* instrukce */}
        <div className="flex flex-col gap-3">
          <h4 className="uppercase font-extrabold tracking-wider"
            style={{color: singleRecipe.header_color}}
          >
            instructions
          </h4>

          <p className={clsx("p-5 outline-1 rounded-2xl leading-8",
            isDark ? "outline-gray-500 text-white" : "outline-gray-200 text-gray-600"
          )}
            style={{backgroundColor: `color-mix(in srgb, ${singleRecipe.header_color} 20%, transparent)`}}
          >
            {
              singleRecipe.instructions
            }
          </p>
        </div>
      </div>
    </section>
  );
}