// draw 16 divs using DOM methods

function drawCanvas(){
    for(i=0;i<4;i++){
        console.log(i);
        const topdiv = document.createElement("div");
        canvas.appendChild(topdiv);
        topdiv.setAttribute("id","div " + i);
        topdiv.classList.add("topdiv");
        for(j=0;j<4;j++){
            console.log("j here: " + j);
            const subdiv = document.createElement("div")
            topdiv.appendChild(subdiv);
            subdiv.setAttribute("id","subdiv " + i);
            subdiv.classList.add("subdiv");
        }
    }
}

const canvas = document.querySelector(".container");

drawCanvas();