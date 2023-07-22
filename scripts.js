const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras moedas

    const dolarToday = 5.2
    const euroToday = 6.2

    if (currencySelect.value == "dolar") { //Se o select tiver selecionado o valor de dolar, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") { //Se o select tiver selecionado o valor de euro, entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { //Se o select tiver selecionado o valor de real, entra aqui
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano" // Troca o texto na parte de cima das bandeiras de acordo com o país selecionado
        currencyImage.src = "./assets/dolar.png" // Troca a imagem das bandeiras de acordo com o país selecionado
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    convertValues() // Exibe o valor convertido para a moeda selecionado caso o usuário troque a moeda depois de inserir o valor
}

currencySelect.addEventListener("change", changeCurrency) // Ao evento de click no campo de converter para, ele troca a bandeira, os textos e as moedas
convertButton.addEventListener("click", convertValues) // Ao clicar no botão converter ele executa a função de conversão da moeda