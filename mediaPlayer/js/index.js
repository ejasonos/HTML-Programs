// Recent media items on the home page code
const checkedRecentMedia = [];
const subMenu = document.querySelector("#subMenu");
const numberOfItemsSpan = document.querySelector("#numberOfItemsSpan");
const itemSpan = document.querySelector("#itemSpan");
const numberOfItemsCb = document.querySelector("#numberOfItemsCb");
const recentMediaBoxTemplateCb = document.querySelectorAll("#recentMediaBoxTemplateCb");
const recentMediaBoxTemplate = document.querySelectorAll("#recentMediaBoxTemplate");
const recentMediaTitle = document.querySelectorAll("#recentMediaBoxTemplateTitle");
const recentMediaDuration = document.querySelectorAll("#recentMediaBoxTemplateDuration");
const recentMedia = document.querySelectorAll(".recent-media-box-template-item");

function numberCheckedItems() {
    numberOfItemsSpan.textContent = `${checkedRecentMedia.length}`;
    if (checkedRecentMedia.length == 0) {
        subMenu.className = "sub-menu";
        for (let i = 0; i<recentMediaBoxTemplateCb.length; i++) {
            recentMediaBoxTemplateCb[i].style.border = "";
        }
    }
    if (checkedRecentMedia.length == 1) {
        itemSpan.textContent = "item";
        for (let i = 0; i<recentMediaBoxTemplateCb.length; i++) {
            recentMediaBoxTemplateCb[i].style.border = "1px solid grey";
        }
    } else if (checkedRecentMedia.length > 1) {
        itemSpan.textContent = "items";
        for (let i = 0; i<recentMediaBoxTemplateCb.length; i++) {
            recentMediaBoxTemplateCb[i].style.border = "1px solid grey";
        }
    } else {
        return itemSpan.textContent;
    }
}

function refreshNumberCheckedItems() {
    // this function ensures only the maximum elements available can be checked and the value displayed
    if (Number(numberOfItemsSpan.textContent) < recentMediaBoxTemplate.length) {
        numberOfItemsCb.className = "number-of-items-cb";
    } else if (Number(numberOfItemsSpan.textContent) == recentMediaBoxTemplate.length) {
        numberOfItemsCb.className = "allCheckClick";
    }
}

function dur() {
  // this function gets the duration of the media element and approximates to 2 decimal places
  for (let i=0; i<recentMedia.length; i++) {
    if (recentMedia[i].duration/60 < 1) { 
        return `${recentMedia[i].duration.toFixed(2)}sec`;
    } else if (recentMedia[i].duration >= 1) { 
        return `${(recentMedia[i].duration/60).toFixed(2)}min`
    }
  }
}

for (let i=0; i<recentMediaTitle.length; i++) {
    // this function gets the name and duration of a media element
    recentMediaTitle[i].textContent = recentMedia[i].src.split('/').pop(12).slice(0,15);
    recentMedia[i].addEventListener("loadedmetadata", function() {
        recentMediaDuration[i].textContent = `${dur()}`;
    }, false);
}

for (let i=0; i<recentMediaBoxTemplateCb.length; i++) {
    // this function ensures that when you check an item, it is highlighted and is added to an array
    recentMediaBoxTemplateCb[i].addEventListener("click", function() {
        if (recentMediaBoxTemplateCb[i].className != "checkClick") {
            recentMediaBoxTemplateCb[i].className = "checkClick";
            checkedRecentMedia.push(recentMediaBoxTemplate[i]);
        } else {
            recentMediaBoxTemplateCb[i].className = "recent-media-box-template-cb";
            checkedRecentMedia.splice(0,1);
        }
        subMenu.className = "sub-menu-show";
        numberCheckedItems();
        refreshNumberCheckedItems();
    }, false);
}

numberOfItemsCb.addEventListener("click", function() {
    if (numberOfItemsCb.className != "allCheckClick") {
        checkedRecentMedia.length = 0;
        for (let i = 0; i<recentMediaBoxTemplateCb.length; i++) {
            numberOfItemsCb.className = "allCheckClick";
            recentMediaBoxTemplateCb[i].className = "checkClick";
            checkedRecentMedia.push(recentMediaBoxTemplateCb[i]);     
        }
    } else if (numberOfItemsCb.className == "allCheckClick") {
          for (let i = 0; i<recentMediaBoxTemplateCb.length; i++) {
              numberOfItemsCb.className = "number-of-items-cb";
              recentMediaBoxTemplateCb[i].className = "recent-media-box-template-cb";
              checkedRecentMedia.pop(recentMediaBoxTemplateCb[i]);      
          }
    }
    numberCheckedItems();
    refreshNumberCheckedItems();
}, false);
