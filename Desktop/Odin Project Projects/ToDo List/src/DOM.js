
const generalTask = (function() {
    
    
    // upon click will get task  item
    function toDoInput(task) {
        const input = document.querySelector('.task');
        
        return input.value;
    }

    // on click will get notes of todo list item
    function itemNotes(text) {
        const notes = document.querySelector('.notes');
        console.log('sup');
        return notes.value;
    }

    // on click will get completion date
    function date(date) {
        const itemDate = document.querySelector('.date');

        return itemDate.value;
    }

    function project(title) {
        const projectTitle = document.querySelector('.project');

        
        return projectTitle.value;
    }


    function sendItemData() {
        toDoInput();
        itemNotes();
        date();
        project();

    }

    return {
        title: toDoInput,
        notes: itemNotes,
        date: date,
        project: project,
        send: sendItemData
    }
})()


// Module that prints each task item to UI
const taskPrint = (function() {

    // // prints task panel container
    // const taskPanel = document.querySelector('.taskPanel');
    

    //     function _printTaskContainer() {
    //         const taskItem = document.createElement('div');
    //         taskItem.classList.add('taskItem');
    //         taskPanel.appendChild(taskItem);
    //     }

    // const taskItem = document.querySelectorAll('.taskItem');

    
    function printTask() {
        const taskPanel = document.querySelector('.taskPanel');
        const item = document.createElement('div');
            item.classList.add('taskItem');
            taskPanel.appendChild(item);
        _printProjectName(item);
        _printButtons(item);
        _printTaskName(item);
        _printTaskDate(item);
        _printDescription(item);
    }

    // prints the name of the project
   

        function _printProjectName(item) {
            const projectName = document.createElement('div');
            projectName.classList.add('projectName');

            projectName.textContent = generalTask.project();
            if(projectName.textContent === '') {
                projectName.textContent = 'Project Name: None';
                item.appendChild(projectName);
            } else {
                item.appendChild(projectName);
            }
        }

    // prints the buttons (delete, complete, edit)
    

        function _printButtons(item) {
            const itemDelete = document.createElement('button');
        itemDelete.classList.add('itemDelete');
        itemDelete.textContent = 'D';

    const completeTask = document.createElement('button');
        completeTask.classList.add('completeTask');
        completeTask.textContent = 'C';

    const editTask = document.createElement('button');
        editTask.classList.add('editTask');
        editTask.textContent = 'E';

            console.log('3 buttons');
            item.appendChild(itemDelete);
            item.appendChild(completeTask);
            item.appendChild(editTask);
        }

    // prints name of task
   


        function _printTaskName(item) {
            const taskName = document.createElement('div');
            taskName.classList.add('taskName');

            console.log('4 name');
            taskName.textContent = generalTask.title();
            item.appendChild(taskName);
        }
    
    // prints task date
    


        function _printTaskDate(item) {
            const taskDate = document.createElement('div');
            taskDate.classList.add('taskDate');

            console.log('5 date');
            taskDate.textContent = generalTask.date();
            item.appendChild(taskDate);
        }

    // prints description / notes for task
    

            function _printDescription(item) {
                const description = document.createElement('div');
                description.classList.add('description');

                console.log('6 description');
                description.textContent = generalTask.notes();
                item.appendChild(description);
            }

    

    return {
        print: printTask
    }

})();

const submit = document.querySelector('.submit');
submit.addEventListener('click', taskPrint.print);

export { generalTask }
