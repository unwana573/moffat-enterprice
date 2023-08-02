function openNav() {
    document.getElementById("myNav")
    .style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav")
    .style.width = "0%";
}
 
 
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper button");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block"; 
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block"; 
}

arrowIcons.forEach(icon => {
    let firstImgWidth = firstImg.clientWidth + 14;
    icon.addEventListener("click", () => {
       carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        //setTimeout{() => showHideIcons(), 60};
    });
});

const autoslide = () => {
    if (carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;
    
    positionDiff = Math.ads(positionDiff);
    let firstImg = firstImg.clientWidth + 14;
    let valDifference = firstImg - positionDiff;
    
    if (carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    } 
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touched[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    let positionDiff = (e.pageX || e.touched[0].pageX) - prevPageX;    
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons(); 
}

const dragStop = () =>  {
    isDragStart = false;
    carousel.classList.remove("dragging");
    
    if(!isDragging) return;   
    isDragging = false
    autoslide();
    
}
    
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);

