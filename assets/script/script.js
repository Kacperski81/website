const navigationLinks = document.querySelectorAll('li a')
const changeBottleBtn = document.getElementById('change-bottle')
const toggleInput = document.getElementById('toggle')
const primaryNav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

// changeBottleBtn.addEventListener('click', e => {
//     toggleInput.checked = !toggleInput.checked
// })

const currentPath = window.location.pathname;

// console.log(currentPath)

navigationLinks.forEach(link => {
    if(link.getAttribute('href') === currentPath) {
        link.classList.add('active')
    }
})

// console.log(navToggle)
navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')
    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', 'true')
        navToggle.setAttribute('aria-expanded', true)
    } else {
        primaryNav.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', false)
    }
})
