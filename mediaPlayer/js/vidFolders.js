// function to append available songs into music library
const songListMenu = document.querySelector("#songListMenu");
musicFiles = ['resource/audio/Andrae-Crouch-Jesus-is-the-answer.mp3',
  'resource/audio/Elevation_Worship_-_O_Come_to_the_Altar_CeeNaija.com_.mp3',
  'resource/audio/Maverick_City_Music_-_God_Will_Work_It_out_feat_Naomi_Raine_Israel_Houghton_Mav_City_Gospel_Choir__CeeNaija.com_.mp3',
  'resource/audio/Hillsong_United_-_I_Give_You_My_Heart_(Jesusful.com).mp3',
  'resource/audio/Oceans-Where-Feet-May-Fail-Hillsong-United.mp3',
  'resource/audio/Sinach-Jesus-Is-Alive-[TrendyBeatz.com].mp3',
  'resource/audio/%$Sunmisola_Agbebi_-_Oba_Ni_CeeNaija.com_.mp3',
  'resource/audio/Sunday-Service-Choir-Kanye-West-Easy-On-Me-l9.mp3',
  'resource/audio/TRIBL_ft_Taylor_Armstrong_-_Altars_(Jesusful.com).mp3',
  'resource/audio/United_Pursuit_-_Since_Your_Love_CeeNaija.com_.mp3'
];

// This first function should put them into their respective arrays
var [_,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z] = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var capLettArr = [_,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
var alph = ['_','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

for (let i=0;i<musicFiles.length;i++) {
    //console.log(musicFiles[i].slice(15,)); // Initials of name for indexing
  for (let j=0;j<alph.length;j++) {
    if (musicFiles[i].slice(15,).charAt(0).toUpperCase() === alph[j].toUpperCase()) {
      capLettArr[j].push(musicFiles[i]);
    }
  }
  if (musicFiles[i].slice(15,).charAt(0).toUpperCase() === musicFiles[i].slice(15,).charAt(0).toLowerCase()) {
    capLettArr[0].push(musicFiles[i]);
  }
}

function songList(LettArr, letter) {
if (LettArr.length > 0) {
  // Create the div for the letter specified
  // Declare the letter and song-list-wrap elements
  var lett = document.createElement("div");
  var lettText = document.createElement("p");
  var lettSongList = document.createElement("div");
  // Add the style from css class names
  lett.classList.add("lett-style");
  lettText.classList.add("lett-text-style");
  lettSongList.classList.add("lett-song-list-style");
  // Define the value for the song head letter
  lettText.textContent = letter.toUpperCase(); // this is the indicator letter
  // For each song in this array
  for (let i=0;i<LettArr.length;i++) {
    // Create the element for one song
    var lettSongItem = document.createElement("div");
    // Add the style from css class names
    lettSongItem.classList.add("lett-song-item-style");
    if (Number(i)%2===0) {
      lettSongItem.classList.add("song-item-style-even");
    } else if (Number(i)%2 !== 0) {
      lettSongItem.classList.add("song-item-style-odd");
    }
    // Create the elements for each song i.e play, title etc.
    var songItemInA = document.createElement("div");
    var songItemInB = document.createElement("div");
    var songItemInC = document.createElement("div");
    var songItemInD = document.createElement("div");
    var songItemInE = document.createElement("div");
    var songItemInF = document.createElement("div");
    var songItemInG = document.createElement("div");
    var songItemInH = document.createElement("div");
    // Add the style from css class names for the elements of a song
    songItemInA.classList.add("song-item-checkbox-div");
    songItemInB.classList.add("song-item-play-div");
    songItemInC.classList.add("song-item-title-div");
    songItemInD.classList.add("song-item-title-div");
    songItemInE.classList.add("song-item-title-div");
    songItemInF.classList.add("song-item-title-div");
    songItemInG.classList.add("song-item-title-div");
    songItemInH.classList.add("song-item-title-div");
    // Define the values of each element for a song
    songItemInC.textContent = LettArr[i].slice(15,40);
    songItemInD.textContent = `${LettArr[i].slice(37,).charAt(0).toUpperCase()}${LettArr[i].slice(38,45)}`;
    songItemInE.textContent = LettArr[i].slice(15,25); // make use of || as delimiter
    songItemInF.textContent = LettArr[i].slice(-3,);
    songItemInG.textContent = LettArr[i].slice(45,65);
    songItemInH.textContent = LettArr[i].slice(-3,);

    lettSongItem.appendChild(songItemInA);
    lettSongItem.appendChild(songItemInB);
    lettSongItem.appendChild(songItemInC);
    lettSongItem.appendChild(songItemInD);
    lettSongItem.appendChild(songItemInE);
    lettSongItem.appendChild(songItemInF);
    lettSongItem.appendChild(songItemInG);
    lettSongItem.appendChild(songItemInH);
    lettSongList.appendChild(lettSongItem);

  }
  lett.appendChild(lettText);
  lett.appendChild(lettSongList);
  songListMenu.appendChild(lett);
} // end of "if" statement
} // end of "for" keyword

for (let i=0;i<alph.length;i++) {
  songList(capLettArr[i],alph[i]);
}

// function to give soft touch on buttons
const sortItemsBtn = document.querySelectorAll(".sort-items-btn");for(let i=0;i<sortItemsBtn.length;i++){sortItemsBtn[i].addEventListener(["mousedown"],()=>{sortItemsBtn[i].classList.add("c-softBtn");setTimeout(()=>{sortItemsBtn[i].classList.remove("c-softBtn");},1000);}, false);}for(let i=0;i<sortItemsBtn.length;i++){sortItemsBtn[i].addEventListener(["keyup"],()=>{sortItemsBtn[i].classList.add("c-softBtn");setTimeout(()=>{sortItemsBtn[i].classList.remove("c-softBtn");},700);}, false);}
