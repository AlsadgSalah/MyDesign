//
function clacHie(){
    // 
    let LandSection = document.querySelector(".land");
    // 
    let navBar = document.querySelector(".navbar").clientHeight;
    // 
    let upperBar = document.querySelector(".upper-bar").clientHeight;
    // 
    let hieghtWindow = window.innerHeight;
    LandSection.style.height = hieghtWindow - (upperBar + navBar) + "px";
}
//
clacHie()

//
let myFoto = [
    "01.png", // 0
    "02.jpg", // 1
    "03.jpg", // 2
    "04.webp", // 3
    "05.webp", // 4
    "06.jpeg", // 5
    "07.jpg", // 6
    "08.png" // 7
];

for (let i = 0; i < myFoto.length; i++) {
    //
    let LandSection = document.querySelector(".land");

    //
    let ballFather = document.querySelector(".land .ballFather")

    //
    let myBall = document.createElement('span');

    //
    myBall.classList.add('ball');
    
    //
    ballFather.appendChild(myBall);

    //
    myBall.setAttribute('data-i', i)

    ballFather.children[0].classList.add('Ative')

    //
    let cournt = 0;

    //
    myBall.addEventListener("click", (e)=>{
        //
        cournt = e.target.dataset.i;

        

        //
        if (cournt < myFoto.length -1 ) {
            cournt++;
        }
        //
        else{
            cournt = 0;
        }
        //
        LandSection.style.backgroundImage = `url('imges/${myFoto[cournt]}')`;
        //
    });


    //

    //
    setInterval(()=>{
        //
        if (cournt < myFoto.length -1 ) {
            cournt++;
        }
        //
        else{
            cournt = 0;
        }

        //
        let myActive = Array.from(document.querySelectorAll(".Ative"));

        //
        myActive.forEach(span =>{
            span.classList.remove('Ative')
        })

        //
        Array.from(ballFather.children).forEach((span, index) => {
            //
            if (span.dataset.i == cournt) {
                //
                span.classList.add("Ative");

                //
            }
        });


        //
        LandSection.style.backgroundImage = `url('imges/${myFoto[cournt]}')`;
    }, 10000)
}

    //
    let images1 = document.querySelectorAll(".features-work .image img");

images1.forEach(img => {
    img.addEventListener("click", (e)=>{
        //
        let overAll = document.createElement("div");
        
        //
        overAll.classList.add("overAll")

        //
        document.body.appendChild(overAll);

        //
        let overImg = document.createElement("div");

        overImg.classList.add("overImg");

        //
        overAll.appendChild(overImg)

        //
        let myImg = document.createElement("img");

        overImg.appendChild(myImg)

        //
        myImg.src = e.target.src;

        //
        let closeSpan = document.createElement("span");

        //
        closeSpan.textContent = "+";

        //
        closeSpan.classList.add("closeSpan")

        //
        overImg.appendChild(closeSpan);

        //
        closeSpan.onclick = ()=>{
            //
            document.body.removeChild(overAll);
        }

    })
});

// 
let myLandPage = document.querySelector(".land");
// 
let upperBar = document.querySelector(".upper-bar")
// 
let navBar = document.querySelector(".features")

//
window.onscroll = ()=>{
    //
    let landPageScroll = myLandPage.offsetTop;

    //
    let upperBarScroll = upperBar.offsetTop;

    //
    let upperBarHeight = upperBar.offsetHeight;

    //
    let myLandHeight = myLandPage.offsetHeight;

    //
    let navBarscroll = navBar.offsetTop;

    //
    let navbarHeight = navBar.offsetHeight;

    //
    widowHieght = window.innerHeight;
    
    //
    let windowScroll = window.pageYOffset;

    //
    if (windowScroll > (landPageScroll + upperBarScroll + upperBarHeight + navBarscroll + navbarHeight +  myLandHeight - widowHieght)) {
        document.querySelector(".scroll").style.display = 'block'
        document.querySelector(".scroll").onclick = ()=>{
            document.body.scrollTop += 10
            console.log(document.body.scrollTop)
        }
    }
    else{
        document.querySelector(".scroll").style.display = 'none'
    }

}