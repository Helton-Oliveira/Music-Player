const musicCards = document.querySelector('[data-card]');
const footerElement = document.querySelector('#footer');
let audio = new Audio('');


function displayMusclesOnScreen(data) {
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
                <i class="fa-solid fa-plus"></i>
            </div>

            <div class="reproduction__container">
                <div class="controlers">
                    <i class="fa-solid fa-backward" data-controls="back" id="back"></i>
                    <i class="fa-solid fa-play closed" data-controls="play" id="play"></i>
                    <i class="fa-solid fa-pause" data-controls="pause" id="pause"></i>
                    <i class="fa-solid fa-forward" data-controls="next" id="next"></i>
                </div>
            </div> 
        </div> `
        controllers(data, song);
};

function playSong(song) {
    audio = new Audio(`${song.preview}`);
    audio.play();
};

