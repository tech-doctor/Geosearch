const tempSection = document.getElementById('temp-report');
const valueSection = document.getElementById('value-report');
const cityForm = document.getElementById('city-form');
const cityInput = document.getElementById('city');


cityForm.addEventListener('submit', ($event) => {
    $event.preventDefault();
    const chosenCity = cityInput.value;
    
    ///////TO FETCH THE API FROM THE OpenWeatherMap::
    
    async function fetchUser() {
        const resp = await   fetch( 'https://api.openweathermap.org/data/2.5/weather?q=' + chosenCity + '&units=metric' + '&APPID=ba03294cc122c7abd1b1a2fa4f719b97')
        const result = await resp.json();
        console.log(result)
        
          if(result.cod == 404) {
            return tempSection.textContent = result.message;
           // return valueSection.textcontent = result.message;
        }
        else{
        tempSection.textContent = ' The Temperature in ' + result.name + ' : '; 
        valueSection.textContent = result.main.temp +'°C';
    }
    }
    return  fetchUser()
                          

   })