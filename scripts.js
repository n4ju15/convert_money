const convertButton = document.querySelector(".convert-button") // Variável - Aqui está sendo mapeado o botão de converter
const currencySelect = document.querySelector(".currency-select") // Variável - Aqui está sendo mapeado o select de converter para

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value //  Variável - Pega o valor do input => .value para trazer somente o valor dentro do input
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Variável - Mostra o valor inserido no input (Real R$) => Valor para converter
    const currencyValueConverted = document.querySelector(".currency-value") // Variável - Mostra o valor inserido no input de outras moedas (Dólar e Euro) => Valor convertido

    const dolarToday = 4.89 // Variável - Com valor fixo do dólar
    const euroToday = 5.29 //  Variável - Com valor fixo do euro
    const libraToday = 6.17 // Variável - Com valor fixo da libra
    const bitcoinToday = 128.024 // Variável - Com valor fixo da bitcoin

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
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
    if (currencySelect.value == "btc") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: 8, // Número de casas decimais após o ponto
            maximumFractionDigits: 8, 
        }).format(inputCurrencyValue / bitcoinToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", { //Se o select tiver selecionado o valor de real, entra aqui
        style: "currency", // Configurações do Intl.NumberFormat
        currency: "BRL"
    }).format(inputCurrencyValue) // Formata o item que estiver entre parênteses

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name") //  Variável que busca o nome da moeda selecionada
    const currencyImage = document.querySelector(".currency-image") // Variável que busca a imagem da moeda selecionada

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano" // Troca o texto na parte de cima das bandeiras de acordo com o país selecionado
        currencyImage.src = "./assets/dolar.png" // Troca a imagem das bandeiras de acordo com o país selecionado
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "btc") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues() // Primeiro o JS executa essa função e troca as imagens e os nomes das moedas, ai chamamos a função convertValues para que ela faça a parte da conversão
    // Exibe o valor convertido para a moeda selecionado caso o usuário troque a moeda depois de inserir o valor
}

currencySelect.addEventListener("change", changeCurrency) // Ao evento de click no campo de converter para, ele troca a bandeira, os textos e as moedas
convertButton.addEventListener("click", convertValues) // Ao clicar no botão converter ele executa a função de conversão da moeda