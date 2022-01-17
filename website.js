let scrollingY = window.scrollY;
let btn = document.getElementById("topButton");
const videos = [
    "https://www.youtube-nocookie.com/embed/7TDW9n0EZXg?start=12&controls=0&showinfo=0&autoplay=1&mute=1&rel=0",
    "https://www.youtube-nocookie.com/embed/tCmxNrBOPP8?start=11&controls=0&showinfo=0&autoplay=1&mute=1&rel=0",
    "https://www.youtube-nocookie.com/embed/htLlJwQ8qCg?start=3&controls=0&showinfo=0&autoplay=1&mute=1&rel=0",
    "https://www.youtube-nocookie.com/embed/Y9f5YF6GFB0?start=9&controls=0&showinfo=0&autoplay=1&mute=1&rel=0",
    "https://www.youtube-nocookie.com/embed/b9EDEDlGK_M?start=20&controls=0&showinfo=0&autoplay=1&mute=1&rel=0",
    "https://www.youtube-nocookie.com/embed/qsn3tOLzf3g?start=17&controls=0&showinfo=0&autoplay=1&mute=1&rel=0",
    "https://www.youtube-nocookie.com/embed/TsVUGCZIkRs?start=1&controls=0&showinfo=0&autoplay=1&mute=1&rel=0"
];
window.onscroll = function() {
    scrollFunction();
    scrollingY = window.scrollY;
};

window.onload = function() {
    btn.style.transitionDuration = "0.6s"
    const randomElement = videos[Math.floor(Math.random() * videos.length)];
    document.getElementById("mainVideo").src = randomElement;
}

function scrollFunction() {
    if (window.scrollY > 0) {
        header.classList.add("header-background");
        btn.style.display = "block";
        btn.style.backgroundColor = "#000";
        btn.style.color = "#fff";
        btn.style.opacity = "0.5";
    } else {
        header.classList.remove("header-background");
        btn.style.backgroundColor = "transparent";
        btn.style.color = "transparent";
        btn.style.opacity = "0";
    }

}

function scrollToInformation() {
    const element = document.getElementById("informationSection");
    console.log(window)
    element.scrollIntoView({
        behavior: "smooth"
    })
    stop()
}

function topFunction() {
    const scrollStatus = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollStatus > 0) {
        window.requestAnimationFrame(topFunction);
        window.scrollTo(0, scrollStatus - scrollStatus / 15);
    }
}