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

    if (panelToActivate.querySelector(".service-accordion-panel")) {
        panelToActivate.querySelector(".service-accordion-trigger").setAttribute("aria-expanded", true)
        panelToActivate.querySelector(".service-accordion-content").setAttribute("aria-hidden", false)
    }


    panelToActivate.parentElement.querySelectorAll(".accordion-panel").forEach((panel) => {
        if (panel.querySelector(".service-accordion-content")) {

            panel.querySelector(".service-accordion-panel").scrollTop = 0;

        }
        panel.scrollTop = 0;
    })

    panelToActivate.querySelector("button").setAttribute("aria-expanded", true);
    panelToActivate.querySelector(".accordion-content").setAttribute("aria-hidden", false);
}

serviceAccordion.addEventListener('click', (e) => {
    const activePanel = e.target.closest(".service-accordion-panel");

    e.stopPropagation();
    if (!activePanel) return;
    toggleServiceAccordion(activePanel);
})

function toggleServiceAccordion(servicePanelToActivate) {
    const allServiceButtons = document.querySelectorAll(".service-accordion-trigger");
    const allServiceContents = document.querySelectorAll(".service-accordion-content");

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

    const clickedButton = servicePanelToActivate.querySelector(".service-accordion-trigger");
    const clickedContent = servicePanelToActivate.querySelector(".service-accordion-content");
    const isExpanded = clickedButton.getAttribute("aria-expanded") === "true";
    if (clickedButton.getAttribute("aria-expanded") === "false") {
        clickedButton.setAttribute("aria-expanded", !isExpanded);
    }

    clickedContent.setAttribute("aria-hidden", isExpanded);
    servicePanelToActivate.parentElement.querySelectorAll(".service-accordion-panel").forEach((panel) => {
        panel.scrollTop = 0;
    })

}