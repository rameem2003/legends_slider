const slideElement = document.querySelectorAll(".slide")
const leftBtn = document.getElementById("left")
const rightBtn = document.getElementById("right")

// console.log(slideElement.length);

let count = 0;

// for initial position setup all imege
slideElement.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})

// for sliding function
const slider = () => {
    slideElement.forEach(slide => {
        slide.style.transform = `translateX(-${count*100}%)`
    })
}

//for left button
leftBtn.addEventListener("click", () => {
    count--;
    console.log(count);
    if(count < 0){
        count = slideElement.length - 1;
    }
    slider();
})


// for right button
rightBtn.addEventListener("click", () => {
    count++;
    if(count == slideElement.length){
        count = 0
    }

    console.log(count);

    slider();
})
