'use strict'

let week=["lunes" , "martes" , "miercoles" , "jueves" , "viernes" , "sabado" ];

for (let i=0; i < week.length; i++ ){
    alert ( `${i+1} ${week [i]}`);
}

week.push('domingo');
week.pop();

week.splice(4,1);