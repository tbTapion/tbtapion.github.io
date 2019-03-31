function renderUser(doc){
    var div = document.createElement("div");
    var name = document.createElement("div");
    
    name.innerHTML = doc.data().username;
    name.id = 'result-text';
    div.id = "result-box";
    div.appendChild(name);

    document.getElementById('searchResults').appendChild(div);
}

function updateSearch(value){
    
}