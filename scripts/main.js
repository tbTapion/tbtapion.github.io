function renderUser(doc){
    var div = document.createElement("div");
    var name = document.createElement("div");
    var games = document.createElement("div");
    
    name.innerHTML = doc.data().username;
    games.innerHTML = "Games played: " + doc.data().numberofgames;
    name.id = 'result-text';
    games.id = 'result-text2';
    div.id = "result-box";
    div.onclick = function () {
        window.location.href = "/stats/userstats.html#" + name.innerHTML;
        console.log(window.location.href);
    };
    div.appendChild(name);
    div.appendChild(games);

    document.getElementById('searchResults').appendChild(div);
}

function updateSearch(value){
    
}