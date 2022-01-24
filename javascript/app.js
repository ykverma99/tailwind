const menu = document.getElementById('menu')
const list = document.getElementById('list')

menu.addEventListener('click', ()=>{
    if(list.classList.contains('hidden')){
        list.classList.remove('hidden')
        // list.classList.add('')
    }else{
        list.classList.add('hidden')
        // list.classList.remove('visible')
    }
})