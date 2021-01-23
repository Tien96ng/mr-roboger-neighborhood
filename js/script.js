let replyArr = [`"Beep!"`, `"Boop!"`, `"Won't you be my`];
const tryAgainPrompt = "Enter in another number to get a new result!";
const hover = "Hover over your result to zoom in!";
const neighbor = ` neighbor?"`;
const reverseBtn = ``;


$(document).ready(function() {
  let numInput = "";
  let name = "";

  const reverseInput = (input) => {
    $("button#reverse-btn").click(() => {
      $("#output-reverse").show();
      let reverse = input.split(",").reverse().join(", ");
      $(".reverse").text(reverse);
    });
  }
  
  $("#form").submit(event => {
    event.preventDefault();

    $("#reverse-btn").show();
    $("#submit-btn").attr("class", "btn btn-success");

    numInput = parseInt($("#input").val());
    name  = $("#name").val().slice(0, 1).toUpperCase() + $("#name").val().slice(1).toLowerCase();
    if(name === "") {
      name = neighbor;
    } else {
      name = ` neighbor, ${name}?"`;
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
          output.push(i);
        }
      }
      return output;
    };

    $("#try-again").text(tryAgainPrompt);
    $("#hover").text(hover);

    let answer = beepBoop(numInput, name).join(", ");

    $("#output-container").show();
    $(".ans").text(answer)

    reverseInput(answer);
    

    $("#form")[0].reset();
    name = "";
    $("#output-reverse").hide();

  });

  $("#reverse-btn").mouseover(() => {
    $("#reverse-btn").text("Esrever");
    $("#reverse-btn").attr("class", "btn btn-light");
  });

  $("#reverse-btn").mouseout(() => {
    $("#reverse-btn").text("Reverse");
    $("#reverse-btn").attr("class", "btn btn-dark");
  });



});