let listElements=document.querySelectorAll('.lista-boton--click');
listElements.forEach(listElement => {
    listElement.addEventListener('click',()=>{
        listElement.classList.toggle('arrow');
        let height=0;
        let menu= listElement.nextElementSibling;
        if(menu.clientHeight=="0"){

            height=menu.scrollHeight;
        }
        menu.style.height= `${height}px`;
    })
});