// function to append available songs into music library
const vidListMenu = document.querySelector("#songListMenu");
videoFiles = ['resource/vid/70isA.mp4',
  'resource/vid/20240501175428.mp4',
  'resource/vid/18th April 8.29AM Glitch in device.mp4',
  'resource/vid/11.54AM catching up with Osmond FC24 PS5.mp4',
  'resource/vid/canvaCert.mp4',
  'resource/vid/Allsaints Cathedral at Ughelli.mp4',
  'resource/vid/designAssignment.mp4',
  'resource/vid/Dr Myles Munroes - inspiring speech.mp4',
  'resource/vid/examApproaching.mp4',
  'resource/vid/keni.mp4',
  'resource/vid/maintenance mode.mp4',
  'resource/vid/Media Player 2024-11-04 11-13-24.mp4',
  'resource/vid/motivated already.mp4',
  'resource/vid/narcissm.mp4',
  'resource/vid/Osmond vs Favour FC24 PS5.mp4',
  'resource/vid/VID_20240503_123657.mp4',
  'resource/vid/VID_20240810_162004.mp4',
  'resource/vid/VID_20240810_162024.mp4',
  'resource/vid/VID_20240811_162509.mp4',
  'resource/vid/youth empowerment.mp4'
];

// This first function should put them into their respective arrays
var [_,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z] = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var capLettArr = [_,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
var alph = ['_','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

for (let i=0;i<videoFiles.length;i++) {
  // console.log(videoFiles[i].slice(13,)); // Initials of name for indexing
  for (let j=0;j<alph.length;j++) {
    if (videoFiles[i].slice(13,).charAt(0).toUpperCase() === alph[j].toUpperCase()) {
      capLettArr[j].push(videoFiles[i]);
    }
  }
  if (videoFiles[i].slice(13,).charAt(0).toUpperCase() === videoFiles[i].slice(13,).charAt(0).toLowerCase()) {
    capLettArr[0].push(videoFiles[i]);
  }
}

function songList(LettArr, letter) {

if (LettArr.length > 0) {
  // For each song in this array
  for (let i=0;i<LettArr.length;i++) {
    // Create the div for the letter specified
    var lettVidListTemplate = document.createElement("div");
    // Add the style from css class names
    lettVidListTemplate.classList.add("lett-vid-list-template-style");
    // Create the elements for each song i.e poster, title, duration etc.
    var songItemInA = document.createElement("video");
    var songItemInB = document.createElement("div");
    var songItemInC = document.createElement("div");
    // Add the style from css class names for the elements of a song
    songItemInB.classList.add("recent-media-box-template-item-title");
    songItemInC.classList.add("recent-media-box-template-item-dur");
    // Fill the values of the elements
    songItemInA.classList.add("lett-vid-list-template-img-style");
    songItemInA.controls = true;
    songItemInA.src = "../"+LettArr[i];
    function dur() {
      // this function gets the duration of the media element and approximates to 2 decimal places
      for (let i=0; i<LettArr.length; i++) {
        if (LettArr[i].duration/60 < 1) { 
          return `${LettArr[i].duration.toFixed(2)}sec`;
        } else if (LettArr[i].duration >= 1) { 
          return `${(LettArr[i].duration/60).toFixed(2)}min`
        }
      } 
    }
    // this function gets the name and duration of a media element
    songItemInB.textContent = LettArr[i].slice(13,50);
    setTimeout(()=>{
    songItemInA.addEventListener("loadedmetadata", function() {
        songItemInC.textContent = `${dur()}`;
      }, false);
}, 5000);

    lettVidListTemplate.appendChild(songItemInA);
    lettVidListTemplate.appendChild(songItemInB);
    lettVidListTemplate.appendChild(songItemInC);

  }
  vidListMenu.appendChild(lettVidListTemplate);
 } // end of "if" statement
} // end of "function"

for (let i=0;i<alph.length;i++) {
  songList(capLettArr[i],alph[i]);
}

// function to give soft touch on buttons
const sortItemsBtn = document.querySelectorAll(".sort-items-btn");for(let i=0;i<sortItemsBtn.length;i++){sortItemsBtn[i].addEventListener(["mousedown"],()=>{sortItemsBtn[i].classList.add("c-softBtn");setTimeout(()=>{sortItemsBtn[i].classList.remove("c-softBtn");},1000);}, false);}for(let i=0;i<sortItemsBtn.length;i++){sortItemsBtn[i].addEventListener(["keyup"],()=>{sortItemsBtn[i].classList.add("c-softBtn");setTimeout(()=>{sortItemsBtn[i].classList.remove("c-softBtn");},700);}, false);}
