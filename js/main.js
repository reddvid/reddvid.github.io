/* SCROLL */
$('#view-more').on('click', function() {
    const images = $('#main-content').position().top;

    $('html, body').animate({
        scrollTop: images
    }, 900);
});



/* OPEN NAV */
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

/* CLOSE NAV */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
} 

/* APPS CLICK */
function itemClick(appId) {
    window.open('https://www.microsoft.com/store/apps/' + appId, '_blank');
}

function menuItemClick(station) {
  var url;
  if (station == "batac") {
    url = "http://87.98.130.255:" + 8469;
  }

  document.getElementById("footer").innerHTML = 
   "radiostream = \"http:\/\/87.98.130.255:8469\"; artwork = \"http:\/\/html5radios.svnlabs.com\/radio2014\/images\/logo.png\"; width = \"320\";      height = \"200\"; title = \"Test Title\"; artist = \"Test Artist\"; source =      \"shoutcast\"; autoplay = \"true\"; artwork =      \"http:\/\/html5radios.svnlabs.com\/radio2014\/images\/logo.png\";"
  
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
          /*make an HTTP request using the attribute value as the file name:*/
          xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
              if (this.readyState == 4) {
                  if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                  if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                  /*remove the attribute, and call this function once more:*/
                  elmnt.removeAttribute("w3-include-html");
                  includeHTML();
              }
          }
          xhttp.open("GET", file, true);
          xhttp.send();
          /*exit the function:*/
          return;
      }
  }
}

