//*-+*-+*-+*-+*-+*-+*-+*-+*-+*-+*-+*-+*   Time       -+*-+*-+*-+*-+*-+-+*-+*-+*-+*-+*-+*-+*-+*-+*-+*-+*-+
//DK Time
let timedk = document.getElementById("timedk");

setInterval(() =>{
    let d = new Date();
    let hour = d.getHours()  ;
    
    let minute = d.getMinutes();

    const daysOfWeek = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    const dayOfWeek =daysOfWeek[d.getDay()] ;
    
    timedk.innerHTML = dayOfWeek + "," + hour + ":" + minute;
    if (dayOfWeek == 'Monday' || dayOfWeek == 'Sunday') {
        timedk.style.color = "red";
    } else if (dayOfWeek == 'Tuesday' || dayOfWeek == 'Wednesday' || dayOfWeek == 'Thursday' || dayOfWeek == 'Friday' || dayOfWeek == 'Saturday' && hour < 17 && minute < 59) {
        timedk.style.color = "green";
    } else if (hour > 18 && minute < 1) {
        timedk.style.color = "red";
    } 

},1000);

//CH Time
let timech = document.getElementById("timech");

setInterval(() =>{
    let d = new Date();
    let hour = d.getHours();
     
    let minute = d.getMinutes();
    const daysOfWeek = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    const dayOfWeek = daysOfWeek[d.getDay()] ;
    
    timech.innerHTML = dayOfWeek + "," + hour + ":" + minute;
    if (dayOfWeek == 'Monday' || dayOfWeek == 'Tuesday' || dayOfWeek == 'Wednesday' || dayOfWeek == 'Thursday') {
        timech.style.color = "red";
    } else if (dayOfWeek == 'Friday' && hour > 17 && minute > 1 || dayOfWeek == 'Friday' && hour < 22) {
      timech.style.color = "green";
    } else if (dayOfWeek == 'Friday' && hour > 23 && minute > 1) {
      timech.style.color = "red";
    }else if ( dayOfWeek == 'Saturday' && hour > 11 || dayOfWeek == 'Sunday' && hour > 11) {
        timech.style.color = "green";
    } else if (dayOfWeek == 'Saturday' && hour > 20 || dayOfWeek == 'Sunday' && hour > 20) {
        timech.style.color = "red";
    } 

},1000);

//&& hour < 10 && minute < 59

/*+--+--+---+---+--+--+---+--+--   Weather app       -+--+---+--+--+--+-+++++//+//+/+**-***+*+*+*+*+*+*+*+*/

/*Weather App dk*/ 
const placeInDk = "Copenhagen";
const placeDk = document.querySelector(".place-dk");
const apiKey = "cbffdcd452650b3cc4204fb274308a3c";
const apiUrldk = `https://api.openweathermap.org/data/2.5/weather?q=${placeInDk}&units=metric`;
const weatherIcondk = document.querySelector(".weather-icondk");



async function checkWeatherdk() {
    const response = await fetch(apiUrldk + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('.citydk').innerHTML =   data.name; 
    document.querySelector('.tempdk').innerHTML =  Math.round(data.main.temp)  + "°C"; 
    document.querySelector('.humiditydk').innerHTML =   data.main.humidity + "%"; 
    document.querySelector('.winddk').innerHTML =   data.wind.speed + " km/h"; 
    placeDk.innerHTML = placeInDk;


    if (data.weather[0].main == 'Clouds') {
        weatherIcondk.src = "images/cloud.png"
    }  else if (data.weather[0].main == 'Clear') {
        weatherIcondk.src = "images/sun.png"
    } else if (data.weather[0].main == 'Rain') {
        weatherIcondk.src = "images/rain.png"
    } else if (data.weather[0].main == 'Drizzle') {
        weatherIcondk.src = "images/drizzle.svg"
    } else if (data.weather[0].main == 'Mist') {
        weatherIcondk.src = "images/mist.svg"
    }
};

checkWeatherdk();

/*Weather ch */
const placeInCh = "Lausanne";
const placeCh = document.querySelector(".place-ch");
const apiUrlch = `https://api.openweathermap.org/data/2.5/weather?q=${placeInCh}&units=metric`;
const weatherIconch = document.querySelector(".weather-iconch");



async function checkWeatherch() {
    const response = await fetch(apiUrlch + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector('.citych').innerHTML =   data.name; 
    document.querySelector('.tempch').innerHTML =  Math.round(data.main.temp)  + "°C"; 
    document.querySelector('.humiditych').innerHTML =   data.main.humidity + "%"; 
    document.querySelector('.windch').innerHTML =   data.wind.speed + " km/h"; 
    placeCh.innerHTML = placeInCh;


    if (data.weather[0].main == 'Clouds') {
        weatherIconch.src = "images/cloud.png"
    }  else if (data.weather[0].main == 'Clear') {
        weatherIconch.src = "images/sun.png"
    } else if (data.weather[0].main == 'Rain') {
        weatherIconch.src = "images/rain.png"
    } else if (data.weather[0].main == 'Drizzle') {
        weatherIconch.src = "images/drizzle.svg"
    } else if (data.weather[0].main == 'Mist') {
        weatherIconch.src = "images/mist.svg"
    }
}

checkWeatherch();


/*Carousel */
const list = document.querySelector(".gallery-carousel__img-container--list");
const imgs = Array.from(list.children);
const nextButton = document.querySelector(".gallery-carousel__btn--right");
const prevButton = document.querySelector(".gallery-carousel__btn--left");
const carouselNav = document.querySelector(".gallery-carousel__nav");
const dots = Array.from(carouselNav.children);

// console.log(list);
// console.log(imgs);
// console.log(nextButton);
// console.log(prevButton);
// console.log(carouselNav);

// Getting the width of our images
// const imgWidth = imgs[0].getBoundingClientRect();
// const imgWidth = imgs[0].getBoundingClientRect().height;
const imgWidth = imgs[0].getBoundingClientRect().width;
// console.log(imgWidth);

// Arranging the images next to one another
// function setImgPosition(img, index) {
//   img.style.left = imgWidth * index + "px";
// }

// Arrow Function
const setImgPosition = (img, index) => {
  img.style.left = imgWidth * index + "px";
};
imgs.forEach(setImgPosition);

// moveToImg Function
const moveToImg = (list, currentImg, targetImg) => {
  list.style.transform = "translateX(-" + targetImg.style.left + ")";
  currentImg.classList.remove("current--img");
  targetImg.classList.add("current--img");
};

// Updating the color of the dots on click
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current--img");
  targetDot.classList.add("current--img");
};

// Hide/Show Arrows
const hideShowArrows = (imgs, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
  } else if (targetIndex === imgs.length - 1) {
    prevButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
  } else {
    prevButton.classList.remove("hidden");
    nextButton.classList.remove("hidden");
  }
};

/* 
--------*-*-*-*-*-*-*-*-*-*-*-*-*-*-*---------------------------------------------------
When we click on the right button, move images to the left
-----------*-*--*-*-*-*-*-*-*--*-*-*-*-*------------------------------------------------
*/

nextButton.addEventListener("click", (e) => {
  const currentImg = list.querySelector(".current--img");
  const nextImg = currentImg.nextElementSibling;
  const currentDot = carouselNav.querySelector(".current--img");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = imgs.findIndex((img) => img === nextImg);

  moveToImg(list, currentImg, nextImg);
  updateDots(currentDot, nextDot);
  hideShowArrows(imgs, prevButton, nextButton, nextIndex);
});

/* 
--------*-*-*-*-*-*-*-*-*-*-*-*-*-*-*---------------------------------------------------
When we click on the left button, move images to the right
-----------*-*--*-*-*-*-*-*-*--*-*-*-*-*------------------------------------------------
*/

prevButton.addEventListener("click", (e) => {
  const currentImg = list.querySelector(".current--img");
  const prevImg = currentImg.previousElementSibling;
  const currentDot = carouselNav.querySelector(".current--img");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = imgs.findIndex((img) => img === prevImg);

  moveToImg(list, currentImg, prevImg);
  updateDots(currentDot, prevDot);
  hideShowArrows(imgs, prevButton, nextButton, prevIndex);
});

/* 
--------*-*-*-*-*-*-*-*-*-*-*-*-*-*-*---------------------------------------------------
When we click on the Carousel Nav, switch the images
-----------*-*--*-*-*-*-*-*-*--*-*-*-*-*------------------------------------------------
*/

carouselNav.addEventListener("click", (e) => {
  // what dot was clicked on
  // const targetDot = e;
  // console.log(targetDot.target);
  const targetDot = e.target.closest("button");
  // console.log(targetDot);
  if (!targetDot) return;

  const currentImg = list.querySelector(".current--img");
  const currentDot = carouselNav.querySelector(".current--img");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetImg = imgs[targetIndex];

  moveToImg(list, currentImg, targetImg);
  updateDots(currentDot, targetDot);
  hideShowArrows(imgs, prevButton, nextButton, targetIndex);
});



// *-+*-+*-+*-+*-+*-+*-+*-+*-+Let's meet section *-+*-+*-+*-+*-+*-+*-+*-+*-+

const toChButton = document.querySelector(".switzerland__button--dk");
const toDkButton = document.querySelector(".denmark__button--ch");

const meetInDkText = document.querySelector("section#lets-meetdk");
const dkWeather = document.querySelector("section#weather-infodk");

const meetInChText = document.querySelector("section#lets-meetch");
const chWeather = document.querySelector("section#weather-infoch");

toChButton.addEventListener("click", (e) => {
  meetInDkText.style.display = "none";
  dkWeather.style.display = "none";

  meetInChText.style.display = "inline";
  chWeather.style.display = "inline";
});

toDkButton.addEventListener("click", (e) => {
  meetInDkText.style.display = "inline";
  dkWeather.style.display = "inline";

  meetInChText.style.display = "none";
  chWeather.style.display = "none";
});


/*Contact page */
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});