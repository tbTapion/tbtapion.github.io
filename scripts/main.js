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
    
    var hash = window.location.hash.substring(1);
    console.log(hash);
    if(hash =="amqstats"){
        document.getElementById("amqstats").hidden = false;
        document.getElementById("home").hidden = true;
    }else{
        document.getElementById("amqstats").hidden = true;
    }
}

function changepage(event){
    var element = event.target || event.srcElement;
    console.log(element);
    var type = element.id
    console.log(type);
    if(type == "link-home"){
        document.getElementById("amqstats").hidden = true;
        document.getElementById("home").hidden = false;
    }else if(type == "link-stats"){
        document.getElementById("amqstats").hidden = false;
        document.getElementById("home").hidden = true;
    }
}