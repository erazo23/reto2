document.getElementById("profile").onclick = () => {
    document.getElementById("profile").style.display = "none";
    document.getElementById("sharing").style.display = "flex";
}

document.getElementById("sharing").onclick = () => {
    document.getElementById("sharing").style.display = "none";
    document.getElementById("profile").style.display = "flex";
}

