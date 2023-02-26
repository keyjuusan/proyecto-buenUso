const right = document.querySelector(".arrow__right");
const left = document.querySelector(".arrow__left");
const banner1 = document.querySelector(".banner1");
const banner2 = document.querySelector(".banner2");

arrowEvent(right);
arrowEvent(left);

// right.addEventListener("mouseover",()=>{
//     banner1.classList.remove("bannerA1");
//     banner2.classList.remove("bannerA2");
// });

// left.addEventListener("mouseover",()=>{
//     banner1.classList.remove("bannerA1");
//     banner2.classList.remove("bannerA2");
// });

function arrowEvent(direccion) {
    direccion.addEventListener("click", function funcion__desplazarse(event) {
        
        if (event.target == right) {
            banner1.style.right = "100%";
            banner2.style.left = "0%";
        } else if(event.target == left) {
            banner1.style.right = "0%";
            banner2.style.left = "100%";
        }else{
            console.log("UY! papá");
        }
        // banner1.classList.add("bannerA1");
        // banner2.classList.add("bannerA2");
    });
}
