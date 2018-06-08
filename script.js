/*Inserted textfield expander */

$(document).ready(function () {
  $('#EntreeField').each(function () {
    h(this);
  }).on('lookup change keyup', function () {
    h(this);
  });


  function h(e) {
    $(e).css({'height':'auto','overflow-y':'scroll'}).height(e.scrollHeight);
  }
});








/*changing inserted text
function transformtext() {
	var insertedtext = document.getElementById("EntreeField").value;
	document.getElementById("DivOutputField").innerText = insertedtext;

}
*/

function transformtext() {
	var insertedtext = document.getElementById("EntreeField").value;
  var cancel_policy = insertedtext.substring(insertedtext.indexOf("cancel_policy") + 15,insertedtext.indexOf("canceled_at")-1)

  if (cancel_policy="9") {
    cancel_policy= "Super Strict 60";
  }
  else {
    cancel_policy="other";
  };
  
	document.getElementById("cancel_policy").innerText = cancel_policy;

}