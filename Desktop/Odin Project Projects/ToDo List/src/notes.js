// This file is simply for my own reference of the projects direction

/* 

Keep separate, each type of thing being done

Project should have:
    - ToDo Factory function to create the 'todo' objects
            - title 
            - description
        an empty functionality for 
            - notes 
            - checklist
        function that pushes each 'todo' object to a module's receiving function

    - module that contains the array each 'todo' object was pushed into by the ToDo factory function
        - an array that holds 'todo' objects
        - receiving function that accepts objects passed by the ToDo factory function and pushes them to the above array
        - function that gives access to each array item
        - functions that break down chosen 'todo' array items that can then be used as an interface
            functions that each return one of the following:
                - title
                - description
                - etc, etc
        
    - module for printing each 'todo' object to the screen
        - module for setting todos as complete
        - module for changing todo priority

    - module that contains functions to alter 'todo' objects
        - functions that:
                - delete
                - change
                - due date
                - priority
            
           
    - module for each sidebar tab that obeys the Open closed principle:
        the different functions therein will be for:
            - home
                which will show all tasks
            - today 
                which will show tasks for today
            - week 
                which shows tasks for the week
            - projects
                which shows each project or group of tasks involved in said project
            - open/closed compliance


*/

/* I ran into an issue where I couldn't get any eventListeners to work on the items that
    I printed to the screen using JS. Why? Because, the page runs only once. So, AFTER that one 
    run, THEN I added the elements. So, the event listeners were not updated to this fact.
    So, I had to update the event listeners essentially, by calling a function that housed them
    each time I pressed the button that was adding new elements to the screen.
*/