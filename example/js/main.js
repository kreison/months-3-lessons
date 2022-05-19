const tabs = document.querySelectorAll('.tabheader__item');
const tabsParent = document.querySelectorAll('.tabheader__items');
const tabContent = document.querySelectorAll('.tabcontent');

const hideTabContent = () =>{
    tabContent.forEach((item)=>{
        item.style.display = 'none';
    })
    tabs.forEach((item)=>{
        item.classList.remove('tabheader__item_active');
    })
};
hideTabContent()
const showTabContent = (i = 0)=>{
    tabContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active')
}
showTabContent()
const intervalSliderTab = ()=>{
    let index = 0;
    setInterval(()=>{
        if (index === 3){
            index = 0;
        }
        else{
            index++
        }
        hideTabContent()
        showTabContent(index)

    }, 1000)
}
intervalSliderTab()
tabsParent.forEach(item=>{
    item.addEventListener('click', (event)=>{
        const target = event.target;
        if (target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) =>{
                if (target === item){
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })
})

const body = document.getElementsByTagName('html')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
window.addEventListener('scroll', ()=> {
    // if (body.scrollTop === )
    if (document.body.clientHeight - body[0].clientHeight === body[0].scrollTop){
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        modalClose.addEventListener('click', ()=>{
            modal.style.display = 'none';
            document.body.style.overflow = 'visible';
        });
    } else{


    }
})