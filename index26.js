// This function is a hummus recipe that takes a factor as an argument and multiplies the ingredients by that factor, then outputs the ingredients required to the console
function hummus(factor) {
  function listIngredients(amount, unit, name) {
    const ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      console.log(`${ingredientAmount} ${unit}s ${name}`);
    } else {
      console.log(`${ingredientAmount} ${unit} ${name}`);
    }
  }
  listIngredients(1, "can", "chickpeas");
  listIngredients(0.25, "cup", "tahini");
  listIngredients(0.25, "cup", "lemon juice");
  listIngredients(1, "clove", "garlic");
  listIngredients(2, "tablespoon", "olive oil");
  listIngredients(0.5, "teaspoon", "cumin");
}

hummus(3);
