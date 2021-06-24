
const domToDo = (function() {
    
    
    // upon click will get title of todo list item
    function toDoInput(title) {
        const input = document.querySelector('.todoItem');
        
        return input.value;
    }

    // on click will get description of todo list item
    function itemDescription(text) {
        const description = document.querySelector('.description');

        return description.value;
    }

    // on click will get completion date
    function date(date) {
        const itemDate = document.querySelector('.date');

        return itemDate.value;
    }

    function project(name) {
        const projectName = document.querySelector('.projectName');

        return projectName.value;
    }


    return {
        title: toDoInput,
        info: itemDescription,
        date: date,
        project: project
    }
})()




export { domToDo }
