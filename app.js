window.addEventListener('load', ()=> {
    let simbolo = document.getElementById('simbolo')  
    let precio = document.getElementById('precio')  
    let vientoVelocidad = document.getElementById('viento-velocidad') 

    const url = `https://api.binance.com/api/v3/ticker/price`
    fetch(url)
        .then( response => { return response.json()})
        .then( data => {
                console.log(data)
            console.log(data[0].symbol)
            let desc = data[0].symbol
            simbolo.textContent = desc.toUpperCase()
            console.log(data[0].price)
            precio.textContent = data[0].price
        })
        .catch( error => {
            console.log(error)
        })
})