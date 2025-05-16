const routes = {
    "/": {
        restricted : false
    },
    "/create": {
        restricted : false
    },
    "/tournament": {
        restricted: true,
        redirect : "/"
    },
}

const appState = window.appState;
const url = new URL(window.location.href);

Object.keys(routes).forEach((key) => {
    if(url.pathname.startsWith(key)) {
        if(routes[key].restricted && !appState.tournament) {
            window.location.replace(routes[key].redirect)
        }
    }
})

window.router = {
    replace(target) {
        window.location.replace("/mkth"+target);
    }
}