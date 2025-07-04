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
        var that = this;
        this.songs.forEach( function (song){ // foreach is resolved in window scope 
            that.printSong(song); // here we faced issue of this in closure and fixed it using that 
        });
    },
};

jukebox.printSongs();