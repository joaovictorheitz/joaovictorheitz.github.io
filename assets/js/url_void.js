window.addEventListener("hashchange", function() {
    history.replaceState("", "", location.pathname)
})