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


    //randomize color
    function makeColor() {
        var arr = [];
        for (var i = 0; i < 3; i++) {
            var num = Math.floor(Math.random() * 256);
            arr.push(num);
        }
        var newRgb = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')';
        return newRgb;
    }


    //randomize position
    function getRandomPosition() {
        let randomX = Math.floor(Math.random() * window.innerWidth);
        let randomY = Math.floor(Math.random() * window.innerHeight);
        return [randomX, randomY];
    }



    piano.addEventListener("click", bubbles);
    piano.addEventListener("keydown", bubbles);
    function bubbles() {
        console.log("click");
        document.body.style.backgroundColor = "green";
        let x = document.querySelector('.circle');
        if (x == null) {
            x = document.createElement("div");
            x.setAttribute('class', 'circle');
            document.body.appendChild(x);
        };

        //let color has to be in this scope!
        let color = makeColor();
        x.style.backgroundColor = color;
        let newPos = getRandomPosition();
        x.style.top = newPos[1] + "px";
        x.style.left = newPos[0] + "px";

    };


});
