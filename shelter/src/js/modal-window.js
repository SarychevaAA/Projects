import petsInfo from '../pets.json';
const body = document.querySelector('body')
const modalWindow = document.querySelector('.modal')
const container = document.querySelector('.modal-window__img');
const modalImg = document.createElement('img');
const petInfoButton = document.querySelectorAll('.button_border')
let cardArr = document.querySelectorAll('.list-cards__element')
const closeButton = document.querySelector('.modal-window__close-element')
const leftButton = document.querySelector('#left-slider-btn')
const rightButton = document.querySelector('#right-slider-btn')
// petInfoButton.forEach((btn)=>{
//     btn.addEventListener('click', ()=>{
//         modalWindow.style.opacity = "1";
//         modalWindow.style.visibility = "visible";
//
//         modalImg.src = petsInfo[btn.parentNode.id].img;
//         modalImg.alt =  petsInfo[btn.parentNode.id].name;
//         container.append(modalImg);
//     })
// })

function generateModalWindow(card){
    modalWindow.style.opacity = "1";
    modalWindow.style.visibility = "visible";
    const currentPet = petsInfo[card.id];
    modalImg.src = currentPet.img;
    modalImg.alt =  currentPet.name;
    container.append(modalImg);

    document.querySelector('#info-name').innerHTML = `${currentPet.name}`;
    document.querySelector('#info-breed').innerHTML = `${currentPet.type} - ${currentPet.breed}`;
    document.querySelector('#info-description').innerHTML = `${currentPet.description}`;
    document.querySelector('#info-age').innerHTML = `<span>Age:</span> ${currentPet.age}`;
    document.querySelector('#info-inoculations').innerHTML = `<span>Inoculations:</span> ${currentPet.inoculations}`;
    document.querySelector('#info-diseases').innerHTML = `<span>Diseases:</span> ${currentPet.parasites}`;
    document.querySelector('#info-parasites').innerHTML = `<span>Parasites:</span> ${currentPet.parasites}`;

    body.classList.add("scroll-hidden");
}

cardArr.forEach((card)=>{
    card.addEventListener('click', ()=>{
       generateModalWindow(card);
    })
})


closeButton.addEventListener('click', ()=>{
    modalWindow.style.opacity = "0";
    modalWindow.style.visibility = "hidden";
    body.classList.remove("scroll-hidden")
})
modalWindow.addEventListener('click', (event)=>{
    if ([...event.target.classList].indexOf("modal") !== -1){
        modalWindow.style.opacity = "0";
        modalWindow.style.visibility = "hidden";
        body.classList.remove("scroll-hidden");
    }
})
leftButton.addEventListener('click', ()=>{
    console.log("LEFT");
    cardArr = document.querySelectorAll('.list-cards__element')
    cardArr.forEach((card)=>{
        card.addEventListener('click', ()=>{
            generateModalWindow(card);
        })
    })
})
rightButton.addEventListener('click', ()=>{
    console.log("RIGHT");
    cardArr = document.querySelectorAll('.list-cards__element')
    cardArr.forEach((card)=>{
        card.addEventListener('click', ()=>{
            generateModalWindow(card);
        })
    })
    console.log(cardArr);
})