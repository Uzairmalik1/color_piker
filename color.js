const refrashBtn = document.querySelector(".refresh-btn");
const container = document.querySelector(".container");

const maxPaletteBoxes = 12;

const generatePalette = ()=>{
    container.innerHTML = "";
    for(i = 0; i<maxPaletteBoxes; i++){
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`
        
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;
        color.addEventListener("click", ()=> copycolor(color, randomHex))
        container.appendChild(color);
    }

}
generatePalette();
const copycolor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    navigator.clipboard.writeText(hexVal).then(()=>{
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexVal, 1000)
    }).catch(() => alert("Failed to copy the color code!"));
}

refrashBtn.addEventListener("click", generatePalette)