// 🎧 VibeCraft Music Player Script
// Controls 3 players: Instrumental, Vocal, Mixed Shuffle with real song titles

// ===============================
// 🎼 Instrumental Player Setup
// ===============================
const instSongs = [
  "1.mp3", "2.mp3", "3.mp3", "4.mp3", "5.mp3", "6.mp3", "7.mp3", "8.mp3", "9.mp3", "10.mp3",
  "11.mp3", "12.mp3", "13.mp3", "14.mp3", "15.mp3", "16.mp3", "17.mp3", "18.mp3", "19.mp3", "20.mp3",
  "21.mp3", "22.mp3", "23.mp3", "24.mp3", "25.mp3", "26.mp3", "27.mp3", "28.mp3", "29.mp3", "30.mp3"
];

const instTitles = [
  "Echoes of Dawn", "Silent Horizon", "Crystal Drift", "Velvet Rain", "Neon Mirage",
  "Ethereal Flow", "Solar Dreams", "Waves of Time", "Frozen Starlight", "Shadow in Light",
  "Ambient Bloom", "Lunar Tide", "Mystic Skyline", "Whispers in Fog", "Digital Oasis",
  "Falling Comets", "Infinite Road", "Glass Gardens", "Night Pulse", "Beneath the Clouds",
  "Gravity Loop", "Electric Silence", "Dream Circuit", "Oceanic Mind", "Pulse of Earth",
  "Fractal Vibes", "Dusk Signals", "Lucid Steps", "Northern Lights", "Cosmic River"
];

let instIndex = 0;
let instAudio = document.getElementById("inst-audio");

const instElements = {
  play: document.getElementById("inst-play"),
  next: document.getElementById("inst-next"),
  prev: document.getElementById("inst-prev"),
  shuffle: document.getElementById("inst-shuffle"),
  loop: document.getElementById("inst-loop"),
  cover: document.getElementById("inst-cover"),
  title: document.getElementById("inst-title"),
  progress: document.getElementById("inst-progress"),
  time: document.getElementById("inst-time"),
  volume: document.getElementById("inst-volume")
};

let instLoop = false;
let instShuffle = false;

function loadInstrumental(index) {
  instAudio.src = `songs/${instSongs[index]}`;
  instElements.title.textContent = instTitles[index];
  instElements.cover.src = "songs/covers/default.jpg";
}

function playInstrumental() {
  vocalAudio.pause();
  mixAudio.pause();
  instAudio.play();
  instElements.play.textContent = "⏸";
}

function pauseInstrumental() {
  instAudio.pause();
  instElements.play.textContent = "▶️";
}

instElements.play.addEventListener("click", () => {
  if (instAudio.paused) playInstrumental();
  else pauseInstrumental();
});

instElements.next.addEventListener("click", () => {
  instIndex = instShuffle ? Math.floor(Math.random() * instSongs.length) : (instIndex + 1) % instSongs.length;
  loadInstrumental(instIndex);
  playInstrumental();
});

instElements.prev.addEventListener("click", () => {
  instIndex = instIndex > 0 ? instIndex - 1 : instSongs.length - 1;
  loadInstrumental(instIndex);
  playInstrumental();
});

instElements.shuffle.addEventListener("click", () => {
  instShuffle = !instShuffle;
  instElements.shuffle.classList.toggle("glow", instShuffle);
});

instElements.loop.addEventListener("click", () => {
  instLoop = !instLoop;
  instAudio.loop = instLoop;
  instElements.loop.classList.toggle("glow", instLoop);
});

instElements.volume.addEventListener("input", () => {
  instAudio.volume = instElements.volume.value;
});

instAudio.addEventListener("timeupdate", () => {
  const { currentTime, duration } = instAudio;
  instElements.progress.value = (currentTime / duration) * 100 || 0;
  instElements.time.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
});

instElements.progress.addEventListener("input", () => {
  instAudio.currentTime = (instElements.progress.value / 100) * instAudio.duration;
});

instAudio.addEventListener("ended", () => {
  if (!instLoop) instElements.next.click();
});

loadInstrumental(instIndex);


// ===============================
// 🎤 Vocal Player Setup
// ===============================
const vocalSongs = [
  "v1.mp3", "v2.mp3", "v3.mp3", "v4.mp3", "v5.mp3", "v6.mp3", "v7.mp3", "v8.mp3", "v9.mp3", "v10.mp3",
  "v11.mp3", "v12.mp3", "v13.mp3", "v14.mp3", "v15.mp3", "v16.mp3", "v17.mp3", "v18.mp3", "v19.mp3", "v20.mp3"
];

const vocalTitles = [
  "Armaan", "Changes", "Colours and Shadows", "Dil Ki Dhadkanein", "Endless Adventure",
  "Hausle Ki Udaan", "Heart of the Journey", "I am dead", "Jindagi Ki Haqiqat", "Lost Echoes",
  "Nazarein Jhuki", "New Horizons", "Rising Sun", "Safar", "Shattered Echoes", "SoulBreeze",
  "Together We Rise", "Whispers in the Wind (Male)", "World on fire", "Zindagi Ka Yeh Jo Safar"
];

let vocalIndex = 0;
let vocalAudio = document.getElementById("vocal-audio");

const vocalElements = {
  play: document.getElementById("vocal-play"),
  next: document.getElementById("vocal-next"),
  prev: document.getElementById("vocal-prev"),
  shuffle: document.getElementById("vocal-shuffle"),
  loop: document.getElementById("vocal-loop"),
  cover: document.getElementById("vocal-cover"),
  title: document.getElementById("vocal-title"),
  progress: document.getElementById("vocal-progress"),
  time: document.getElementById("vocal-time"),
  volume: document.getElementById("vocal-volume")
};

let vocalLoop = false;
let vocalShuffle = false;

function loadVocal(index) {
  vocalAudio.src = `songs/${vocalSongs[index]}`;
  vocalElements.title.textContent = vocalTitles[index];
  vocalElements.cover.src = "songs/covers/default.jpg";
}

function playVocal() {
  instAudio.pause();
  mixAudio.pause();
  vocalAudio.play();
  vocalElements.play.textContent = "⏸";
}

function pauseVocal() {
  vocalAudio.pause();
  vocalElements.play.textContent = "▶️";
}

vocalElements.play.addEventListener("click", () => {
  if (vocalAudio.paused) playVocal();
  else pauseVocal();
});

vocalElements.next.addEventListener("click", () => {
  vocalIndex = vocalShuffle ? Math.floor(Math.random() * vocalSongs.length) : (vocalIndex + 1) % vocalSongs.length;
  loadVocal(vocalIndex);
  playVocal();
});

vocalElements.prev.addEventListener("click", () => {
  vocalIndex = vocalIndex > 0 ? vocalIndex - 1 : vocalSongs.length - 1;
  loadVocal(vocalIndex);
  playVocal();
});

vocalElements.shuffle.addEventListener("click", () => {
  vocalShuffle = !vocalShuffle;
  vocalElements.shuffle.classList.toggle("glow", vocalShuffle);
});

vocalElements.loop.addEventListener("click", () => {
  vocalLoop = !vocalLoop;
  vocalAudio.loop = vocalLoop;
  vocalElements.loop.classList.toggle("glow", vocalLoop);
});

vocalElements.volume.addEventListener("input", () => {
  vocalAudio.volume = vocalElements.volume.value;
});

vocalAudio.addEventListener("timeupdate", () => {
  const { currentTime, duration } = vocalAudio;
  vocalElements.progress.value = (currentTime / duration) * 100 || 0;
  vocalElements.time.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
});

vocalElements.progress.addEventListener("input", () => {
  vocalAudio.currentTime = (vocalElements.progress.value / 100) * vocalAudio.duration;
});

vocalAudio.addEventListener("ended", () => {
  if (!vocalLoop) vocalElements.next.click();
});

loadVocal(vocalIndex);


// ===============================
// 🎲 Mixed Player (Instrumental + Vocal)
// ===============================
const mixAudio = document.getElementById("mix-audio");
const mixElements = {
  play: document.getElementById("mix-play"),
  next: document.getElementById("mix-next"),
  prev: document.getElementById("mix-prev"),
  shuffle: document.getElementById("mix-shuffle"),
  loop: document.getElementById("mix-loop"),
  cover: document.getElementById("mix-cover"),
  title: document.getElementById("mix-title"),
  artist: document.getElementById("mix-artist"),
  progress: document.getElementById("mix-progress"),
  current: document.getElementById("mix-time-current"),
  duration: document.getElementById("mix-time-duration"),
  volume: document.getElementById("mix-volume")
};

const mixSongs = [...instSongs, ...vocalSongs];
let mixIndex = 0;
let mixLoop = false;
let mixShuffle = true;

function getMixTitle(fileName) {
  if (fileName.startsWith("v")) {
    const index = vocalSongs.indexOf(fileName);
    return vocalTitles[index] || fileName;
  } else {
    const index = instSongs.indexOf(fileName);
    return instTitles[index] || fileName;
  }
}

function loadMix(index) {
  const file = mixSongs[index];
  mixAudio.src = `songs/${file}`;
  mixElements.title.textContent = getMixTitle(file);
  mixElements.artist.textContent = "VibeCraft Player";
  mixElements.cover.src = "songs/covers/default.jpg";
}

function playMix() {
  instAudio.pause();
  vocalAudio.pause();
  mixAudio.play();
  mixElements.play.textContent = "⏸";
}

function pauseMix() {
  mixAudio.pause();
  mixElements.play.textContent = "▶️";
}

mixElements.play.addEventListener("click", () => {
  if (mixAudio.paused) playMix();
  else pauseMix();
});

mixElements.next.addEventListener("click", () => {
  mixIndex = mixShuffle ? Math.floor(Math.random() * mixSongs.length) : (mixIndex + 1) % mixSongs.length;
  loadMix(mixIndex);
  playMix();
});

mixElements.prev.addEventListener("click", () => {
  mixIndex = mixIndex > 0 ? mixIndex - 1 : mixSongs.length - 1;
  loadMix(mixIndex);
  playMix();
});

mixElements.shuffle.addEventListener("click", () => {
  mixShuffle = !mixShuffle;
  mixElements.shuffle.classList.toggle("glow", mixShuffle);
});

mixElements.loop.addEventListener("click", () => {
  mixLoop = !mixLoop;
  mixAudio.loop = mixLoop;
  mixElements.loop.classList.toggle("glow", mixLoop);
});

mixElements.volume.addEventListener("input", () => {
  mixAudio.volume = mixElements.volume.value;
});

mixAudio.addEventListener("timeupdate", () => {
  const { currentTime, duration } = mixAudio;
  mixElements.progress.value = (currentTime / duration) * 100 || 0;
  mixElements.current.textContent = formatTime(currentTime);
  mixElements.duration.textContent = formatTime(duration);
});

mixElements.progress.addEventListener("input", () => {
  mixAudio.currentTime = (mixElements.progress.value / 100) * mixAudio.duration;
});

mixAudio.addEventListener("ended", () => {
  if (!mixLoop) mixElements.next.click();
});

loadMix(mixIndex);


// ===============================
// 🕒 Time Formatter
// ===============================
function formatTime(sec) {
  const m = Math.floor(sec / 60) || 0;
  const s = Math.floor(sec % 60) || 0;
  return `${m}:${s < 10 ? "0" + s : s}`;
}
