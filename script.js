let singleFood = document.querySelectorAll(".single-food")

singleFood.forEach(food => {
  food.addEventListener("mouseenter", () => {
    food.style.backgroundColor = "white";
  });

  food.addEventListener("mouseleave", () => {
    food.style.backgroundColor = "transparent";
  });
});
