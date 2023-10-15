const musicCards = document.querySelector('[data-card]');
const footerElement = document.querySelector('#footer');
let audio = new Audio('');
const favoriteArray = JSON.parse(localStorage.getItem('favoriteSong')) || [];
const favoriteBtn = document.querySelector('#favorite');
const btnHome = document.querySelector('#logo');


btnHome.addEventListener('click', () => {
    window.location.reload(false)
})


favoriteBtn.addEventListener('click', () => {
    displayMusclesOnScreen(favoriteArray);
    listenToMusic(favoriteArray);
})

function displayMusclesOnScreen(data) {
    musicCards.innerHTML = ''
    data.forEach(card => { 
    musicCards.innerHTML += 
        ` <div class="song__box">
            <img src="${card.artist.picture_big}" alt="" data-img="${card.title}">
            <p class="band">${card.artist.name}</p>
            <p class="music__name" id="${card.title}">${card.title}</p>
        </div> `
    });
}

function listenToMusic(data) {
    const imgs = document.querySelectorAll('[data-img]');
    imgs.forEach(e => {
        e.addEventListener('click', () => {
            audio.pause();
            song = data.find(item => item.title === e.dataset.img);
            playSong(song);
            footer(data, song);
              
        })
    })
};

 


function footer(data, song) {
    
    
    footerElement.innerHTML = ` 
        <div class="footer__container">
            <div class="music__card">
                <img src="${song.artist.picture_big}" alt="">
                    <div>
                        <p class="band">${song.artist.name}</p>
                        <p class="music__name">${song.title}</p>
                </div>      
                <i class="fa-solid fa-plus" id="plus"></i>
            </div>

            <div class="reproduction__container">
                <div class="controlers">
                    <div class="controlers__container">
                        <div class="controlers">
                            <div class="controls">
                                <i class="fa-solid fa-backward" data-controls="back" id="back"></i>
                                <i class="fa-solid fa-play closed" data-controls="play" id="play"></i>
                                <i class="fa-solid fa-pause" data-controls="pause" id="pause"></i>
                                <i class="fa-solid fa-forward" data-controls="next" id="next"></i>
                        </div>
                        <progress value="0" max="${29.0}" class="reproduction-bar" id="progressBar"></progress>
                    </div>
                    <i class="fa-solid fa-volume-xmark volume closed" id="mute" data-controls="muted"></i>
                    <i class="fa-solid fa-volume-low volume" data-controls="low" id="low"></i>
                    <progress value="${audio.volume}" max="1" class="volume_bar" id="progress__volume"></progress>
                    <i class="fa-solid fa-volume-high volume" data-controls="high" id="high"></i>
                </div>
            </div> 
        </div> `
        controllers(data, song);
        favoriteMusic(song);  
        setInterval(verifyReproduction, 1000);
};

function playSong(song) {
    audio = new Audio(`${song.preview}`);
    audio.play();
};

function verifyReproduction() {
    reproductionBar = document.querySelector('#progressBar');
    return reproductionBar.setAttribute('value', audio.currentTime);
}


