let replyArr = [`"Beep!"`, `"Boop!"`, `"Won't you be my`];
const tryAgainPrompt = "Enter in another number to get a new result!";
const hover = "Hover over your result to zoom in!";
const neighbor = ` neighbor?"`;


$(document).ready(function() {
  let numInput = "";
  let name = "";
  
  $("#form").submit(event => {
    event.preventDefault();


    numInput = parseInt($("#input").val());
    name  = $("#name").val().slice(0, 1).toUpperCase() + $("#name").val().slice(1).toLowerCase();
    name = ` neighbor, ${name}?"`;

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
    $("#hover").text(hover);

    let reverseAnswer = beepBoop(numInput, name).reverse().join(", ");
    let answer = beepBoop(numInput, name).join(", ");

    $("#output-container").show();
    $(".ans").text(answer)
    $(".reverse").text(reverseAnswer);

    $("#form")[0].reset();
    name = "";
    
  });
});