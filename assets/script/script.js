const primaryNav = document.getElementById('primary-navigation')
const navToggle = document.querySelector('header button')
const accordion = document.querySelector('.accordion')
const serviceAccordion = document.querySelector('.service-accordion')

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

serviceAccordion.addEventListener('click', (e) => {
    const activePanel = e.target.closest(".service-accordion-panel");
    console.log('clicked')

    e.stopPropagation();
    // console.log(activePanel)
    if (!activePanel) return;
    toggleServiceAccordion(activePanel);
})

// function toggleServiceAccordion(servicePanelToActivate) {
//     const buttons = servicePanelToActivate.parentElement.querySelectorAll(".service-accordion-trigger");
//     const contents = servicePanelToActivate.parentElement.querySelectorAll(".service-accordion-content");

//     buttons.forEach((button) => {
//         button.setAttribute("aria-expanded", false);
//     });

//     contents.forEach((content) => {
//         content.setAttribute("aria-hidden", true)
//     })
    
//     console.log(servicePanelToActivate.querySelector(".service-accordion-content"))
//     servicePanelToActivate.querySelector(".service-accordion-trigger").setAttribute("aria-expanded", true);
//     servicePanelToActivate.querySelector(".service-accordion-content").setAttribute("aria-hidden", false);
//     console.log(servicePanelToActivate.querySelector(".service-accordion-trigger"))
// }

function toggleServiceAccordion(servicePanelToActivate) {
    const allServiceButtons = document.querySelectorAll(".service-accordion-trigger"); 
    const allServiceContents = document.querySelectorAll(".service-accordion-content"); 
    // First, collapse all other service panels
    allServiceButtons.forEach((button) => {
        if (button !== servicePanelToActivate.querySelector(".service-accordion-trigger")) {
            button.setAttribute("aria-expanded", false);
        }
    });

    allServiceContents.forEach((content) => {
        if (content !== servicePanelToActivate.querySelector(".service-accordion-content")) {
            content.setAttribute("aria-hidden", true);
        }
    });

    // Then, expand the clicked panel
    const clickedButton = servicePanelToActivate.querySelector(".service-accordion-trigger");
    const clickedContent = servicePanelToActivate.querySelector(".service-accordion-content");

    // Toggle the aria-expanded attribute for the clicked button
    const isExpanded = clickedButton.getAttribute("aria-expanded") === "true";
    clickedButton.setAttribute("aria-expanded", !isExpanded);

    // Toggle the aria-hidden attribute for the content
    clickedContent.setAttribute("aria-hidden", isExpanded);

    console.log(`Clicked button aria-expanded: ${clickedButton.getAttribute('aria-expanded')}`);
    console.log(`Clicked content aria-hidden: ${clickedContent.getAttribute('aria-hidden')}`);
}