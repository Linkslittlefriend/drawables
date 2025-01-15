// draw 16 divs using DOM methods

function drawCanvas(){
    for(i=0;i<4;i++){
        topdiv.setattribute("id","div " + i);
        for(j=0;j<4;j++){
            topdiv.setattribute("id","subdiv " + i);
            topdiv.appendChild(subdiv);
        }
        canvas.appendChild(topdiv);
    }

}

const canvas = document.querySelector(".container");
const topdiv = document.createElement("div");
const subdiv = document.createElement("div");

div.classList.add("topdiv");
div.textContent = "topkek here.";

div.classList.add("subdiv");
div.textContent = "subkek here.";

drawCanvas();