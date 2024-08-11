var element = document.getElementById("done");
var text = element.innerText;
let txtlength = text.split(',').length
function PROJECTSLENGTH() {
    return txtlength;
}
document.getElementById("lengt").innerHTML = `(${txtlength})`;
