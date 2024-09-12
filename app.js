// DOM Elements (DOM traversal - expensive task, get it done early)

const imagesToFloat = document.getElementsByClassName('unique')

console.log(imagesToFloat)
console.log(imagesToFloat[0])

let isFloatingRight = false;

function floatImage() {
    // do some stuff...
    isFloatingRight = !isFloatingRight

    // console.log("floatImage()");
    // console.log("isFloatingRight: ", isFloatingRight);
    
    // let count = 0
    for (let item of imagesToFloat) {
        // console.log("count", count);
        

        item.style.float = isFloatingRight ? "left" : "right"
        item.classList = isFloatingRight ? "unique" : "unique transparent"


        // if (isFloatingRight) {
        //     item.style.float = "left"
        //     item.classList = "unique"
        // } else {
        //     item.style.float = "right"
        //     item.classList = "unique transparent"
        // }
        // count++
    }
}