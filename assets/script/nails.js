const primaryNav = document.getElementById('primary-navigation');
const navToggle = document.querySelector('header button');
const serviceAccordion = document.querySelector('.service-accordion');
const tabsContainer = document.querySelector('.tabs-container');
const tabsList = tabsContainer.querySelector('ul');
const tabButtons = tabsList.querySelectorAll('a');
const tabPanels = tabsContainer.querySelectorAll('.tabs__panels > div');

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

serviceAccordion.addEventListener('click', (e) => {
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
        panel.scrollTop = 0;
    })
    servicePanelToActivate.querySelector(".service-accordion-trigger").setAttribute("aria-expanded", true);
    servicePanelToActivate.querySelector(".service-accordion-content").setAttribute("aria-hidden", false);
}

tabsList.setAttribute('role', 'tablist');

tabsList.querySelectorAll('li').forEach((listitem) => {
    listitem.setAttribute('role', 'presentation');
})

tabButtons.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    if (index === 0) {
        // do something
        tab.setAttribute('aria-selected', 'true');
    } else {
        tab.setAttribute('tabindex', '-1');
        tabPanels[index].setAttribute("hidden", "");
    }
})

tabPanels.forEach((panel) => {
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '0');
})

tabsContainer.addEventListener("click", (e) => {
    const clickedTab = e.target.closest('a');
    if (!clickedTab) return;
    e.preventDefault();

    switchTab(clickedTab);
})

tabsContainer.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowRight':
            moveRight();
            break;
        case 'ArrowLeft':
            moveLeft();
            break
    }
})

function moveLeft() {
    const currentTab = document.activeElement;
    if (!currentTab.parentElement.previousElementSibling) {
        switchTab(tabButtons[tabButtons.length -1]);
    } else {
        switchTab(currentTab.parentElement.previousElementSibling.querySelector('a'));
    }
}

function moveRight() {
    const currentTab = document.activeElement;
    if (!currentTab.parentElement.nextElementSibling) {
        switchTab(tabButtons[0]);
    } else {
        switchTab(currentTab.parentElement.nextElementSibling.querySelector('a'));
    }
}

function switchTab(newTab) {
    const activePanelId = newTab.getAttribute('href');
    const activePanel = tabsContainer.querySelector(activePanelId);

    tabButtons.forEach((button) => {
        button.setAttribute('aria-selected', false);
        button.setAttribute('tabindex', '-1');
    })

    tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
    })
    activePanel.removeAttribute("hidden");

    newTab.setAttribute('aria-selected', 'true');
    newTab.setAttribute('tabindex', '0');
    newTab.focus();
}