function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    setTimeout(function() {
        alert("Falemnderit për vërtetimin! Dëshironi të kaloni te faqja për kyçje?")
        setTimeout(function() {
            window.location.replace("kycu.html");
        }, 1500);
    }, 1000);
}