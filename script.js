
const lebron = document.getElementById('lebron');
const lebronContext = lebron.getContext('2d');
const you = document.getElementById('you');
const youContext = you.getContext('2d');

const inverseText = document.getElementById('inverse')
const ratioText = document.getElementById('ratio')

const lebronImage = new Image();
lebronImage.src = 'Lebron.png';

const youImage = new Image();
youImage.src = 'You.png';

function calculateLebronRatio(length)
{
    return (length/2.06).toFixed(2)
};

function drawHeight(ratio) 
{
    lebronContext.clearRect(0, 0, 300, 600)
    youContext.clearRect(0, 0, 300, 600)
    if (ratio >= 1)
    {
        inverseRatio = (1/ratio).toFixed(2)
        lebronContext.drawImage(lebronImage, 300*(1-inverseRatio), 600*(1-inverseRatio), 300*inverseRatio, 600*inverseRatio)
        youContext.drawImage(youImage, 0, 0, 300, 600)
    }
    else
    {
        youContext.drawImage(youImage, 0, 600*(1-ratio), 300*ratio, 600*ratio)
        lebronContext.drawImage(lebronImage, 0, 0, 300, 600)
    }
};

function main()
{
    const defaultRatio = calculateLebronRatio(1.8)
    drawHeight(defaultRatio)

    const heightInput = document.getElementById('heightInput')
    heightInput.addEventListener('change', (e) => {

        const ratio = calculateLebronRatio(heightInput.value)
        const inverse = (1/ratio).toFixed(2)

        inverseText.innerHTML = inverse
        ratioText.innerHTML = ratio
        
        drawHeight(ratio)
    })
};

window.onload = () => {
    main();
};