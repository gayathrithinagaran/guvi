//1.4 Display the Count of All Countries sharing their border with the country name in console.

var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)

request.onload = function() {

    var jsonData = JSON.Parse(this.Response)

    const conCapital = jsonData.map((item) => {
   console.log(item.name, "shares its border with", item.borders.length, "countries that includes", item.borders);
    });

}

request.send();
