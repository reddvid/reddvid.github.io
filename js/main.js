function menuItemClick(station) {
  var url;
  if (station == "batac") {
    url = "http://87.98.130.255:" + 8469;
  }

  document.getElementById("footer").innerHTML = 
   "radiostream = \"http:\/\/87.98.130.255:8469\"; artwork = \"http:\/\/html5radios.svnlabs.com\/radio2014\/images\/logo.png\"; width = \"320\";      height = \"200\"; title = \"Test Title\"; artist = \"Test Artist\"; source =      \"shoutcast\"; autoplay = \"true\"; artwork =      \"http:\/\/html5radios.svnlabs.com\/radio2014\/images\/logo.png\";"
  
}
