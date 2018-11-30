// A Library has a name and a creator (both strings)
// These are the only things required in order to create a music library
// A Library has many playlists (starts as an empty array)
// Playlist objects can be added to an instance of a library
// Each Playlist has a name which is required upon creation
// A Playlist also has many tracks
// A Track has a title, a rating (an integer from 1 to 5) and a length (integer in seconds) all of which are required when creating a new track
// Each Playlist also has an overallRating function which will calculate the rating by averaging the rating of its tracks
// Each Playlist also has a totalDuration function which will sum the duration of all of its tracks
// Once defined, your code should use new to instantiate these functions to create instances of one library and then add new tracks and playlists to the library.


// Work incrementally but by the end of it you should have defined multiple prototype functions:

// Library
// Playlist
// Track

// Once defined, your code should use new to instantiate these functions to create instances of one library and then add new tracks and playlists to the library.

function Library(name="Music", creator="Aaron") {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
    this.addPlaylist = (playlist) => {
        this.playlists.push(playlist)
    }
    this.removePlaylist = (playlist) => {
        this.playlists.slice(this.playlists.indexOf(playlist))
    }
}

function Playlist (name) {
    this.name = name;
    this.tracks = [];
    this.totalDuration = 0
    this.totalRating = 0
    this.getPlaylistRating = () => {
        return (this.totalRating / this.tracks.length).toFixed(8, 2)
    }
    this.calcTotalPlaylistDuration = () => {
        return this.totalDuration;
    }
    this.addTrack = (track) => {
        this.tracks.push(track)
        this.totalRating += track.rating;
        this.totalDuration += track.length;
    }
    this.removeTrack = (track) => {
        this.tracks.slice(this.tracks.indexOf(track), 1)
        this.totalRating -= track.rating;
        this.totalDuration -= track.length;
    }
}

function Track (title, rating, length) {
    this.title = title;
    this.raing = rating;
    this.length = length;
}

const Mylib = new Library('Music', 'Aaron')
const sickBeats = new Playlist('Sick Beats')
const tuuuuune = new Track('A great tune', 5, 180)
const aBanger = new Track('def a banger', 5, 120)

Mylib.addPlaylist(sickBeats)
sickBeats.addTrack(tuuuuune)
sickBeats.addTrack(aBanger)


console.log(Mylib)
console.log(Mylib.playlists)
console.log(sickBeats.tracks)

console.log()