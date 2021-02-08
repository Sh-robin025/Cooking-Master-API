
// search button onclick and through different conditions


const searchFor = () => {
    const input = document.getElementById("input").value;
    if (input.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
            .then(res => res.json())
            .then(data => {
                document.getElementById("search-for").innerHTML =
                    `<h2>Search result for "${input}" :</h2>`;
                if (data.meals === null) {
                    document.getElementById("search-for").innerHTML =
                        `<h1>There are no search result for "${input}",<br>Try again.</h1>`
                    document.getElementById("food-item").innerHTML = "";
                } else {
                    document.getElementById("food-item").innerHTML = data.meals.map((meal) => `
                        <div class="item-card" onclick = "mealDetails('${meal.idMeal}')">
                            <img src="${meal.strMealThumb}">
                            <h3>${meal.strMeal}</h3>
                            <h6>${meal.strCategory}</h6>
                            <button class="btn btn-outline-success" type="button">Details</button>
                        </div>`).join("");
                }
            })
    } else {
        alert("Pls input a food name.")
    }
}

// every single food card onclick function

const mealDetails = idMeal => {
    document.getElementById("foods-item").style.display = "none";
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.meals);
            document.getElementById("food-detail").innerHTML = data.meals.map((meal) =>
                `<div class="detail">
                    <img src="${meal.strMealThumb}">
                    <div class="about-food">
                        <h2>${meal.strMeal}</h2>
                        <h4>Category : ${meal.strCategory}</h4>
                        <h5>Area : ${meal.strArea}</h5>
                        <h6>Ingredients : </h6>
                        <p><i class="fas fa-check-square"></i>${meal.strMeasure1} ${meal.strIngredient1}</p>
                        <p><i class="fas fa-check-square"></i>${meal.strMeasure2} ${meal.strIngredient2}</p>
                        <p><i class="fas fa-check-square"></i>${meal.strMeasure3} ${meal.strIngredient3}</p>
                        <p><i class="fas fa-check-square"></i> ${meal.strMeasure4} ${meal.strIngredient4}</p>
                        <p><i class="fas fa-check-square"></i> ${meal.strMeasure5} ${meal.strIngredient5}</p>
                        <p><i class="fas fa-check-square"></i> ${meal.strMeasure6} ${meal.strIngredient6}</p>
                        <p><i class="fas fa-check-square"></i> ${meal.strMeasure7} ${meal.strIngredient7}</p>
                        <p><i class="fas fa-check-square"></i> ${meal.strMeasure8} ${meal.strIngredient8}</p>
                        <p><i class="fas fa-check-square"></i> ${meal.strMeasure9} ${meal.strIngredient9}</p>
                        <p><i class="fas fa-check-square"></i> ${meal.strMeasure10} ${meal.strIngredient10}</p>
                    </div>
                    <button class="btn btn-outline-success" type="button" onclick="goBack()">Go Back</button>
                </div>
            `
            )
        })
}

const goBack = () => {
    document.getElementById("food-detail").style.display = "none";
    document.getElementById("foods-item").style.display = "block";
}
