interface AuidioPlayer {
    audiovolume:number;
    SongDuration:number;
    Song:string;
    details:details;
}
interface details {
    author:string;
    year:number;
}

const audioPlayer:AuidioPlayer = {
    audiovolume: 90,
    SongDuration: 36,
    Song: "mess",
    details: {
        author: "Ed sheeran",
        year: 2015
    }
}

const { Song:anotherSong 
    , SongDuration:Duration , details  } = audioPlayer;

const {author} = details;

console.log(anotherSong)
console.log(Duration)
console.log(author)

const dbz:string[] = ['goku','vegeta','trunk'];
const  trunk = dbz[3] || 'no hay personaje';

console.error('Personaje 3:', trunk )



export{};