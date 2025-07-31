const primaryNav = document.getElementById('primary-navigation')
const navToggle = document.querySelector('header button')
const accordion = document.querySelector('.accordion');
const serviceAccordion = document.querySelector('.service-accordion');

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
    if(!activePanel) return;
    console.log(activePanel)
    toggleAccordion(activePanel)
},false)

function toggleAccordion(panelToActivate) {
    const buttons = panelToActivate.parentElement.querySelectorAll(".accordion-trigger");
    const contents = panelToActivate.parentElement.querySelectorAll(".accordion-content");

    buttons.forEach((button) => {
        button.setAttribute("aria-expanded", false);
    })

    contents.forEach((content) => {
        content.setAttribute("aria-hidden", true)
    })
    
    panelToActivate.querySelector(".accordion-trigger").setAttribute("aria-expanded", true);
    panelToActivate.querySelector(".accordion-content").setAttribute("aria-hidden", false);
}

serviceAccordion.addEventListener('click', (e) => {
    console.log('clickekd')
    const activePanel = e.target.closest(".service-accordion-panel");
    e.stopPropagation();
    if(!activePanel) return;
    toggleServiceAccordion(activePanel);
},false)

function toggleServiceAccordion(servicePanelToActivate) {
    const buttons = servicePanelToActivate.parentElement.querySelectorAll(".service-accordion-trigger");
    const contents = servicePanelToActivate.parentElement.querySelectorAll(".service-accordion-content");
    
    buttons.forEach((button) => {
        button.setAttribute("aria-expanded", false);
    })

    contents.forEach((content) => {
        content.setAttribute("aria-hidden", true)
        content.scrollTop = 0;
    })
    // console.log(servicePanelToActivate.parentElement.querySelectorAll(".service-accordion-panel"));
    servicePanelToActivate.parentElement.querySelectorAll(".service-accordion-panel").forEach((panel) => {
        console.log(panel)
        panel.scrollTop = 0;
    })
    servicePanelToActivate.querySelector(".service-accordion-trigger").setAttribute("aria-expanded", true);
    servicePanelToActivate.querySelector(".service-accordion-content").setAttribute("aria-hidden", false);
}