// MapQuest API
// clientSecret = "77gRNKAyNsP05LND";
// key = "U5hUKGkBeBR1qSw1yecgBx0flv6hjfMR";

var submitButton = document.getElementById("submit")
var zipCode = $("#zipcode")
var CLIENT_ID =  "SQM3255VG0KCQPCFOPM5RF1S3S22Q2BMNV3OUZEHT4QIQA2H"
var CLIENT_SECRET = "1NDCPEPMM5FJQV4HHXKQOLFGHOD54VE2DBSKFG41CUQBHLJ4"
var radiusSelect = $("select#radius").val()

var foodCategory = "4d4b7105d754a06374d81259"
// Restaurant selector

$("#mexican").click(function (event) {
  var categoryType = $(this).attr("value");
  foodCategory.concat(categoryType);
});
$("#italian").click(function (event) {
  var categoryType = $(this).attr("value");
  foodCategory.concat(categoryType);
});
$("#ethiopian").click(function (event) {
  var categoryType = $(this).attr("value");
  foodCategory.concat(categoryType);
});
$("#asian").click(function (event) {
  var categoryType = $(this).attr("value");
  foodCategory.concat(categoryType);
});
$("#cafe").click(function (event) {
  var categoryType = $(this).attr("value");
  foodCategory.concat(categoryType);
});
$("#palestinian").click(function (event) {
  var categoryType = $(this).attr("value");
  foodCategory.concat(categoryType);
});
// API CODES (now in values in HTML) mexican 4bf58dd8d48988d1c1941735 ethiopian 4bf58dd8d48988d10a941735 italian 4bf58dd8d48988d110941735 asian 4bf58dd8d48988d142941735 cafe 4bf58dd8d48988d16d941735 palestinian 4bf58dd8d48988d115941735
// Foursquare API
// Can't figure out how to search by zipcode just city, also can only search in meters so recommend changing values to match
$(submitButton).click(function (event) {
    event.preventDefault();
    locationSearch = zipCode.val();
    $.ajax({
    dataType: "json",
    url: `https://api.foursquare.com/v2/venues/explore?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&near="${locationSearch}"&v=20210324&limit=5&radius=${radiusSelect}&categoryId=${foodCategory}`,
    data: {locationSearch},
    success: function( data ) {
      // Code for handling API response
      console.log(data);
     var theCall = data;
    },
    })
})