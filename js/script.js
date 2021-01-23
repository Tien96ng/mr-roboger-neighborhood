const replyArr = ["Beep!", "Boop!", "Won't you be my neighbor?"];
const tryAgainPrompt = "Enter in another number to get a new result!";

// A user should be able to enter a new number and see new results over and over again.


$(document).ready(function() {
  
  $("#form").submit(event => {
    event.preventDefault();
    let numInput = parseInt($("#input").val());
    
    const beepBoop = (range) => {
      let output = [];

      for(let i = 0; i <= range; i++) {
        if(i.toString().includes("3")) {
          output.push(replyArr[2])
        } else if(i.toString().includes("2")) {
          output.push(replyArr[1])
        } else if(i.toString().includes("1")) {
          output.push(replyArr[0])
        } else {
          output.push(i)
        }
      }
      return output;
    };

    console.log(beepBoop(numInput));

  });
});
