const addButton = document.querySelector('#add')
const subButton = document.querySelector('#sub')
const sum = document.querySelector('#sum')
// const pictureDiv = document.querySelector('#pictureDiv')
let pictureDiv = document.getElementById('pictureDiv')




let ammout = Number(0)


const createImg = () => {
    const img = document.createElement('img');
    img.src = "pictue.jpg"
    return img;
}


function ChangSumAdd() {
    // add to the count
    ammout++
    // update the DOM with the new count
    sum.innerHTML = ammout
    // create image
    // add the image to the image section
    pictureDiv.appendChild(createImg());
}

function ChangSumSub() {
    const img = document.createElement('img');

    if (ammout < 1) {
        ammout = 1
    }
    ammout--
    pictureDiv.remove(img)
    console.log(ammout)
    sum.innerHTML = ammout
}

addButton.addEventListener("click", ChangSumAdd)
subButton.addEventListener("click", ChangSumSub)






