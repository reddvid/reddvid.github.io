document.getElementById("preview").style.display = "none";

var sonRadio = document.getElementById("son");
var soffRadio = document.getElementById("soff");

var fwdpwr = document.getElementById("fwd").value;
var refpwr = document.getElementById("ref").value;

//Check time of day
var now = new Date();
var hour = now.getHours();
var minutes = now.getMinutes();
var dateToday = getDate(); //now.toDateString();
var dateYesterday = getYesterday();

console.log(hour + "  " + minutes + "  " + dateToday);

if (hour >= 5 && hour < 8) {
    sonRadio.checked = true;
}
else {
    soffRadio.checked = true;
}



////

function fallbackCopyTextToClipboard(text) {

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}

function getDate() {
    var date = new Date();
    var year = date.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var month = date.getMonth() + 1;
    month = monthNames[date.getMonth()];

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return month + " " + day + ", " + year;
}

function getYesterday() {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    var year = date.getFullYear();

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var month = date.getMonth() + 1;
    month = monthNames[date.getMonth()];

    var day = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return month + " " + day + ", " + year;
}

function generateContent(x, f, r) {
    var greeting = (x == "son") ? "Morning" : "Evening";
    var day = (x == "son") ? dateToday : dateYesterday;
    var data = (x == "son") ? "TX On: 0500H\nSign On: 0530H" : "TX Off: 0000H\nSign Off: 0005H";
    document.getElementById("textpreview").innerText =
        "Good " + greeting + " Team\nDate: " +
        day + "\nStation: DZKB-TV (TV-9 Manila)\n" +
        data + "\nFwd. Pwr.: " + f +
        " kW\nRfld. Pwr.: " + r + " W\nEOD: David Ballesteros";

    document.getElementById("preview").style.display = "table";

    var copyBtn = document.querySelector(".copysmall");
    copyBtn.addEventListener('click', function (event) {
        copyTextToClipboard(document.getElementById("textpreview").innerText);
    });
}

function calculate(x) {
    var fwdpwr = document.getElementById("fwd").value;
    var refpwr = document.getElementById("ref").value;

    var s = Math.sqrt(refpwr / (fwdpwr * 1000));
    document.getElementById("vswr").innerText =
        "VSWR: " + ((1 + s) / (1 - s)).toFixed(2) + ":1";

    generateContent(x, fwdpwr, refpwr);
}

function validate() {
    var fwdpwr = document.getElementById("fwd").value;
    var refpwr = document.getElementById("ref").value;

    var btn = document.querySelector('input[name="mod"]:checked').value;

    if (btn == "son")
        isSignOn = true;
    else
        isSignOn = false;

    console.log(btn + "  " + fwdpwr + "  " + refpwr);

    if ((fwdpwr >= 45 && fwdpwr <= 64) && (refpwr >= 31 && refpwr <= 200)) {
        calculate(btn);
    } else {
        //
    }


}