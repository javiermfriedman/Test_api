const express = require('express');
const app = express();
const PORT = 8080;


app.use(express.json()); // Middleware to parse JSON bodies


const songs = [
        "Song 1: Shape of You - Ed Sheeran",
        "Song 2: Blinding Lights - The Weeknd",
        "Song 3: Levitating - Dua Lipa",
        "Song 4: Peaches - Justin Bieber",
        "Song 5: Good 4 U - Olivia Rodrigo",
        "Song 6: Watermelon Sugar - Harry Styles",
        "Song 7: Save Your Tears - The Weeknd",
        "Song 8: Drivers License - Olivia Rodrigo",
        "Song 9: Stay - The Kid LAROI & Justin Bieber",
        "Song 10: Montero (Call Me By Your Name) - Lil Nas X"
    ];
    
// Function to get a random song from the array
const getRandomSong = () => {
const randomIndex = Math.floor(Math.random() * songs.length);
return songs[randomIndex];
};

// Define a GET route at /song
app.get('/song', (req, res) => {
        const randomSong = getRandomSong();
        res.status(200).send({
            "track_uri": randomSong
        });
    });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
