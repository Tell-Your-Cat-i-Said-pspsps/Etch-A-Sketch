const container = document.querySelector(".container");
const canvasSize = document.querySelector("#CanvasSize");
const penColor = document.querySelector("#penColor");
const canvasSizeLabel = document.querySelector("#CanvasSizeLabel");
const colorMode = document.querySelector("#color");
const eraserMode = document.querySelector("#eraser");
const rainbowMode =document.querySelector("#rainbow");
const clearBtn =document.querySelector("#clear");
let penMode = penColor.value;


let size =16;
clearBtn.addEventListener("click",()=>{
    let elements = container.querySelectorAll('.pixel')
    let nodeListLength =elements.length;
    for(let i = 0; i <nodeListLength;i++)
    {
        elements[i].style.backgroundColor = "#d1d0c5";
    }

})
let randomValue = 0;
penColor.addEventListener("change",()=>{
    penMode=penColor.value;
})

eraserMode.addEventListener("change",()=>{
    if(eraserMode.checked)
    {
        penMode = "#d1d0c5";
    }
})
colorMode.addEventListener("change",()=>{
    if(colorMode.checked)
    {
        penMode=penColor.value;
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
                if(rainbowMode.checked)
                {
                    penMode= colorPalet[randomValue];
                }
                newPixel.style.backgroundColor=`${penMode}`;
                randomValue=Math.round(Math.random() * 10);
                
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
                if(rainbowMode.checked)
                {
                    penMode= colorPalet[randomValue];
                }
                newPixel.style.backgroundColor=`${penMode}`;
                randomValue=Math.round(Math.random() * 10);
            })
            newRow.appendChild(newPixel);
        }
    }
}
let colorPalet = ["#8875D1","#CD7E6A","#B4443C","#1C3A54","#D1F0EF","#6ECF99","#FFF766","#9EEFFF","#FF426E","#91FF47","#CC24FF"];



