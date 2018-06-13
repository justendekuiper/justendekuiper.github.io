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
        $('html,body').animate({
        scrollTop: $("#DropdownReservationDetails").offset().top + (-10)},
        'slow');
    } else {
        x.style.display = "none";
    }
}


/* Pricing */
function collapseReservationPrice() {
    var x = document.getElementById("DailyPricingData");
    if (x.style.display === "none") {
        x.style.display = "block";
        $('html,body').animate({
        scrollTop: $("#DropdownReservationPricing").offset().top + (-10)},
        'slow');
    } else {
        x.style.display = "none";
    }
}


/* Listing Details */
  function collapseReservationListingDetails() {
    var x = document.getElementById("DivListingDetails");
    if (x.style.display === "none") {
        x.style.display = "block";
        $('html,body').animate({
        scrollTop: $("#DropdownListingDetails").offset().top + (-10)},
        'slow');
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
document.getElementById("DropdownReservationPricing").style.display = "block";
document.getElementById("DropdownListingDetails").style.display = "block";



        /* Scroll To Output */
        $('html,body').animate({
        scrollTop: $("#DropdownReservationDetails").offset().top + (-50)},
        'slow');






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
        else if (cancel_policy_raw == "0") {
        cancel_policy = "Deprecated Full Refund Before Arrival";
        }
        else if (cancel_policy_raw == "1") {
        cancel_policy = "Full Refund between 5-75 day cancellation";
        }
        else if (cancel_policy_raw == "2") {
        cancel_policy = "Full First 5 days None,Last 5 -75 days otherwise, ";
        }
        else if (cancel_policy_raw == "4") {
        cancel_policy = "Moderate";
        }
        else if (cancel_policy_raw == "5") {
        cancel_policy = "Strict";
        }
        else if (cancel_policy_raw == "44") {
        cancel_policy = "Strict with Grace Period";
        }
        else if (cancel_policy_raw == "6") {
        cancel_policy = "Super Strict 30";
        }
        else if (cancel_policy_raw == "7") {
        cancel_policy = "No Refund";
        }
        else if (cancel_policy_raw == "8") {
        cancel_policy = "Long Term";
        }
        else if (cancel_policy_raw == "9") {
        cancel_policy = "Super Strict 60";
        }
        else if (cancel_policy_raw == "10") {
        cancel_policy = "New Flexible";
        }
        else if (cancel_policy_raw == "11") {
        cancel_policy = "New Moderate";
        }
        else if (cancel_policy_raw == "12") {
        cancel_policy = "New Strict";
        }
        else if (cancel_policy_raw == "13") {
        cancel_policy = "New Super Strict 30";
        }
        else if (cancel_policy_raw == "14") {
        cancel_policy = "New Super Strict 60";
        }
        else if (cancel_policy_raw == "15") {
        cancel_policy = "New Long Term";
        }
        else if (cancel_policy_raw == "40") {
        cancel_policy = "Beyond Moderate";
        }
        else if (cancel_policy_raw == "41") {
        cancel_policy = "Beyond Super Strict 95";
        }
        else if (cancel_policy_raw == "42") {
        cancel_policy = "Beyond Super Strict 125";
        }
        else if (cancel_policy_raw == "43") {
        cancel_policy = "No Refund";
        }
        else if (cancel_policy_raw == "44") {
        cancel_policy = "48hr Grace Period Strict with 14 day cut off";
        }
        else if (cancel_policy_raw == "45") {
        cancel_policy = "48 hr Grace Period Strict with mobile";
        }
        else if (cancel_policy_raw == "46") {
        cancel_policy = "48hr Grace Period Strict Full Refund on mobile";
        }
        else if (cancel_policy_raw == "51") {
        cancel_policy = "Tiered Pricing Non Refundable";
        }
        else if (cancel_policy_raw == "16") {
        cancel_policy = "(Test) Flexible Grace Period";
        }
        else if (cancel_policy_raw == "17") {
        cancel_policy = "(Test)Moderate Grace Period";
        }
        else if (cancel_policy_raw == "18") {
        cancel_policy = "Strict Grace Period";
        }
        else if (cancel_policy_raw == "19") {
        cancel_policy = "(Test) Super Strict 30 Grace Period";
        }
        else if (cancel_policy_raw == "20") {
        cancel_policy = "(Test) Super Strict 60 Grace Period";
        }
        else if (cancel_policy_raw == "21") {
        cancel_policy = "(Test) Long Term Grace Period";
        }
        else if (cancel_policy_raw == "22") {
        cancel_policy = "(Test) Flexible No Refunds";
        }
        else if (cancel_policy_raw == "23") {
        cancel_policy = "(Test) Moderate No Refunds";
        }
        else if (cancel_policy_raw == "24") {
        cancel_policy = "(Test) Strict No Refunds";
        }
        else if (cancel_policy_raw == "25") {
        cancel_policy = "(Test) Super Strict 30 No Refunds";
        }
        else if (cancel_policy_raw == "26") {
        cancel_policy = "(Test) SUperstrict 60 No Refunds";
        }
        else if (cancel_policy_raw == "27") {
        cancel_policy = "(Test) Long Term No Refunds";
        }
        else if (cancel_policy_raw == "28") {
        cancel_policy = "(Test) Flexible Full Refunds";
        }
        else if (cancel_policy_raw == "29") {
        cancel_policy = "(Test) Moderate Full Refunds";
        }
        else if (cancel_policy_raw == "30") {
        cancel_policy = "(Test) Strict Full Refunds";
        }
        else if (cancel_policy_raw == "31") {
        cancel_policy = "(Test) Super Strict 30 Full Refunds";
        }
        else if (cancel_policy_raw == "32") {
        cancel_policy = "(Test) Super Strict 60 Full Refunds";
        }
        else if (cancel_policy_raw == "33") {
        cancel_policy = "(Test) Long Term Full Refunds";
        }
        else if (cancel_policy_raw == "34") {
        cancel_policy = "(Test) New Flexible FUll Refunds";
        }
        else if (cancel_policy_raw == "35") {
        cancel_policy = "(Test) New Moderate Full Refunds";
        }
        else if (cancel_policy_raw == "36") {
        cancel_policy = "(Test) New Strict Full Refunds";
        }
        else if (cancel_policy_raw == "37") {
        cancel_policy = "(Test) New Super Strict 30 Full Refunds";
        }
        else if (cancel_policy_raw == "38") {
        cancel_policy = "(Test) New Super Strict 60 Full Refunds";
        }
        else if (cancel_policy_raw == "39") {
        cancel_policy = "(Test)New Long Term Full Refunds";
        }
        else {
            cancel_policy = cancel_policy_raw
          }
      }
    else {
    cancel_policy="";
 }
	document.getElementById("cancel_policy").innerText = cancel_policy;


/* Listing Details */

/* Listing title */
var listingTitle = insertedtext.substring(insertedtext.indexOf('main_photo_is_dirty'),insertedtext.indexOf('place_recommendations_count'));
listingTitle = listingTitle.substring(listingTitle.indexOf('monthly_price_native'),listingTitle.indexOf('native_currency')-1);
listingTitle = listingTitle.substring(listingTitle.indexOf('name')+6);
document.getElementById("HeaderListingDetails").innerText = listingTitle;



/* Listing Icon Numbers */
var listingGuests = insertedtext.substring(insertedtext.indexOf('person_capacity')-1,insertedtext.indexOf('phone_country'));
listingGuests = listingGuests.substring(listingGuests.indexOf('person_capacity')+17,listingGuests.indexOf('phone')-2);
document.getElementById("ListingGuests").innerText = listingGuests;

var listingBedrooms = insertedtext.substring(insertedtext.indexOf('bed_type')-1,insertedtext.indexOf('bookmarks_count'));
listingBedrooms = listingBedrooms.substring(listingBedrooms.indexOf('bedrooms')+10,listingBedrooms.indexOf('beds')-2);
document.getElementById("ListingBedrooms").innerText = listingBedrooms;

var ListingBeds = insertedtext.substring(insertedtext.indexOf('bed_type'),insertedtext.indexOf('bookmarks_count')+20);
ListingBeds = ListingBeds.substring(ListingBeds.indexOf('beds')+6,ListingBeds.indexOf('bookmarks_count')-2);
document.getElementById("ListingBeds").innerText = ListingBeds;

var ListingBaths = insertedtext.substring(insertedtext.indexOf('bathroom_type'),insertedtext.indexOf('bed_type')+15);
ListingBaths = ListingBaths.substring(ListingBaths.indexOf('bathrooms')+11,ListingBaths.indexOf('bed_type')-2);
document.getElementById("ListingBaths").innerText = ListingBaths;




/* Listing Description */
var listingDescription = insertedtext.substring(insertedtext.indexOf('craigslist_provide_reminder'),insertedtext.indexOf('display_exact_location'));
listingDescription = listingDescription.substring(listingDescription.indexOf('deleted_at'),listingDescription.indexOf('directions'));
listingDescription = listingDescription.substring(listingDescription.indexOf('description') +13);
document.getElementById("DescriptionListingDetails").innerText = listingDescription;



/* Listing Amenities */
var amenitiesTotal = insertedtext.substring(insertedtext.indexOf('amenities_with_names'),insertedtext.indexOf('price_usd'));
  amenitiesTotal = amenitiesTotal.replace("\n","XXX")
while (amenitiesTotal.includes("-")) {
  var amenity = amenitiesTotal.substring(amenitiesTotal.indexOf("-")+2,amenitiesTotal.indexOf("\n"));
  amenitiesTotal = amenitiesTotal.replace("-","XXX")
  amenitiesTotal = amenitiesTotal.replace("\n","XXX")

var num = document.getElementById("DailyPricingTable").rows.length;
    var x = document.createElement("tr");


    var a = document.createElement("td");
    var anode = document.createTextNode(amenity);
    a.appendChild(anode);
    x.appendChild(a);

    document.getElementById("AmenitiesTable").appendChild(x);
}




/* Pricing Details */

  var table = document.getElementById("DailyPricingTable");
  var amount_micros_usd = "";



/* Creating Daily pricing Line */
if (insertedPricingText.includes("guest_fee_reservation_stamp")) {
  var insertedDailyPricingText = insertedPricingText.substring(insertedPricingText.indexOf('line_items'), insertedPricingText.indexOf('guest_fee_reservation_stamp'));
}
  else {
    var insertedDailyPricingText = insertedPricingText.substring(insertedPricingText.indexOf('[{"type":') - 3);
    var replacedtext = insertedDailyPricingText;
    var listingCurrency = insertedPricingText.substring(insertedPricingText.indexOf('"listing_currency":"')+20,insertedPricingText.indexOf('"listing_currency":"')+23)

    /*Daily Price */
    while (replacedtext.includes('[{"type":')) {
    start_date = replacedtext.substring(replacedtext.indexOf('start_date') +13 , replacedtext.indexOf('start_date') +23);
    type = replacedtext.substring(replacedtext.indexOf('[{"type":') +10,replacedtext.indexOf('","start_date":"'));
    amount_micros_usd = replacedtext.substring(replacedtext.indexOf('original_amount_micro_usd') +27,replacedtext.indexOf('applied_amount_micro_usd')-2);
    original_amount_micro_listing = replacedtext.substring(replacedtext.indexOf('original_amount_micro_listing')+31, replacedtext.indexOf('applied_amount_micro_listing')-2);


    replacedtext = replacedtext.replace('start_date','X-X');
    replacedtext = replacedtext.replace('start_date','X-X'); 
    replacedtext = replacedtext.replace('start_date','X-X'); 
    replacedtext = replacedtext.replace('[{"type":', "X-X");
    replacedtext = replacedtext.replace('original_amount_micro_usd', "X-X");
    replacedtext = replacedtext.replace('applied_amount_micro_usd', "X-X");
    replacedtext = replacedtext.replace('original_amount_micro_listing','X-X');
    replacedtext = replacedtext.replace('applied_amount_micro_listing','X-X'); 

    var amount_usd =  parseInt(amount_micros_usd) / 1000000; 
    var original_amount_listing =  parseInt(original_amount_micro_listing) / 1000000; 



/* Creating table and rows  */
    var num = document.getElementById("DailyPricingTable").rows.length;
    var x = document.createElement("tr");


    var a = document.createElement("td");
    var anode = document.createTextNode(start_date);
    a.appendChild(anode);
    x.appendChild(a);


    var a = document.createElement("td");
    type = type.toLowerCase();
    type = type.replace(/_/g," ");
    type = type.charAt(0).toUpperCase() + type.slice(1);
    var anode = document.createTextNode(type);
    a.appendChild(anode);
    x.appendChild(a);

    
    var a = document.createElement("td");
    var anode = document.createTextNode(listingCurrency + " " + original_amount_listing);
    a.appendChild(anode);
    x.appendChild(a);


    var a = document.createElement("td");
    var anode = document.createTextNode("US$" + amount_usd);
    a.appendChild(anode);
    x.appendChild(a);


    document.getElementById("DailyPricingTable").appendChild(x);

  }}






/* Get Cleaning Fee 
cleaning_fee_type = replacedtext.substring(replacedtext.indexOf('payment_pricing_item_meta":{"type"') + 36,replacedtext.indexOf('","amount_micro_guest"'));
cleaning_fee_price = replacedtext.substring(replacedtext.indexOf("amount_micros_usd") + 19,replacedtext.indexOf("created_at")-2);
    replacedtext = replacedtext.replace('amount_micros_usd', "X-X");
    replacedtext = replacedtext.replace('created_at', "X-X");
    replacedtext = replacedtext.replace('amount_micros_usd', "X-X");
    replacedtext = replacedtext.replace('created_at', "X-X");
    replacedtext = replacedtext.replace('payment_pricing_item_meta":{"type"', "X-X");
    replacedtext = replacedtext.replace('","amount_micro_guest"', "X-X");

  
/* Get Extra Guest Fee 
extra_guest_fee_type = replacedtext.substring(replacedtext.indexOf('payment_pricing_item_meta":{"type"') + 36,replacedtext.indexOf('","amount_micro_guest"'));
extra_guest_fee_price = replacedtext.substring(replacedtext.indexOf("amount_micros_usd") + 19,replacedtext.indexOf("created_at")-2);
    replacedtext = replacedtext.replace('amount_micros_usd', "X-X");
    replacedtext = replacedtext.replace('created_at', "X-X");
    replacedtext = replacedtext.replace('payment_pricing_item_meta":{"type"', "X-X");
    replacedtext = replacedtext.replace('","amount_micro_guest"', "X-X");



/* Get Airbnb Guest Fee 
airbnb_guest_fee_type = replacedtext.substring(replacedtext.indexOf('payment_pricing_item_meta":{"type"') + 36,replacedtext.indexOf('","amount_micro_guest"'));
airbnb_guest_fee_price = replacedtext.substring(replacedtext.indexOf("amount_micros_usd") + 19,replacedtext.indexOf("created_at")-2);
    replacedtext = replacedtext.replace('amount_micros_usd', "X-X");
    replacedtext = replacedtext.replace('created_at', "X-X");
    replacedtext = replacedtext.replace('payment_pricing_item_meta":{"type"', "X-X");
    replacedtext = replacedtext.replace('","amount_micro_guest"', "X-X");



/* Get FX Fee
fx_fee_type = replacedtext.substring(replacedtext.indexOf('payment_pricing_item_meta":{"type"') + 36,replacedtext.indexOf('","amount_micro_guest"'));
fx_fee_price = replacedtext.substring(replacedtext.indexOf("amount_micros_usd") + 19,replacedtext.indexOf("created_at")-2);
    replacedtext = replacedtext.replace('amount_micros_usd', "X-X");
    replacedtext = replacedtext.replace('created_at', "X-X");
    replacedtext = replacedtext.replace('payment_pricing_item_meta":{"type"', "X-X");
    replacedtext = replacedtext.replace('","amount_micro_guest"', "X-X");


/* Get Airbnb Host Fee
airbnb_host_fee_type = replacedtext.substring(replacedtext.indexOf('payment_pricing_item_meta":{"type"') + 36,replacedtext.indexOf('","amount_micro_guest"'));
airbnb_host_fee_price = replacedtext.substring(replacedtext.indexOf("amount_micros_usd") + 19,replacedtext.indexOf("created_at")-2);
    replacedtext = replacedtext.replace('amount_micros_usd', "X-X");
    replacedtext = replacedtext.replace('created_at', "X-X");
    replacedtext = replacedtext.replace('payment_pricing_item_meta":{"type"', "X-X");
    replacedtext = replacedtext.replace('","amount_micro_guest"', "X-X");






/* Write Cleaning Fee 
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




/* Write Extra Guest Fee 
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


/* Write Airbnb Guest Fee 
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


/* Write FX Fee 
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


/* Write Airbnb Host Fee 
    var num = document.getElementById("PricingTable").rows.length;
    var x = document.createElement("tr");


    var a = document.createElement("td");
    airbnb_host_fee_type = airbnb_host_fee_type.toLowerCase();
    airbnb_host_fee_type = airbnb_host_fee_type.replace(/_/g," ");
    airbnb_host_fee_type = airbnb_host_fee_type.charAt(0).toUpperCase() + fx_fee_type.slice(1);
    var anode = document.createTextNode(airbnb_host_fee_type);
    a.appendChild(anode);
    x.appendChild(a);


    var a = document.createElement("td");
    airbnb_host_fee_price = parseInt(airbnb_host_fee_price) / 1000000;
    var anode = document.createTextNode("$" + airbnb_host_fee_price);
    a.appendChild(anode);
    x.appendChild(a);

    document.getElementById("PricingTable").appendChild(x);


*/

}



