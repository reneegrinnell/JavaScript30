const secondHand = document.querySelector('.second-hand');
// document method querySelector returns the first element within the doc that matches the specified selector(s)
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const threeHands = document.querySelectorAll('.hand');
// querySelectorAll selects all of the matched elements. Woo! will use this below to fix the backtick issue that occurs at each minute turnover

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; 
    //the above is an ES6 template literal; a new kind of string literal that can span multiple lines and interpolate expressions (i.e., include their results)
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // clever fix for backtick issue found here: https://medium.com/@murkrage/javascript-30-day-2-css-js-clock-ae539f10a9f9
    if (secondsDegrees === 90) {
        threeHands.forEach(hand => hand.style.transition = "none")
        //gets rid of all 0.05s transitions
    } else {
        threeHands.forEach(hand => hand.style.transition = "")
        //resets the inline style by removing it so the element can revert back to the stylesheet.
    }
    //foreach is a JS method. Remember, methods are actions that can be performed on objects. A method is a property containing a function definition.
    //https://codeburst.io/javascript-the-difference-between-foreach-and-for-in-992db038e4c2
}

//temporarily with js take off css hand transition so it doesn't tick back at start of each minute?
// then reapply after
//do with if stmts inside of set date

setInterval(setDate, 1000);