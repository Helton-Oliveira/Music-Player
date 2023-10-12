
let musics = []

async function requestAPI(search) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '002a58e769msh8dd99e477664a75p13a310jsn20f45399e810',
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    }
    let music = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`,options)
    convertedSongs = await music.json()
    musics =  convertedSongs.data
    displayMusclesOnScreen(musics)
    listenToMusic(musics)
}




