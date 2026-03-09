// ------------------------------
// TABLE BOOKING LOGIC (booking.html)
// ------------------------------

const tables = {
table1: { seats: 0, waiting: 0 },
table2: { seats: 0, waiting: 0 },
table3: { seats: 0, waiting: 0 }
};

function joinTable(tableId){

let table = tables[tableId];
let seatElement = document.getElementById(tableId);
let waitElement = document.getElementById("wait-" + tableId);

if(!seatElement) return;

// If seats available
if(table.seats < 4){

table.seats++;
seatElement.innerText = table.seats;

alert("Seat confirmed! 🎉");

}

// If full → waiting list
else{

table.waiting++;
waitElement.innerText = "Waiting list: " + table.waiting;

alert("Table full. Added to waiting list.");

}

}



// ------------------------------
// FRIEND GROUP SELECTION (friends.html)
// ------------------------------

function createSmallGroup(){

alert("Small group created.\nMaximum 4 friends allowed.");

}

function createLargeGroup(){

alert("Large group created.\nMaximum 30 participants allowed.");

}



// ------------------------------
// OPTIONAL NAVIGATION HELPERS
// ------------------------------

function goToBooking(){
window.location.href = "booking.html";
}

function goToPrivate(){
window.location.href = "private.html";
}

function goToFriends(){
window.location.href = "friends.html";
}

function generateInviteLink(){

    // Example user id
    const userId = Math.floor(Math.random()*10000);

    const inviteLink = "https://languagelounge.com/invite?ref=" + userId;

    document.getElementById("inviteLink").value = inviteLink;
}

function copyInviteLink(){

    const link = document.getElementById("inviteLink");

    link.select();
    navigator.clipboard.writeText(link.value);

    alert("Invite link copied!");
}

function goBack(){
window.location.href = "levels.html";
}
function generateInviteLink(){

const roomId = Math.floor(Math.random()*10000);

const inviteLink = "meeting.html?room=" + roomId;

document.getElementById("inviteLink").value = inviteLink;

}