function open_menu() {
    document.getElementById("sidenav").style.width = "100%";
}

/* CLOSE NAV */
function close_menu() {
    document.getElementById("sidenav").style.width = "0";
}

function hide_info() {
    var element = document.getElementById("app-info");
    var element2 = document.getElementById("info-area");
    if (getComputedStyle(element, null).display === "block") {
        element.style.display = "none";
        element2.style.display = "none";
    }
}

/* APPS CLICK */
function app_click(appId) {
    // Load app info
    var app_name = document.getElementById("app-name");
    var app_icon = document.getElementById("app-icon");
    var app_desc = document.getElementById("app-desc");

    console.log(appId);
    // Get json text
    var request = new XMLHttpRequest();
    request.open("GET", "../../assets/apps.json", false);
    request.send(null)
    var app_list = JSON.parse(request.responseText);

    for (var i = 0; i < app_list.length; i++) {
        var item = app_list[i];
        if (item["appid"].toLowerCase() == appId.toLowerCase()) {
            app_name.innerText = item["name"];
            app_desc.innerText = item["description"];
            app_icon.src = "../../images/icons/" + item["icon"];
            break;
        }
    }

    document.getElementById("app-info").style.display = "block";
    document.getElementById("info-area").style.display = "block";

    // window.open('https://www.microsoft.com/store/apps/' + appId, '_blank');
}

function show_html() {
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
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    show_html();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}