let api = "e910c2219ae292c676e9c81a50758a2a";
let url = "https://api.openweathermap.org/data/2.5/weather?q=";

let tpcity = document.querySelectorAll(".tpCity");
let tpcityStatus = document.querySelectorAll(".tpcity-stts");
let tpcityWind = document.querySelectorAll(".tpcity-wind");
let tpcityName = document.querySelectorAll(".cityName");

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
async function getData(city,i) {
  let res = await fetch(`${url}${city}&appid=${api}&units=metric`);
  res = await res.json();
  tpcity[i].innerText = res.main.temp;
  tpcityStatus[i].innerText = res.weather[0].description ;
  tpcityWind[i].innerText  = res.wind.speed;
  tpcityName[i].innerText = res.name;
  console.log(res)
}
  getData("delhi",0)
  getData("indore",1)
  getData("mumbai",2)
  getData("pune",3)


let SubmitBtn = document.querySelector("#smt-btn");
SubmitBtn.addEventListener("click",(value)=>{
  value.preventDefault();
  console.log("dfg")
})

let srcTemp = document.querySelector(".srchcityTemp");
let srcMinTemp = document.querySelector(".min-temp");
let srcMaxTemp = document.querySelector(".max-temp");
let weatherName = document.querySelector(".srchWeatherName");
let weatherIcon = document.querySelector(".weather-icon");
let WindSpeedSrch = document.querySelector(".srchWSpeed");
let HumidtySrch = document.querySelector(".srchHumidity");
  async function userSearch(Srcity){
    let res = await fetch(`${url}${Srcity}&appid=${api}&units=metric`);
    res = await res.json();
    srcTemp.innerText = res.main.temp;
    srcMinTemp.innerText = res.main.temp_min;
    srcMaxTemp.innerText = res.main.temp_max;
    weatherName.innerText = res.weather[0].description
    weatherIcon.setAttribute("src",`https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`)
    WindSpeedSrch.innerText = res.wind.speed
    HumidtySrch.innerText = res.main.humidity
  }
  document.querySelector("#smt-btn").addEventListener("click",()=>{
    let userIn = document.querySelector("#city-srch").value;
    userSearch(userIn); 
  })