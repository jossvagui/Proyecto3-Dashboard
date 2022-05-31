window.addEventListener('load', ()=> {
    let simbolo = document.getElementById('simbolo')  
    let precio = document.getElementById('precio')  
    let grafica = document.getElementById('grafica') 

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

        var ctx= document.getElementById("grafica").getContext("2d");
        var myChart= new Chart(ctx,{
            type:"bar",
            data:{
                labels:['ETH'],
                datasets:[{                        
                        data:[0.0615],
                        backgroundColor:[                            
                            'rgb(74, 135, 72,0.5)'
                        ]
                }]
            },
            options:{
                scales:{
                    yAxes:[{
                            ticks:{
                                beginAtZero:true
                            }
                    }]
                }
            }
        });




})