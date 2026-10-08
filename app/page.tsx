"use client"

import { useState } from "react";
import clsx from "clsx";
import AddRecipe from "@/components/AddRecipe";
import Header from "@/components/Header";
import MainTitle from "@/components/MainTitle";
import Sorter from "@/components/Sorter";
import Recipe from "@/components/Recipe";
import Footer from "@/components/Footer";
import ShowRecipe from "@/components/ShowRecipe";
import { recipeDetails } from "@/lib/recipeDetails";

export default function Home(){

  const [isDark, setIsDark] = useState(false);
  const [createRecipe, setCreateRecipe] = useState(false);
  const [viewRecipe, setViewRecipe] = useState(false);
  const [form, setForm] = useState({
    title: "",
    category: "",
    cook_time: "",
    short_description: "",
    ingredients: "",
    instructions: ""
  });

  return(
    <div className={clsx("flex flex-col gap-10 min-h-dvh transition",
      isDark ? "bg-gray-800" : "bg-green-50"
    )}>

      {/* vytvori blur effekt pri pridani nebo prohlizeni receptu */}
      {createRecipe || viewRecipe ? <div className="z-15 fixed inset-0 backdrop-blur-xs bg-black/50"></div> : ""}
      
      {/* formular k vyplneni info o receptu */}
      <AddRecipe
        createRecipe={createRecipe}
        setCreateRecipe={setCreateRecipe}
        isDark={isDark}
        form={form}
        setForm={setForm}
      />

      {/* ukaze samotny recept */}
      <ShowRecipe
        isDark={isDark}
        setViewRecipe={setViewRecipe}
        viewRecipe={viewRecipe}
      />

      {/* header */}
      <Header
        isDark={isDark}
        setIsDark={setIsDark}
      />

      {/* hlavni cast stranky */}
      <main className="flex flex-col gap-10 mt-30 mx-5 2xl:mx-60 xl:mx-30 md:mx-10 back">
        
        {/* main title stranky */}
        <MainTitle
          isDark={isDark}
          setCreateRecipe={setCreateRecipe}
        />

        {/* sorter na vyhledani receptu */}
        <Sorter
          isDark={isDark}
        />

        {/* mrizka receptu */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 sm:grid-cols-2">

          {
            recipeDetails.map((item) => {
              return(
                <Recipe
                  isDark={isDark}
                  setViewRecipe={setViewRecipe}
                  key={item.title}
                  item={item}
                />
              );
            })
          }

        </div>

        {/* footer pro navigaci mezi recepty (zatim nefunkcni) */}
        <Footer
          isDark={isDark}
        />

      </main>

      {/* odsadi spodek */}
      <div className="h-5"></div>

    </div>
  );
}