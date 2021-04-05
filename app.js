var inp = document.querySelector("input");
var srchBtn = document.querySelector("button");
var city = document.querySelector("#city");
var country = document.querySelector("#country");
var temp = document.querySelector("#temp");
var feelsLike = document.querySelector("#feels-like");
var weather = document.querySelector("#weather");
var minT = document.querySelector("#min-t");
var maxT = document.querySelector("#max-t");
var section = document.querySelector("section");
section.style.display="none";
async function getData(myUrl){
    var data1;
    var success = true;
    try{
        console.log(myUrl);
        const res = await fetch(myUrl);
        const data = await res.json();
        
        // console.log(data);
        data1=data;
    }
    catch(e){
        success = false;
        console.log("EHHHHrur", e);
        alert("SOMETHING WENT WRONG!!");
    }
    if(success===true){
        updateData(data1);
        
    }
    

}

function updateData(data){
    console.log(data);
    console.log("UUUU");
    if(data.cod==404){
        console.log("LMAO 404");
        section.style.display="none";
        alert("SOMETHING WENT WRONG!\n City Not found");
        

    }
    else{
        section.style.display="";
        inp.value="";
        city.innerText = data.name;
        country.innerText = data.sys.country;
        temp.innerText = Math.round(data.main.temp);
        feelsLike.innerText = data.main.feels_like;
        temp.innerHTML+="&#8451";
        feelsLike.innerHTML+="&#8451";
        weather.innerText = data.weather[0].description;
        minT.innerText = data.main.temp_min;
        minT.innerHTML+="&#8451";
        maxT.innerText = data.main.temp_max;
        maxT.innerHTML+="&#8451";

    }
    
}

// function getData(myUrl){
//     fetch(myUrl).then(a=>a.json()).then(data=>{console.log(data.weather[0].description).catch(console.log("AAAAH"))
// }

srchBtn.onclick = ()=>{
    if(inp.value!==""){
        
        getData(`http://api.openweathermap.org/data/2.5/weather?q=${inp.value}&units=metric&appid=1b96837e7db827e60252b3894f7875cd`);
        
    }
}


function throwError(){
    console.log("AAAAH ERRROR");
}