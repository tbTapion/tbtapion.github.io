function setupdependencies(){
    var fileref=document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src", "https://www.gstatic.com/firebasejs/5.9.2/firebase.js");
    var fileref2=document.createElement('script');
    fileref2.setAttribute("type","text/javascript");
    fileref2.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js");
}

function init(){
    setupdependencies();
    var config = {
        apiKey: "AIzaSyD8CBsKmAom07TW_0BCYvoR3Wa0Z1sHXFo",
        authDomain: "amqstats.firebaseapp.com",
        databaseURL: "https://amqstats.firebaseio.com",
        projectId: "amqstats",
        storageBucket: "amqstats.appspot.com",
        messagingSenderId: "327250267342"
      };
      firebase.initializeApp(config);
    
    var hash = document.location.hash;
    document.getElementById("amqstats").hidden = (hash == "amqstats");
    document.getElementById("home").hidden = (hash == "amqstats");
}