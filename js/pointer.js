var pointer = document.querySelector(".pointer");

document.addEventListener("mousemove",
    function (e) {
        let x = e.clientX;
        let y = e.clientY;
        pointer.style.left = x + "px";
        pointer.style.top = y + "px";
});