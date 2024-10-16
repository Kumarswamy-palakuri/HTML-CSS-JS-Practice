const get_meal_btn = document.getElementById('get_meal');
const meal_container = document.getElementById('meal');

get_meal_btn.addEventListener('click', () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
		createMeal(res.meals[0]);
	});
});

const createMeal = (meal) => {
	const ingredients = [];
	// Get all ingredients from the object. Up to 20
	for(let i=1; i<=20; i++) {
		if(meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		} else {
			// Stop if no more ingredients
			break;
		}
	}
	
	const newInnerHTML = `
		<div class="meal-row">
    <div class="meal-image-container">
        <img src="${meal.strMealThumb}" alt="Meal Image">
        ${meal.strCategory ? `<p class="meal-category"><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
        ${meal.strArea ? `<p class="meal-area"><strong>Area:</strong> ${meal.strArea}</p>` : ''}
        ${meal.strTags ? `<p class="meal-tags"><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
        <h5 class="font-weight">Ingredients:</h5>
        <ul class="meal-ingredients">
            ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
    </div>
    <div class="meal-details-container">
        <h4 class="meal-title font-weight">${meal.strMeal}</h4>
        <p class="meal-instructions">${meal.strInstructions}</p>
    </div>
</div>
${meal.strYoutube ? `
<div class="meal-video-row">
    <h5 class="font-weight">Video Recipe</h5>
    <div class="video-wrapper">
        <iframe width="420" height="315"
            src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
        </iframe>
    </div>
</div>` : ''}
	`;
	
	meal_container.innerHTML = newInnerHTML;
}








