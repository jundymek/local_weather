var celc = "metric";

$(document).ready(function() {
    $.getJSON("http://freegeoip.net/json/", function(data) {
    var country_code = data.country_code;
    var country = data.country_name;
    var ip = data.ip;
    var time_zone = data.time_zone;
    var latitude = data.latitude;
    var longitude = data.longitude;
      
 $.ajax({
        type: 'GET',
        dataType: 'json',
        url:
        'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=d612f07552cb4a6b8dc9c46e057a36f7&units=' + celc,
        success: function(data) {
            console.log(data);
            console.log(celc);
            
            var country = data.sys.country;
            var city = data.name;
            var temp = data.main.temp;
            var desc = data.weather[0].description;
            var now = new Date();
            var code = data.weather[0].id;
            if (data.sys.sunset < data.dt) {
                var time = 'night';
            } else {
                var time = 'day';
            }
            console.log(code)
            var formatted = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            $("#time").text(formatted);
            $("#temp").text(temp);
            $("#data").text(country + " " + city + " " + desc);
            $("#icon").addClass('wi wi-owm-' + time + '-' + code);

            $("#celc").on("click", function() {
                if ($("#celc").hasClass("C")) {
                    $(this).val('Change to Celcius');
                    temp = temp * (9/5) + 32;
                    $("#temp").html(Math.round(temp));
                    $("#measure").html("&#8457;")
                    $("#celc").removeClass("C").addClass("F");
                }else {
                    temp = (temp - 32) * 5/9;
                    $(this).val('Change to Fahrenheit');
                    $("#temp").html(Math.round(temp));
                     $("#measure").html("&#8451;")
                    $("#celc").removeClass('F').addClass('C');
                }
                
});
        }
    });
});
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //         var latitude = position.coords.latitude;
    //         var longitude = position.coords.longitude;
    //         console.log(latitude);
    //         console.log(longitude);
            // $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
        

        
});