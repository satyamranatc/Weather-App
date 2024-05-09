let Temp = document.getElementById("Temp");
let Desc = document.getElementById("Desc");
let Btn = document.getElementById("SearchBtn");
let CityName = document.getElementById("CityName");

Btn.addEventListener("click", async ()=>{
    let City  = CityName.value;
    // Api:

    let Data = await fetch(`https://api.weatherapi.com/v1/current.json?key=5927e6c36d604ba3964130718240905&q=${City}&aqi=no`)
    Data =  await Data.json();
    console.log()

    let Tempdata = Data.current.temp_c;
    let Descdata = Data.current.condition.text;
    Temp.innerHTML = Tempdata;
    Desc.innerHTML = Descdata;
})