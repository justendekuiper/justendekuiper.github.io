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










/*function transformtext() {
	var insertedtext = document.getElementById("EntreeField").value;
	document.getElementById("DivOutputField").innerText = insertedtext;

}
*/




/*changing inserted text*/
function transformtext() {
 document.getElementsByClassName('tables')[0].style.display = "block";


var insertedtext = document.getElementById("EntreeField").value;
var insertedtoptext =  insertedtext.substring(insertedtext.indexOf("admin_notes") + 1,insertedtext.indexOf("reservation_schedule2s")-2);


/* Reservation Code */
if (insertedtext.includes("confirmation_code")&&insertedtext.includes("coupon_id")) {
  var reservation_code = insertedtext.substring(insertedtext.indexOf("confirmation_code") + 19,insertedtext.indexOf("coupon_id")-2);
}
else {
  reservation_code="";
}
document.getElementById("reservation_code").innerText = reservation_code;



/* Created at */
if (insertedtoptext.includes("created_at")&&insertedtoptext.includes("currency_fee")) {
  var created_at = insertedtoptext.substring(insertedtoptext.indexOf("created_at") + 12,insertedtoptext.indexOf("currency_fee")-12) + " at " + insertedtoptext.substring(insertedtoptext.indexOf("created_at") + 23,insertedtoptext.indexOf("currency_fee")-3);
}
else {
  created_at="";
}
document.getElementById("created_at").innerText = created_at;


/* Pending Began at */
if (insertedtext.includes("pending_began_at")&&insertedtext.includes("pending_expires_at")) {
  var pending_began_at = insertedtext.substring(insertedtext.indexOf("pending_began_at") + 18,insertedtext.indexOf("pending_expires_at")-12) + " at " + insertedtext.substring(insertedtext.indexOf("pending_began_at") + 29,insertedtext.indexOf("pending_expires_at")-3);
}
else {
  pending_began_at="";
}
document.getElementById("pending_began_at").innerText = pending_began_at;


/* Pending Expired at */
if (insertedtext.includes("pending_expires_at")&&insertedtext.includes("price_version_count")) {
  var pending_expires_at = insertedtext.substring(insertedtext.indexOf("pending_expires_at") + 20,insertedtext.indexOf("price_version_count")-12) + " at " + insertedtext.substring(insertedtext.indexOf("pending_expires_at") + 31,insertedtext.indexOf("price_version_count")-3);
}
else {
  pending_expires_at="";
}
document.getElementById("pending_expires_at").innerText = pending_expires_at;


/* Host responded at */
if (insertedtext.includes("host_responded_at")&&insertedtext.includes("host_vat_country")) {
      if (insertedtext.substring(insertedtext.indexOf("host_responded_at") + 18, insertedtext.indexOf("host_responded_at") + 22) == "NULL") {
      var host_Responded_at = "N/A";
      }
        else {
          var host_Responded_at = insertedtext.substring(insertedtext.indexOf("host_responded_at") + 18,insertedtext.indexOf("host_vat_country")-11) + " at " + insertedtext.substring(insertedtext.indexOf("host_responded_at") + 29,insertedtext.indexOf("host_vat_country")-2);
        }
    }
    else {
      host_Responded_at="";
    }
document.getElementById("host_Responded_at").innerText = host_Responded_at;


/* Cancelled at */
if (insertedtext.includes("canceled_at")&&insertedtext.includes("cancellation_guest_fee")) {
    if (insertedtext.substring(insertedtext.indexOf("canceled_at") + 12,insertedtext.indexOf("canceled_at")+16)=="NULL") {
      var canceled_at = "N/A";
    }
      else {
    var canceled_at = insertedtext.substring(insertedtext.indexOf("canceled_at") + 12,insertedtext.indexOf("cancellation_guest_fee")-11) + " at " + insertedtext.substring(insertedtext.indexOf("canceled_at") + 23,insertedtext.indexOf("cancellation_guest_fee")-2);
    }
  }
  else {
    canceled_at="";
  }
document.getElementById("canceled_at").innerText = canceled_at;


/* Cancellation Policy */
var cancel_policy;

if (insertedtext.includes("cancel_policy")) {

        var cancel_policy_raw = insertedtext.substring(insertedtext.indexOf("cancel_policy") + 15,insertedtext.indexOf("canceled_at")-2);
        
        if (cancel_policy_raw == "3") {
          cancel_policy = "Flexible";
        }
        else if (cancel_policy_raw == "4") {
          cancel_policy = "Moderate";
        }
          else if (cancel_policy_raw == "5") {
          cancel_policy = "Strict";
        }
          else if (cancel_policy_raw == "44 With grace period") {
          cancel_policy = "Strict with grace period";
        }
          else if (cancel_policy_raw == "44") {
          cancel_policy = "Strict with grace period";
        }
          else if (cancel_policy_raw == "6") {
          cancel_policy = "Super Strict 30";
        }
          else if (cancel_policy_raw == "7") {
          cancel_policy = "No Refunds";
        }
          else if (cancel_policy_raw == "8") {
          cancel_policy = "Long Term";
        }
          else if (cancel_policy_raw == "9") {
          cancel_policy = "Super Strict 60";
        }
          else if (cancel_policy_raw=="10") {
          cancel_policy="New Flexible";
        }
          else if (cancel_policy_raw=="11") {
          cancel_policy="New Moderate";
        }
          else if (cancel_policy_raw=="12") {
          cancel_policy="New Strict";
        }
          else if (cancel_policy_raw=="13") {
          cancel_policy="New Super Strict 30";
        }
          else if (cancel_policy_raw=="14") {
          cancel_policy="New Super Strict 60";
        }
          else if (cancel_policy_raw=="15") {
          cancel_policy="New Long Term";
        }
          else {
            cancel_policy = cancel_policy_raw
          }
      }
  else {
    cancel_policy="";
 }
	document.getElementById("cancel_policy").innerText = cancel_policy;

}










