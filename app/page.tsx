import { Trash, Pencil, Clock, MoonStar, Sun, Search, Tag } from "lucide-react";
import Utensils from '@/public/utensils.png'
import Image from "next/image";

export default function Home(){
  return(
    <div className="bg-green-50 flex flex-col gap-10 min-h-dvh">
      <header className="flex flex-row items-center justify-between h-20 bg-white/80 border-b border-b-green-200 px-80 fixed w-full backdrop-blur-lg">
        <div className="flex flex-row items-center gap-5">

          <Image 
            src={Utensils}
            width={50}
            height={50}
            alt="utensils"
          />

          <div>
            <p className="text-3xl font-extrabold bg-linear-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent uppercase">
              culinary
            </p>
            <p className="text-lg text-gray-400 tracking-widest">
              recipe book
            </p>
          </div>
        </div>

        <button className="flex flex-row gap-2 px-3 py-2 rounded-xl outline-1 outline-gray-300 shadow-lg capitalize font-bold tracking-wide text-gray-600 text-sm hover:bg-blue-100 transition">
          <MoonStar />

          dark mode
        </button>
      </header>

      <main className="flex flex-col gap-10 mx-80 mt-30">
        
        <div className="flex flex-row gap-10">
          <div className="flex flex-row justify-center px-20 py-12 bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/kitchen.jpg')] bg-size-[100%_350%] bg-position-[0px_300px] flex-6/8 rounded-3xl outline-5 outline-emerald-500">
            <div className="flex flex-col items-center outline-5 outline-emerald-500 px-20 py-5 rounded-xl bg-black/80">
              <h1 className="text-4xl font-extrabold uppercase tracking-widest text-white mb-2">
                culinary book
              </h1>
              <p className="text-green-300 capitalize">
                your personal homemade recipe collection
              </p>
            </div>
          </div>

          <button className="flex-2/8 flex flex-col items-center justify-center gap-5 rounded-3xl outline-5 outline-emerald-500/70 outline-dashed hover:outline-emerald-500 hover:bg-green-100 group">
            <p className="text-6xl bg-emerald-500 px-4 rounded-xl text-white group-hover:scale-110 transition">
              +
            </p>
            <p className="uppercase text-xl font-extrabold tracking-wider text-emerald-700">
              add a recipe
            </p>
          </button>
        </div>

        <div className="flex flex-row justify-between bg-white py-5 px-5 rounded-xl outline-2 outline-gray-200">
          <div className="flex flex-row gap-2 bg-gray-100 p-2 rounded-lg group-focus:bg-amber-700 outline-1 outline-gray-300 focus-within:ring-3 focus-within:ring-emerald-500">
            <Search/>
            <input 
              className="outline-none w-70 focus:placeholder:text-transparent "
              type="text"
              placeholder="Search for recipes..."
            />
          </div>


          <div className="flex flex-row gap-3">
            <button className="font-bold bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-xl text-sm transition capitalize">
              all
            </button>

            <button className="font-bold bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-xl text-sm transition capitalize">
              italian
            </button>

            <button className="font-bold bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-xl text-sm transition capitalize">
              breakfast
            </button>

            <button className="font-bold bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-xl text-sm transition capitalize">
              asian
            </button>

            <button className="font-bold bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-xl text-sm transition capitalize">
              japan
            </button>

            <button className="font-bold bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-xl text-sm transition capitalize">
              mexico
            </button>

          </div>
        </div>

        <div className="grid grid-cols-3 gap-10 ">

          <div className="rounded-2xl outline-4 outline-red-500 hover:shadow-2xl hover:-translate-y-1.5 transition">
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
                <h3 className="text-xl font-extrabold capitalize">
                  classic italian pasta carbonara
                </h3>
                <p className="text-gray-500 text-sm">
                  A traditional Roman pasta dish made with eggs, hard cheese, cured pork, and black pepper.
                </p>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1 text-emerald-600 text-sm items-center font-bold">
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

          <div className="rounded-2xl outline-4 outline-red-500 hover:shadow-2xl hover:-translate-y-1.5 transition">
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
                <h3 className="text-xl font-extrabold capitalize">
                  classic italian pasta carbonara
                </h3>
                <p className="text-gray-500 text-sm">
                  A traditional Roman pasta dish made with eggs, hard cheese, cured pork, and black pepper.
                </p>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1 text-emerald-600 text-sm items-center font-bold">
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

          <div className="rounded-2xl outline-4 outline-red-500 hover:shadow-2xl hover:-translate-y-1.5 transition">
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
                <h3 className="text-xl font-extrabold capitalize">
                  classic italian pasta carbonara
                </h3>
                <p className="text-gray-500 text-sm">
                  A traditional Roman pasta dish made with eggs, hard cheese, cured pork, and black pepper.
                </p>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1 text-emerald-600 text-sm items-center font-bold">
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

          <div className="rounded-2xl outline-4 outline-red-500 hover:shadow-2xl hover:-translate-y-1.5 transition">
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
                <h3 className="text-xl font-extrabold capitalize">
                  classic italian pasta carbonara
                </h3>
                <p className="text-gray-500 text-sm">
                  A traditional Roman pasta dish made with eggs, hard cheese, cured pork, and black pepper.
                </p>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-1 text-emerald-600 text-sm items-center font-bold">
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

        <footer className="flex flex-row gap-5 self-center">
          <button>
            <p>vlevo</p>
          </button>

          <button>
            <p>1</p>
          </button>

          <button>
            <p>2</p>
          </button>

          <button>
            <p>vpravo</p>
          </button>
        </footer>

      </main>

    </div>
  );
}