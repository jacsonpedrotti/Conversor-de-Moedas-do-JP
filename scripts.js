const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectOne = document.querySelector(".currency-select-one")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    

    const dolarToday = 4.96
    const euroToday = 5.36
    const bitcoinToday = 209.255
    const libraToday = 6.22
    const realToday = 1





    if(currencySelect.value == "dolar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency:"USD"
        }).format(inputCurrencyValue / dolarToday)

    }


    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    }


    if(currencySelect.value == "bitcoin"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue/bitcoinToday)
    }

    if(currencySelect.value == "libra"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
            style:"currency",
            currency:"GBP"
        }).format(inputCurrencyValue/libraToday)
    }

    if(currencySelect.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
     }).format(inputCurrencyValue/realToday)
    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
     }).format(inputCurrencyValue)


    
    console.log(convertedValue)

} 


function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    

   
    if(currencySelect.value =="dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/logo-usa.png"

    }

    if(currencySelect.value =="euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/logo-euro.png"
    }

    if(currencySelect.value =="bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin-logo.png"
    }
    
    if(currencySelect.value =="libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra-logo.png"
    }


    if(currencySelect.value =="real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/logo-real.png"
    }

    convertValues()
}
      
    

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)