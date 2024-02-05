let apiKey='9840a95a40d16a269f90b86e405b1fdd'
let btn = document.querySelector('.search')
let input = document.getElementById('search')



btn.addEventListener('click',()=>{
    let city = input.value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    
    let response =fetch(url)
    response.then((data)=>{
        return data.json()
    }).then((value)=>{
        document.getElementById('city').innerText = value.name
        document.getElementById('temp').innerHTML = value.main.temp + `<sup>o</sup>C`
        document.getElementById('wind-speed').innerText = value.wind.speed + 'km/hr'
        document.getElementById('humidity').innerText = value.main.humidity + '%'
        let condition = value.weather[0].main
        // console.log(condition);
        if(condition == 'Rain' || condition == 'Clouds'){
            document.getElementsByClassName('weather-img')[0].innerHTML = '<img src="heavy-rain.png" alt="">'
        }
        if(condition == 'Clear'){
            document.getElementsByClassName('weather-img')[0].innerHTML = '<img src="sun.png" alt="">'
        }
        if(condition == 'Mist'){
            document.getElementsByClassName('weather-img')[0].innerHTML = '<img src="fog.png" alt="">'
        }

    }).catch((error) => {
        document.getElementById('city').innerText = 'City Not Found'
        document.getElementById('disc').innerText = ''
        document.getElementById('temp').innerHTML ='' 
        document.getElementById('wind-speed').innerText = ''
        document.getElementById('humidity').innerText = ''
    });
})

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();

        let city = input.value;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        fetch(url)
            .then((data) => {
                return data.json();
            })
            .then((value) => {
                document.getElementById('city').innerText = value.name;
                document.getElementById('temp').innerHTML = value.main.temp + `<sup>o</sup>C`;
                document.getElementById('wind-speed').innerText = value.wind.speed + 'km/hr';
                document.getElementById('humidity').innerText = value.main.humidity + '%';
                document.getElementById('disc').innerText = value.weather[0].description
                let condition = value.weather[0].main
                // console.log(condition);
                if(condition == 'Rain' || condition == 'Clouds'){
                    document.getElementsByClassName('weather-img')[0].innerHTML = '<img src="heavy-rain.png" alt="">'
                }
                if(condition == 'Clear'){
                    document.getElementsByClassName('weather-img')[0].innerHTML = '<img src="sun.png" alt="">'
                }
                if(condition == 'Mist'){
                    document.getElementsByClassName('weather-img')[0].innerHTML = '<img src="fog.png" alt="">'
                }
            })
            .catch((error) => {
                document.getElementById('city').innerText = 'City Not Found'
                document.getElementById('disc').innerText = ''
                document.getElementById('temp').innerHTML ='' 
                document.getElementById('wind-speed').innerText = ''
                document.getElementById('humidity').innerText = ''
            });
    }
});

