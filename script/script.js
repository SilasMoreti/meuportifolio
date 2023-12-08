function verMais() {

    if(document.getElementById('ver-mais').style.display === 'flex') {
        document.getElementById('ver-mais').style.display = 'none'
        document.querySelector('#section-three').style.display = 'block'
    } else {
        document.getElementById('ver-mais').style.display = 'flex'
        document.querySelector('#section-three').style.display = 'none'
    }
}

const menuHamb = document.querySelector('.img-hamb')

menuHamb.addEventListener('click', () => {

    if (menuHamb.src.includes('/img/icons8-hamburger-menu.svg')) {
        menuHamb.src = '/img/icons8-close.svg'
        document.querySelector('.show-menu-hamb').style.display = 'flex'
        document.querySelector('.sub-menu-hamb').style.display = 'block'
    }   else {
        menuHamb.src = '/img/icons8-hamburger-menu.svg'
        document.querySelector('.show-menu-hamb').style.display = 'none'
        document.querySelector('.sub-menu-hamb').style.display = 'none'
    }
})