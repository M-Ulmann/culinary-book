export default function Home(){
  return(
    <div className="bg-green-50 flex flex-col gap-10 min-h-dvh">
      <header className="flex flex-row items-center justify-between h-20 bg-violet-100 border-b border-b-violet-300 px-80">
        <div className="flex flex-row items-center gap-5">

          <p>IMG</p>

          <div>
            <p>culinary</p>
            <p>recipe book</p>
          </div>
        </div>

        <button className="flex flex-row gap-2">
          <p>IMG</p>

          dark mode
        </button>
      </header>

      <main className="flex flex-col gap-10 mx-80">
        
        <div className="flex flex-row gap-10">
          <div className="flex flex-row justify-center px-20 py-12 bg-blue-400 flex-6/8 rounded-3xl">
            <div className="flex flex-col items-center bg-green-400 px-20 py-5 rounded-xl">
              <h1>culinary book</h1>
              <p>your personal homemade recipe collection</p>
            </div>
          </div>

          <button className="bg-amber-400 flex-2/8 rounded-3xl">
            <p>IMG</p>
            <p>add a recipe</p>
          </button>
        </div>

        <div className="flex flex-row justify-between bg-gray-400 py-5 px-5 rounded-xl">
          <div className="flex flex-row gap-5 bg-amber-300 p-2 rounded-lg">
            <p>lupa</p>
            <input type="text" />
          </div>


          <div className="flex flex-row gap-5">
            <button>
              all
            </button>

            <button>
              italian
            </button>

            <button>
              breakfast
            </button>

            <button>
              asian
            </button>

            <button>
              salad
            </button>

            <button>
              snacks
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-10 ">

          <div className="rounded-2xl outline-4 outline-red-500">
            <div className="flex flex-row justify-between h-20 bg-blue-600 rounded-t-2xl px-5 py-3">
              <div className="flex flex-row gap-2">
                <p>IMG</p>
                <p>italian</p>
              </div>

              <div className="flex flex-row items-start gap-5">
                <button>
                  <p>IMG</p>
                </button>

                <button>
                  <p>IMG</p>
                </button>
              </div>
            </div>

            <section className="flex flex-col p-7 gap-3">
      
              <div className="flex flex-col gap-2 pb-3 border-b border-b-gray-300 ">
                <h3 className="text-xl font-extrabold capitalize">
                  classic italian pasta carbonara
                </h3>
                <p>
                  A traditional Roman pasta dish made with eggs, hard cheese, cured pork, and black pepper.
                </p>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-3">
                  <p>IMG</p>
                  <p>25 mins</p>
                </div>

                <p>
                  5 ingredients
                </p>
              </div>

              <button className="bg-purple-400">
                view details
              </button>
            </section>

            
          </div>

          <div className="rounded-2xl outline-4 outline-red-500">
            <div className="flex flex-row justify-between h-20 bg-blue-600 rounded-t-2xl px-5 py-3">
              <div className="flex flex-row gap-2">
                <p>IMG</p>
                <p>italian</p>
              </div>

              <div className="flex flex-row items-start gap-5">
                <button>
                  <p>IMG</p>
                </button>

                <button>
                  <p>IMG</p>
                </button>
              </div>
            </div>

            <section className="flex flex-col p-7 gap-3">
      
              <div className="flex flex-col gap-2 pb-3 border-b border-b-gray-300 ">
                <h3 className="text-xl font-extrabold capitalize">
                  classic italian pasta carbonara
                </h3>
                <p>
                  A traditional Roman pasta dish made with eggs, hard cheese, cured pork, and black pepper.
                </p>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-3">
                  <p>IMG</p>
                  <p>25 mins</p>
                </div>

                <p>
                  5 ingredients
                </p>
              </div>

              <button className="bg-purple-400">
                view details
              </button>
            </section>

            
          </div>

          <div className="rounded-2xl outline-4 outline-red-500">
            <div className="flex flex-row justify-between h-20 bg-blue-600 rounded-t-2xl px-5 py-3">
              <div className="flex flex-row gap-2">
                <p>IMG</p>
                <p>italian</p>
              </div>

              <div className="flex flex-row items-start gap-5">
                <button>
                  <p>IMG</p>
                </button>

                <button>
                  <p>IMG</p>
                </button>
              </div>
            </div>

            <section className="flex flex-col p-7 gap-3">
      
              <div className="flex flex-col gap-2 pb-3 border-b border-b-gray-300 ">
                <h3 className="text-xl font-extrabold capitalize">
                  classic italian pasta carbonara
                </h3>
                <p>
                  A traditional Roman pasta dish made with eggs, hard cheese, cured pork, and black pepper.
                </p>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-3">
                  <p>IMG</p>
                  <p>25 mins</p>
                </div>

                <p>
                  5 ingredients
                </p>
              </div>

              <button className="bg-purple-400">
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