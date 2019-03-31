function renderUser(doc){
    var div = document.createElement("div");
    var name = document.createElement("div");
    
    name.innerHTML = doc.data().username;
    name.id = 'result-text';
    div.id = "result-box";
    div.onclick = function () {
        window.location.pathname = "/stats/userstats.html#" + doc.data().username;
    };
    div.appendChild(name);

    document.getElementById('searchResults').appendChild(div);
}

function updateSearch(value){
    
}