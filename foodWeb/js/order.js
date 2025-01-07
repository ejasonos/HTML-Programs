//////////////////// function to display/hide category items //////////////////
const catWrap = document.querySelector(".category");
const catItem = document.querySelectorAll(".cat-item");
 
for (let i=0;i<catItem.length;i++) {
  catItem[i].childNodes[1].addEventListener("click", ()=>{
    if (catItem[i].childNodes[3].style.display === "none") {
      catItem[i].childNodes[3].style.display = "grid";
      catWrap.classList.add("category-col");
    } else if (catItem[i].childNodes[3].style.display === "grid") {
      catItem[i].childNodes[3].style.display = "none";
    } else {
      catItem[i].childNodes[3].style.display = "grid";
      catWrap.classList.add("category-col");
    }
  }, false);
}

setInterval(()=>{
  if ((catItem[0].childNodes[3].style.display !== "grid") && (catItem[1].childNodes[3].style.display !== "grid") && (catItem[2].childNodes[3].style.display !== "grid") && (catItem[3].childNodes[3].style.display !== "grid") && (catItem[4].childNodes[3].style.display !== "grid")) {
    catWrap.classList.remove("category-col");
  }
}, 500);



//////////////////// funtion to create orderId ////////////////////
const ticketHeaderId = document.querySelector("#ticketHeaderId");

var bits = 16;
const bytes = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];
var id = [];
for (let i=0;i<bits;i++) {
  let k = Math.trunc(Math.random() * bytes.length);
  id[i] = bytes[k];
}
ticketHeaderId.textContent = id.join("");

//////////////////// function to put items into the ticket ////////////////////

const itemObject = document.querySelectorAll('.itemObject');
const ticketItem = document.querySelector('.ticket-item');
const totalAmount = document.querySelector("#totalAmount");

for (let i=0; i<itemObject.length; i++) {
    itemObject[i].addEventListener("click", function() {
        let ticketItemObject = document.createElement('div');
        ticketItemObject.className = 'row-align';
        let ticketItemObjectTitle = document.createElement('p');
        ticketItemObjectTitle.textContent = itemObject[i].childNodes[1].textContent;
        let ticketItemObjectPortion = document.createElement('input');
        ticketItemObjectPortion.type = "Number";
        ticketItemObjectPortion.value = 1;
        let ticketItemObjectPrice = document.createElement('div');
        ticketItemObjectPrice.textContent = Number(itemObject[i].childNodes[5].textContent)*Number(ticketItemObjectPortion.value);
        let ticketItemObjectRemove = document.createElement('div');
        ticketItemObjectRemove.className = "remove";
        ticketItemObjectRemove.textContent = "x";

        ticketItemObject.appendChild(ticketItemObjectRemove);
        ticketItemObject.appendChild(ticketItemObjectTitle);
        ticketItemObject.appendChild(ticketItemObjectPortion);
        ticketItemObject.appendChild(ticketItemObjectPrice);

        ticketItem.appendChild(ticketItemObject);

    }, false);
}

//////////////////// function to calculate the prices and total amount ////////////////////
//// a sub function to arrange the value of the amount ////
function amount(value) {
  return `N${value}.00`;
  /* This is a different problem
  if (value.toString().length <= 3) {
    return `N${value.toString()}.00`;
  } else if (value.toString().length > 3) {
    for (let i=0;i<value.toString().length;i++) {
      return `N${value}.00`;
    }
  } else if (value.toString().length > 6) {
    for (let i=0;i<value.toString().length;i++) {
      return `N${value}.00`;
    }
  }
  */
}

setInterval(()=> {
    let sum = 0;
    for (let i=0; i<ticketItem.childNodes.length; i++) {
      var basePrice = Number(ticketItem.childNodes[i].childNodes[3].textContent);
      var portionPrice = Number(ticketItem.childNodes[i].childNodes[2].value)*Number(basePrice);
      ticketItem.childNodes[i].childNodes[2].onblur = ()=> {
          portionPrice = Number(ticketItem.childNodes[i].childNodes[2].value)*Number(basePrice);
          return sum; // This was where the error was
        }
      ticketItem.childNodes[i].childNodes[0].onclick = ()=> {
        ticketItem.removeChild(ticketItem.childNodes[i]);
        }
      sum=sum+Number(portionPrice);
      totalAmount.textContent=amount(sum);
    }
},  300);

//////////////////// function to print ticket ////////////////////
const bodyRemove = document.querySelector("#bodyRemove");
const mainPage = document.querySelector("#mainPageRemove");
const printBtn = document.querySelector("#printBtn");

printBtn.onclick = ()=> {
  mainPage.removeChild(mainPage.childNodes[1]);
  bodyRemove.removeChild(bodyRemove.childNodes[1]);
  for (let i=0; i<ticketItem.childNodes.length; i++) {
    ticketItem.childNodes[i].childNodes[0].textContent = Number(i)+1;
  }
  print("Ticket");
}