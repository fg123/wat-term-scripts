var imported = document.createElement('script');
imported.src = 'jquery-3.2.1.min.js';
document.head.appendChild(imported);

function done() {
    parent.postMessage("done " + id, "*");
}
function receiveMessage(event) {
    var parts = event.data.split(" ");
    if (parts[0] == "id") {
        id = parts[1];
    }
}
window.addEventListener("message", receiveMessage, false);

$(document).ready(function() {
    var cKey = 67;
    $(document).keydown(function(e) {
        console.log(e);
        if (e.ctrlKey && e.keyCode == cKey) {
            done();
            console.log("Control c pressed");
        }
    });
});