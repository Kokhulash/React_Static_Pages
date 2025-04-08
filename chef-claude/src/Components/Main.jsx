import React from "react";
import Recipe from "./ClaudeRecipe.jsx";
import IngredientList from "./IngredientList.jsx";
import {getRecipeFromMistral} from "../ai.js";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState("");

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    name="ingredient"
                    placeholder="e.g. oregano"
                    aria-label={"Add ingredient"}
                />
                <button>add ingredient</button>
            </form>


            {ingredients.length > 0 &&
                <IngredientList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />}

            {recipe && <Recipe recipe={recipe}/>}
        </main>
    )
}