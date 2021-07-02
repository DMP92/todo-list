/* 
************************************************************************************
****************************CONTROLS EACH SIDEBAR PANEL*****************************
************************************************************************************
*/



const sidebarTab = (function() {

    // variables for targeting each tab
    const sideBarChildren = document.querySelector('.sidebar').children;
    // each tab element
    const child1 = sideBarChildren[0];
    const child2 = sideBarChildren[1];
    const child3 = sideBarChildren[2];
    const child4 = sideBarChildren[3];
    const child5 = sideBarChildren[4];

    // array to contain sidebar tabs
    const sideBarArray = [];
    sideBarArray.push(child1, child2, child3, child4, child5);

    function defaultTab() {
        const all = document.querySelector('.all');
        all.classList.add('hovered');
        console.log(all);
        operator(4);
    }

    function sideBarEventListeners() {

        sideBarArray.forEach(tab => tab.addEventListener('click', () => {
            const index = sideBarArray.indexOf(event.target);

            switch(true) {
                case event.target.classList.contains('hovered'):
                    event.target.classList.remove('hovered');
                    defaultTab();
                break;
                case !event.target.classList.contains('hovered'):
                    child1.classList.remove('hovered');
                    child2.classList.remove('hovered');
                    child3.classList.remove('hovered');
                    child4.classList.remove('hovered');
                    child5.classList.remove('hovered');
                    event.target.classList.add('hovered');
                    operator(index);
                break;
            }

            const hover = document.querySelector('.hovered');
            

        }))
    }

    function shareTabs() {
        return sideBarChildren;
    }

    return {
        default: defaultTab,
        children: sideBarEventListeners,
        share: shareTabs
    }
})();

const housing = (function() {
    function contain(item) {
        const array = [];
        console.log(item);
    }
    return {
        con: contain
    }
})()

/* 
************************************************************************************
****************************MODULE CONTROLS PROJECT TAB*****************************
************************************************************************************
*/

// function that connects users choice to proper tab logic
function operator(index) {
    switch(true) {
        case index === 0:
           tabSelection.inbox();
        break;
        case index === 1:
            tabSelection.today();
        break;
        case index === 2:
            tabSelection.weekly();
        break;
        case index === 3:
            tabSelection.projects();
        break;
        case index === 4:
            tabSelection.all();
        break;
    }
}


const tabSelection = (function() {

    // functions for each tab

    function inboxTab() {
        console.log(0);
    }

    function todayTab() {
        console.log(1);

    }

    function weeklyTab() {
        console.log(2);
    }

    function projectsTab() {
        console.log(3);
    }

    function allTab() {
        console.log(4);
    }

    return {
        inbox: inboxTab,
        today: todayTab,
        weekly: weeklyTab,
        projects: projectsTab,
        all: allTab
    }
})();


window.addEventListener('load', () => {
    
    sidebarTab.default();
    sidebarTab.children();
});

export { sidebarTab, housing }