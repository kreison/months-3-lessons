let innInput = document.querySelector('#innInput'),
    innBtn = document.querySelector('#innBtn'),
    innResult = document.querySelector('#innResult')
let child = document.getElementsByClassName('child');
let move = document.getElementsByClassName('move')
let reset = document.getElementById('reset')

const innRegExp = /^(0|1|2|3)\d{13}$/

innBtn.addEventListener('click', () => {
    // e.preventDefault()
    if(innRegExp.test(innInput.value)){
        innResult.innerText = 'Success';
        innResult.style.color = 'green'
    } else {
        innResult.innerText = 'Failed';
        innResult.style.color = 'red'
    }
})
let num = 0;
function right(){
    num++
    if (child[0].style.left !== '1700px'){
        child[0].style.left = num + "px"
        return right()
    }

}
move[0].addEventListener('click', right)
reset.addEventListener('click', ()=>{
    child[0].style.left = '0'
})