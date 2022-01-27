let button = document.getElementById("navbar_mobile");
let open = false;
document.getElementById("hamburger_button").addEventListener("click", () => {
    console.log(button.style.left);
    if (open)
        button.style.left = "100%";
    else if (!open)
        button.style.left = "0%";
    open = !open;
})