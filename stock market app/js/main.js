document.querySelector('button').addEventListener('click',getNews)

function getNews() {
let stock = document.querySelector ('input').value

let params = {
  api_token: 'Q2KyIzGWZv1KW50cHrlQCgIkdTSHp9mv8WYeQ0LM',
  limit: '10',
  symbols: stock,
  sentiment_lte: 0,
  published_after: '2024-09-18',
};

let requestOptions = {
  method: 'GET'
};

let esc = encodeURIComponent;
let query = Object.keys(params)
    .map(function(k) {return esc(k) + '=' + esc(params[k]);})
    .join('&');


  fetch("https://api.marketaux.com/v1/news/all?" + query, requestOptions)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)

    // Correct the class selectors for classes starting with numbers
    document.querySelector('h3[class="a"]').innerTex4t = data.data[0].description;
    document.querySelector('h2[class="a"]').innerText = data.data[0].title;
    document.querySelector('section h2.[class="a"]').innerText = new Date(data.data[0].published_at).toDateString();
    
    // For additional entries (uncomment as needed)
    document.querySelector('h3.[class="b"]').innerText = data.data[1].description;
    document.querySelector('h2.[class="b"]').innerText = data.data[1].title;
    document.querySelector('section h2.[class="b"]').innerText = new Date(data.data[1].published_at).toDateString();

    // document.querySelector('h3.\\33').innerText = data.data[2].description;
    // document.querySelector('h2.\\33').innerText = data.data[2].title;
    // document.querySelector('section h2.\\33').innerText = new Date(data.data[2].published_at).toDateString();
  })
  .catch(err => {
    console.log(`error ${err}`);
  });

}
// document.querySelector('button'). addEventListener ('click', getDrink)

// function getDrink () {
//     let drink = document.querySelector('input').value

//     let encodedDrink = encodedURIComponent (drink);

//     const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodedDrink}`;

//     fetch(url)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//         console.log(data.drinks[0])
//         document.querySelector ('h2').innerText = data.drinks[0].strDrink
//         document.querySelector('img').src = data.drinks[0].strDrinkThumb
//         document.querySelector('h3').innerText = data.drinks[0].strInstructions
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });

// }