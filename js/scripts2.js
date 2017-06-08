$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var binary = $("#binary").val();
    $("#decimal").text(bin2dec(binary));
  });
});

//BACK END
function bin2dec(binary) {
  var decimal = 0;
  for ( var index=binary.length-1; index >=0; index --) {
    decimal += parseInt(binary[index]) * Math.pow(2, binary.length-1-index);
  }
  return decimal;

}
