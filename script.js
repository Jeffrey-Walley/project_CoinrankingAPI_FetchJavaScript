// Project using Fetch and Coin Ranking API to


const baseURL = "/api.coinranking.com/v2/coins";
// proxy URL keeps you from dealing with CROS errors
// when using this proxy you must first visit the site 'cors-anywhere' site and click for temp access
const proxyURL = "https://cors-anywhere.herokuapp.com";
const apiKey = "API-Key-Variable-Here";

fetch(`${proxyURL}${baseURL}`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'X-Access-Token': `${apiKey}`,
        'Access-Control-Allow-Origin': '*'
    }
}).then((response) => {
    if (response.ok) {
        response.json().then((json) => {
            console.log(json.data.coins)

            let coinsData = json.data.coins
            if (coinsData.length > 0) {
                var cryptoCoins = ""
            }



            // For Loop Starts
            coinsData.forEach((coin) => {
                cryptoCoins += "<tr>"
                cryptoCoins += `<td> ${coin.uuid} </td>`;
                cryptoCoins += `<td> ${coin.btcPrice} </td>`;
                cryptoCoins += `<td> ${coin.rank} </td>`;
                cryptoCoins += `<td> ${coin.tier} </td>`;
                cryptoCoins += `<td> ${coin.name} </td>`;
                cryptoCoins += `<td>$ ${coin.price} </td>`;
                cryptoCoins += `<td> ${coin.symbol} </td>`;
                "</tr>";
            })
            document.getElementById("data").innerHTML = cryptoCoins;
        })
    };
}).catch((error) => {
    console.log(object)
})