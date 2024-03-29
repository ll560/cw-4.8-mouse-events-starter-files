// Directions: Complete the tasks below using only JavaScript concepts like event listeners and functions. You should be able to accomplish all the tasks with JS code, and should not edit any HTML or CSS code. 
    // Use the HTML and CSS code provided to target elements and change their styling based on what the task is asking of you. Pay special attention to the ids and classes provided in the HTML file and to the classes and associated styling in the CSS file.
    // Spend time writing out pseudocode to plan out your steps for each task. 



// Task 1: Make the first button's background color change to darkgreen when it's clicked and back to yellow when clicked again. (You should be able to continue toggling between colors with every click.) 

    // Hint: Classes and styling have already been created in the styles.css file, so find the styling that would make the button's background change to darkgreen, and use the corresponding class name.

//get the first button
let button = document.querySelector("#btn-click");

//write the event handler function to change the text background from yellow to green or green to yellow by adjusting the classname
const changeBackground = function(){
    button.classList.toggle("button-clicked");

}
//bind the event to the element and function
button.addEventListener("click", changeBackground);


// Task 2: For the first div, make the second p tag visible when the mouse is moved into the div. When the mouse is moved out of the box, the last p element should go back to being hidden.

    // Hint: You may need more than one event listener/mouse event to accomplish this.
//select the first div second p tag
let firstDivSecP = document.querySelector(".hidden-element");

//write an event handler function to make p visible with mouseover/ invisible with mouse out
const setShowSecond = function(){
    firstDivSecP.classList.toggle("hidden-element");
}
setShowSecond();

//bind the event to the element and function
firstDivSecP.addEventListener("mouseover", setShowSecond);
firstDivSecP.addEventListener("mouseout", setShowSecond);



// Task 3: Make the second button's background color change to darkgreen when it's double-clicked and back to yellow when double-clicked again. (You should be able to continue toggling between colors with every double-click.) Do this completely through JavaScript below with an event listener that changes the class of the button when double-clicked, and changes it back when clicked again. 

    // Hint: classes have already been created in the styles.css file, so find the styling that would make the button's background change to darkgreen, and use the corresponding class name.
    




// Task 4: For the second div, make the second p tag visible when the mouse is clicked down while in the div. When the mouse is released, change the div's background color to yellow and hide the second p tag. Each click release should toggle the background color between yellow and darkgreen.

    // Hint: You may need more than one event listener/mouse event to accomplish this.





// BONUS: For the last div, change the text content of the second p tag so that it contains the value of the variable mousemoveCounter. When a mouse is moved around in the last div, the mousemoveCounter's value should increase by 1 with every move of the mouse. 

    // The "Try It Yourself" examples here may help you to figure out this bonus task: https://www.w3schools.com/jsref/event_onmousemove.asp

let mousemoveCounter = 0;





