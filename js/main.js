/**
 *
 *slider
 *
 **/
var index = 0;
var previous = document.getElementById('prev');
var next = document.getElementById('next');
function slide() {
    var x = document.getElementsByClassName("slider");
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    index++;
    if (index > x.length) {
        index = 1
    }
    x[index - 1].style.display = "block";
    setTimeout(slide, 5000);
    console.log(x[index -2])
    console.log("instant"+index)
    next.onclick = function(){
        if(index){
            clearTimeout(slide);
            x[index - 1].style.display = "none";
            x[index].style.display = "block";
            console.log("next"+index);
        }
    }
    previous.onclick = function(){
        if(index){
            clearTimeout(slide);
            x[index -1].style.display = "none";
            x[index -2].style.display = "block";
        }
    }
}
slide();
/**
 *
 * calculator
 *
 *
 */

