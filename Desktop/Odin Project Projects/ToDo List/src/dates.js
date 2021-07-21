// file made for date-fns API

const taskCompletionDate = (function () {

    // variables for gathering data required to run functions
    const taskPanel = document.querySelector ('.taskPanel');
    let projectArray = JSON.parse(localStorage.getItem('projectArray'));
    let itemArray = JSON.parse(localStorage.getItem('itemArray'));

    function checkDate (item) {

        
    }

    return {
        checkDate
    }
})();

export { taskCompletionDate }