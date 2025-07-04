function printSong() {
    console.log("the global object");
}

const jukebox = {
    songs: [
        {
            title: "stay",
            artist: "kk"
        },
        {
            title: "sup",
            artist: "Monu"
        },
    ],

    printSong: function (song) {
        console.log(song.title + " - " + song.artist);
    },
    printSongs: function() {
        this.songs.forEach( (song) => {
            this.printSong(song);
        });
    },
};

jukebox.printSongs();