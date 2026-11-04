import { UtensilsIcon, XIcon, Check } from "lucide-react";
import clsx from "clsx";
import { SetStateAction, Dispatch, useState, useEffect } from "react";
import { tagColor } from "@/lib/tagColor";

export default function AddRecipe({createRecipe, setCreateRecipe, isDark, setRecipes, isEditing, setIsEditing, editId, form, setForm} : {
  createRecipe: boolean
  setCreateRecipe: Dispatch<SetStateAction<boolean>>
  isDark: boolean
  setRecipes: Dispatch<SetStateAction<{
    title: string;
    category: string;
    cook_time: string;
    header_color: string;
    short_description: string;
    ingredients: string;
    instructions: string;
  }[]>>

  isEditing: boolean
  setIsEditing: Dispatch<SetStateAction<boolean>>
  editId: number | null | undefined
  form: {
    title: string;
    category: string;
    cook_time: string;
    header_color: string;
    short_description: string;
    ingredients: string;
    instructions: string;
  }
  setForm: Dispatch<SetStateAction<{
    title: string;
    category: string;
    cook_time: string;
    header_color: string;
    short_description: string;
    ingredients: string;
    instructions: string;
}>>
}) {

  const [isWarning, setIsWarning] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() =>{
      setIsWarning(false);
    }, 2000)
    return () => clearTimeout(timer);
  }, [isWarning]);

  function clearForm(){
    setForm({
      title: "",
      category: "",
      cook_time: "",
      header_color: tagColor[0],
      short_description: "",
      ingredients: "",
      instructions: ""
    });

    setIsEditing(false);
  }

  function checkValidation(){
    if(form.title.length >= 3 && form.category.length >= 3 && form.cook_time.length >= 2 && form.short_description.length >= 10 && form.ingredients.length >= 3 && form.instructions.length >= 10){
      return true;
    }
    else{
      return false;
    }
  }

  return(
    <form className={clsx("flex flex-col z-20 w-11/12 max-h-11/12 overflow-y-scroll mx-5 self-center fixed top-1/2 -translate-y-1/2 p-10 rounded-2xl gap-7 md:w-175",
      createRecipe ? "flex" : "hidden",
      isDark ? "bg-gray-800" : "bg-white"
    )}>

      {/* vrchni cast, nazev a close button*/}
      <div className="flex flex-row items-center justify-between border-b-2 border-b-gray-400 pb-3">
        <div className={clsx("flex flex-row gap-3 items-center",
          isDark ? "text-emerald-400" : "text-emerald-600"
        )}>
          <UtensilsIcon />
          <p className={clsx("font-extrabold text-2xl capitalize text-black tracking-tighter sm:text-left text-center",
            isDark ? "text-white" : "text-black"
          )}>
            {
              isEditing ? "edit recipe" : "create new recipe"
            }
          </p>
        </div>

        <button className={clsx("p-2 rounded-full",
          isDark ? "hover:bg-slate-600 text-white" : "hover:bg-emerald-50 text-black"
        )}
          onClick={() => {
            setCreateRecipe(false);
            clearForm();
          }}
          type="button"
        >
          <XIcon className="sm:inline hidden" size={25}/>
        </button>
      </div>

      {/* hlavni sekce pro inputy */}
      <section className="flex flex-col gap-5 border-b-2 border-b-gray-400 pb-7">

        {/* 1. radek s inputy pro title a category */}
        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="flex flex-col flex-1 gap-2">
            <p className={clsx("uppercase font-bold text-sm",
              isDark ? "text-gray-400" : "text-gray-500",
              form.title.length < 3 && form.title.length > 0? "text-red-500" : isDark
            )}>
              title
            </p>
            <input 
              className={clsx("focus:outline-none outline-1 outline-emerald-600 w-full focus:placeholder:text-transparent focus-within:ring-3 focus-within:ring-emerald-500 rounded-md pl-2 py-3",
                isDark ? "bg-gray-700 text-white" : "bg-gray-100 text-black",
              )}
              type="text"
              placeholder="e.g. Peanut Butter And Jelly"
              onChange={(event) => {
                setForm((items) => ({
                  ...items,
                  title: event.target.value
                }));     
              }}
              value={form.title}
            />
          </div>

          <div className="flex flex-col flex-1 gap-2">
            <p className={clsx("uppercase font-bold text-sm",
              isDark ? "text-gray-400" : "text-gray-500",
              form.category.length < 3 && form.category.length > 0? "text-red-500" : isDark
            )}>
              category
            </p>
            <input 
              className={clsx("focus:outline-none outline-1 outline-emerald-600 w-full focus:placeholder:text-transparent focus-within:ring-3 focus-within:ring-emerald-500 rounded-md pl-2 py-3",
                isDark ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
              )}
              type="text"
              placeholder="e.g. Breakfast, Japanese, Vegetarian..."
              onChange={(event) => {
                setForm((items) => ({
                  ...items,
                  category: event.target.value
                }));
              }}
              value={form.category}
            />
          </div>
        </div>

        {/* 2. radek inputu pro info doby vareni a vyberu barvy */}
        <div className="flex flex-col gap-5 sm:flex-row">
          <div className="flex flex-col flex-1 gap-2">
            <p className={clsx("uppercase font-bold text-sm",
              isDark ? "text-gray-400" : "text-gray-500",
              form.cook_time.length < 2 && form.cook_time.length > 0 ? "text-red-500" : isDark
            )}>
              cook time
            </p>
            <input 
              className={clsx("focus:outline-none outline-1 outline-emerald-600 w-full focus:placeholder:text-transparent focus-within:ring-3 focus-within:ring-emerald-500 rounded-md pl-2 py-3",
                isDark ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
              )}
              type="text"
              placeholder="e.g. 20 mins, 3 hours..."
              onChange={(event) => {
                setForm((items) => ({
                  ...items,
                  cook_time: event.target.value
                }));
              }}
              value={form.cook_time}
            />
          </div>

          <div className="flex flex-col flex-1 gap-4">
            <p className={clsx("uppercase font-bold text-sm",
              isDark ? "text-gray-400" : "text-gray-500"
            )}>
              card header color
            </p>

            <div id="tagColor" className="flex flex-row gap-2">
              {
                tagColor.map((color, index) => {
                  return(
                    <button className={clsx("flex justify-center items-center w-7 h-7 rounded-full",
                      form.header_color === color ? "opacity-70" : "opacity-100"
                    )}
                      style={{backgroundColor: color}}
                      type="button"
                      key={index}
                      onClick={() => {
                        setForm((items) => ({
                          ...items,
                          header_color: color
                        }));
                      }}
                    >
                      {
                        form.header_color === color ? 
                        <Check size={20} className="text-white"/> :
                        ""
                      }
                    </button>
                  );
                })
              }
            </div>
          </div>
        </div>

        {/* input pro jednoduchy popis receptu */}
        <div className="flex flex-col gap-2">
            <p className={clsx("uppercase font-bold text-sm",
              isDark ? "text-gray-400" : "text-gray-500",
              form.short_description.length < 10 && form.short_description.length > 0 ? "text-red-500" : isDark
            )}>
            short description
          </p>

          <textarea className={clsx("focus:outline-none outline-1 outline-emerald-600 bg-gray-100 w-full min-h-6 h-20 focus:placeholder:text-transparent focus-within:ring-3 focus-within:ring-emerald-500 rounded-md pl-2",
            isDark ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
          )}
            name="description" 
            id="description"
            placeholder="Describe the dish by your own words..."
            onChange={(event) => {
              setForm((items) => ({
                ...items,
                short_description: event.target.value
              }));
            }}
            value={form.short_description}
          >

          </textarea>
        </div>

        {/* input pro jednotlive ingredience */}
        <div className="flex flex-col gap-2">
          <p className={clsx("uppercase font-bold text-sm",
              isDark ? "text-gray-400" : "text-gray-500",
              form.ingredients.length < 3 && form.ingredients.length > 0 ? "text-red-500" : isDark
          )}>
            ingredients (1 per line)
          </p>

          <textarea className={clsx("focus:outline-none outline-1 outline-emerald-600 bg-gray-100 w-full min-h-6 h-20 focus:placeholder:text-transparent focus-within:ring-3 focus-within:ring-emerald-500 rounded-md pl-2",
            isDark ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
          )}
            name="ingredients" 
            id="ingredients"
            placeholder="5 liters water &#10;1 tsp salt &#10;5 kg potatoes"
            onChange={(event) => {
              setForm((items) => ({
                ...items,
                ingredients: event.target.value
              }));
            }}
            value={form.ingredients}
          >
          </textarea>
        </div>

        {/* input pro cely postup vareni */}
        <div className="flex flex-col gap-2">
          <p className={clsx("uppercase font-bold text-sm",
            isDark ? "text-gray-400" : "text-gray-500",
            form.instructions.length < 10 && form.instructions.length > 0 ? "text-red-500" : isDark
          )}>
            instructions
          </p>
          
          <textarea className={clsx("focus:outline-none outline-1 outline-emerald-600 bg-gray-100 w-full min-h-6 h-20 focus:placeholder:text-transparent focus-within:ring-3 focus-within:ring-emerald-500 rounded-md pl-2",
            isDark ? "bg-gray-700 text-white" : "bg-gray-100 text-black"
          )}
            name="instructions" 
            id="instructions"
            placeholder="Step by step guide..."
            onChange={(event) => {
              setForm((items) => ({
                ...items,
                instructions: event.target.value
              }))
            }}
            value={form.instructions}
          >
          </textarea>
        </div>
      </section>

      {/* cancel/save tlacitka */}
      <div className="flex flex-row justify-end gap-3">

        {
          isWarning &&
          <p className={clsx("text-sm capitalize self-center mr-auto text-red-600 font-bold",
            isWarning ? "inline" : "hidden"
          )}>
            insufficient number of characters
          </p>
        }

        <button className={clsx("font-bold outline-1 px-5 py-3 rounded-xl capitalize",
          isDark ? "bg-gray-600 text-white outline-gray-400 hover:bg-gray-700" : "bg-white text-black outline-gray-300 hover:bg-emerald-50"
        )}
          type="button"
          onClick={() => {
            setCreateRecipe(false);
            setIsWarning(false);
            clearForm();
          }}
        >
          cancel
        </button>

        <button className="font-bold bg-emerald-600 px-5 py-3 rounded-xl outline-2 outline-emerald-600 capitalize text-white hover:bg-white hover:text-emerald-600"
          type="button"
          onClick={() => {
            if(checkValidation()){
              if(isEditing){
                setRecipes((array) => 
                  array.map((item, index) => (
                    index === editId ? {...form} : item
                  ))
                )
              }
              else{
                setRecipes((array) => [
                  ...array,
                  {
                    ...form
                  }
                ]);
              }
              setCreateRecipe(false);
              setIsWarning(false);
              clearForm();
            }
            else{
              setIsWarning(true);
            }
          }}
        >
          {
            isEditing ? "Edit Recipe" : "Save Recipe"
          }
        </button>
      </div>
    </form>
  );
}