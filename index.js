

/*let cont = 0;

document.getElementById('decrease').onclick = function(){
    cont -=1;
    document.getElementById('contador').textContent = cont;
}

document.getElementById('reset').onclick = function(){
    cont = 0;
    document.getElementById('contador').textContent = cont;
}

document.getElementById('increase').onclick = function(){
    cont +=1;
    document.getElementById('contador').textContent = cont;
}*/

/*const min = 1;
const max = 10000;

function btn1(){
    document.getElementById("random1").textContent = Math.floor(Math.random() * (max - min)) + min;
}

function btn2(){
    document.getElementById("random2").textContent = Math.floor(Math.random() * (max - min)) + min;
}


function btn3(){
    document.getElementById("random3").textContent = Math.floor(Math.random() * (max - min)) + min;
}
let random = Math.floor(Math.random() * (max - min)) + min;

document.getElementById("roll").onclick.add

    document.getElementById("roll").onclick  = function btn2(){
        document.getElementById("random2").textContent = Math.floor(Math.random() * (max - min)) + min;
    
        document.getElementById("roll").onclick  = function btn3(){
            document.getElementById("random3").textContent = Math.floor(Math.random() * (max - min)) + min;
        }
    }

}*/


/*const myCheckBox = document.getElementById("check1");
const radioVisa = document.getElementById("rad1");
const radioMaster = document.getElementById("rad2");
const radioPay = document.getElementById("rad3");
const entrar = document.getElementById("mysubmit");
const resultado1 = document.getElementById("subResult");
const resultado2 = document.getElementById("paymentResult");

entrar.onclick = function(){
    
    if(myCheckBox.checked){
        resultado1.textContent = "Você está inscrito";
    }
    else{
        resultado1.textContent = "Você não está inscrito";
    }

    if(radioVisa.checked){
        resultado2.textContent = "Pagamento com cartão Visa";
    }
    else if (radioMaster.checked){
            resultado2.textContent = "Pagamento com cartão Master Card";
        }
        else if (radioPay.checked){
                resultado2.textContent = "Pagamento com cartão PayPal";
    
            }else{
                resultado2.textContent = "Por favor, escolha uma opção de pagamento.";
            }
}*/

/*const sleep = ms => new Promise(r => setTimeout(r, ms));

async function rollDice(){
    const numJogadas = document.getElementById("jogadas").value;

    let m ="";
    const im = document.getElementById('diceImages');
    let jogada;
    for(let i = 0; i < numJogadas; i++){
        jogada = Math.floor(Math.random() * 6) + 1; 
        m = m + `<img src="images/${jogada}.png">`
        im.innerHTML = m;
        await sleep(1500);
        
    }
    
}

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "!@#$%¨&*()_+=?"

function generatePassword(lenght, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

    if (lenght >= 8){
        let allowedChars = "";
        allowedChars += includeLowerCase? lowercaseChars:"";
        allowedChars += includeUpperCase? uppercaseChars:"";
        allowedChars += includeNumbers? numberChars:"";
        allowedChars += includeSymbols? symbolChars:"";
        
        let senha = "";
        let caracter = "";
        for (let i = 0; i < lenght; i++){
        caracter = allowedChars[Math.floor(Math.random() * allowedChars.length)];
        
        if (!senha.includes(caracter)){
                senha += caracter;
        }
        else{
                i--;
        }
        }

        return senha;
    }
    return "A senha deve ter 8 ou mais caracteres!!";
}
const passwordLength = 8;
const icludeLowerCase = true;
const icludeUpperCase = true;
const icludeNumbers = true;
const icludeSymbols = true;

const password = generatePassword(passwordLength, icludeLowerCase, icludeUpperCase, icludeNumbers, icludeSymbols);
console.log(password);

const element = "12-03-2023";

function abc(){

    return 11 % 2 == 0;
}

console.log(abc());
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function upDateClock(){

    const cron = Date.now();
    elapsedTime = cron - startTime;

    let horas = Math.floor(elapsedTime / (1000*60*60));
    let minutos = Math.floor(elapsedTime / (1000*60) % 60);
    let segundos = Math.floor(elapsedTime / 1000 % 60);
    let milisegundos = Math.floor(elapsedTime % 1000 / 60);

    horas = String(horas).padStart(2, "0");
    minutos = String(minutos).padStart(2, "0");
    segundos = String(segundos).padStart(2, "0");
    milisegundos = String(milisegundos).padStart(2, "0");


    let stringCronometro = `${horas}:${minutos}:${segundos}:${milisegundos}`;
    
    document.getElementById("numeros").textContent = stringCronometro;
    
}


function start(){
    if (!isRunning){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(upDateClock, 10);
        isRunning = true;
      
    }
}

function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    document.getElementById("numeros").textContent = "00:00:00:00";
}
 

let expressao = "";
document.getElementById("display").value = "0";

function appendToDisplay(char){


    if ((expressao != "" || (!isNaN(char)) || char == ".")){

        if (char == "." && isNaN(expressao[expressao.length -1])){
            expressao += "0";
        }


        if (isNaN(char)){
            if(!isNaN(expressao[expressao.length -1]) || expressao == ""){

                if()              
                expressao += char;
                document.getElementById("display").value = expressao;
            }

        }
        else{
            expressao += char;
            document.getElementById("display").value = expressao;
        }
    } 

}

function clearDisplay(){
    expressao = "";
    document.getElementById("display").value = "0";
    
}

function calculate(){
    try{
        document.getElementById("display").value = eval(expressao);
    } 
    catch(error){
        console.log("Expressão Errada");
    }
}



const quadrado = document.getElementById("quadrado");
const pad = 20;
let x = 0;
let y = 0;

const label = document.createElement("p");
label.textContent = "Você Clicou Aqui!!"
label.style.position = "absolute"

document.addEventListener("keydown", event => {
    quadrado.textContent = "😍";
    quadrado.style.backgroundColor = "tomato";
})

document.addEventListener("keyup", event => {
    quadrado.textContent = "😑";
    quadrado.style.backgroundColor ="gray";
})


document.addEventListener("click", event => {

    try{
        document.body.removeChild(label);
    }
    catch{
        console.log("Elemento não criado");
    }

    let x = event.clientX;
    let y = event.clientY;

    label.style.top = `${y}px`;
    label.style.left = `${x}px`;

    document.body.appendChild(label);
})




document.addEventListener("keydown", event =>{

    if (event.key.startsWith("Arrow")){
        
        event.preventDefault();

        switch(event.key){
            
            case "ArrowDown":
                y += pad;
                break;

            case "ArrowUp":
                y -= pad;
                break;

            case "ArrowLeft":
                x -= pad;
                break;

            case "ArrowRight":
                x += pad;
                break;
        }

        quadrado.style.top = `${y}px`;
        quadrado.style.left = `${x}px`;
    }
    
})

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider());

function initializeSlider(){
    if (slides.length > 0 ){
        slides[slideIndex].classList.add("displaySlide");
       // intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    })

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(){
    slideIndex --;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex ++;
    showSlide(slideIndex);
}

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "467f9e5a2c6f577ef10528d192c86a52";

weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    let city = cityInput.value;

    if (city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            displayError(error);
        }
        
    }
    else{
        displayError("Por favor digite uma cidade");
    }
     
});

async function getWeatherData(cidade){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok){
        throw new Error("Não encontramos a cidade em nosso banco de dados");
    }

    return await response.json();

}

async function displayWeatherInfo(data){

    const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descriptionDisplay = document.createElement("p");
    const emoji = document.createElement("p");

    cityDisplay.textContent = city;
    cityDisplay.classList.add("cityDisplay");
    card.appendChild(cityDisplay);

    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}ºC`;
    tempDisplay.classList.add("tempDisplay");
    card.appendChild(tempDisplay);
    
    humidityDisplay.textContent = `Humidade: ${humidity}%`;
    humidityDisplay.classList.add("humidityDisplay");
    card.appendChild(humidityDisplay);

    descriptionDisplay.textContent = await translate(description);
    descriptionDisplay.classList.add("descDisplay");
    card.appendChild(descriptionDisplay);

    emoji.textContent = getWeatherEmoji(id);
    emoji.classList.add("emoji");
    card.appendChild(emoji);


}

function getWeatherEmoji(weatherId){

    switch(true){

        case (weatherId >= 200 && weatherId < 300):
            return "🌩";

        case (weatherId >= 300 && weatherId < 600):
            return "🌧";

        case (weatherId >= 600 && weatherId < 700):
            return "❄";

        case (weatherId >= 700 && weatherId < 800):
            return "🔥";

 
        case (weatherId === 800):
            return "🌞";

        case (weatherId >= 801 && weatherId < 810):
            return "☁ ";
        
        default:
            return "❓";
        
    }

}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);

}


async function translate(description){
    let traduction = "";
    
    await fetch(
        `https://api.mymemory.translated.net/get?q=${description}&langpair=en-GB|pt-PT`
    ).then((res) => res.json())
        .then((data) => {
           
            traduction =  data.responseData.translatedText;
        });
    console.log(traduction);
    return traduction;
}*/

function abrirPaginaOrcamento() {
    window.location.href = "orcamento.html";
}

function abrirPaginaDisponibilidade() {
    window.location.href = "disponibilidade.html";
}

function abrirPaginaReserva() {
    window.location.href = "reserva.html";
}

function abrirPaginaInformacao() {
    window.location.href = "inseririnformacao.html";
}

async function efetuarOrçamento(){

}

async function verificarDisponibilidade(){
    
}

async function efetuarReserva(){
    
}

async function inseririnformacao(){
    
}