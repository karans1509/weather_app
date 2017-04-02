# weather_app

This weather app fetches data from two APIs . Firstly, city and the country is taken as input. Then using these values an API call to locationip.org is made which returns the latitude and the longitude values of the city. 
Once coordinates are obtained , another API call is made from open weather app and this call fetches weather data for 6 days with units as metric. Then various information like humidity, temperature etc is taken from the json object received.
