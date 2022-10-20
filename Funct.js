function insert() {
    var src = document.getElementById("image");
    var img = document.createElement("img");
    img.src = "dog.jpg";
    img.id = "imgn";
    src.appendChild(img);
}

function changeImage() {
    var image = document.getElementById('imgn');
    if (image.src.match("dog")) {
        image.src = "cat.jpg";
    } else {
        image.src = "dog.jpg";
    }
}