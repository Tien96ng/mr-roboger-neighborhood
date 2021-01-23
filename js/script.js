let replyArr = [`"Beep!"`, `"Boop!"`, `"Won't you be my`];
const tryAgainPrompt = "Enter in another number to get a new result!";
let pTagStr = "<p>Here is your result: <p>";
const neighbor = ` neighbor?"`;


$(document).ready(function() {
  let numInput = "";
  let name = "";
  
  $("#form").submit(event => {
    event.preventDefault();

    $("#arr").empty();
    $("#arr-reverse").empty();

    numInput = parseInt($("#input").val());
    name = `, ${$("#name").val()}?"`;

    if(name === `, ?"`) {
      name = neighbor;
    }
    
    const beepBoop = (range, name) => {
      let output = [];

      for(let i = 0; i <= range; i++) {
        if(i.toString().includes("3")) {
          output.push(replyArr[2] + name);
        } else if(i.toString().includes("2")) {
          output.push(replyArr[1]);
        } else if(i.toString().includes("1")) {
          output.push(replyArr[0]);
        } else {
          output.push(i)
        }
      }
      return output;
    };

    $("#try-again").text(tryAgainPrompt);

    let reverseAnswer = beepBoop(numInput, name).reverse().join(", ");
    let answer = beepBoop(numInput, name).join(", ");

    $("#output-container").show();
    $("#output").append(`<span id='arr'>${answer}</span>`);
    $("#output-reverse").append(`<span id='arr-reverse'>${reverseAnswer}</span>`);

    $("#form")[0].reset();
    name = "";
    
  });
});
