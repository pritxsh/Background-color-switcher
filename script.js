let light = document.getElementById("light");
let dim = document.getElementById("dim");
let dark = document.getElementById("dark");

light.addEventListener("click", function () {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    // console.log("clicked light");
})

dim.addEventListener("click", function () {
    document.body.style.backgroundColor = "rgb(254,222,200)";
    document.body.style.color = "black";
})

dark.addEventListener("click", function () {
    document.body.style.backgroundColor = "rgb(29,33,37)";
    document.body.style.color = "white";
    // console.log("clicked dark");
})

