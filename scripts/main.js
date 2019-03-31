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