const secHand = document.querySelector('.sec-hand');
const hourHand =document.querySelector('.hour-hand');
const minsHand = document.querySelector('.min-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    if(secondsDegrees == 90) {
        secHand.style.transition = "none";
    }
    else {
        secHand.style.transition = "all 0.05s";
    }

    secHand.style.transform = `rotate(${secondsDegrees}deg)`;
    secHand.style.background = 'red';


    const mins = now.getMinutes ();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    minsHand.style.background = 'green';

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate();