window.addEventListener('load', ()=> {
    let simbolo = document.getElementById('simbolo')  
    let precio = document.getElementById('precio')  
    let grafica = document.getElementById('grafica') 
    let simbolo2 = document.getElementById('simbolo2')  
    let precio2 = document.getElementById('precio2')  
    let grafica2 = document.getElementById('grafica2') 
    let simbolo3 = document.getElementById('simbolo3')  
    let precio3 = document.getElementById('precio3')  
    let grafica3 = document.getElementById('grafica3') 

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
            let desc2 = data[1].symbol
            simbolo2.textContent = desc2.toUpperCase()            
            precio2.textContent = data[1].price
            let desc3 = data[2].symbol
            simbolo3.textContent = desc3.toUpperCase()            
            precio3.textContent = data[2].price
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
                        data:[0.062],
                        backgroundColor:[                            
                            'rgb(255, 128, 0)'
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
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Gráfica',
                        fontSize: 20,
                        padding: 10,
                        color: '#ffffff'
                    },
                    legend: {
                        display: false,                        
                    },
                }
            }
        });

        var ctx2= document.getElementById("grafica2").getContext("2d");
        var myChart= new Chart(ctx2,{
            type:"bar",
            data:{
                labels:['LTC'],
                datasets:[{                        
                        data:[0.002],
                        backgroundColor:[                            
                            '#800080'
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
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Gráfica',
                        fontSize: 20,
                        padding: 10,
                        color: '#ffffff'
                    },
                    legend: {
                        display: false,                        
                    },
                }
            }
        });

        var ctx3= document.getElementById("grafica3").getContext("2d");
        var myChart= new Chart(ctx3,{
            type:"bar",
            data:{
                labels:['BNB'],
                datasets:[{                        
                        data:[0.01],
                        backgroundColor:[                            
                            '#008f39'
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
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Gráfica',
                        fontSize: 20,
                        padding: 10,
                        color: '#ffffff'
                    },
                    legend: {
                        display: false,                        
                    },
                }
            }
        });


})