//TO CHECK FOR CURRENT WEATHER IN A PLACE, 'API' IS CONSUMED.

//Acess DOM Element

const reportText = document.getElementById('report-text');
const reportSection = document.getElementById('weather-report');
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city');



// MY WEATHER API IS;
//api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ba03294cc122c7abd1b1a2fa4f719b97



cityForm.addEventListener('submit', ($event) => {
    $event.preventDefault();
    const chosenCity = cityInput.value;
    
    ///////TO FETCH THE API FROM THE OpenWeatherMap::
    
    async function fetchUser() {
        const resp = await   fetch( 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&units=metric' + '&APPID=ba03294cc122c7abd1b1a2fa4f719b97')
        const result = await resp.json();
        console.log(result)
        
          if(result.cod == 404) {
            reportText.textContent = 'City not found!'; 
           return reportSection.textContent = ' ';
               
        }
        else{
        reportText.textContent = 'The weather in  ' + result.name + ' is '; 
         reportSection.textContent =  result.weather[0].main + '.'; 
        }    
    }

    
    return  fetchUser()
   })
//capturing the data that is gotten by our GET reply API.
// the openweathermap API is returned as a JSON object.
    
   
           
               
               
   
   
