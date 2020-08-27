var x = document.getElementById("profile")
var y = document.getElementById("sharing")

var share1 = document.getElementById("share1")
var share2 = document.getElementById("share2")

console.log(x)
console.log(y);

console.log(share1);
console.log(share2);


function compartir1(j,k) {
    
    j.style.display="none";
    k.style.display="flex";
}

function compartir2(j,k) {
    j.style.display="flex";
    k.style.display="none";
}

share1.onclick = function (x,y) {
    compartir1()
};

share2.onclick = function (x,y) {
    compartir2()
};

// share2.onclick = compartir2(this.x,this.y);


