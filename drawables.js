// draw 16 divs using DOM methods

function generateNewCanvas(mult) {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

    drawCanvas(mult);
}

function randomizeColor(){
    let r,g,b;
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;

    console.log(`rgb(${r},${g},${b})`);

    return `rgb(${r},${g},${b})`;
}

function drawCanvas(mult){
    for(i=0;i<mult;i++){
        //console.log(i);
        const topdiv = document.createElement("div");
        canvas.appendChild(topdiv);
        topdiv.setAttribute("id","div " + i);
        topdiv.classList.add("topdiv");
        for(j=0;j<mult;j++){
            //console.log("j here: " + j);
            const subdiv = document.createElement("div")
            topdiv.appendChild(subdiv);
            subdiv.setAttribute("id","subdiv " + i);
            subdiv.classList.add("subdiv");
            subdiv.addEventListener("mouseover", () => {
                console.log("drew on square: " + i + " x " + j);
                subdiv.style.backgroundColor = randomizeColor();})
        }
    }
}

const canvas = document.querySelector(".container");
const drawbtn = document.querySelector("#drawbtn");

drawCanvas(4);

drawbtn.addEventListener("click", () => {
    let multiplier = +prompt("type in the multipier for squares you wish to generate. (for instance: if you say 4, then the grid will generate 4x4 squares which whill be 16 squares)");
    let puritytest = true;

    do {
        console.log(multiplier);
        if(!puritytest)
            multiplier = +prompt("incorrect value. Please pick a REAL NON-DECIMAL number between 1 and 100 including those two.");
        puritytest = typeof(multiplier) === "number" && multiplier <= 100 && multiplier >= 1 && Math.floor(multiplier) === multiplier;
    } while(!puritytest);

    generateNewCanvas(multiplier);
})
