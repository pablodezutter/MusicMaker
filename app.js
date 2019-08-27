const synth = new Tone.Synth();
synth.oscillator.type = "sine";
synth.toMaster();

let piano = document.getElementById("piano");


piano.addEventListener("mousedown", e => {

    synth.triggerAttack(e.target.dataset.note);
});


piano.addEventListener("mouseup", e => {

    synth.triggerRelease();
})

document.addEventListener("keydown", e => {
    switch (e.key) {
        case "d":
            return synth.triggerAttack("C4");
        case "r":
            return synth.triggerAttack("C#4");
        case "f":
            return synth.triggerAttack("D4");
        case "t":
            return synth.triggerAttack("D#4");
        case "g":
            return synth.triggerAttack("E4");
        case "h":
            return synth.triggerAttack("F4");
        case "u":
            return synth.triggerAttack("F#4");
        case "j":
            return synth.triggerAttack("G4");
        case "i":
            return synth.triggerAttack("G#4");
        case "o":
            return synth.triggerAttack("A#4");
        case "k":
            return synth.triggerAttack("A4");
        case "l":
            return synth.triggerAttack("B4");

        default:
            return;
    }
});

document.addEventListener("keyup", e => {
    switch (e.key) {
        case "d":
        case "r":
        case "f":
        case "t":
        case "g":
        case "u":
        case "h":
        case "i":
        case "j":
        case "o":
        case "k":
        case "l":
            synth.triggerRelease();
    }

    // create bubbles

    const createBubbles = () => {
        const bubble = document.createElement("div");


    }




});
