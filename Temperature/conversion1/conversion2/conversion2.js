              
            const space = document.getElementById('fValue');
            const result =  document.getElementById('cValue');

            space.addEventListener("keypress",function(event)  {
                if(space.value.length != 0)  {
                if(event.keyCode === 13) {
                   let degF = space.value;
                   var degC = (degF - 32) * (5/9);
                    
                result.textContent  = degC + '°C';
                console.log(degC)
                   }
                }
                   
                
                });