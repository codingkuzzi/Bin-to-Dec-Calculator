$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var decimal = parseInt($("#decimal").val());
    $("#binary").text(dec2bin(decimal));
  });
});

//BACK END

function dec2bin(decimal) {
  var bin = "";
  while(decimal > 0) {
    bin = decimal % 2 + bin;
    decimal = Math.floor(decimal/2);
  }
  return bin
}
