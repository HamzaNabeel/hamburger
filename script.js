const hamburgerIcon = document.querySelector(".hamburger-menu-container")
const headerContent = document.querySelector(".header_container")
const closeIcon = document.querySelector(".close-icon")
const goto = document.querySelector("body > div > footer > h3 > a")
const main_div = document.querySelector("body > div")
const nav = document.querySelector('nav')


hamburgerIcon.addEventListener('click', (e) =>{
    e.stopPropagation()
    headerContent.classList.add('menu_open')
})

nav.addEventListener('click', (e) => {
    e.stopPropagation()
})

closeIcon.addEventListener('click', () =>{
    headerContent.classList.remove('menu_open')
})

goto.addEventListener('click', () => {
    main_div.scrollTo(0, 0)
})

window.addEventListener('click', () =>{
    headerContent.classList.remove('menu_open')
})

