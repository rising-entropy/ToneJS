const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
const now = Tone.now()

function startStop() {
    Tone.start();
    let t = 0;
    while (true) {
        synth.triggerAttackRelease("C4", "8n", now+t)
        t+=0.5
        synth.triggerAttackRelease("E4", "8n", now + t)
        t+=0.5
        synth.triggerAttackRelease("G4", "8n", now + t)
        t+=0.5
    }
}