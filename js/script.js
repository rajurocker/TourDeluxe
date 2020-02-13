console.log('Accommodation');




// This is functioning the second page where you click the dates on the calendar
$("#startDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true,
  minDate: new Date(),
  maxDate: '+1y',
  onSelect: function(date){

      var selectedDate = new Date(date);
      var msecsInADay = 86400000;
      var stDate = new Date(selectedDate.getTime() + msecsInADay);

     //Set Minimum Date of EndDatePicker After Selected Date of StartDatePicker
      $("#endDate").datepicker( "option", "minDate", stDate );
      var enDate = new Date(selectedDate.getTime() + 15 * msecsInADay);

      $("#endDate").datepicker( "option", "maxDate", enDate );
  }
});

$("#endDate").datepicker({
  dateFormat: 'yy-mm-dd',
  changeMonth: true
});









// This targets the carousel to swap images on the fourth page

var swiper = new Swiper ('.swiper-container', {
      effect: 'flip',
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });










//   Displays the cards for the rooms

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btns = document.getElementById("myBtnContainer");
var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    // current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}













//   Shows a pop up modal

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});















// This is the google map 

// $('#map').hide();
// $('#home').show();

// $(document).ready(function(){
//   // $('#heading').click(function(){
//   //   $(this).hide();
//   // });
//   $('#mapBtn').click(function(){
//     $('#home').hide();
//     $('#map').show();
//     // initMap();
//   });
//   $('#homeBtn').click(function(){
//     $('#map').hide();
//     $('#home').show();
//   });



// });

// var map;
function initMap() {

  // The location of Uluru
var wellington = {lat:-41.2865, lng: 174.7762};
// var christchurch ={lat:-43.5321  ,lng: 172.6362 };
// var auckland = {lat:-36.8485  ,lng: 174.7633};
// var napier = {lat:-41.134408 ,lng: 174.840535};
// var place = {lat: -41.294906 ,lng: 174.782870};


  // The map, centered at Uluru
  //Never call the map object inside the loop
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 6, center: wellington});


  // The marker, positioned at Uluru
  // var marker1 = new google.maps.Marker({position: wellington, map: map});
  // var marker2 = new google.maps.Marker({position: christchurch, map: map});
  // var marker3 = new google.maps.Marker({position: auckland, map: map});
  // var marker4 = new google.maps.Marker({position: napier, map: map});
  // var marker5 = new google.maps.Marker({position: place, map: map});

  var contentString1 = '<div id="content" class="bg-success text-primary">'+
          '<h1 id="firstHeading" class="firstHeading">Wellington</h1>'+
        '<div id="bodyContent">'+
        '<h3><b>Wellington i-SITE Visitor Information Centre</h3>'+
        '<h6>111 Wakefield Street</br>Te Aro 6011</br>Wellington</br>New Zealand</br>'+
        'Phone: +64 4 8024860</br>Email: bookings@wellingtonnz.com</br></h6>'+
        '<h3>Opening hours </h3>'+
        '<h6>Monday to Friday: 8.30am - 5pm</br>Saturday and Sunday: 9am - 5pm</b></h6>'+
        '</div>'+
        '</div>';

    var infowindow1 = new google.maps.InfoWindow({
      content: contentString1
    });

    var marker1 = new google.maps.Marker({
      position: wellington,
      map: map,
      title: 'Wellington'
    });
    marker1.addListener('click', function() {
      infowindow1.open(map, marker1);
    });





}




















