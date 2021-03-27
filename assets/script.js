// MapQuest API
// clientSecret = "77gRNKAyNsP05LND";
// key = "U5hUKGkBeBR1qSw1yecgBx0flv6hjfMR";

var submitButton = document.getElementsByClassName("submit")
var cityName = $("#cityName")
var CLIENT_ID =  "SQM3255VG0KCQPCFOPM5RF1S3S22Q2BMNV3OUZEHT4QIQA2H"
var CLIENT_SECRET = "1NDCPEPMM5FJQV4HHXKQOLFGHOD54VE2DBSKFG41CUQBHLJ4"
var radiusSelect = $("select#radius").val()
var currentLocation = '';
var mapquestAPI = 'http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=Washington,DC';
var foodCategory = [];
// Restaurant selector
L.mapquest.key = "U5hUKGkBeBR1qSw1yecgBx0flv6hjfMR";
var map = L.mapquest.map("map", {
  center: [40.731701, -73.993411],
  layers: L.mapquest.tileLayer("map"),
  zoom: 14,
});
$("#mexican").click(function (event) {
  var categoryType = $(this).attr("value");
  foodCategory.push(categoryType);
});
$("#italian").click(function (event) {
  var categoryType = $(this).attr("value");
  foodCategory.push(categoryType);
});
$("#ethiopian").click(function (event) {
  var categoryType = $(this).attr("value");
  foodCategory.push(categoryType);
});
$("#asian").click(function (event) {
  var categoryType = $(this).attr("value");
  foodCategory.push(categoryType);
});
$("#cafe").click(function (event) {
  var categoryType = $(this).attr("value");
  foodCategory.push(categoryType);
});
$("#palestinian").click(function (event) {
  var categoryType = $(this).attr("value");
  foodCategory.push(categoryType);
});

// Function to fetch restaurants based on user-specified criteria
// use categoryIds
$(submitButton).click(function(event) {
  event.preventDefault();
  var city = cityName.val();
  console.log(city);
  L.mapquest.geocoding().geocode([city], function (error, result) {
    console.log(result);
    currentLocation = result.results[0].locations[0].latLng;
    console.log(currentLocation);
    restaurantsByCategory();
    
  });
});

function restaurantsByCategory() {
  var location = `${currentLocation.lat}, ${currentLocation.lng}`;
  console.log(currentLocation);
  map.setView(currentLocation)
  var radius = 8046;
  if (foodCategory.length === 0) {
    foodCategory.push('4bf58dd8d48988d1c1941735');
  }
  $.ajax({
    dataType: "json",
    url: `https://api.foursquare.com/v2/venues/explore?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20180323&categoryId=${foodCategory.join(',')}&limit=10&ll=${location}&radius=${radius}`,
    success: function( data ) {
      // Code for handling API response
    $('.modal-card-body').html();
    // all restaurants
     var restaurants = data.response.groups[0].items;
     // city equivalent
     var locationFromData = data.response.headerLocation;
     var filterBy = data.response.suggestedFilters.filters;
     console.log(restaurants, location, filterBy);
     $(".modal").addClass("is-active")

    //  if (feelingLucky) {
    //    restaurants[0]
    //  }
      L.mapquest.geocoding().geocode(restaurants[0].venue.location.formattedAddress.join(','));
      $('.modal-card-body').append(`
        <div class="restaurant-name">${restaurants[0].venue.name}</div>
        <div class="restaurant-address">${restaurants[0].venue.location.formattedAddress}
      `);
    //  restaurants.forEach((restaurant) => {
    //    var currentRestaurant = restaurant.venue;
    //    var restaurantAddress = currentRestaurant.location;
    //    var restaurantName = currentRestaurant.name;
    //   $('.modal-card-body').html(`
    //   <div class="restaurant-name">${restaurantName}</div>
    //   `);
    //  })
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
