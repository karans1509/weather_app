
let lat = 0 ;
let lon = 0 ;
let max_temp = 0;
let min_temp = 0
let humidity =0;
let wind_speed = 0;
let description = '';
let image = ''

const element = document.getElementById('weather');

element.addEventListener('submit', (e) => {

    e.preventDefault()
    
    
    const add = document.getElementById('display')
    add.innerHTML=""

	let city = document.getElementById('city').value

	let country = document.getElementById('country').value

	const url1 = `http://locationiq.org/v1/search.php?key=e71ab26214a4af01969d&format=json&city=${city}&country=${country}`

	fetch(`${url1}`)
	.then(function(res) { return res.json() })
	.then(function(json)  {
	    lat = json[0].lat;
	    let latt = document.createElement('h4')
	    latt.textContent = lat
	   
	    lon = json[0].lon;
	    let long = document.createElement('h4')
        long.textContent = lon  
	   
	    const add = document.getElementById('display')
	    add.innerHTML = ''
	    // add.appendChild(latt)
	    // add.appendChild(long)

	    const url2 = 'http://api.openweathermap.org/data/2.5/forecast/daily?units=metric&cnt=6&'

	    fetch(`${url2}lat=${lat}&lon=${lon}&APPID=1c00ab5be86159c68e9f50d2a84afca8`)
	   .then(function(resp) { return resp.json( )})
	   .then( function(json) {
		

        for(let i=0;i<6;i++)
       {
        humidity = json.list[i].humidity+"%"
        pressure = json.list[i].pressure+" hPa"
        max_temp = json.list[i].temp.max+" Deg Celsius"
        min_temp = json.list[i].temp.min+" Deg Celsius"
        wind_speed = json.list[i].speed+" m/sec"
        description = json.list[i].weather[0].description
        image = json.list[i].weather[0].icon
        url = 'icons/'+image+'.png';

        let days = document.createElement('h2')

       

        let desc = document.createElement('h4')
        desc.textContent = description
        let maxtemp = document.createElement('h4')
        maxtemp.textContent = 'Maximum Temperature: '+max_temp
        let mintemp = document.createElement('h4')
        mintemp.textContent = 'Minimum Temperature: '+min_temp
        let press = document.createElement('h4')
        press.textContent = pressure
        let humid = document.createElement('h4')
        humid.textContent = 'Humidity: '+ humidity
        let icon = document.createElement('img')
        icon.setAttribute('src', url)
        let speed = document.createElement('h4')
        speed.textContent = "Wind Speed: "+ wind_speed

        if(i===0) {
        	
        	days.textContent = 'Today';
        	add.appendChild(days);
        }
        else if(i===1)
        {
        	days.textContent = '5 Day Forecast';
            add.appendChild(days);
        }

        add.appendChild(icon)
        add.appendChild(desc)
        add.appendChild(maxtemp)
        add.appendChild(mintemp)
        add.appendChild(humid)
        add.appendChild(speed)
       }
	  })

	})
})

