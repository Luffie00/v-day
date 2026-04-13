const gifStages = [
    "https://media.tenor.com/9ebMfrLqVmIAAAAj/dog-discord.gif",    // 0 normal
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAd/chiikawa-hachiware.gif",  // 1 confused
    "https://media.tenor.com/f_rkpJbH1s8AAAAj/somsom1012.gif",             // 2 pleading
    "https://media.tenor.com/OGY9zdREsVAAAAAj/somsom1012.gif",             // 3 sad
    "https://media1.tenor.com/m/WGfra-Y_Ke0AAAAd/chiikawa-sad.gif",       // 4 sadder
    "https://media.tenor.com/CivArbX7NzQAAAAj/somsom1012.gif",             // 5 devastated
    "https://media.tenor.com/5_tv1HquZlcAAAAj/chiikawa.gif",               // 6 very devastated
    "https://media1.tenor.com/m/uDugCXK4vI4AAAAC/chiikawa-hachiware.gif"  // 7 crying runaway
]

const noMessages = [
    "No",
    "Sicura sicura? 🤔",
    "Eddai... 🥺",
    "Non sai che ti perdi...",
    "... 😢",
    "Perchèèè??? 💔",
    "Sono distrutto...",
    "Ultima chance! 😭",
    "Non mi prendi comunque 😜"
]

const yesTeasePokes = [
    "Ti amo babe 😏❤",
    "Dai se clicchi ancora ti faccio giocare 👀",
    "Dai un'ultima volta 😏",
    "Ultimissima ❤" 

]

let yesTeasedCount = 0
let noTeasedCount = 0
let musicPlaying = true

const catGif = document.getElementById('cat-gif')
const yesBtn = document.getElementById('yes-btn')
const noBtn = document.getElementById('no-btn')
const music = document.getElementById('bg-music')

// Autoplay: audio starts muted (bypasses browser policy), unmute immediately
music.muted = true
music.volume = 0.3
music.play().then(() => {
    music.muted = false
}).catch(() => {
    // Fallback: unmute on first interaction
    document.addEventListener('click', () => {
        music.muted = false
        music.play().catch(() => {})
    }, { once: true })
})

function toggleMusic() {
    if (musicPlaying) {
        music.pause()
        musicPlaying = false
        document.getElementById('music-toggle').textContent = '🔇'
    } else {
        music.muted = false
        music.play()
        musicPlaying = true
        document.getElementById('music-toggle').textContent = '🔊'
    }
}

function handleYesClick() {
    yesTeasedCount++

    if (yesTeasedCount < 2) {
        // Mostra messaggi finché non arrivi a 1 click
        const msg = yesTeasePokes[Math.min(yesTeasedCount - 1, yesTeasePokes.length - 1)]
        showTeaseMessage(msg)
        return
    }
    window.location.href = 'third.html'
}

function handleNoClick() {
    noTeasedCount++

    if (noTeasedCount < 2) {
        // Mostra messaggi finché non arrivi a 1 click
        const msg = yesTeasePokes[Math.min(noTeasedCount - 1, yesTeasePokes.length - 1)]
        showTeaseMessage(msg)
        return
    }
    window.location.href = 'third.html'
}

function showTeaseMessage(msg) {
    let toast = document.getElementById('tease-toast')
    toast.textContent = msg
    toast.classList.add('show')
    clearTimeout(toast._timer)
    toast._timer = setTimeout(() => toast.classList.remove('show'), 2500)
}

