/**
 *
 *slider
 *
 **/
var index = 0;
var previous = document.getElementById('prev');
var next = document.getElementById('next');
/**
 * function slide
 * @return silde of image automatic and manual
 *
 */
function slide() {
    var x = document.getElementsByClassName("slider");
    var y = document.querySelectorAll('.point');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        y[i].style.opacity = 0.5;
    }
    index++;
    if (index > x.length) {
        index = 1
    }
    x[index - 1].style.display = "block";
    y[index - 1].style.opacity = 1;
    setTimeout(slide, 5000);
    next.onclick = function () {
        if (index) {
            clearTimeout(slide);
            x[index - 1].style.display = "none";
            x[index].style.display = "block";
        }
    }
    previous.onclick = function () {
        if (index) {
            clearTimeout(slide);
            x[index - 1].style.display = "none";
            x[index - 2].style.display = "block";
        }
    }
}
slide();
/**
 *
 * calculator
 *
 * */
var display = document.getElementById('display');
var c = function(value){
    display.value = value;
}
var math = function(value){
    display.value += value;
}
var egal = function(){
    c(eval(display.value))
}
var square = function(){
    display.value *= display.value
}
var squareRoot = function(){
    display.value = Math.sqrt(display.value)
}
var slice = function(){
    display.value = display.value.slice(0,-1)
}
/**
 * pair game
 *
 *
 * */
/**
 * variable
 * @type {NodeList}
 */
var image = document.querySelectorAll('#dog .card-front');
var flip = document.querySelectorAll('#dog .card-effect');
var back = document.querySelectorAll('#dog .card-back');
var color = ['Red','Red', 'Blue', 'Blue', 'Green', 'Green', 'Bisque', 'Bisque', 'HotPink', 'HotPink', 'MediumPurple', 'MediumPurple', 'IndianRed', 'IndianRed'];
var end = document.getElementById('end');
var choice = [];
var classes = [];
var win = [];


/**
 * random of color
 * @type {Array.<string>}
 */
var changeColor = color.sort(function(){return .5 - Math.random()});// random color
/**
 *
 * foreach image change color
 *
 */
for (let i = 0; i < image.length; i++) {
    back[i].style.backgroundColor = changeColor[i];// attribute color of card
    /**
     * function listen click foreach image
     */
    image[i].addEventListener('click', function () {
        win.push(back[i].style.backgroundColor);//push in array for the end of game
        flip[i].classList.add('flip');
        classes.push(flip[i]);
        choice.push(back[i].style.backgroundColor);
        if (classes.length === 3) {
            classes.splice(0, 2);
        }
        if (choice.length === 2) {
            for (let k=0;k<image.length;k++){
                if(!flip[k].classList.contains('flip')){
                    flip[k].classList.add('unclickable');
                }
            }
            for (let j = 0; j < choice.length; j++) {
                if (choice[j] !== choice[1]) {
                    setTimeout(function () {
                        classes[0].classList.remove('flip');
                        classes[1].classList.remove('flip');

                    }, 1000);
                }

            }
            choice.splice(0, 2);
        }
        for (let h=0;h<image.length;h++){
            if(!flip[h].classList.contains('flip')){
                setTimeout(function(){flip[h].classList.remove('unclickable')},1500);
            }
        }
        /**
         *
         * push array for launch replay button
         *
         */
        if(win[0].length !== win[1].length){
            win.splice(0,2);
        }else if (win[2].length !== win[3].length){
            win.splice(2,4);
        }else if (win[4].length !== win[5].length){
            win.splice(4,6);
        }else if (win[6].length !== win[7].length){
            win.splice(6,8);
        }else if (win[8].length !== win[9].length){
            win.splice(8,10);
        }else if (win[10].length !== win[11].length){
            win.splice(10,12);
        }else if (win[12].length !== win[13].length){
            win.splice(12,14);
        }
        if(win.length === 14){
            end.insertAdjacentHTML('afterbegin', '<button id="replay" onClick="window.location.reload()">Rejouer</button>');
        }
    });
}

