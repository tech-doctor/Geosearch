              
            const space = document.getElementById('cValue');
            const result =  document.getElementById('fValue');

            space.addEventListener("keypress",function(event)  {
                if(space.value.length != 0)  {
                if(event.keyCode === 13) {
                   let degC = space.value;
                    let degF = (1.8 * degC) + (32);
                    
                result.textContent  = degF + '°F';
                console.log(degC)
                   }
                }
                   
                
                });