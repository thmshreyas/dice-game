function dice() {
    var s = Math.floor(Math.random() * 6) + 1;
    var s1 = Math.floor(Math.random() * 6) + 1;

    if (s > s1) {
        document.querySelector("h1").innerHTML = "Player 1 wins";
    } else if (s < s1) {
        document.querySelector("h1").innerHTML = "Player 2 wins";
    } else {
        document.querySelector("h1").innerHTML = "Tie game";
    }

    document.querySelectorAll("img")[1].setAttribute("src", "dice" + s + ".png");
    document.querySelectorAll("img")[2].setAttribute("src", "dice" + s1 + ".png");
}
