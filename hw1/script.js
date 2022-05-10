let innBtn = document.querySelector('#innBtn'),
    innResult = document.querySelector('#innResult')
let child = document.getElementsByClassName('child');
let move = document.getElementsByClassName('move')
let reset = document.getElementsByClassName('reset')
let inputs = document.querySelectorAll('.ud')

const innRegExp = /^(1|2)\d{13}$/

innBtn.addEventListener('click', () => {
    let innInput = document.querySelector('#innInput')
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
reset[0].addEventListener('click', ()=>{
    child[0].style.left = '0'
})
for (item of inputs){
    item.addEventListener('mousedown', (e)=>{
        e.currentTarget.classList.add('mousedown')
    })
}for (item of inputs){
    item.addEventListener('mouseup', (e)=>{
        e.currentTarget.classList.remove('mousedown')
    })
}