function playSound(e) {
    
    // reference variable for <audio> element based on keycode
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // reference variable for <div> element which contain the key based on keycode
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);



    // if the pressed key has no corresponding <audio> element within the defined <audio> elements, exit function
    if(!audio){
        return;
    }

    // reset audio before playing to make sure each sound plays from the beginning
    audio.currentTime = 0;

    // play the audio
    audio.play()
    
    // add the style to the key by applying the "playing" class
    key.classList.add('playing');
}

// remove transition effect when the audio is done playing by removing "playing" class to the key
function removeTransition(e) {
    if(e.propertyName !== 'transform') {
        return;
    }

    // "this" refers to the targeted key of the event
    this.classList.remove('playing');
}

// add event listeners for pressed key
window.addEventListener('keydown', playSound);

// select all key elements and listion for transition end to remove the the "playing" class
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
});