/*
    Food Recipe Website - JavaScript
    Author: Sam Orth
    Description: Interactive functionality and API integration for recipe search
    GitHub: https://github.com/Theesamkos/Food-Recipe-App
*/

const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('searchButton');
const mealList = document.getElementById('mealList');
const modalContainer = document.getElementById('modal-container');
const mealDetailsContent = document.getElementById('meal-details-content');
const recipeCloseBtn = document.getElementById('recipeCloseBtn');

// Event listeners
searchButton.addEventListener('click', async () => {
    const ingredient = searchInput.value.trim();
    if (ingredient) {
        const meals = await getMealsByIngredient(ingredient);
        displayMeals(meals);
    }
});

mealList.addEventListener('click', async (e) => {
    const card = e.target.closest('.meal-item');
    if(card){
        const mealID = card.dataset.mealId;
        const meal = await getMealDetails(mealID);
        if(meal){
            showMealDetailsPopup(meal);
        }
    }
});

recipeCloseBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});

// Function to fetch meals by ingredient
async function getMealsByIngredient(ingredient){
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    }catch(error){
        console.error('Error fetching meals:', error);
        return [];
    }
}

// Function to fetch meal details by ID
async function getMealDetails(mealID){
    try{
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
        const data = await response.json();
        return data.meals[0];
    }catch(error){
        console.error('Error fetching meal details:', error);
        return null;
    }
}

// Function to display meals in the list 
function displayMeals(meals){
    mealList.innerHTML = '';
    if(meals){
        meals.forEach(meal => {
            const mealItem = document.createElement('div');
            mealItem.classList.add('meal-item');
            mealItem.dataset.mealId = meal.idMeal;
            
            mealItem.innerHTML = `
                <div class="meal-img">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                </div>
                <div class="meal-name">
                    <h3>${meal.strMeal}</h3>
                    <a href="#" class="recipe-btn">Get Recipe</a>
                </div>
            `;
            mealList.appendChild(mealItem);
        });
    } else {
        mealList.innerHTML = '<p>No meals found. Try a different ingredient.</p>';
    }
}

// Function to show meal details popup
function showMealDetailsPopup(meal){
    mealDetailsContent.innerHTML = `
        <h2 class="recipe-title">${meal.strMeal}</h2>
        <p class="recipe-category">${meal.strCategory}</p>
        <div class="recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class="recipe-meal-img">
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
        </div>
        <div class="recipe-link">
            <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
        </div>
    `;
    modalContainer.style.display = 'block';
}

// Function to close recipe modal
function closeRecipeModal(){
    modalContainer.style.display = 'none';
}

// Function to perform search
async function performSearch(){
    const ingredient = searchInput.value.trim();
    if(ingredient){
        const meals = await getMealsByIngredient(ingredient);
        displayMeals(meals);
    }
}

// Additional event listeners
searchInput.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
        performSearch();
    }
});

// Perform a chicken search on page load
window.addEventListener('load', () => {
    searchInput.value = 'chicken';
    performSearch();
});
