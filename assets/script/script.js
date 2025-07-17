const primaryNav = document.getElementById('primary-navigation')
const navToggle = document.querySelector('header button')
const accordion = document.querySelector('.accordion')

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

accordion.addEventListener('click', (e) => {
    const activePanel = e.target.closest(".accordion-panel");
    if (!activePanel) return;
    toggleAccordion(activePanel)
})

function toggleAccordion(panelToActivate) {
    const buttons = panelToActivate.parentElement.querySelectorAll("button");
    const contents = panelToActivate.parentElement.querySelectorAll(".accordion-content");

    buttons.forEach((button) => {
        button.setAttribute("aria-expanded", false);
    });

    contents.forEach((content) => {
        content.setAttribute("aria-hidden", true)
    })

    panelToActivate.querySelector("button").setAttribute("aria-expanded", true);
    panelToActivate.querySelector(".accordion-content").setAttribute("aria-hidden", false);
}