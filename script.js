let but=document.querySelector('button')
let body=document.querySelector("body")
let modal=document.querySelector('.modal_cont')
let cancel=document.querySelector('.fa')


but.addEventListener('click', ()=>{
    modal.classList.remove('invisible')
    but.classList.add('invisible')
    body.style.backgroundColor="rgba(0, 0, 0, 0.5)"
})

cancel.addEventListener('click', ()=>{
    modal.classList.add('invisible')
    but.classList.remove('invisible')
    body.style.backgroundColor="white"
}) 