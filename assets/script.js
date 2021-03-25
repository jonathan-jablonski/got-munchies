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
    data: { locationSearch },
    success: function (data) {
      // Code for handling API response
      console.log(data);
      var theCall = data;
    },
    error: function (jqXHR, textStatus, errorThrown) {
      // Code for handling errors
      console.log()
    }
  })
});

// Function to fetch restaurants based on user-specified criteria
// use categoryIds
$(submitButton).click(restaurantsByCategory)

function restaurantsByCategory(event){
  event.preventDefault();
  var location = "40.7243, -74.0018";
  var radius = 156;
  var categoryId = "4d4b7105d754a06374d81259";
  $.ajax({
    dataType: "json",
    url: `https://api.foursquare.com/v2/venues/explore?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323&categoryId=${categoryId}&limit=10&ll=${location}&radius=${radius}`,
    success: function( data ) {
      // Code for handling API response
      console.log(data);
     var theCall = data;
     $(".modal").addClass("is-active")
    },
    error: function(jqXHR, textStatus, errorThrown) {
      // Code for handling errors
    console.log(jqXHR, textStatus, errorThrown);
    }
    // Checkbox click to this function
    // target checkboxes
  })
};
$(".buttonCancelModal").click(function(){
    $(".modal1").removeClass("is-active");
});

// Function to randomly select a restaurant from an array
// After we have gotten our user's choices from foursquare, 
// Feeling lucky submit button
// Try Again? Start Over?


// Function that fetches map of restaurant's latitude and longitude - run with mapquest and at the time of submission


// Function for pop-up modal that displays restaurant, address, map of surrounding area

// Function for pop-up modal that displays random restaurant info
