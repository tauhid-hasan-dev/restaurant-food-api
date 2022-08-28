console.log('this');


const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = (meals) => {
    meals.forEach(meal => {
        console.log(meal);
        const mealHolder = document.getElementById('meal-holder');
        const mealCard = document.createElement('div')
        mealCard.classList.add('col-4')
        mealCard.innerHTML =
            ` <div class="card h-100 ">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <p class="card-title fs-5 fw-bolder">${meal.strMeal}</p>
                        <p class="card-text fw-semibold ">Catagory: ${meal.strCategory}</p>
                        <p class="card-text fw-regular ">Country: ${meal.strArea}</p>
                        <div class="d-grid gap-2 ">
                            <button class="btn btn-primary btn-sm fw-semibold btn-select-player"
                                type="button" style="--bs-btn-padding-y: .6rem;">Order now</button>
                        </div>
                    </div>
                </div>
            `
        mealHolder.appendChild(mealCard);
    });
}


const mealSearch = ()

loadMeals('chicken');

