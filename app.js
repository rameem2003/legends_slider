const imgWindow = document.querySelector(".window")

const btns = document.querySelectorAll("#imege_slider i");

const firstImg = document.querySelectorAll("img")[0];

let firstImgWidth = firstImg.clientWidth + 14;


btns.forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.id == "left"){
            imgWindow.scrollLeft = imgWindow.scrollLeft - firstImgWidth;
        }else{
            imgWindow.scrollLeft = imgWindow.scrollLeft + firstImgWidth;
        }
    })
})