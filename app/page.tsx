"use client"

import { useEffect, useState } from "react";
import clsx from "clsx";
import AddRecipe from "@/components/AddRecipe";
import Header from "@/components/Header";
import MainTitle from "@/components/MainTitle";
import Sorter from "@/components/Sorter";
import Recipe from "@/components/Recipe";
import Footer from "@/components/Footer";
import ShowRecipe from "@/components/ShowRecipe";

export default function Home(){

  const [isDark, setIsDark] = useState(false);

  const [createRecipe, setCreateRecipe] = useState(false);
  const [viewRecipe, setViewRecipe] = useState(false);
  const [recipes, setRecipes] = useState<{
    title: string;
    category: string;
    cook_time: string;
    header_color: string;
    short_description: string;
    ingredients: string;
    instructions: string;
  }[]>([]);

  const [singleRecipe, setSingleRecipe] = useState({
    title: "",
    category: "",
    header_color: "",
    short_description: "",
    ingredients: "",
    instructions: "",
});

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>();

  const [isLoaded, setIsLoaded] = useState(false);

  const [pressedCategory, setPressedCategory] = useState(-1);
  const [categoryContent, setCategoryContent] = useState<string | null>("ALL");

  const [searchValue, setSearchValue] = useState('');

  const [currentPage, setCurrentPage] = useState(0);

  function ingredientList(){
    const splitArray = singleRecipe.ingredients.split("\n");
    return splitArray;
  }

  function renderRecipe(){
    let filteredRecipes;

    if(categoryContent === "ALL"){
      filteredRecipes = recipes && recipes.filter((item) => {
        return item.title.toLowerCase().includes(searchValue.toLowerCase());
      });
    }
    else{
      filteredRecipes = recipes.filter((item) => {
        const matchCategory = item.category.toUpperCase() === categoryContent;
        const matchSearchValue = item.title.toLowerCase().includes(searchValue.toLowerCase());

        return matchCategory && matchSearchValue;
      })
    }

    const splicedFilteredArray = filteredRecipes.slice(currentPage * 6, (currentPage + 1) * 6);
    console.log(splicedFilteredArray);

    return splicedFilteredArray.map((item, index) => {
      return(
        <Recipe
          isDark={isDark}
          setViewRecipe={setViewRecipe}
          key={index}
          item={item}
          setRecipes={setRecipes}
          recipes={recipes}
          recipeIndex={index}
          setSingleRecipe={setSingleRecipe}
          ingredientList={ingredientList}
          setCreateRecipe={setCreateRecipe}
          setIsEditing={setIsEditing}
          setEditId={setEditId}
        />
      );
    })

  }

  useEffect(() => {
    if(isLoaded){
      localStorage.setItem('recipes', JSON.stringify(recipes));
    }
  }, [recipes, isLoaded]);

  useEffect(() => {
    const storage = localStorage.getItem('recipes');

    if(storage){
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setRecipes(JSON.parse(storage));
    }

    setIsLoaded(true);

  }, [])

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
        setRecipes={setRecipes}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        editId={editId}
      />

      {/* ukaze samotny recept */}
      <ShowRecipe
        isDark={isDark}
        setViewRecipe={setViewRecipe}
        viewRecipe={viewRecipe}
        singleRecipe={singleRecipe}
        ingredientList={ingredientList}
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
          recipes={recipes}
          setPressedCategory={setPressedCategory}
          pressedCategory={pressedCategory}
          setCategoryContent={setCategoryContent}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        {/* mrizka receptu */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 sm:grid-cols-2">

          {
            renderRecipe()
          }

        </div>

        {/* footer pro navigaci mezi recepty (zatim nefunkcni) */}
        <Footer
          isDark={isDark}
          recipes={recipes}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />

      </main>

      {/* odsadi spodek */}
      <div className="h-5"></div>

    </div>
  );
}