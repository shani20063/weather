const apikey="fe168b1981236b50b17d12ac8ca931b4";
const form=document.querySelector("form"); 

form.addEventListener('submit',function(e){
    e.preventDefault();
    const cityName=document.getElementById('city-name').value;
    console.log(cityName);
    getWeather(cityName);
});
async function getWeather(cityName) {
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apikey}`
    const response = await fetch(url);
    const data = await response.json();
    showWeatherInfo(data);
}
function showWeatherInfo(data){
   console.log(data);    
   let weatherinfo= document.getElementById('Weather-info');
   let imgIcon="http://openweathermap.org/img/w/"+data.weather[0].icon+".png";
   weatherinfo.innerHTML=`<h2>CountryCode:${data.sys.country}</h2>
   <h3>CityName:${data.name}</h3>
   <p>Temperature:${data.main.temp}F|${Math.round(data.main.temp - 273.15)}&deg;C</p>
   <p>Humidity:${data.main.humidity}%</p>
   <p>Pressure:${data.main.pressure}hpa</p>
   <p>Weather:${data.weather[0].description}<img src=${imgIcon}></p>
   `;
}
