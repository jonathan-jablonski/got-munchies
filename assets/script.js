
  
// MapQuest API
// clientSecret = "77gRNKAyNsP05LND";
// key = "U5hUKGkBeBR1qSw1yecgBx0flv6hjfMR";

var submitButton = document.getElementById("submit")
var zipCode = $("#zipcode")
var CLIENT_ID =  "SQM3255VG0KCQPCFOPM5RF1S3S22Q2BMNV3OUZEHT4QIQA2H"
var CLIENT_SECRET = "1NDCPEPMM5FJQV4HHXKQOLFGHOD54VE2DBSKFG41CUQBHLJ4"
// Foursquare API

$(submitButton).click(function (event) {
    event.preventDefault();
    locationSearch = zipCode.text();
    $.ajax({
    dataType: "json",
    url: `https://api.foursquare.com/v2/venues/explore?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323&limit=1&ll=40.7243,-74.0018&`,
    data: {locationSearch},
    success: function( data ) {
      // Code for handling API response
      console.log(data);
     var theCall = data;
     $(".modal1").addClass("is-active")
    },
    error: function(jqXHR, textStatus, errorThrown) {
      // Code for handling errors
    console.log()
    }
    })
});
$(".buttonCancelModal").click(function() {
  $(".modal1").removeClass("is-active");
});
// Function to fetch restaurants based on user-specified criteria


// Function to randomly select a restaurant from an array


// Function that fetches map of restaurant's latitude and longitude


// Function for pop-up modal that displays restaurant, address, map of surrounding area