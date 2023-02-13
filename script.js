// Initialize the variables
// let songIndex = 0;
// let audioElement = new Audio('songs/Mahi.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let songItems = Array.from(document.getElementsByClassName('songItem'));

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [{
        songName: "Mahi",
        filePath: "songs/Mahi.mp3",
        coverpath: "covers/kinna sone.jpg"
    },

    {
        songName: "Rubicon",
        filePath: "C:\Users\Shivam Panwar\Desktop\spotify\spotify",
        coverpath: "covers/rubicon-.jpg"
    },

    {
        songName: "Maan Meri Jaan",
        filePath: "C:\Users\Shivam Panwar\Desktop\spotify\spotify\covers",
        coverpath: "covers/Maan.webp"
    },

    {
        songName: "Apna bana le",
        filePath: "C:\Users\Shivam Panwar\Desktop\spotify\spotify",
        coverpath: "covers/apna ban ale.jpg"
    },

    {
        songName: "Humare-Saath-Shri-Raghunath",
        filePath: "C:\Users\Shivam Panwar\Desktop\spotify\spotify",
        coverpath: "covers/ram-parivar.jpg"
    },

    {
        songName: "Enemy",
        filePath: "C:\Users\Shivam Panwar\Desktop\spotify\spotify",
        coverpath: "covers/enemyy.jpg"
    },

    {
        songName: "Let Me Love you",
        filePath: "C:\Users\Shivam Panwar\Desktop\spotify\spotify",
        coverpath: "covers/let me luv.jpg"
    },

    {
        songName: "Believer",
        filePath: "C:\Users\Shivam Panwar\Desktop\spotify\spotify",
        coverpath: "covers/imagine.jpg"
    },

    {
        songName: "Somebody That I Used To Know",
        filePath: "C:\Users\Shivam Panwar\Desktop\spotify\spotify",
        coverpath: "covers/somebody.webp"
    },

    {
        songName: "Aabaad Barbaad",
        filePath: "C:\Users\Shivam Panwar\Desktop\spotify\spotify",
        coverpath: "covers/aabad.jpg"
    },

]

// songItems.forEach((element, i) => {
//     element.getElementsByTagName("img")[0].src = songs[i].coverpath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// })

// Handle play/ pause click
// masterPlay.addEventListener('Click', () => {
//         if (audioElement.paused || audioElement.currentTime <= 0) {
//             audioElement.play();
//             masterPlay.classList.remove('fa-play-circle');
//             masterPlay.classList.add('fa-pause-circle');
//             gif.style.opacity = 1;
//         } else {
//             audioElement.pause();
//             masterPlay.classList.remove('fa-pause-circle')
//             masterPlay.classList.add('fa-play-circle')
//             gif.style.opacity = 0;
//         }
//     })
//     // Listen to Events
// audioElement.addEventListener('timeupdate', () => {
//     //update seek bar
//     progress = parseInt(audioElement.currentTime / audioElement.duration) * 100;
//     myProgressBar.value = progress;
// })
// myProgressBar.addEventListener('change', () => {
//     audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
// })


// harry bhai code
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        } else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
    })
    // Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
        audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
    })
    // for play all song in the list 
    // const makeAllPlays = () => {
    //     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    //         element.classList.remove('fa-pause-circle');
    //         element.classList.add('fa-play-circle');
    //     })
    // }
    // // play pause song in the list icon       
    // Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    //     element.addEventListener('click', (e) => {
    //         makeAllPlays();
    //         songIndex = parseInt(e.target.id);
    //         e.target.classList.remove('fa-play-circle');
    //         e.target.classList.add('fa-pause-circle');
    //         audioElement.src = `songs/${songIndex+1}.mp3`;
    //         masterSongName.innerText = songs[songIndex].songName;
    //         audioElement.currentTime = 0;
    //         audioElement.play();
    //         gif.style.opacity = 1;
    //         masterPlay.classList.remove('fa-play-circle');
    //         masterPlay.classList.add('fa-pause-circle');
    //     })
    // })
    // harry bhai code 
    // all song play on icon and pause 
const makeAllPlays = () => {
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })
    }
    // icon click play pause  
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();

        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        // Change the zero index 0 to 1
        audioElement.src = `songs/${songIndex+1}.mp3`;
        // masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        // gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

//play next previous song
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    // gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    // gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})