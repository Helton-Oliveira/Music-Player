
function controllers(dataMusics, song) {
    controls = document.querySelectorAll('[data-controls]');
    index = dataMusics.indexOf(song);

    controls.forEach(control => {
        control.addEventListener('click', (event) => {
            playOrPause(event.target.dataset.controls);
            backOrNext(dataMusics, event.target.dataset.controls);
        });
    });
};

function playOrPause(option) {
    play = document.querySelector('#play');
    pause = document.querySelector('#pause');
    if (option === 'pause') {
        audio.pause();
        play.classList.remove('closed');
        pause.classList.add('closed');
    } 
    if (option === 'play') {
        audio.play();
        play.classList.add('closed');
        pause.classList.remove('closed');
    }
};

function backOrNext(musics, option) {
    if(option === 'next') {
       index += 1;
       audio.pause();
       playSong(musics[index]);
       footer(musics, musics[index]);
    } 
    if(option === 'back') {
        index -= 1;
        audio.pause();
        playSong(musics[index]);
        footer(musics, musics[index]);
     }
};
