let stars = document.getElementsByClassName("star");
let trackRating = 0;

function rate(n) {
    if (n === trackRating) {
     trackRating = 0;
    } else {
     trackRating = n;
    }
    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove("highlight-star");
    }
    for (let i = 0; i < trackRating; i++) {
        stars[i].classList.add("highlight-star");
    }
}

function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show-nav");
}
