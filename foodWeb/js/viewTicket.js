//////////////////// Function to view ticket Slip ////////////////////
const xhr = new XMLHttpRequest();
const DATABASEPORT = 5501;

xhr.onload = ()=>{
    let ticketSlip = document.querySelector("#ticketSlip");
    responseObject = JSON.parse(xhr.response);
    let ticketResponse = responseObject.null; //////////////// ENTER TICKETID
    let content = document.querySelector('#ticketMount');
    let ticketAmount = document.querySelector('#totalAmount');
    let ticketHeaderId = document.querySelector('#ticketHeaderId');

    // BUILD UP STRING WITH NEW CONTENT
    let newContent = '';
    for (let i=0;i<ticketResponse.length;i++) {
        if (ticketResponse[i].itemSn > 0) {
            ticketSlip.style.display = "inherit";
            newContent += `<div class="row-align"><div>${ticketResponse[i].itemSn}</div>`;
            newContent += `<div>${ticketResponse[i].itemName}</div>`;
            newContent += `<div>${ticketResponse[i].itemPortion}</div>`;
            newContent += `<div>${ticketResponse[i].itemPrice}</div></div>`;  
        }
    }

    ticketHeaderId.textContent = ticketResponse[0].itemId;
    ticketAmount.textContent = ticketResponse[0].itemTotalAmount;
    content.innerHTML = newContent;
};
xhr.open('GET', `http://localhost:${DATABASEPORT}/json/ticketDB.json`, false);
xhr.send();
