// Add current day to header
var currentDay = moment().format('dddd, MMMM Do, YYYY');
$("#currentDay").append(currentDay);

//*******Add timeblock to container*****************************

//variables to create rows

function createRow(hourInput){

var containerCol = $(".col-md-12");
var tRow = $("<tr>");
tRow.attr("class", "tRow");

var timeTxt = moment().set({hour:hourInput,minute:0,second:0,millisecond:0}).format("hA");
var timeTd = $("<td>").text(timeTxt);
timeTd.attr("class", "timeTd");

var txtArea = $("<textarea>");
txtArea.attr("class", "txtArea");
txtArea.attr("placeholder", "Enter your event here.");
var inputTd = $("<td>");
inputTd.append(txtArea);
inputTd.attr("class", "inputTd");

var saveBtn = $ ("<button>");
saveBtn.attr("class", "saveBtn");
var saveImg = $("<img>");
saveImg.attr("src", "images/save-icon.png");
saveImg.attr("class", "saveImg");
saveBtn.append(saveImg);
var saveTd = $("<td>");
saveTd.append(saveBtn);
saveTd.attr("class", "saveTd");

tRow.append(timeTd, inputTd, saveTd);

containerCol.append(tRow);

//change color of row depending on past, future, and present
var currentTime = moment().format('hA');
console.log(currentTime);



if (timeTxt == currentTime){
   inputTd.attr("style","background-color:rgb(211, 211, 211,.3)");
   //red when present 
}

else if (timeTxt < currentTime){
   inputTd.attr("style","background-color:rgb(255,105,97,.3)");
   //grey when past
}

else {
   inputTd.attr("style","background-color: rgb(119,221,119,.3)");
   //green when future

}


}






//function to create a row for each hour

createRow(09);
createRow(10);
createRow(11);
createRow(12);
createRow(13);
createRow(14);
createRow(15);
createRow(16);
createRow(17);



// Function to render last saved calendar items
renderCalendarItems();

function renderCalendarItems(){

    var userInput0 = localStorage.getItem("userInput0");
    $("textarea:eq(0)").text(userInput0);

    var userInput1 = localStorage.getItem("userInput1");
    $("textarea:eq(1)").text(userInput1);

    var userInput2 = localStorage.getItem("userInput2");
    $("textarea:eq(2)").text(userInput2);

    var userInput3 = localStorage.getItem("userInput3");
    $("textarea:eq(3)").text(userInput3);

    var userInput4 = localStorage.getItem("userInput4");
    $("textarea:eq(4)").text(userInput4);

    var userInput5 = localStorage.getItem("userInput5");
    $("textarea:eq(5)").text(userInput5);

    var userInput6 = localStorage.getItem("userInput6");
    $("textarea:eq(6)").text(userInput6);

    var userInput7 = localStorage.getItem("userInput7");
    $("textarea:eq(7)").text(userInput7);

    var userInput8 = localStorage.getItem("userInput8");
    $("textarea:eq(8)").text(userInput8);

}

// Event listener for when user clicks on save
$(".saveBtn").on("click", function(event){
    console.log("Save button clicked!");
     event.preventDefault();
     var saveBtnIndex = $(".saveBtn").index(this);
     console.log("Button index is " + saveBtnIndex);
     

     if (saveBtnIndex == 0) {
        userInput0 = $("textarea:eq(0)").val();
        localStorage.setItem("userInput0", userInput0);

     }

     else if (saveBtnIndex == 1) {
        userInput1 = $("textarea:eq(1)").val();
        localStorage.setItem("userInput1", userInput1);

     }

     else if (saveBtnIndex == 2) {
        userInput2 = $("textarea:eq(2)").val();
        localStorage.setItem("userInput2", userInput2);

     }

     else if (saveBtnIndex == 3) {
        userInput3 = $("textarea:eq(3)").val();
        localStorage.setItem("userInput3", userInput3);

     }

     else if (saveBtnIndex == 4) {
        userInput4 = $("textarea:eq(4)").val();
        localStorage.setItem("userInput4", userInput4);

     }

     else if (saveBtnIndex == 5) {
        userInput5 = $("textarea:eq(5)").val();
        localStorage.setItem("userInput5", userInput5);

     }

     else if (saveBtnIndex == 6) {
        userInput6 = $("textarea:eq(6)").val();
        localStorage.setItem("userInput6", userInput6);

     }

     else if (saveBtnIndex == 7) {
        userInput7 = $("textarea:eq(7)").val();
        localStorage.setItem("userInput7", userInput7);

     }

     else if (saveBtnIndex == 8) {
        userInput8 = $("textarea:eq(8)").val();
        localStorage.setItem("userInput8", userInput8);

     }    

});