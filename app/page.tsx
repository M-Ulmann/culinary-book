"use client"

import { Trash, Pencil, Clock, MoonStar, Sun, Search, Tag, ArrowLeft, ArrowRight, UtensilsIcon, XIcon  } from "lucide-react";
import Utensils from '@/public/utensils.png'
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export default function Home(){

  const [isDark, setIsDark] = useState(false);
  const [createRecipe, setCreateRecipe] = useState(false);

  return(
    <div className={clsx("flex flex-col gap-10 min-h-dvh transition",
      isDark ? "bg-gray-800" : "bg-green-50"
    )}>

      <form className={clsx("flex flex-col w-150 z-20 backdrop-blur-2xl self-center fixed bg-amber-500 top-60 p-10",
        createRecipe ? "flex" : "hidden"
      )}>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            <UtensilsIcon/>
            <p className="font-bold text-2xl capitalize">
              create new recipe
            </p>
          </div>

          <button className=""
            onClick={() => {setCreateRecipe(false)}}
            type="button"
          >
            <XIcon/>
          </button>
        </div>

        <section className="flex flex-col">
          <div className="flex flex-row gap-5">
            <div className="flex flex-col flex-1">
              <p className="uppercase">
                title
              </p>
              <input type="text" />
            </div>

            <div className="flex flex-col flex-1">
              <p className="uppercase">
                category
              </p>
              <input type="text" />
            </div>
          </div>

          <div className="flex flex-row gap-5">
            <div className="flex flex-col flex-1">
              <p className="uppercase">
                cook time
              </p>
              <input type="text" />
            </div>

            <div className="flex flex-col flex-1">
              <p className="uppercase">
                card header color
              </p>

              <div className="flex flex-row gap-5">

                <button type="button">
                  r
                </button>

                <button type="button">
                  g
                </button>

                <button type="button">
                  b
                </button>

              </div>

            </div>
          </div>

          <div className="flex flex-col">
            <p className="uppercase">
              short description
            </p>

            <textarea name="description" id="description">

            </textarea>
          </div>

          <div className="flex flex-col">
            <p className="uppercase">
              ingredients (1 per line)
            </p>
            <textarea name="ingredients" id="ingredients">
              
            </textarea>
          </div>

          <div className="flex flex-col uppercase">
            <p className="uppercase">
              instructions
            </p>
            <textarea name="instructions" id="instructions">
              
            </textarea>
          </div>
        </section>

        <div className="flex flex-row justify-end gap-5">
          <button
            type="button"
            onClick={() => {setCreateRecipe(false)}}
          >
            cancel
          </button>

          <button
            type="button"
          >
            save recipe
          </button>
        </div>
      </form>

      <header className={clsx("flex flex-row items-center justify-between h-20 border-b px-5 fixed w-full backdrop-blur-lg z-10 2xl:px-60 xl:px-30 md:px-10",
        isDark ? "bg-gray-700/80" : "bg-white/80 border-b-green-200"
      )}>
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

      <main className="flex flex-col gap-10 mt-30 mx-5 2xl:mx-60 xl:mx-30 md:mx-10">
        
        <div className="flex flex-col gap-10 lg:flex-row">
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

        <div className={clsx("flex flex-col gap-5 justify-between py-5 px-5 rounded-xl outline-2 lg:flex-row lg:gap-2",
          isDark ? "bg-gray-700 outline-gray-600" : "bg-white outline-gray-200"
        )}>
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


          <div className={clsx("flex flex-row justify-center gap-3 flex-wrap",
            isDark ? "text-white" : "text-black"
          )}>
            <button className={clsx("font-bold px-3 py-1 rounded-xl text-sm transition capitalize",
              isDark ? "bg-slate-900 hover:bg-slate-800" : "bg-gray-100 hover:bg-gray-200"
            )}>
              all
            </button>

            <button className={clsx("font-bold px-3 py-1 rounded-xl text-sm transition capitalize",
              isDark ? "bg-slate-900 hover:bg-slate-800" : "bg-gray-100 hover:bg-gray-200"
            )}>
              italian
            </button>

            <button className={clsx("font-bold px-3 py-1 rounded-xl text-sm transition capitalize",
              isDark ? "bg-slate-900 hover:bg-slate-800" : "bg-gray-100 hover:bg-gray-200"
            )}>
              breakfast
            </button>

            <button className={clsx("font-bold px-3 py-1 rounded-xl text-sm transition capitalize",
              isDark ? "bg-slate-900 hover:bg-slate-800" : "bg-gray-100 hover:bg-gray-200"
            )}>
              asian
            </button>

            <button className={clsx("font-bold px-3 py-1 rounded-xl text-sm transition capitalize",
              isDark ? "bg-slate-900 hover:bg-slate-800" : "bg-gray-100 hover:bg-gray-200"
            )}>
              japan
            </button>

            <button className={clsx("font-bold px-3 py-1 rounded-xl text-sm transition capitalize",
              isDark ? "bg-slate-900 hover:bg-slate-800" : "bg-gray-100 hover:bg-gray-200"
            )}>
              mexico
            </button>

          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 sm:grid-cols-2">

          <div className={clsx("rounded-2xl outline-4 outline-red-500 hover:shadow-2xl hover:-translate-y-1.5 transition",
            isDark ? "bg-zinc-900" : "bg-white"
          )}>
            <div className="flex flex-row justify-between items-start h-20 bg-blue-600 rounded-t-2xl px-5 py-3">
              <div className="flex flex-row gap-1 items-center bg-black/30 text-white px-3 py-1 rounded-md font-bold uppercase text-sm tracking-wider">
                <Tag size={15}/>
                <p>italian</p>
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

            <section className="flex flex-col p-7 gap-3">
      
              <div className="flex flex-col gap-2 pb-3 border-b border-b-gray-300 ">
                <h3 className={clsx("text-xl font-extrabold capitalize",
                  isDark ? "text-white" : "text-black"
                )}>
                  classic italian pasta carbonara
                </h3>
                <p className={clsx("text-sm",
                  isDark ? "text-gray-400" : "text-gray-500"
                )}>
                  A traditional Roman pasta dish made with eggs, hard cheese, cured pork, and black pepper.
                </p>
              </div>

              <div className="flex flex-row justify-between">
                <div className={clsx("flex flex-row gap-1 text-sm items-center font-bold",
                  isDark ? "text-emerald-400" : "text-emerald-600"
                )}>
                  <Clock size={20}/>
                  <p>25 mins</p>
                </div>

                <p className="text-gray-400 text-sm font-bold">
                  5 ingredients
                </p>
              </div>

              <button className="bg-black py-3 text-white font-bold uppercase tracking-wider rounded-xl text-sm hover:bg-emerald-600 transition">
                view details
              </button>
            </section>

            
          </div>

          <div className={clsx("rounded-2xl outline-4 outline-red-500 hover:shadow-2xl hover:-translate-y-1.5 transition",
            isDark ? "bg-zinc-900" : "bg-white"
          )}>
            <div className="flex flex-row justify-between items-start h-20 bg-blue-600 rounded-t-2xl px-5 py-3">
              <div className="flex flex-row gap-1 items-center bg-black/30 text-white px-3 py-1 rounded-md font-bold uppercase text-sm tracking-wider">
                <Tag size={15}/>
                <p>italian</p>
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

            <section className="flex flex-col p-7 gap-3">
      
              <div className="flex flex-col gap-2 pb-3 border-b border-b-gray-300 ">
                <h3 className={clsx("text-xl font-extrabold capitalize",
                  isDark ? "text-white" : "text-black"
                )}>
                  classic italian pasta carbonara
                </h3>
                <p className={clsx("text-sm",
                  isDark ? "text-gray-400" : "text-gray-500"
                )}>
                  A traditional Roman pasta dish made with eggs, hard cheese, cured pork, and black pepper.
                </p>
              </div>

              <div className="flex flex-row justify-between">
                <div className={clsx("flex flex-row gap-1 text-sm items-center font-bold",
                  isDark ? "text-emerald-400" : "text-emerald-600"
                )}>
                  <Clock size={20}/>
                  <p>25 mins</p>
                </div>

                <p className="text-gray-400 text-sm font-bold">
                  5 ingredients
                </p>
              </div>

              <button className="bg-black py-3 text-white font-bold uppercase tracking-wider rounded-xl text-sm hover:bg-emerald-600 transition">
                view details
              </button>
            </section>

            
          </div>

          <div className={clsx("rounded-2xl outline-4 outline-red-500 hover:shadow-2xl hover:-translate-y-1.5 transition",
            isDark ? "bg-zinc-900" : "bg-white"
          )}>
            <div className="flex flex-row justify-between items-start h-20 bg-blue-600 rounded-t-2xl px-5 py-3">
              <div className="flex flex-row gap-1 items-center bg-black/30 text-white px-3 py-1 rounded-md font-bold uppercase text-sm tracking-wider">
                <Tag size={15}/>
                <p>italian</p>
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

            <section className="flex flex-col p-7 gap-3">
      
              <div className="flex flex-col gap-2 pb-3 border-b border-b-gray-300 ">
                <h3 className={clsx("text-xl font-extrabold capitalize",
                  isDark ? "text-white" : "text-black"
                )}>
                  classic italian pasta carbonara
                </h3>
                <p className={clsx("text-sm",
                  isDark ? "text-gray-400" : "text-gray-500"
                )}>
                  A traditional Roman pasta dish made with eggs, hard cheese, cured pork, and black pepper.
                </p>
              </div>

              <div className="flex flex-row justify-between">
                <div className={clsx("flex flex-row gap-1 text-sm items-center font-bold",
                  isDark ? "text-emerald-400" : "text-emerald-600"
                )}>
                  <Clock size={20}/>
                  <p>25 mins</p>
                </div>

                <p className="text-gray-400 text-sm font-bold">
                  5 ingredients
                </p>
              </div>

              <button className="bg-black py-3 text-white font-bold uppercase tracking-wider rounded-xl text-sm hover:bg-emerald-600 transition">
                view details
              </button>
            </section>

            
          </div>

          <div className={clsx("rounded-2xl outline-4 outline-red-500 hover:shadow-2xl hover:-translate-y-1.5 transition",
            isDark ? "bg-zinc-900" : "bg-white"
          )}>
            <div className="flex flex-row justify-between items-start h-20 bg-blue-600 rounded-t-2xl px-5 py-3">
              <div className="flex flex-row gap-1 items-center bg-black/30 text-white px-3 py-1 rounded-md font-bold uppercase text-sm tracking-wider">
                <Tag size={15}/>
                <p>italian</p>
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

            <section className="flex flex-col p-7 gap-3">
      
              <div className="flex flex-col gap-2 pb-3 border-b border-b-gray-300 ">
                <h3 className={clsx("text-xl font-extrabold capitalize",
                  isDark ? "text-white" : "text-black"
                )}>
                  classic italian pasta carbonara
                </h3>
                <p className={clsx("text-sm",
                  isDark ? "text-gray-400" : "text-gray-500"
                )}>
                  A traditional Roman pasta dish made with eggs, hard cheese, cured pork, and black pepper.
                </p>
              </div>

              <div className="flex flex-row justify-between">
                <div className={clsx("flex flex-row gap-1 text-sm items-center font-bold",
                  isDark ? "text-emerald-400" : "text-emerald-600"
                )}>
                  <Clock size={20}/>
                  <p>25 mins</p>
                </div>

                <p className="text-gray-400 text-sm font-bold">
                  5 ingredients
                </p>
              </div>

              <button className="bg-black py-3 text-white font-bold uppercase tracking-wider rounded-xl text-sm hover:bg-emerald-600 transition">
                view details
              </button>
            </section>

            
          </div>

        </div>

        <footer className="flex flex-row gap-3 self-center text-2xl">
          <button className={clsx("p-3 rounded-xl hover:bg-emerald-500 hover:text-white transition",
            isDark ? "text-white" : "text-black"
          )}>
            <ArrowLeft/>
          </button>

          <button className={clsx(" py-2 px-4 rounded-xl  transition",
            isDark ? "bg-gray-700 hover:bg-emerald-800 text-white" : "bg-gray-200 hover:bg-emerald-100 text-black"
          )}>
            1
          </button>

          <button className={clsx(" py-2 px-4 rounded-xl  transition",
            isDark ? "bg-gray-700 hover:bg-emerald-800 text-white" : "bg-gray-200 hover:bg-emerald-100 text-black"
          )}>
            2
          </button>

          <button className={clsx("p-3 rounded-xl hover:bg-emerald-500 hover:text-white transition",
            isDark ? "text-white" : "text-black"
          )}>
            <ArrowRight/>
          </button>
        </footer>

      </main>

    <div className="h-5"></div>

    </div>
  );
}