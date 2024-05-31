function me(target) {
    let element;
    if(target && target instanceof Event) element = target.target;
    else element = document.currentScript.parentElement;

    element.on = function(name, callback) {
        element.addEventListener(name, callback);
    }
    
    return element;
}