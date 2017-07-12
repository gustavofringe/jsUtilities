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
    next.onclick = function(){
        if(index){
            clearTimeout(slide);
            x[index - 1].style.display = "none";
            x[index].style.display = "block";
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
 *
 */
var input = document.getElementById('screen');
var buttons = document.querySelectorAll('#calculator table input');
var numbers = [];
var calculate = function() {
    if(button === 'CE'){
        return numbers = [];
    }else if(button === '±'){
        return numbers = -numbers;
    }else if(button === '←'){
        return numbers.pop();
    }else if(button === '%'){
        return numbers = numbers+numbers/100;
    }
    if(button === '+'){
        numbers.push(button) ;
    }
    console.log(numbers)
    input.innerHTML += button.value
}
for(var i =0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        calculate()
    })
}
/**
 * pair game
 *
 *
 * */
var image = document.querySelectorAll('#dog .dog');
var flip = document.querySelectorAll('#dog .card-effect');
var back = document.querySelectorAll('#dog .card-back');
var color = ['red', 'FireBrick', 'DodgerBlue', 'DimGrey', 'DeepSkyBlue', 'Green', 'HotPink'];
var choice = [];

for (let i= 0; i<image.length;i++) {
    image[i].addEventListener('click', function () {
        var changeColor = color[Math.floor(Math.random()*color.length)];
        flip[i].classList.add('flip');
        console.log(flip[i])
        back[i].style.backgroundColor = changeColor;
        choice.push(changeColor);
        computer();
    });
}
/**
 *
 * function computer
 * @return computer choice
 *
 */
var computer = function(){
        var cardComputer = flip[Math.floor(Math.random() * flip.length)];
        var changeColorC = color[Math.floor(Math.random() * color.length)];
        cardComputer.classList.add('flip');
        console.log(back)
    choice.push(changeColorC)
    console.log(choice)
    back.style.backgroundColor = changeColorC
}
