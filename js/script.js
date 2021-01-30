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
      name = ` neighbor?"`;
    } else {
      name = ` neighbor, ${name}?"`;
    }
    
    const beepBoop = (range, name) => {
      let output = [];

      for(let i = 0; i <= range; i++) {
        if(i.toString().includes("3")) {
          output.push(`"Won't you be my` + name);
        } else if(i.toString().includes("2")) {
          output.push(`"Boop!"`);
        } else if(i.toString().includes("1")) {
          output.push(`"Beep!"`);
        } else {
          output.push(i);
        }
      }
      return output;
    };

    $("#try-again").text("Enter in another number to get a new result!");
    $("#hover").text("Hover over your result to zoom in!");

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