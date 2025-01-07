I tried to automatically load the available media from the pc to my html file but I ran into two errors:
i. The node terminal did not recognize the "document module" of the browser
ii.The browser did not recognize the "require function" of node's "global module"

This is the javascript code to load data from the pc to a script:

const fs = require('fs');
const path = require('path');

const musicExtensions = ['.mp3', '.wav', '.flac'];
let musicFiles = [];

function searchMusicFiles(dir) {
    fs.readdir(dir, (err, files) => {
        if (err) {
            console.error(`Error reading directory ${dir}: ${err.message}`);
            return;
        }

        files.forEach(file => {
            const filePath = path.join(dir, file);
            fs.stat(filePath, (err, stats) => {
                if (err) {
                    console.error(`Error getting stats for file ${filePath}: ${err.message}`);
                    return;
                }

                if (stats.isDirectory()) {
                    searchMusicFiles(filePath); // Recursively search in subdirectories
                } else if (musicExtensions.includes(path.extname(file).toLowerCase())) {
                    musicFiles.push(filePath);
                }
            });
        });
    });
}

// Start searching from the current directory
searchMusicFiles(__dirname);

// Log the music files after a delay to ensure all files are processed
setTimeout(() => {
    console.log('Music files:', musicFiles);
}, 5000);