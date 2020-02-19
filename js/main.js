

let myJson;

/* LOAD GLOBAL JSON APP LIST */
function load_json() {
    var request = new XMLHttpRequest();
    request.open("GET", "../../assets/apps.json", true);
    request.onload = function (e) {
        if (request.readyState === 4) {
            if (request.status === 200) {
                myJson = request.responseText;
                console.log(myJson);
            } else {
                console.error(request.statusText);
            }
        }
    };

    request.onerror = function (e) {
        console.error(request.statusText);
    };

    request.send(null);
}

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

/* LOAD APP INFO */
function app_click(appId) {
    var app_name = document.getElementById("app-name");
    var app_icon = document.getElementById("app-icon");
    var app_desc = document.getElementById("app-desc");

    console.log(appId);

    var app_list = JSON.parse(myJson);

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

    setButtonEvents(appId);
}

function android_click(appId) {
    var app_name = document.getElementById("app-name");
    var app_icon = document.getElementById("app-icon");
    var app_desc = document.getElementById("app-desc");
    
    var app_list = JSON.parse(myJson);

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

    setAndroidButtonEvents(appId);
}

function setAndroidButtonEvents(appId) {
    var view_in_store = document.getElementById("btn-full");
    var btn_dl = document.getElementById("btn-download");

    console.log(navigator.userAgent());
    if (!navigator.userAgent.includes("Android")) {
        btn_dl.style.display = "none";
    }

    view_in_store.onclick = function () {
        window.open('https://play.google.com/store/apps/details?id=xyz.reddvid.' + appId, '_blank');
    };
    btn_dl.onclick = function () {
        window.open('"market://details?id=xyz.reddvid.' + appId, '_blank');
    };
}

function setButtonEvents(appId) {
    var view_in_ms = document.getElementById("btn-full");
    var btn_dl = document.getElementById("btn-download");


    if (!navigator.userAgent.includes("Windows NT 10")) {
        btn_dl.style.display = "none";
    }

    view_in_ms.onclick = function () {
        window.open('https://www.microsoft.com/store/apps/' + appId, '_blank');
    };
    btn_dl.onclick = function () {
        window.open('ms-windows-store:pdp?productid=' + appId, '_blank');
    };
}

function show_html() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    elmnt.removeAttribute("w3-include-html");
                    show_html();
                }
            };
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
}

function dl_cv() {
    window.open('https://1drv.ms/b/s!AngBQuA6rJL-oMhST6Si8ygpQqClng', '_blank');
}

function hide_name() {
    document.getElementById("name-item").style.display = "none";
}