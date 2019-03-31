function init(){
    loadFirebase();
    var hash = window.location.hash.substring(1);
    console.log(hash);
    if(hash =="amqstats"){
        document.getElementById("amqstats").hidden = false;
        document.getElementById("home").hidden = true;
    }else{
        document.getElementById("amqstats").hidden = true;
    }
}