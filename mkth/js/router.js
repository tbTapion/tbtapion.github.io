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

const appState = new AppState();
const url = new URL(window.location.href);

Object.keys(routes).forEach((key) => {
    if(url.pathname.startsWith(key)) {
        if(routes[key].restricted) {
            window.location.replace(routes[key].redirect)
        }
    }
})