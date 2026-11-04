import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function Footer({isDark, recipes, setCurrentPage, currentPage} : {
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
  setCurrentPage: Dispatch<SetStateAction<number>>
  currentPage: number
}){

  function renderNavButton(){

    const recipesByPage = recipes.filter((_, index) => {
      return index % 6 === 0;
    });

    return recipesByPage.map((_, index) => {
      return(
        <button className={clsx(" py-2 px-4 rounded-xl  transition",
          isDark ? "bg-gray-700 hover:bg-emerald-800 text-white" : "bg-gray-200 hover:bg-emerald-100 text-black"
        )}
        key={index}
        >
          {
            index + 1
          }
        </button>
      );
    })

  }

  return(
    <footer className="flex flex-row gap-3 self-center text-2xl">
      {/* tlacitko zpet */}
      <button className={clsx("p-3 rounded-xl hover:bg-emerald-500 hover:text-white transition",
        isDark ? "text-white" : "text-black"
      )}
        onClick={() => {
          if(currentPage > 0){
            setCurrentPage(currentPage - 1)
          }
        }}
      >
        <ArrowLeft/>
      </button>

      {/* navigace mezi recepty */}
      {
        renderNavButton()
      }

      {/* tlacitko dopredu */}
      <button className={clsx("p-3 rounded-xl hover:bg-emerald-500 hover:text-white transition",
        isDark ? "text-white" : "text-black"
      )}
      onClick={() => {
        if(currentPage < Math.ceil(recipes.length / 6) - 1)  {
          setCurrentPage(currentPage + 1)
        }
      }}
      >
        <ArrowRight/>
      </button>
    </footer>
  );
}