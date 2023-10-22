const convertButton = document.querySelector(".convert-button") // Variável - Aqui está sendo mapeado o botão de converter
const currencySelect = document.querySelector(".currency-select") // Variável - Aqui está sendo mapeado o select de converter para

async function convertValues() { // Declarando uma função comum como assíncrona 
    try {
        const inputCurrencyValue = document.querySelector(".input-currency").value //  Variável - Pega o valor do input => .value para trazer somente o valor dentro do input
        const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Variável - Mostra o valor inserido no input (Real R$) => Valor para converter
        const currencyValueConverted = document.querySelector(".currency-value") // Variável - Mostra o valor inserido no input de outras moedas (Dólar e Euro) => Valor convertido

        const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL").then(response => response.json()) // Consumindo a API com valores reais, usando await para que o código espere a consulta a API retornar as informações

        const dolarToday = data.USDBRL.high
        const euroToday = data.EURBRL.high
        const libraToday = data.GBPBRL.high
        const bitcoinToday = data.BTCBRL.high

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
    } catch (err) {
        console.err(`Erro ao buscar dados da API: ${err}`)
    }

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