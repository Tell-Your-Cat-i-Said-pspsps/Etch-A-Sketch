const container = document.querySelector(".container");
const canvasSize = document.querySelector("#CanvasSize");
const penColor = document.querySelector("#penColor");
const canvasSizeLabel = document.querySelector("#CanvasSizeLabel");
const colorMode = document.querySelector("#color");
const eraserMode = document.querySelector("#eraser");
const rainbowMode =document.querySelector("#rainbow");
let penMode = penColor.value;

let size =16;
eraserMode.addEventListener("change",()=>{
    if(eraserMode.checked)
    {
        penMode = "#d1d0c5";
    }
})
colorMode.addEventListener("change",()=>{
    if(colorMode.checked)
    {
        penMode = penColor.value;
    }
})
canvasSizeLabel.textContent = `Canvas Size :${size}x${size}`
startCanvas(size);
canvasSize.addEventListener("mouseup",()=>{
    let PixelCount = parseInt(canvasSize.value);
    canvasSizeLabel.textContent = `Canvas Size :${PixelCount}x${PixelCount}`
    pixelSize =640/PixelCount;
    removeOldCanvas();

    for (let i = 0; i < PixelCount; i++)
    {
        let newRow = document.createElement("div");
        container.appendChild(newRow);
        for (let j = 0 ; j < PixelCount; j++)
        {
            let newPixel = document.createElement("div");
            newPixel.classList.add("pixel");
            newPixel.style.height=`${pixelSize}px`;
            newPixel.style.width=`${pixelSize}px`;
            newPixel.addEventListener("mouseover",()=>{
                newPixel.style.backgroundColor=`${penMode}`;
            })
            newRow.appendChild(newPixel);
        }
    }
})
function removeOldCanvas()
{
    let elements = container.querySelectorAll('div')
    let nodeListLength =elements.length;
    for(let i = 0; i <nodeListLength;i++)
    {
        elements[i].remove();
    }
}
function startCanvas(size)
{
    for (let i = 0; i < size; i++)
    {
        let newRow = document.createElement("div");
        container.appendChild(newRow);
        for (let j = 0 ; j < size; j++)
        {
            let newPixel = document.createElement("div");
            newPixel.classList.add("pixel");
            newPixel.addEventListener("mouseover",()=>{
                newPixel.style.backgroundColor=`${penMode}`;
            })
            newRow.appendChild(newPixel);
        }
    }
}





