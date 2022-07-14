let heads = 0
let tails = 0
let percentHeads = 0
let percentTails = 0
document.addEventListener('DOMContentLoaded', function (){
 // This is just a sanity check to make sure your JavaScript script is getting loaded
// You can remove it once you see it in your browser console in the developer tools
console.log('Hi')
})
document.getElementById("flip").addEventListener("click",function(){
    let flippedHeads = Math.random()<0.5
    console.log(flippedHeads)
    if(flippedHeads){
    document.getElementById("penny").src="assets/images/penny-heads.jpg"
    document.getElementById("message").textContent = "You Flipped Heads"
    heads ++
    }
    else {
    document.getElementById("penny").src="assets/images/penny-heads.jpg"
    document.getElementById("message").textContent = "You Flipped Heads"
    tails ++
    }
    total()
        })

        document.getElementById("clear").addEventListener("click",function(){
        console.log("clear")
        heads = 0
        tails = 0
        percentHeads = 0
        percentTails = 0
        let total = heads + tails

        display()

        })

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell

    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)


function total (){
let total = heads + tails
console.log(total)

if (total >0) {
    percentHeads = Math.round((heads/total)* 100)
    percentTails = Math.round((tails/total)* 100)
}
display()
}
function display(){
    document.getElementById("heads").textContent = heads
    document.getElementById("heads-percent").textContent = percentHeads + "%"
    document.getElementById("tails").textContent = tails
    document.getElementById("tails-percent").textcontent = percentTails + "%"
}