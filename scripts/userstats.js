function renderUser(doc){
    var values = doc.data();
    var username = values.username;
    var correctguesses =values.correctguesses;
    var frommal = values.frommal;
    var numberofgames = values.numberofgames;

    document.getElementById("username").innerHTML = username;
    document.getElementById("correctguesses").innerHTML = correctguesses;
    document.getElementById("frommal").innerHTML = frommal;
    document.getElementById("numberofgames").innerHTML = numberofgames;
}