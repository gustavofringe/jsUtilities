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
 *
 *
 */
var screen = document.querySelector('#screen');
var numbers = screen.innerHTML;
var operations = [];
var buttons = document.querySelectorAll('#calculator table input');
/*var calculate = function (button) {
    if (button == '±') {
        for (let l = 0; l < numbers.length; l++)
            numbers[l] = -numbers[l];
    } else if (button == 'CE') {
        numbers = [];
        operations = [];
    } else if (button == '←') {
        if (numbers.length >= operations.length) {
            numbers.pop();
        }
    } else if (button == '=') {
        for (let i = 0; i < operations.length; i++) {
            if (operations[i] == '+') {
                numbers[0] += numbers[i + 1].pop();
            }
            else if (operations[i] == '-') {
                numbers[0] -= numbers[i + 1].pop();
            }
            else if (operations[i] == '×') {
                numbers[0] *= numbers[i + 1].pop();
            }
            else if (operations[i] == '÷'){
                numbers[0] /= numbers[i + 1].pop();
            }
            else if (operations[i] == '%') {
                numbers[0] %= numbers[i + 1].pop();
            }
        }
        for (let k = 0; k < numbers.length; k++) {
            screen.innerHTML += numbers[k] + operations[k];
        }
    }
}*/
for (var j = 0; j < buttons.length; j++) {
    /*console.log(buttons[j].value)*/
    buttons[j].addEventListener('click', function () {
        console.log(this.value)
        /*console.log(calculate(this.value))*/
    });

}
/**
 * pair game
 *
 *
 * */
var image = document.querySelectorAll('#dog .card-front');
var flip = document.querySelectorAll('#dog .card-effect');
var back = document.querySelectorAll('#dog .card-back');
var color = ['red', 'FireBrick', 'DodgerBlue', 'DimGrey', 'DeepSkyBlue', 'Green', 'HotPink'];

var choice = [];
var classes = [];
var cardComputer;

for (let i = 0; i < image.length; i++) {
    var changeColor = color[Math.floor(Math.random() * color.length)];
    back[i].style.backgroundColor = changeColor;
    image[i].addEventListener('click', function () {
        flip[i].classList.add('flip');
        classes.push(flip[i]);
        choice.push(back[i].style.backgroundColor)
        console.log(choice)
        //choice.push(changeColor);
        //computer();
        if(classes.length === 3){
            classes.splice(0,2);
        }
        if(choice.length === 2){
            for (let j=0;j<choice.length;j++){
                if(choice[j] !== choice[1]){
                    setTimeout(function(){
                        console.log(classes)
                        classes[0].classList.remove('flip');
                        classes[1].classList.remove('flip');

                    },1500)
                    console.log(choice)
                }

            }
            choice.splice(0,2);
        }



    });
}
/**
 *
 * function computer
 * @return computer choice
 *
 */
var computer = function () {
        cardComputer = flip[Math.floor(Math.random() * flip.length)];
        var changeColorC = color[Math.floor(Math.random() * color.length)];
        var backC = back[Math.floor(Math.random() * back.length)];
        cardComputer.classList.add('flip');
        choice.push(changeColorC);
        backC.style.backgroundColor = changeColorC;
}
