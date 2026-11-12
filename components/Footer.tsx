import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

export default function Footer({isDark, recipes, setCurrentPage, currentPage, sortedRecipes} : {
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
  sortedRecipes: () => {
    id: string;
    title: string;
    category: string;
    cook_time: string;
    header_color: string;
    short_description: string;
    ingredients: string;
    instructions: string;
}[]
}){

  function renderNavButton(){

    const recipesByPage = sortedRecipes().filter((_, index) => {
      return index % 6 === 0;
    });

    return recipesByPage.map((_, index) => {
      return(
        <button className={clsx("py-2 px-4 rounded-xl transition",
          isDark ? " hover:bg-emerald-800 text-white" : "hover:bg-emerald-100 text-black",
          index === currentPage && "bg-emerald-400"
        )}
          key={index}
          onClick={() => {
            setCurrentPage(index);
          }}
        >
          {
            index + 1
          }
        </button>
      );
    })
  }

  function leftButton(){
    return(
      <button className={clsx("p-3 rounded-xl order-1 sm:order-0 hover:bg-emerald-500 hover:text-white transition disabled:cursor-not-allowed! disabled:hover:bg-emerald-100 disabled:hover:text-black",
        isDark ? "text-white" : "text-black",
      )}
        onClick={() => {
          if(currentPage > 0){
            setCurrentPage(currentPage - 1)
          }
        }}
        disabled={currentPage === 0}
      >
        <ArrowLeft/>
      </button>
    );
  }

  function rightButton(){
    return(
      <button className={clsx("p-3 rounded-xl order-1 hover:bg-emerald-500 hover:text-white transition disabled:cursor-not-allowed! disabled:hover:bg-emerald-100 disabled:hover:text-black",
        isDark ? "text-white" : "text-black"
      )}
      onClick={() => {
        if(currentPage < maxPage)  {
          setCurrentPage(currentPage + 1)
        }
      }}
      disabled={currentPage === maxPage || recipes.length === 0}
      >
        <ArrowRight/>
      </button>
    );
  }

  const maxPage = Math.ceil(sortedRecipes().length / 6) - 1;

  return(
    <footer className="flex flex-row self-center justify-center text-2xl">

      {/* tlacitka pro PC */}
      <div className="sm:flex hidden flex-row items-center gap-2">
        {/* tlacitko zpet */}
        {
          leftButton()
        }

        {/* navigace mezi recepty */}
        {
          renderNavButton()
        }

        {/* tlacitko dopredu */}
        {
          rightButton()
        }
      </div>

      {/* tlacitka pro mobily */}
      <div className="sm:hidden flex flex-col gap-3 items-center">

        <div className="flex flex-wrap gap-3 items-center justify-center">
          {/* navigace mezi recepty */}
          {
            renderNavButton()
          }
        </div>

        <div className="flex gap-3">

          {/* tlacitko zpet */}
          {
            leftButton()
          }

          {/* tlacitko dopredu */}
          {
            rightButton()
          }

        </div>

      </div>

      
    </footer>
  );
}