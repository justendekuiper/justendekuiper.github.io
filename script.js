$(document).ready(function () {
document.getElementById('HeaderImage').ondragstart = function() { return false; };
});


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




/* Clicking on Dropdown menu */

/* Details */
function collapseReservationDetails() {
    var x = document.getElementById("BookingDetails");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


/* Pricing */
function collapseReservationPrice() {
    var x = document.getElementById("PricingData");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}




/*function transformtext() {
	var insertedtext = document.getElementById("EntreeField").value;
	document.getElementById("DivOutputField").innerText = insertedtext;

}
*/




/*changing inserted text*/
function transformtext() {
document.getElementById("DropdownReservationDetails").style.display = "block";
document.getElementById("DropdownReservationPricing").style.display = "block"


var insertedtext = document.getElementById("EntreeField").value;
var insertedtoptext =  insertedtext.substring(insertedtext.indexOf("admin_notes") + 1,insertedtext.indexOf("reservation_schedule2s")-2);
var insertedPricingText = insertedtext.substring(insertedtext.indexOf("pricing_snapshot_data") ,insertedtext.indexOf("admin_points")-2);

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



/* Pricing Details */

  var table = document.getElementById("PricingTable");
  var replacedtext = insertedPricingText
  var amount_micros_usd = "";
 


/* Get Cleaning Fee */
cleaning_fee_type = replacedtext.substring(replacedtext.indexOf('payment_pricing_item_meta":{"type"') + 36,replacedtext.indexOf('","amount_micro_guest"'));
cleaning_fee_price = replacedtext.substring(replacedtext.indexOf("amount_micros_usd") + 19,replacedtext.indexOf("created_at")-2);
    replacedtext = replacedtext.replace('amount_micros_usd', "X-X");
    replacedtext = replacedtext.replace('created_at', "X-X");
    replacedtext = replacedtext.replace('amount_micros_usd', "X-X");
    replacedtext = replacedtext.replace('created_at', "X-X");
    replacedtext = replacedtext.replace('payment_pricing_item_meta":{"type"', "X-X");
    replacedtext = replacedtext.replace('","amount_micro_guest"', "X-X");

  
/* Get Extra Guest Fee */
extra_guest_fee_type = replacedtext.substring(replacedtext.indexOf('payment_pricing_item_meta":{"type"') + 36,replacedtext.indexOf('","amount_micro_guest"'));
extra_guest_fee_price = replacedtext.substring(replacedtext.indexOf("amount_micros_usd") + 19,replacedtext.indexOf("created_at")-2);
    replacedtext = replacedtext.replace('amount_micros_usd', "X-X");
    replacedtext = replacedtext.replace('created_at', "X-X");
    replacedtext = replacedtext.replace('payment_pricing_item_meta":{"type"', "X-X");
    replacedtext = replacedtext.replace('","amount_micro_guest"', "X-X");



/* Get Airbnb Guest Fee */
airbnb_guest_fee_type = replacedtext.substring(replacedtext.indexOf('payment_pricing_item_meta":{"type"') + 36,replacedtext.indexOf('","amount_micro_guest"'));
airbnb_guest_fee_price = replacedtext.substring(replacedtext.indexOf("amount_micros_usd") + 19,replacedtext.indexOf("created_at")-2);
    replacedtext = replacedtext.replace('amount_micros_usd', "X-X");
    replacedtext = replacedtext.replace('created_at', "X-X");
    replacedtext = replacedtext.replace('payment_pricing_item_meta":{"type"', "X-X");
    replacedtext = replacedtext.replace('","amount_micro_guest"', "X-X");



/* Get FX Fee */
fx_fee_type = replacedtext.substring(replacedtext.indexOf('payment_pricing_item_meta":{"type"') + 36,replacedtext.indexOf('","amount_micro_guest"'));
fx_fee_price = replacedtext.substring(replacedtext.indexOf("amount_micros_usd") + 19,replacedtext.indexOf("created_at")-2);
    replacedtext = replacedtext.replace('amount_micros_usd', "X-X");
    replacedtext = replacedtext.replace('created_at', "X-X");
    replacedtext = replacedtext.replace('payment_pricing_item_meta":{"type"', "X-X");
    replacedtext = replacedtext.replace('","amount_micro_guest"', "X-X");


/* Get Airbnb Host Fee */
airbnb_host_fee_type = replacedtext.substring(replacedtext.indexOf('payment_pricing_item_meta":{"type"') + 36,replacedtext.indexOf('","amount_micro_guest"'));
airbnb_host_fee_price = replacedtext.substring(replacedtext.indexOf("amount_micros_usd") + 19,replacedtext.indexOf("created_at")-2);
    replacedtext = replacedtext.replace('amount_micros_usd', "X-X");
    replacedtext = replacedtext.replace('created_at', "X-X");
    replacedtext = replacedtext.replace('payment_pricing_item_meta":{"type"', "X-X");
    replacedtext = replacedtext.replace('","amount_micro_guest"', "X-X");





  while (replacedtext.includes("amount_micros_usd")) {
    
    type = replacedtext.substring(replacedtext.indexOf('payment_pricing_item_meta":{"type"') + 36,replacedtext.indexOf('","amount_micro_guest"'));

    amount_micros_usd = replacedtext.substring(replacedtext.indexOf("amount_micros_usd") + 19,replacedtext.indexOf("created_at")-2);

    /* Deleting keyword from Var */
    replacedtext = replacedtext.replace('amount_micros_usd', "X-X");
    replacedtext = replacedtext.replace('created_at', "X-X");
    replacedtext = replacedtext.replace('payment_pricing_item_meta":{"type"', "X-X");
    replacedtext = replacedtext.replace('","amount_micro_guest"', "X-X");

    var amount_usd = parseInt(amount_micros_usd) / 1000000;



/* Creating table and rows */
    var num = document.getElementById("PricingTable").rows.length;
    var x = document.createElement("tr");


    var a = document.createElement("td");
    type = type.toLowerCase();
    type = type.replace(/_/g," ");
    type = type.charAt(0).toUpperCase() + type.slice(1);
    var anode = document.createTextNode(type);
    a.appendChild(anode);
    x.appendChild(a);


    var a = document.createElement("td");
    var anode = document.createTextNode("$" + amount_usd);
    a.appendChild(anode);
    x.appendChild(a);

    document.getElementById("PricingTable").appendChild(x);

  }



/* Write Cleaning Fee */
    var num = document.getElementById("PricingTable").rows.length;
    var x = document.createElement("tr");


    var a = document.createElement("td");
    cleaning_fee_type = cleaning_fee_type.toLowerCase();
    cleaning_fee_type = cleaning_fee_type.replace(/_/g," ");
    cleaning_fee_type = cleaning_fee_type.charAt(0).toUpperCase() + cleaning_fee_type.slice(1);
    var anode = document.createTextNode(cleaning_fee_type);
    a.appendChild(anode);
    x.appendChild(a);


    var a = document.createElement("td");
    cleaning_fee_price = parseInt(cleaning_fee_price) / 1000000;
    var anode = document.createTextNode("$" + cleaning_fee_price);
    a.appendChild(anode);
    x.appendChild(a);

    document.getElementById("PricingTable").appendChild(x);




/* Write Extra Guest Fee */
    var num = document.getElementById("PricingTable").rows.length;
    var x = document.createElement("tr");


    var a = document.createElement("td");
    extra_guest_fee_type = extra_guest_fee_type.toLowerCase();
    extra_guest_fee_type = extra_guest_fee_type.replace(/_/g," ");
    extra_guest_fee_type = extra_guest_fee_type.charAt(0).toUpperCase() + extra_guest_fee_type.slice(1);
    var anode = document.createTextNode(extra_guest_fee_type);
    a.appendChild(anode);
    x.appendChild(a);


    var a = document.createElement("td");
    extra_guest_fee_price = parseInt(extra_guest_fee_price) / 1000000;
    var anode = document.createTextNode("$" + extra_guest_fee_price);
    a.appendChild(anode);
    x.appendChild(a);

    document.getElementById("PricingTable").appendChild(x);


/* Write Airbnb Guest Fee */
    var num = document.getElementById("PricingTable").rows.length;
    var x = document.createElement("tr");


    var a = document.createElement("td");
    airbnb_guest_fee_type = airbnb_guest_fee_type.toLowerCase();
    airbnb_guest_fee_type = airbnb_guest_fee_type.replace(/_/g," ");
    airbnb_guest_fee_type = airbnb_guest_fee_type.charAt(0).toUpperCase() + airbnb_guest_fee_type.slice(1);
    var anode = document.createTextNode(airbnb_guest_fee_type);
    a.appendChild(anode);
    x.appendChild(a);


    var a = document.createElement("td");
    airbnb_guest_fee_price = parseInt(airbnb_guest_fee_price) / 1000000;
    var anode = document.createTextNode("$" + airbnb_guest_fee_price);
    a.appendChild(anode);
    x.appendChild(a);

    document.getElementById("PricingTable").appendChild(x);


/* Write FX Fee */
    var num = document.getElementById("PricingTable").rows.length;
    var x = document.createElement("tr");


    var a = document.createElement("td");
    fx_fee_type = fx_fee_type.toLowerCase();
    fx_fee_type = fx_fee_type.replace(/_/g," ");
    fx_fee_type = fx_fee_type.charAt(0).toUpperCase() + fx_fee_type.slice(1);
    var anode = document.createTextNode(fx_fee_type);
    a.appendChild(anode);
    x.appendChild(a);


    var a = document.createElement("td");
    fx_fee_price = parseInt(fx_fee_price) / 1000000;
    var anode = document.createTextNode("$" + fx_fee_price);
    a.appendChild(anode);
    x.appendChild(a);

    document.getElementById("PricingTable").appendChild(x);


/* Write Airbnb Host Fee */
    var num = document.getElementById("PricingTable").rows.length;
    var x = document.createElement("tr");


    var a = document.createElement("td");
    airbnb_host_fee_type = airbnb_host_fee_type.toLowerCase();
    airbnb_host_fee_type = airbnb_host_fee_type.replace(/_/g," ");
    airbnb_host_fee_type = airbnb_host_fee_type.charAt(0).toUpperCase() + airbnb_host_fee_type.slice(1);
    var anode = document.createTextNode(airbnb_host_fee_type);
    a.appendChild(anode);
    x.appendChild(a);


    var a = document.createElement("td");
    airbnb_host_fee_price = parseInt(airbnb_host_fee_price) / 1000000;
    var anode = document.createTextNode("$" + airbnb_host_fee_price);
    a.appendChild(anode);
    x.appendChild(a);

    document.getElementById("PricingTable").appendChild(x);




}



