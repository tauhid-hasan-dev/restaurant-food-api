console.log('this');


const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = (meals) => {
    const mealHolder = document.getElementById('meal-holder');
    mealHolder.innerHTML = '';

    meals.forEach(meal => {
        console.log(meal);
        const mealCard = document.createElement('div')
        mealCard.classList.add('col-4')
        mealCard.innerHTML =
            ` <div class="card h-100 " onclick="loadDetails(${meal.idMeal})">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <p class="card-title fs-5 fw-bolder">${meal.strMeal}</p>
                        <p class="card-text fw-semibold ">Catagory: ${meal.strCategory}</p>
                        <p class="card-text fw-regular ">Country: ${meal.strArea}</p>
                        <div class="d-grid gap-2 ">
                            <button class="btn btn-primary btn-sm fw-semibold btn-select-player"
                                type="button" style="--bs-btn-padding-y: .6rem;" onclick="loadMealForCart(${meal.idMeal})">Add to cart</button>
                        </div>
                    </div>
                </div>
            `
        mealHolder.appendChild(mealCard);
    });
}

const mealSearch = () => {
    const searchInputElem = document.getElementById('meal-input');
    console.log(searchInputElem);
    const inputValue = searchInputElem.value;
    loadMeals(inputValue);
    searchInputElem.value = '';
}

const loadDetails = (id) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = (details) => {
    const detailsHolder = document.getElementById('information-holder');
    detailsHolder.innerHTML = `
    <div class="card ">
        <img src="${details.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body text-center">
            <p class="card-title fs-5 fw-bolder">${details.strMeal}</p>
            <p class="card-text fw-semibold ">Catagory: ${details.strCategory}</p>
            <p class="card-text fw-regular "><span class= "fw-bold">Country: </span>${details.strArea}</p>
            <p class="card-text fw-regular "><span class= "fw-bold">How this is made for you: </span> ${details.strInstructions}</p>
            
        </div>
    </div>
    `
}

const loadMealForCart = (cartdetails) => {
    console.log(cartdetails);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${cartdetails}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetailsforCart(data.meals[0]))
}

let count = 0;
const displayMealDetailsforCart = (mealObj) => {
    console.log(mealObj);
    count++
    const cartContainer = document.getElementById('cart-container');
    const childDiv = document.createElement('tr')
    childDiv.innerHTML = `
            <tr>
                <th scope="row">${count}</th>
                <td>${mealObj.strMeal}</td>
                <td><button class="btn btn-primary btn-sm ">Order Now</button></td>
            </tr>
    `
    cartContainer.appendChild(childDiv);
}

loadMeals('');

