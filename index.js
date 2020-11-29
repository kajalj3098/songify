  const musicList = [
        {
            name: 'starboy',
            song: 'songs/111.mp3',
            img: 'images/pexels-photo-105857.jpeg'
        },
        {
            name: 'boyfrnd',
            song: 'songs/222.mp3',
            img: 'images/pexels-photo-105857.jpeg'
        },
        {
            name: 'as long as',
            song: 'songs/333.mp3',
            img: 'images/pexels-photo-105857.jpeg'
        },
        {
            name: 'we dont talk',
            song: 'songs/444.mp3',
            img: 'images/pexels-photo-105857.jpeg'
        },
        {
            name: 'turn down',
            song: 'songs/555.mp3',
            img: 'images/pexels-photo-105857.jpeg'
        },
    ]
    const music = document.querySelector('audio');
    const title = document.getElementById('title');
    const backward = document.getElementById('backward')
    const forward = document.getElementById('forward')
    const img = document.querySelector('img');
    const play = document.getElementById('play');
    let isPlaying = false;
    function playSong() {
        isPlaying = true
        music.play();
        play.classList.replace('fa-play', 'fa-pause');
        img.classList.add('anime')
    }
    play.addEventListener('click', () => {
        if (isPlaying) {
            isPlaying = false
            music.pause();
            play.classList.replace('fa-pause', 'fa-play');
            img.classList.remove('anime')
        } else {
            playSong()
        }


    })
    let i = 0;
    forward.addEventListener('click', () => {
        i++;
        if (i == musicList.length) {
            loadSong(musicList[0])
            i=0;
        } else {
            loadSong(musicList[i])
        }
        playSong()
    })
    backward.addEventListener('click', () => {
        i--;
        if (i <0) {
            loadSong(musicList[musicList.length-1])
            i=musicList.length-1
        } else {
            loadSong(musicList[i])
        }
        playSong()
    })

    const loadSong = (songs) => {
        title.textContent = songs.name;
        music.src = songs.song;
        img.src = songs.img;

    }
    loadSong(musicList[0])
