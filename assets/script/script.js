const primaryNav = document.getElementById('primary-navigation')
const navToggle = document.querySelector('header button')

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')
    
    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true)
        navToggle.setAttribute('aria-expanded', true)
    } else {
        primaryNav.setAttribute('data-visible', false)
        navToggle.setAttribute('aria-expanded', false)
    }
    console.log(navToggle.getAttribute('aria-expanded'))
})