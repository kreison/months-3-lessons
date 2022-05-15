// const funk = (hz)=>{
//     return function (hz2) {
//         return hz + hz2
//     }
// }
// let addOne = funk(50);
// let addTen = funk(100);
// console.log(addOne(60));
// console.log(addTen(800));
const block = document.querySelector('.child');
let position = 0;
let topPosition = 0;
let positionLeft = 350;
let bottomPosition = 350;
const move = ()=>{

    if (position < 350 ){
        position++;
        block.style.left = `${position}px`;
        setTimeout(()=>{
            move()
        }, 2)
    }
    else if (topPosition < 350 && position >= 350){
        topPosition++;
        block.style.top = `${topPosition}px`;
        setTimeout(()=>{
            move()
        }, 2)
    }

    else if (topPosition >= 350 && position >= 350 && positionLeft >= -10){
        positionLeft--
        block.style.left = `${positionLeft}px`
            setTimeout(()=>{
            move()
        }, 2)
    }
    else if (topPosition >= 350 && position >= 350 && positionLeft <= -10 && bottomPosition >= -0){
        bottomPosition--;
        position = 352
        block.style.top = `${bottomPosition}px`
        setTimeout(()=>{
            move();
        }, 2)
    }
    if(bottomPosition <= -0){
        position = 0;
        topPosition = 0;
        positionLeft = 350;
        bottomPosition = 350;
    }

}
move();