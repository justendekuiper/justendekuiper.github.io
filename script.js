$(document).ready(function () {
document.getElementById('HeaderImage').ondragstart = function() { return false; };
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
    $("#HeaderImage").css({
 //       transform: 'translate3d(0%, -'+(scroll/100)+'%, 0) scale('+(100 + scroll/20)/100+')',
        opacity: 0.7 - (scroll / 1000 *1.9),
        transform: 'translateY(' + scroll / 8 *-1 + 'px)',
    });
});



$(document).ready(function(){
  var input = document.getElementById("EntreeField");



// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("ButtonEntreeField").click();
  }
});
}) 

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


// Popup Buttons
function ContactClick() {
    if(document.getElementById('ContactButton').style.opacity == "0.7") {
        document.getElementById('ContactButton').style.opacity = "1.0";
        document.getElementById('contactDiv').style.display = "block";
    }
    else {
        document.getElementById('ContactButton').style.opacity = "0.7";
        document.getElementById('contactDiv').style.display = "none";
    }
}



var reservationCode = ""

function sendEmail() {
    if(reservationCode == ""){

var link = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=justen.dekuiper@airbnb.com&su=Snapshot tool&body=&cc=aleksei.liksman@airbnb.com&tf=1";
    var win = window.open(link, '_blank');
    win.focus();
    
}
    else {

        var link = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=justen.dekuiper@airbnb.com&su=Snapshot tool - " + reservationCode + "&body=&cc=aleksei.liksman@airbnb.com&tf=1";
    var win = window.open(link, '_blank');
    win.focus();
}
    ;}
 




/* Clicking on Dropdown menu */
// Alteration Button 
function collapseAlteration(e) {
    if (e.nextSibling.style.display === "none") {
        e.nextSibling.style.display = "block";
    }
    else {
        e.nextSibling.style.display = "none";
    }
}



/* Details */
function collapseReservationDetails(e) {
    if (e.nextSibling.style.display === "none") {
        e.nextSibling.style.display = "block";
        $('html,body').animate({
        scrollTop: $(".Dropdown").offset().top + (-10)},
        'slow');
    }
  else {
    e.nextSibling.style.display = "none";
  }

}






/* Pricing */
function collapseReservationPrice() {
    var x = document.getElementById("DivPricingDetails");
    if (x.style.display === "none") {
        $("#DivPricingDetails").slideDown(500);
        $('html,body').animate({
        scrollTop: $("#DropdownReservationPricing").offset().top + (-10)},
        'slow');
    } else {
        $("#DivPricingDetails").slideUp(500);
    }
}


/* Listing Details */
  function collapseReservationListingDetails() {
    var x = document.getElementById("DivListingDetails");
    if (x.style.display === "none") {
        $("#DivListingDetails").slideDown(500);
        $('html,body').animate({
        scrollTop: $("#DropdownListingDetails").offset().top + (-10)},
        'slow');
    } else {
        $("#DivListingDetails").slideUp(500);
    }
}   
  


/*function transformtext() {
	var insertedtext = document.getElementById("EntreeField").value;
	document.getElementById("DivOutputField").innerText = insertedtext;

}
*/




/*Onclick Pricing Bar Expand */
function ClickPricingBar(e) {
    if (e.nextSibling.style.display === "none") {
        e.nextSibling.style.display = "block";
    }
    else {
        e.nextSibling.style.display = "none";
    }
};


//Onclick night bar Expand

    function ClickPricingBarHeader(e){
        var content = e.nextSibling.nextSibling.nextSibling.childNodes[0];
        if (content.style.display === "none") {
            $(".PricingHeaderBarListing").show(500);
            $(".whiteSpaceDivListing").show(500);
            $(".expandImg").show(500);

            content.style.display = "inline-grid"
        }
        else {

            content.style.display = "none"
        }
    }

/* DEPRICATED 

    function ClickGuestPricingBar(){
        var element = document.getElementById('Night1Guest');
        if (element.style.display === "none") {
            $(".PricingHeaderBarGuest").show(500);
            $(".whiteSpaceDivGuest").show(500);
            $("#expandImgGuest").show(500);
            $('html,body').animate({
            scrollTop: $("#guestPriceDiv").offset().top + (-10)},
            'slow');
        }
        else {
             $(".PricingHeaderBarGuest").hide(500);
            $(".whiteSpaceDivGuest").hide(500);
            $(".ContentPricesDivGuest").hide(500);
            $("#expandImgGuest").hide(500);
        }
    }

*/



var newsrc = "expand-arrows.png";
// Listing
function expandItemsListing(e) {
  if ( newsrc == "expand-arrows.png" ) {
    document.images.e.src = "images/minimize-arrows.png";
    document.images.e.alt = "Minimize";
    newsrc  = "minimize-arrows.png";
    e.siblings().style.display = "block"
}

  else {
    document.images.e.src = "images/expand-arrows.png";
    document.images.e.alt = "Expand";
    newsrc  = "expand-arrows.png";
    e.siblings().style.display = "none"
  }
};


// USD
function expandItemsUsd() {
  if ( newsrc == "expand-arrows.png" ) {
    document.images["expandImgUsd"].src = "images/minimize-arrows.png";
    document.images["expandImgUsd"].alt = "Minimize";
    newsrc  = "minimize-arrows.png";
    $('.ContentPricesDivUsd').show();
}

  else {
    document.images["expandImgUsd"].src = "images/expand-arrows.png";
    document.images["expandImgUsd"].alt = "Expand";
    newsrc  = "expand-arrows.png";
    $('.ContentPricesDivUsd').hide();
  }
};


// Guest
function expandItemsGuest() {
  if ( newsrc == "expand-arrows.png" ) {
    document.images["expandImgGuest"].src = "images/minimize-arrows.png";
    document.images["expandImgGuest"].alt = "Minimize";
    newsrc  = "minimize-arrows.png";
    $('.ContentPricesDivGuest').show();
}

  else {
    document.images["expandImgGuest"].src = "images/expand-arrows.png";
    document.images["expandImgGuest"].alt = "Expand";
    newsrc  = "expand-arrows.png";
    $('.ContentPricesDivGuest').hide();
  }
};



// Selecting More info Questionmark   
function ClickExtraGuestInfo(obj) {
    if(obj.parentElement.parentElement.nextSibling.style.display == "block") {
    obj.parentElement.parentElement.nextSibling.style.display = "none";
}
else {
    obj.parentElement.parentElement.nextSibling.style.display = "block";
}    
};

function ClickDiscountInfo(obj) {
    if(obj.parentElement.parentElement.nextSibling.style.display == "block") {
    obj.parentElement.parentElement.nextSibling.style.display = "none";
}
else {
    obj.parentElement.parentElement.nextSibling.style.display = "block";
}    
};


// Creating Alteration Button + Content
function createAlterationButton(alterationNumber,alterationTotal) {

    if (alterationNumber == alterationTotal) {
        alterationNumberDisplay = "Original Booking"
    }
    else if (alterationNumber == 0){
        alterationNumberDisplay = "Latest alteration";
    }
    else {
        alterationNumberDisplay = alterationNumber;
    }
    var createAlterationButton = document.createElement('div')
    var createAlterationButtonText = document.createElement('h4')
    var createAlterationButtonTextNode = document.createTextNode(alterationNumberDisplay)
    createAlterationButtonText.appendChild(createAlterationButtonTextNode)
    createAlterationButton.appendChild(createAlterationButtonText)
    createAlterationButton.className = "alterationButton"
    createAlterationButton.id= alterationNumber + "alterationButton"
    createAlterationButton.setAttribute("onclick","collapseAlteration(this);");
    document.getElementById('DivOutputField').appendChild(createAlterationButton);

    var createAlterationContent = document.createElement('div')
    createAlterationContent.id= alterationNumber + "alterationContent";
    createAlterationContent.className = "alterationContent"
    createAlterationContent.style.display = "none";
    document.getElementById('DivOutputField').appendChild(createAlterationContent);
}








// Creating Content for Booking Without Alteration
function noAlterationContent(alterationNumber){
    var createAlterationContent = document.createElement('div')
    createAlterationContent.id= alterationNumber + "alterationContent";
    createAlterationContent.className = "alterationContent"
    createAlterationContent.style.display = "block";
    document.getElementById('DivOutputField').appendChild(createAlterationContent);
}




// Creating Dropdown Menu With Alteration
    function createDropdownMenu(alterationNumber) {
        var createDropdownDetails = document.createElement('div');
        var createDropdownDetailsH4 = document.createElement('h4');
        var createDropdownDetailsNode = document.createTextNode('DETAILS');
        createDropdownDetailsH4.appendChild(createDropdownDetailsNode);
        createDropdownDetails.appendChild(createDropdownDetailsH4);
        createDropdownDetails.className = 'Dropdown'
        createDropdownDetails.id = alterationNumber + 'DropdownReservationDetails'
        createDropdownDetails.setAttribute("onclick","collapseReservationDetails(this);");
        document.getElementById(alterationNumber + "alterationContent").appendChild(createDropdownDetails);

        var createBookingDetailsInner = document.createElement('div');
        createBookingDetailsInner.style.display ="none";
        createBookingDetailsInner.id = alterationNumber + "BookingDetails";
        createBookingDetailsInner.className = "BookingDetails";
        document.getElementById(alterationNumber + "alterationContent").appendChild(createBookingDetailsInner);




        var createDropdownPrice = document.createElement('div');
        var createDropdownPriceH4 = document.createElement('h4');
        var createDropdownPriceNode = document.createTextNode('PRICE');
        createDropdownPriceH4.appendChild(createDropdownPriceNode);
        createDropdownPrice.appendChild(createDropdownPriceH4);
        createDropdownPrice.className = 'Dropdown'
        createDropdownPrice.id = alterationNumber + 'DropdownReservationPricing'
        createDropdownPrice.setAttribute("onclick","collapseReservationDetails(this);");
        document.getElementById(alterationNumber + "alterationContent").appendChild(createDropdownPrice);

        var createBookingPriceInner = document.createElement('div');
        createBookingPriceInner.style.display ="none";
        createBookingPriceInner.id = alterationNumber + "DivPricingDetails";
        document.getElementById(alterationNumber + "alterationContent").appendChild(createBookingPriceInner);

        var createBookingPriceInnerst = document.createElement('div');
        createBookingPriceInnerst.style.display ="block";
        createBookingPriceInnerst.id = alterationNumber + "OverviewNights";
        document.getElementById(alterationNumber + 'DivPricingDetails').appendChild(createBookingPriceInnerst);





        var createDropdownListing = document.createElement('div');
        var createDropdownListingH4 = document.createElement('h4');
        var createDropdownListingNode = document.createTextNode('LISTING');
        createDropdownListingH4.appendChild(createDropdownListingNode);
        createDropdownListing.appendChild(createDropdownListingH4);
        createDropdownListing.className = 'Dropdown'
        createDropdownListing.id = alterationNumber + 'DropdownListingDetails'
        createDropdownListing.setAttribute("onclick","collapseReservationDetails(this);");
        document.getElementById(alterationNumber + "alterationContent").appendChild(createDropdownListing);


        var createListingDetails = document.createElement('div')
        createListingDetails.id = alterationNumber + "DivListingDetails";
        createListingDetails.className = "DivListingDetails";
        createListingDetails.style.display = "none";
        document.getElementById(alterationNumber + "alterationContent").appendChild(createListingDetails);

        var headerListingDetails = document.createElement('div')
        headerListingDetails.id = alterationNumber + 'HeaderListingDetails';
        headerListingDetails.className =  'HeaderListingDetails';
        document.getElementById(alterationNumber + 'DivListingDetails').appendChild(headerListingDetails)



        var divIconListingGuests = document.createElement('div');
        divIconListingGuests.className = "divIconsListing"
        var divIconListingGuestsImage = document.createElement('img');
        divIconListingGuestsImage.className = "iconslisting";
        divIconListingGuestsImage.setAttribute('src' , 'images/Guests.png');
        divIconListingGuests.appendChild(divIconListingGuestsImage)
        var divIconListingGuestsData = document.createElement('div');
        divIconListingGuestsData.id = alterationNumber + "ListingGuests";
        divIconListingGuestsData.className = "listinIconCount";
        divIconListingGuests.appendChild(divIconListingGuestsData);
        document.getElementById(alterationNumber + 'DivListingDetails').appendChild(divIconListingGuests);

        var divIconListingBedrooms = document.createElement('div');
        divIconListingBedrooms.className = "divIconsListing"
        var divIconListingBedroomsImage = document.createElement('img');
        divIconListingBedroomsImage.className = "iconslisting";
        divIconListingBedroomsImage.setAttribute('src' , 'images/Bedrooms.png');
        divIconListingBedrooms.appendChild(divIconListingBedroomsImage)
        var divIconListingBedroomsData = document.createElement('div');
        divIconListingBedroomsData.id = alterationNumber + "ListingBedrooms";
        divIconListingBedroomsData.className = "listinIconCount";
        divIconListingBedrooms.appendChild(divIconListingBedroomsData);
        document.getElementById(alterationNumber + 'DivListingDetails').appendChild(divIconListingBedrooms);

        var divIconListingBeds = document.createElement('div');
        divIconListingBeds.className = "divIconsListing"
        var divIconListingBedsImage = document.createElement('img');
        divIconListingBedsImage.className = "iconslisting";
        divIconListingBedsImage.setAttribute('src' , 'images/Beds.png');
        divIconListingBeds.appendChild(divIconListingBedsImage)
        var divIconListingBedsData = document.createElement('div');
        divIconListingBedsData.id = alterationNumber + "ListingBeds";
        divIconListingBedsData.className = "listinIconCount";
        divIconListingBeds.appendChild(divIconListingBedsData);
        document.getElementById(alterationNumber + 'DivListingDetails').appendChild(divIconListingBeds);

        var divIconListingBaths = document.createElement('div');
        divIconListingBaths.className = "divIconsListing"
        var divIconListingBathsImage = document.createElement('img');
        divIconListingBathsImage.className = "iconslisting";
        divIconListingBathsImage.setAttribute('src' , 'images/Baths.png');
        divIconListingBaths.appendChild(divIconListingBathsImage)
        var divIconListingBathsData = document.createElement('div');
        divIconListingBathsData.id = alterationNumber + "ListingBaths";
        divIconListingBathsData.className = "listinIconCount";
        divIconListingBaths.appendChild(divIconListingBathsData);
        document.getElementById(alterationNumber + 'DivListingDetails').appendChild(divIconListingBaths);


        var createListingDescription = document.createElement('div');
        createListingDescription.id = alterationNumber + "DescriptionListingDetails";
        createListingDescription.className =  "DescriptionListingDetails";
        document.getElementById(alterationNumber + 'DivListingDetails').appendChild(createListingDescription);

        var createListingAmenities = document.createElement('div');
        createListingAmenities.id = alterationNumber + "AmenitiesData"
        createListingAmenities.className = "AmenitiesData"
        document.getElementById(alterationNumber + 'DivListingDetails').appendChild(createListingAmenities);

        var createListingRules = document.createElement('div');
        createListingRules.id = alterationNumber + "HouseRulesListingDetails"
        createListingRules.className =  "HouseRulesListingDetails"
        document.getElementById(alterationNumber + 'DivListingDetails').appendChild(createListingRules);
    }




        // Creating Booking Details Inner

    function createBookingDetailsInner(alterationNumber) {
        var detailsTable = document.createElement('table');
        detailsTable.className = "tables";
        detailsTable.id = alterationNumber + "BookingDetailsTable";
        document.getElementById(alterationNumber + 'BookingDetails').appendChild(detailsTable);

        var tablerow = document.createElement('tr')
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(tablerow)

        var reservationCode = document.createElement('td');
        var reservationCodeNode = document.createTextNode('Reservation code');
        reservationCode.appendChild(reservationCodeNode);
        reservationCode.className = "NameTable";
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(reservationCode);


        var reservationCodeData = document.createElement('td');
        var reservationCodeDataNode = document.createTextNode('');
        reservationCodeData.appendChild(reservationCodeDataNode);
        reservationCodeData.className = "DataTable";
        reservationCodeData.id = alterationNumber + "reservation_code";
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(reservationCodeData);

        var tablerow = document.createElement('tr')
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(tablerow)

        var reservationCreated = document.createElement('td');
        var reservationCreatedNode = document.createTextNode('Created at');
        reservationCreated.appendChild(reservationCreatedNode);
        reservationCreated.className = "NameTable";
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(reservationCreated);

        var reservationCreatedData = document.createElement('td');
        var reservationCreatedDataNode = document.createTextNode('');
        reservationCreatedData.appendChild(reservationCreatedDataNode);
        reservationCreatedData.className = "DataTable";
        reservationCreatedData.id = alterationNumber + "created_at";
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(reservationCreatedData);

        var tablerow = document.createElement('tr')
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(tablerow)

        var reservationPending = document.createElement('td');
        var reservationPendingNode = document.createTextNode('Pending Began at');
        reservationPending.appendChild(reservationPendingNode);
        reservationPending.className = "NameTable";
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(reservationPending);

        var reservationPendingData = document.createElement('td');
        var reservationPendingDataNode = document.createTextNode('');
        reservationPendingData.appendChild(reservationPendingDataNode);
        reservationPendingData.className = "DataTable";
        reservationPendingData.id = alterationNumber + "pending_began_at";
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(reservationPendingData);

        var tablerow = document.createElement('tr')
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(tablerow)

        var reservationPendingExpires = document.createElement('td');
        var reservationPendingExpiresNode = document.createTextNode('Pending Began at');
        reservationPendingExpires.appendChild(reservationPendingExpiresNode);
        reservationPendingExpires.className = "NameTable";
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(reservationPendingExpires);

        var reservationPendingExpiresData = document.createElement('td');
        var reservationPendingExpiresDataNode = document.createTextNode('');
        reservationPendingExpiresData.appendChild(reservationPendingExpiresDataNode);
        reservationPendingExpiresData.className = "DataTable";
        reservationPendingExpiresData.id = alterationNumber + "pending_expires_at";
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(reservationPendingExpiresData);

        var tablerow = document.createElement('tr')
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(tablerow)

        var reservationResponded = document.createElement('td');
        var reservationRespondedNode = document.createTextNode('Host Responded at');
        reservationResponded.appendChild(reservationRespondedNode);
        reservationResponded.className = "NameTable";
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(reservationResponded);

        var reservationRespondedData = document.createElement('td');
        var reservationRespondedDataNode = document.createTextNode('');
        reservationRespondedData.appendChild(reservationRespondedDataNode);
        reservationRespondedData.className = "DataTable";
        reservationRespondedData.id = alterationNumber + "host_Responded_at";
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(reservationRespondedData);

        var tablerow = document.createElement('tr')
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(tablerow)

        var reservationCanceled = document.createElement('td');
        var reservationCanceledNode = document.createTextNode('Canceled at');
        reservationCanceled.appendChild(reservationCanceledNode);
        reservationCanceled.className = "NameTable";
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(reservationCanceled);

        var reservationCanceledData = document.createElement('td');
        var reservationCanceledDataNode = document.createTextNode('');
        reservationCanceledData.appendChild(reservationCanceledDataNode);
        reservationCanceledData.className = "DataTable";
        reservationCanceledData.id = alterationNumber + "canceled_at";
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(reservationCanceledData);

        var tablerow = document.createElement('tr')
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(tablerow)

        var reservationCancelPolicy = document.createElement('td');
        var reservationCancelPolicyNode = document.createTextNode('Cancellation Policy');
        reservationCancelPolicy.appendChild(reservationCancelPolicyNode);
        reservationCancelPolicy.className = "NameTable";
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(reservationCancelPolicy);

        var reservationCancelPolicyData = document.createElement('td');
        var reservationCancelPolicyDataNode = document.createTextNode('');
        reservationCancelPolicyData.appendChild(reservationCancelPolicyDataNode);
        reservationCancelPolicyData.className = "DataTable";
        reservationCancelPolicyData.id = alterationNumber + "cancel_policy";
        document.getElementById(alterationNumber + 'BookingDetailsTable').appendChild(reservationCancelPolicyData);
}













// Inserting pricing Divs through Functions
// Creating Nights Lines
function createNightBarsInsert (start_date,numberNight,alterationNumber) {

    var nightBarListing = document.createElement("div");
    var nightBarUsd = document.createElement("div");
    var nightBarGuest = document.createElement("div");
    var dateListingDiv = document.createElement("div");
    var dateUsdDiv = document.createElement("div");
    var dateGuestDiv = document.createElement("div");
    var nightListingDiv = document.createElement("div");
    var nightUsdDiv = document.createElement("div");
    var nightGuestDiv = document.createElement("div");
    var listingPricenightDiv = document.createElement("div");
    var usdPricenightDiv = document.createElement("div");
    var guestPricenightDiv = document.createElement("div");
    var contentDivListing = document.createElement("div");
    var contentDivUsd = document.createElement("div");
    var contentDivGuest = document.createElement("div");
    var whiteSpaceListingDiv = document.createElement("div");
    var whiteSpaceUsdDiv = document.createElement("div");
    var whiteSpaceGuestDiv = document.createElement("div");

    var dateListingNode = document.createTextNode(start_date);
    var dateUsdNode = document.createTextNode(start_date);
    var dateGuestNode = document.createTextNode(start_date);
    var nightListingNode = document.createTextNode("#" +numberNight);
    var nightUsdNode = document.createTextNode("#" +numberNight);
    var nightGuestNode = document.createTextNode("#" +numberNight);
    var listingPricenightNode = document.createTextNode("N/A");
    var usdPricenightNode = document.createTextNode("N/A");
    var guestPricenightNode = document.createTextNode("N/A");

    dateListingDiv.appendChild(dateListingNode);
    dateUsdDiv.appendChild(dateUsdNode);
    dateGuestDiv.appendChild(dateGuestNode);
    nightListingDiv.appendChild(nightListingNode);
    nightUsdDiv.appendChild(nightUsdNode);
    nightGuestDiv.appendChild(nightGuestNode);
    listingPricenightDiv.appendChild(listingPricenightNode);
    usdPricenightDiv.appendChild(usdPricenightNode);
    guestPricenightDiv.appendChild(guestPricenightNode);

    nightBarListing.id=alterationNumber + "Night"+numberNight+"Lising";
    nightBarListing.className="PricingHeaderBarListing";
    nightBarListing.setAttribute("onclick","ClickPricingBar(this);");
    nightBarUsd.id=alterationNumber + "Night"+numberNight+"Usd";
    nightBarUsd.className="PricingHeaderBarUsd";
    nightBarUsd.setAttribute("onclick","ClickPricingBar(this);");
    nightBarGuest.id=alterationNumber + "Night"+numberNight+"Guest";
    nightBarGuest.className="PricingHeaderBarGuest";
    nightBarGuest.setAttribute("onclick","ClickPricingBar(this);");
    dateListingDiv.id=alterationNumber + "DateListing"+numberNight;
    dateUsdDiv.id=alterationNumber + "DateUsd"+numberNight;
    dateGuestDiv.id=alterationNumber + "DateGuest"+numberNight;
    dateListingDiv.className="PricingHeaderNightDate";
    dateUsdDiv.className="PricingHeaderNightDate";
    dateGuestDiv.className="PricingHeaderNightDate";
    nightListingDiv.className="PricingHeaderNightCount";
    nightUsdDiv.className="PricingHeaderNightCount";
    nightGuestDiv.className="PricingHeaderNightCount";
    listingPricenightDiv.className="PricingHeaderHostNightPrice";
    listingPricenightDiv.id=alterationNumber + "HeaderHostPrice"+numberNight;
    usdPricenightDiv.className="PricingHeaderUSDNightPrice";
    usdPricenightDiv.id=alterationNumber + "HeaderUSDPrice"+numberNight;
    guestPricenightDiv.className="PricingHeaderGuestNightPrice";
    guestPricenightDiv.id=alterationNumber + "HeaderGuestPrice"+numberNight;
    contentDivListing.className="ContentPricesDivListing ContentPricesDiv";
    contentDivListing.id=alterationNumber + "ContentPricesDivListing"+numberNight;
    contentDivListing.style.display = "none";
    contentDivUsd.className="ContentPricesDivUsd ContentPricesDiv";
    contentDivUsd.id=alterationNumber + "ContentPricesDivUsd"+numberNight;
    contentDivUsd.style.display = "none";
    contentDivGuest.className="ContentPricesDivGuest ContentPricesDiv";
    contentDivGuest.id=alterationNumber + "ContentPricesDivGuest"+numberNight;
    contentDivGuest.style.display = "none";
    whiteSpaceListingDiv.className="whiteSpaceDivListing whiteSpaceDiv";
    whiteSpaceUsdDiv.className="whiteSpaceDivUsd whiteSpaceDiv";
    whiteSpaceGuestDiv.className="whiteSpaceDivGuest whiteSpaceDiv";

    nightBarListing.appendChild(nightListingDiv);
    nightBarListing.appendChild(listingPricenightDiv);
    nightBarListing.appendChild(dateListingDiv);
    document.getElementById(alterationNumber + "listingContentDiv").appendChild(nightBarListing);
    nightBarListing.after(whiteSpaceListingDiv);
    nightBarListing.after(contentDivListing);

    nightBarUsd.appendChild(nightUsdDiv);
    nightBarUsd.appendChild(usdPricenightDiv);
    nightBarUsd.appendChild(dateUsdDiv);
    document.getElementById(alterationNumber + "usdContentDiv").appendChild(nightBarUsd);
    nightBarUsd.after(whiteSpaceUsdDiv);
    nightBarUsd.after(contentDivUsd);

    nightBarGuest.appendChild(nightGuestDiv);
    nightBarGuest.appendChild(guestPricenightDiv);
    nightBarGuest.appendChild(dateGuestDiv);
    document.getElementById(alterationNumber + "guestContentDiv").appendChild(nightBarGuest);
    nightBarGuest.after(whiteSpaceGuestDiv);
    nightBarGuest.after(contentDivGuest);


}



// Nightly Price
function createNightlyPriceInsert (counter,type,original_amount_listing,amount_usd,guest_amount_micros,alterationNumber) {

        // Listing

        var divDayHeaderListingInsert = document.createElement("div");
        divDayHeaderListingInsert.className="divDayHeader";
        divDayHeaderListingInsert.id=alterationNumber + "divDayListingHeader"+counter;
        document.getElementById(alterationNumber + "ContentPricesDivListing"+counter).appendChild(divDayHeaderListingInsert);


        var divDayInsert = document.createElement("div");
        divDayInsert.className="dailyDiv";
        divDayInsert.id=alterationNumber + "dailyDivListing"+counter;
        document.getElementById(alterationNumber + "ContentPricesDivListing"+counter).appendChild(divDayInsert);


        var typeDayInsert = document.createElement("div");
        var typeDayInsertNode = document.createTextNode(type);
        typeDayInsert.appendChild(typeDayInsertNode);
        typeDayInsert.className= "dailyType";
        typeDayInsert.id= alterationNumber + "dailyType"+counter;
        document.getElementById(alterationNumber + "divDayListingHeader"+counter).appendChild(typeDayInsert);

        var original_amount_micro_listingDayInsert = document.createElement("div");
        var original_amount_micro_listingDayNode = document.createTextNode(original_amount_listing);
        original_amount_micro_listingDayInsert.appendChild(original_amount_micro_listingDayNode);
        original_amount_micro_listingDayInsert.className= "dailyListing";
        original_amount_micro_listingDayInsert.id= alterationNumber + "dailyListing"+counter;
        document.getElementById(alterationNumber + "divDayListingHeader"+counter).appendChild(original_amount_micro_listingDayInsert);


        var divDayInsert = document.createElement("div");
        divDayInsert.className="discountDiv";
        divDayInsert.id=alterationNumber + "discountDiv"+counter;
        document.getElementById(alterationNumber + "dailyDivListing"+counter).appendChild(divDayInsert);


        //USD
        var divDayHeaderUsdInsert = document.createElement("div");
        divDayHeaderUsdInsert.className="divDayHeader";
        divDayHeaderUsdInsert.id=alterationNumber + "divDayUsdHeader"+counter;
        document.getElementById(alterationNumber + "ContentPricesDivUsd"+counter).appendChild(divDayHeaderUsdInsert);

        var divDayInsert = document.createElement("div");
        divDayInsert.className="dailyDiv";
        divDayInsert.id=alterationNumber + "dailyDivUsd"+counter;
        document.getElementById(alterationNumber + "ContentPricesDivUsd"+counter).appendChild(divDayInsert);

        var typeDayInsert = document.createElement("div");
        var typeDayInsertNode = document.createTextNode(type);
        typeDayInsert.appendChild(typeDayInsertNode);
        typeDayInsert.className= "dailyType";
        typeDayInsert.id= alterationNumber + "dailyType"+counter;
        document.getElementById(alterationNumber + "divDayUsdHeader"+counter).appendChild(typeDayInsert);

        var amount_usdDayInsert = document.createElement("div");
        var amount_usdDayNode = document.createTextNode(amount_usd);
        amount_usdDayInsert.appendChild(amount_usdDayNode);
        amount_usdDayInsert.className= "dailyUSD";
        amount_usdDayInsert.id= alterationNumber + "dailyUSD"+counter;
        document.getElementById(alterationNumber + "divDayUsdHeader"+counter).appendChild(amount_usdDayInsert);

        var divDayInsert = document.createElement("div");
        divDayInsert.className="discountDiv";
        divDayInsert.id=alterationNumber + "discountDiv"+counter;
        document.getElementById(alterationNumber + "dailyDivUsd"+counter).appendChild(divDayInsert);


        // Guest
        var divDayHeaderGuestInsert = document.createElement("div");
        divDayHeaderGuestInsert.className="divDayHeader";
        divDayHeaderGuestInsert.id=alterationNumber + "divDayGuestHeader"+counter;
        document.getElementById(alterationNumber + "ContentPricesDivGuest"+counter).appendChild(divDayHeaderGuestInsert);

        var divDayInsert = document.createElement("div");
        divDayInsert.className="dailyDiv";
        divDayInsert.id=alterationNumber + "dailyDivGuest"+counter;
        document.getElementById(alterationNumber + "ContentPricesDivGuest"+counter).appendChild(divDayInsert);

        var typeDayInsert = document.createElement("div");
        var typeDayInsertNode = document.createTextNode(type);
        typeDayInsert.appendChild(typeDayInsertNode);
        typeDayInsert.className= "dailyType";
        typeDayInsert.id= alterationNumber + "dailyType"+counter;
        document.getElementById(alterationNumber + "divDayGuestHeader"+counter).appendChild(typeDayInsert);

        var amount_usdDayInsert = document.createElement("div");
        var amount_usdDayNode = document.createTextNode(guest_amount_micros);
        amount_usdDayInsert.appendChild(amount_usdDayNode);
        amount_usdDayInsert.className= "dailyGuest";
        amount_usdDayInsert.id= alterationNumber + "dailyGuest"+counter;
        document.getElementById(alterationNumber + "divDayGuestHeader"+counter).appendChild(amount_usdDayInsert);

        var divDayInsert = document.createElement("div");
        divDayInsert.className="discountDiv";
        divDayInsert.id=alterationNumber + "discountDiv"+counter;
        document.getElementById(alterationNumber + "dailyDivGuest"+counter).appendChild(divDayInsert);





}





// Extra Guest insert
function createExtraGuestInsert (counter,extra_guest_fee_type,extraGuestsIncluded,extraGuestsNumber,listingCurrencySymbol,extraGuestsPriceListing,extra_guest_fee_Listing,extra_guest_fee_USD,guestCurrencySymbol,extraGuestsPriceGuest,extra_guest_fee_Guest,alterationNumber) {
           // Listing
        var divExtraGuestInsert = document.createElement("div");
        divExtraGuestInsert.className="extraGuestDiv";
        divExtraGuestInsert.id=alterationNumber + "extraGuestDivListing"+counter;
        document.getElementById(alterationNumber + "ContentPricesDivListing"+counter).appendChild(divExtraGuestInsert);

        var divExtraGuestTypeInsert = document.createElement("div");
        var divExtraGuestTypeNode = document.createTextNode(extra_guest_fee_type+"");
        divExtraGuestTypeInsert.appendChild(divExtraGuestTypeNode);
        divExtraGuestTypeInsert.className="extraGuestType";
        divExtraGuestTypeInsert.id= alterationNumber + "extraGuestTypeListing"+counter;
        document.getElementById(alterationNumber + "extraGuestDivListing"+counter).appendChild(divExtraGuestTypeInsert);


        var moreInfoExtraGuestInsert = document.createElement('img')
        moreInfoExtraGuestInsert.src = "images/questionmark.png"
        moreInfoExtraGuestInsert.setAttribute("height" , "14")
        moreInfoExtraGuestInsert.setAttribute("width" , "14")
        moreInfoExtraGuestInsert.style.position = "relative"
        moreInfoExtraGuestInsert.style.top = "2px"
        moreInfoExtraGuestInsert.style.left = "6px"
        moreInfoExtraGuestInsert.style.cursor = "pointer"
        moreInfoExtraGuestInsert.setAttribute("onclick","ClickExtraGuestInfo(this);");
        document.getElementById(alterationNumber + "extraGuestTypeListing"+counter).appendChild(moreInfoExtraGuestInsert);


//More Info
        var moreInfoExtraGuestDivInsert = document.createElement('div');
        moreInfoExtraGuestDivInsert.className = "moreInfoExtraGuest";
        moreInfoExtraGuestDivInsert.id = alterationNumber + "moreInfoExtraGuestListing" + counter;
        moreInfoExtraGuestDivInsert.style.display="none";
        document.getElementById(alterationNumber + "ContentPricesDivListing"+counter).appendChild(moreInfoExtraGuestDivInsert);

        var moreInfoExtraGuestInclInsert = document.createElement('div');
        moreInfoExtraGuestInclNode = document.createTextNode ("Number of guest included in price:")
        moreInfoExtraGuestInclInsert.appendChild(moreInfoExtraGuestInclNode)
        moreInfoExtraGuestInclInsert.className = "descriptionInfoExtraGuest";
        document.getElementById(alterationNumber + 'moreInfoExtraGuestListing'+counter).appendChild(moreInfoExtraGuestInclInsert);

        var moreInfoExtraGuestInclInsert = document.createElement('div');
        moreInfoExtraGuestInclNode = document.createTextNode (extraGuestsIncluded)
        moreInfoExtraGuestInclInsert.appendChild(moreInfoExtraGuestInclNode)
        moreInfoExtraGuestInclInsert.className = "dataInfoExtraGuest";
        document.getElementById(alterationNumber + 'moreInfoExtraGuestListing'+counter).appendChild(moreInfoExtraGuestInclInsert);

        var moreInfoExtraGuestInclInsert = document.createElement('div');
        moreInfoExtraGuestInclNode = document.createTextNode ("Number of extra guests:")
        moreInfoExtraGuestInclInsert.appendChild(moreInfoExtraGuestInclNode)
        moreInfoExtraGuestInclInsert.className = "descriptionInfoExtraGuest";
        document.getElementById(alterationNumber + 'moreInfoExtraGuestListing'+counter).appendChild(moreInfoExtraGuestInclInsert);

        var moreInfoExtraGuestInclInsert = document.createElement('div');
        moreInfoExtraGuestInclNode = document.createTextNode (extraGuestsNumber)
        moreInfoExtraGuestInclInsert.appendChild(moreInfoExtraGuestInclNode)
        moreInfoExtraGuestInclInsert.className = "dataInfoExtraGuest";
        document.getElementById(alterationNumber + 'moreInfoExtraGuestListing'+counter).appendChild(moreInfoExtraGuestInclInsert);


    
       var moreInfoExtraGuestInclInsert = document.createElement('div');
        moreInfoExtraGuestInclNode = document.createTextNode ("Price for each extra guest:")
        moreInfoExtraGuestInclInsert.appendChild(moreInfoExtraGuestInclNode)
        moreInfoExtraGuestInclInsert.className = "descriptionInfoExtraGuest";
        document.getElementById(alterationNumber + 'moreInfoExtraGuestListing'+counter).appendChild(moreInfoExtraGuestInclInsert);

        var moreInfoExtraGuestInclInsert = document.createElement('div');
        moreInfoExtraGuestInclNode = document.createTextNode (listingCurrencySymbol +" " + extraGuestsPriceListing)
        moreInfoExtraGuestInclInsert.appendChild(moreInfoExtraGuestInclNode)
        moreInfoExtraGuestInclInsert.className = "dataInfoExtraGuest";
        document.getElementById(alterationNumber + 'moreInfoExtraGuestListing'+counter).appendChild(moreInfoExtraGuestInclInsert);


        var divExtraGuestListingInsert = document.createElement("div");
        var divExtraGuestListingNode = document.createTextNode(extra_guest_fee_Listing);
        divExtraGuestListingInsert.appendChild(divExtraGuestListingNode);
        divExtraGuestListingInsert.className= "extraGuestListing";
        divExtraGuestListingInsert.id= alterationNumber + "extraGuestListing"+counter;
        document.getElementById(alterationNumber + "extraGuestDivListing"+counter).appendChild(divExtraGuestListingInsert);


        // USD
        var divExtraGuestInsert = document.createElement("div");
        divExtraGuestInsert.className="extraGuestDiv";
        divExtraGuestInsert.id=alterationNumber + "extraGuestDivUsd"+counter;
        document.getElementById(alterationNumber + "ContentPricesDivUsd"+counter).appendChild(divExtraGuestInsert);

        var divExtraGuestTypeInsert = document.createElement("div");
        var divExtraGuestTypeNode = document.createTextNode(extra_guest_fee_type);
        divExtraGuestTypeInsert.appendChild(divExtraGuestTypeNode);
        divExtraGuestTypeInsert.className="extraGuestType";
        divExtraGuestTypeInsert.id= alterationNumber + "extraGuestType"+counter;
        document.getElementById(alterationNumber + "extraGuestDivUsd"+counter).appendChild(divExtraGuestTypeInsert);

        var divExtraGuestGuestInsert = document.createElement("div");
        var divExtraGuestGuestNode = document.createTextNode(extra_guest_fee_USD);
        divExtraGuestGuestInsert.appendChild(divExtraGuestGuestNode);
        divExtraGuestGuestInsert.className= "extraGuestUSD";
        divExtraGuestGuestInsert.id= alterationNumber + "extraGuestUSD"+counter;
        document.getElementById(alterationNumber + "extraGuestDivUsd"+counter).appendChild(divExtraGuestGuestInsert);

        
        // Guest
        var divExtraGuestInsert = document.createElement("div");
        divExtraGuestInsert.className="extraGuestDiv";
        divExtraGuestInsert.id=alterationNumber + "extraGuestDivGuest"+counter;
        document.getElementById(alterationNumber + "ContentPricesDivGuest"+counter).appendChild(divExtraGuestInsert);

        var divExtraGuestTypeInsert = document.createElement("div");
        var divExtraGuestTypeNode = document.createTextNode(extra_guest_fee_type+"");
        divExtraGuestTypeInsert.appendChild(divExtraGuestTypeNode);
        divExtraGuestTypeInsert.className="extraGuestType";
        divExtraGuestTypeInsert.id= alterationNumber + "extraGuestTypeGuest"+counter;
        document.getElementById(alterationNumber + "extraGuestDivGuest"+counter).appendChild(divExtraGuestTypeInsert);


        var moreInfoExtraGuestInsert = document.createElement('img')
        moreInfoExtraGuestInsert.src = "images/questionmark.png"
        moreInfoExtraGuestInsert.setAttribute("height" , "14")
        moreInfoExtraGuestInsert.setAttribute("width" , "14")
        moreInfoExtraGuestInsert.style.position = "relative"
        moreInfoExtraGuestInsert.style.top = "2px"
        moreInfoExtraGuestInsert.style.left = "6px"
        moreInfoExtraGuestInsert.style.cursor = "pointer"
        moreInfoExtraGuestInsert.setAttribute("onclick","ClickExtraGuestInfo(this);");
        document.getElementById(alterationNumber + "extraGuestTypeGuest"+counter).appendChild(moreInfoExtraGuestInsert);


//More Info
        var moreInfoExtraGuestDivInsert = document.createElement('div');
        moreInfoExtraGuestDivInsert.className = "moreInfoExtraGuest";
        moreInfoExtraGuestDivInsert.id =alterationNumber +  "moreInfoExtraGuestGuest" + counter;
        moreInfoExtraGuestDivInsert.style.display="none";
        document.getElementById(alterationNumber + "ContentPricesDivGuest"+counter).appendChild(moreInfoExtraGuestDivInsert);

        var moreInfoExtraGuestInclInsert = document.createElement('div');
        moreInfoExtraGuestInclNode = document.createTextNode ("Number of guest included in price:")
        moreInfoExtraGuestInclInsert.appendChild(moreInfoExtraGuestInclNode)
        moreInfoExtraGuestInclInsert.className = "descriptionInfoExtraGuest";
        document.getElementById(alterationNumber + 'moreInfoExtraGuestGuest'+counter).appendChild(moreInfoExtraGuestInclInsert);

        var moreInfoExtraGuestInclInsert = document.createElement('div');
        moreInfoExtraGuestInclNode = document.createTextNode (extraGuestsIncluded)
        moreInfoExtraGuestInclInsert.appendChild(moreInfoExtraGuestInclNode)
        moreInfoExtraGuestInclInsert.className = "dataInfoExtraGuest";
        document.getElementById(alterationNumber + 'moreInfoExtraGuestGuest'+counter).appendChild(moreInfoExtraGuestInclInsert);

        var moreInfoExtraGuestInclInsert = document.createElement('div');
        moreInfoExtraGuestInclNode = document.createTextNode ("Number of extra guests:")
        moreInfoExtraGuestInclInsert.appendChild(moreInfoExtraGuestInclNode)
        moreInfoExtraGuestInclInsert.className = "descriptionInfoExtraGuest";
        document.getElementById(alterationNumber + 'moreInfoExtraGuestGuest'+counter).appendChild(moreInfoExtraGuestInclInsert);

        var moreInfoExtraGuestInclInsert = document.createElement('div');
        moreInfoExtraGuestInclNode = document.createTextNode (extraGuestsNumber)
        moreInfoExtraGuestInclInsert.appendChild(moreInfoExtraGuestInclNode)
        moreInfoExtraGuestInclInsert.className = "dataInfoExtraGuest";
        document.getElementById(alterationNumber + 'moreInfoExtraGuestGuest'+counter).appendChild(moreInfoExtraGuestInclInsert);




        var moreInfoExtraGuestInclInsert = document.createElement('div');
        moreInfoExtraGuestInclNode = document.createTextNode ("Price for each extra guest:")
        moreInfoExtraGuestInclInsert.appendChild(moreInfoExtraGuestInclNode)
        moreInfoExtraGuestInclInsert.className = "descriptionInfoExtraGuest";
        document.getElementById(alterationNumber + 'moreInfoExtraGuestGuest'+counter).appendChild(moreInfoExtraGuestInclInsert);

        var moreInfoExtraGuestInclInsert = document.createElement('div');
        moreInfoExtraGuestInclNode = document.createTextNode (guestCurrencySymbol +" " + extraGuestsPriceGuest)
        moreInfoExtraGuestInclInsert.appendChild(moreInfoExtraGuestInclNode)
        moreInfoExtraGuestInclInsert.className = "dataInfoExtraGuest";
        document.getElementById(alterationNumber + 'moreInfoExtraGuestGuest'+counter).appendChild(moreInfoExtraGuestInclInsert);



        var divExtraGuestGuestInsert = document.createElement("div");
        var divExtraGuestGuestNode = document.createTextNode(extra_guest_fee_Guest);
        divExtraGuestGuestInsert.appendChild(divExtraGuestGuestNode);
        divExtraGuestGuestInsert.className= "extraGuestGuest";
        divExtraGuestGuestInsert.id= alterationNumber + "extraGuestGuest"+counter;
        document.getElementById(alterationNumber + "extraGuestDivGuest"+counter).appendChild(divExtraGuestGuestInsert);


}


function createCleaningFeeInsert (cleaningFeeType,listingCurrencySymbol,cleaningFeePriceListing,cleaningFeePriceUsd,guestCurrencySymbol,cleaningFeePriceGuest,alterationNumber) {

        //creating Cleaning fee Div
    var barListingCleaningFeeInsert = document.createElement('div');
    var barUsdCleaningFeeInsert = document.createElement('div');
    var barGuestCleaningFeeInsert = document.createElement('div');
    var typeListingCleaningFeeInsert = document.createElement('div');
    var typeUsdCleaningFeeInsert = document.createElement('div');
    var typeGuestCleaningFeeInsert = document.createElement('div');
    var listingPriceCleaningFeeInsert = document.createElement('div');
    var usdPriceCleaningFeeInsert = document.createElement('div');
    var guestPriceCleaningFeeInsert = document.createElement('div');
    var contentCleaningListing = document.createElement('div');
    var contentCleaningUsd = document.createElement('div');
    var contentCleaningGuest = document.createElement('div');
    var whiteSpaceListingDiv = document.createElement("div");
    var whiteSpaceUsdDiv = document.createElement("div");
    var whiteSpaceGuestDiv = document.createElement("div");

    var typeListingCleaningFeeNode = document.createTextNode(cleaningFeeType);
    var typeUsdCleaningFeeNode = document.createTextNode(cleaningFeeType);
    var typeGuestCleaningFeeNode = document.createTextNode(cleaningFeeType);
    var listingPriceCleaningFeeNode = document.createTextNode(listingCurrencySymbol + " " + cleaningFeePriceListing);
    var usdPriceCleaningFeeNode = document.createTextNode("$ " + cleaningFeePriceUsd);
    var guestPriceCleaningFeeNode = document.createTextNode(guestCurrencySymbol + " " + cleaningFeePriceGuest);

    typeListingCleaningFeeInsert.appendChild(typeListingCleaningFeeNode);
    typeUsdCleaningFeeInsert.appendChild(typeUsdCleaningFeeNode);
    typeGuestCleaningFeeInsert.appendChild(typeGuestCleaningFeeNode);
    listingPriceCleaningFeeInsert.appendChild(listingPriceCleaningFeeNode);
    usdPriceCleaningFeeInsert.appendChild(usdPriceCleaningFeeNode);
    guestPriceCleaningFeeInsert.appendChild(guestPriceCleaningFeeNode);


    barListingCleaningFeeInsert.className="PricingHeaderBarListing";
    barListingCleaningFeeInsert.setAttribute("onclick","ClickPricingBar(this);");
    barUsdCleaningFeeInsert.className="PricingHeaderBarUsd";
    barUsdCleaningFeeInsert.setAttribute("onclick","ClickPricingBar(this);");
    barGuestCleaningFeeInsert.className="PricingHeaderBarGuest";
    barGuestCleaningFeeInsert.setAttribute("onclick","ClickPricingBar(this);");
    contentCleaningListing.className="ContentPricesDiv";
    contentCleaningListing.style.display = "none";
    contentCleaningUsd.className="ContentPricesDiv";
    contentCleaningUsd.style.display = "none";
    contentCleaningGuest.className="ContentPricesDiv";
    contentCleaningGuest.style.display = "none";

    whiteSpaceListingDiv.className="whiteSpaceDivListing whiteSpaceDiv";
    whiteSpaceUsdDiv.className="whiteSpaceDivUsd whiteSpaceDiv";
    whiteSpaceGuestDiv.className="whiteSpaceDivGuest whiteSpaceDiv";

    barListingCleaningFeeInsert.className= "PricingHeaderBarListing";
    barUsdCleaningFeeInsert.className= "PricingHeaderBarUsd";
    barGuestCleaningFeeInsert.className= "PricingHeaderBarGuest";
    typeListingCleaningFeeInsert.className = "CleaningFeeType"
    typeUsdCleaningFeeInsert.className = "CleaningFeeType"
    typeGuestCleaningFeeInsert.className = "CleaningFeeType"
    listingPriceCleaningFeeInsert.className = "CleaningFeePrice"
    listingPriceCleaningFeeInsert.id = alterationNumber + "cleaningFeePriceListing"
    usdPriceCleaningFeeInsert.className = "CleaningFeePrice"
    usdPriceCleaningFeeInsert.id = alterationNumber + "cleaningFeePriceUsd"
    guestPriceCleaningFeeInsert.className = "CleaningFeePrice"
    guestPriceCleaningFeeInsert.id = alterationNumber + "cleaningFeePriceGuest"



    //Placing elements in HTML
    barListingCleaningFeeInsert.appendChild(typeListingCleaningFeeInsert);
    barListingCleaningFeeInsert.appendChild(listingPriceCleaningFeeInsert);
    document.getElementById(alterationNumber + "listingContentDiv").appendChild(barListingCleaningFeeInsert);
    barListingCleaningFeeInsert.after(whiteSpaceListingDiv);
    barListingCleaningFeeInsert.after(contentCleaningListing);

    barUsdCleaningFeeInsert.appendChild(typeUsdCleaningFeeInsert);
    barUsdCleaningFeeInsert.appendChild(usdPriceCleaningFeeInsert);
    document.getElementById(alterationNumber + "usdContentDiv").appendChild(barUsdCleaningFeeInsert);
    barUsdCleaningFeeInsert.after(whiteSpaceUsdDiv);
    barUsdCleaningFeeInsert.after(contentCleaningUsd);

    barGuestCleaningFeeInsert.appendChild(typeGuestCleaningFeeInsert);
    barGuestCleaningFeeInsert.appendChild(guestPriceCleaningFeeInsert);
    document.getElementById(alterationNumber + "guestContentDiv").appendChild(barGuestCleaningFeeInsert);
    barGuestCleaningFeeInsert.after(whiteSpaceGuestDiv);
    barGuestCleaningFeeInsert.after(contentCleaningGuest);

}




// Creating Airbnb Fee Insert
function createAirbnbFeeInsert (airbnbFeeListingAmountDisplay,airbnbFeeGuestAmountDisplay,alterationNumber)  {

 
        var barAirbnbFeeListing = document.createElement('div');
        var contentFeesListing = document.createElement('div');
        var whitespaceFeesListing = document.createElement('div');
        var barAirbnbFeeGuest = document.createElement('div');
        var contentFeesGuest = document.createElement('div');
        var whitespaceFeesGuest = document.createElement('div');

        var airbnbFeeListingDiv = document.createElement('div');
        var airbnbFeeListingTypeInsert = document.createElement('div');
        var airbnbFeeListingAmountInsert = document.createElement('div');
        var airbnbFeeGuestDiv = document.createElement('div');
        var airbnbFeeGuestTypeInsert = document.createElement('div');
        var airbnbFeeGuestAmountInsert = document.createElement('div');

        var airbnbFeeListingTypeNode = document.createTextNode("Airbnb fee (");
        var airbnbFeeListingAmountNode = document.createTextNode(airbnbFeeListingAmountDisplay);
        var airbnbFeeGuestTypeNode = document.createTextNode("Airbnb fee (");
        var airbnbFeeGuestAmountNode = document.createTextNode(airbnbFeeGuestAmountDisplay);

        airbnbFeeListingTypeInsert.appendChild(airbnbFeeListingTypeNode);
        airbnbFeeListingAmountInsert.appendChild(airbnbFeeListingAmountNode);
        airbnbFeeGuestTypeInsert.appendChild(airbnbFeeGuestTypeNode);
        airbnbFeeGuestAmountInsert.appendChild(airbnbFeeGuestAmountNode);

        barAirbnbFeeListing.className= "PricingHeaderBarListing";
        barAirbnbFeeListing.id= alterationNumber + "FeesHeaderBarListing";
        barAirbnbFeeListing.setAttribute("onclick","ClickPricingBar(this);");
        contentFeesListing.className= "ContentPricesDivListing ContentPricesDiv";
        contentFeesListing.id=alterationNumber + "contentFeesListing";
        contentFeesListing.style.display="none";
        whitespaceFeesListing.className="whiteSpaceDivListing whiteSpaceDiv";
        barAirbnbFeeGuest.className= "PricingHeaderBarGuest";
        barAirbnbFeeGuest.id= alterationNumber + "FeesHeaderBarGuest";
        barAirbnbFeeGuest.setAttribute("onclick","ClickPricingBar(this);");
        contentFeesGuest.className= "ContentPricesDivGuest ContentPricesDiv";
        contentFeesGuest.id=alterationNumber + "contentFeesGuest";
        contentFeesGuest.style.display="none";
        whitespaceFeesGuest.className="whiteSpaceDivGuest whiteSpaceDiv";

        airbnbFeeListingDiv.className="feeDiv";
        airbnbFeeListingTypeInsert.className= "airbnbFeeListingType";
        airbnbFeeListingTypeInsert.id= alterationNumber + "airbnbFeeListingType";
        airbnbFeeListingAmountInsert.className= "airbnbFeeListingAmount";
        airbnbFeeListingAmountInsert.id=alterationNumber + "airbnbFeeListing"
        airbnbFeeGuestDiv.className="feeDiv";
        airbnbFeeGuestTypeInsert.className= "airbnbFeeGuestType";
        airbnbFeeGuestTypeInsert.id= alterationNumber + "airbnbFeeGuestType";
        airbnbFeeGuestAmountInsert.className= "airbnbFeeGuestAmount";
        airbnbFeeGuestAmountInsert.id=alterationNumber + "airbnbFeeGuest"

        // Connecting elements
        airbnbFeeListingDiv.appendChild(airbnbFeeListingTypeInsert);
        airbnbFeeListingDiv.appendChild(airbnbFeeListingAmountInsert);
        contentFeesListing.appendChild(airbnbFeeListingDiv);
        airbnbFeeGuestDiv.appendChild(airbnbFeeGuestTypeInsert);
        airbnbFeeGuestDiv.appendChild(airbnbFeeGuestAmountInsert);
        contentFeesGuest.appendChild(airbnbFeeGuestDiv);


        //placing elements in HTML
        document.getElementById(alterationNumber + 'listingContentDiv').appendChild(barAirbnbFeeListing);
        barAirbnbFeeListing.after(whitespaceFeesListing);
        barAirbnbFeeListing.after(contentFeesListing);

        document.getElementById(alterationNumber + 'guestContentDiv').appendChild(barAirbnbFeeGuest);
        barAirbnbFeeGuest.after(whitespaceFeesGuest);
        barAirbnbFeeGuest.after(contentFeesGuest);


}











            /*changing inserted text*/
function transformtext() {


outputArea = document.getElementById('DivOutputField');

while (outputArea.firstChild) {
    outputArea.removeChild(outputArea.firstChild);
}



// Inserted text finding
    var insertedtext = document.getElementById("EntreeField").value;




if(insertedtext.includes('Justen') || insertedtext.includes('justen') || insertedtext.includes('Aleksei') || insertedtext.includes('aleksei') ) {
    //alert("Awesome, that's a booking that involves the developer!");

}

// Alteration Checking
var alterationTotal = ((insertedtext.match(/base_price_breakdown/g) || []).length - 1 );
if (alterationTotal >0) {


} 

var alterationNumber = 0;

while (alterationTotal >= alterationNumber) {//While — Looping through Alterations



// Creating Pricing text 
    var snapshotText = insertedtext.substring(insertedtext.indexOf("admin_notes"),insertedtext.indexOf("visible_pictures")+10)
    var insertedtoptext =  snapshotText.substring(snapshotText.indexOf("admin_notes") + 1,snapshotText.indexOf("reservation_schedule2s")-2);
    var insertedPricingText = snapshotText.substring(snapshotText.indexOf("pricing_snapshot_data") ,snapshotText.indexOf("admin_points")+15);

    insertedtext = insertedtext.substring(insertedtext.indexOf('visible_pictures')+15);

if (alterationTotal == 0) {
    noAlterationContent(alterationNumber);
}
else {
    createAlterationButton(alterationNumber,alterationTotal)
}
    createDropdownMenu(alterationNumber);
    createBookingDetailsInner(alterationNumber);




        /* Scroll To Output */
        $('html,body').animate({
        scrollTop: $("#DivOutputField").offset().top + (-50)},
        'slow');








/* Reservation Code */
var reservationCodeData = document.getElementById(alterationNumber + "reservation_code")
while (reservationCodeData.hasChildNodes()) {
    reservationCodeData.removeChild(reservationCodeData.lastChild);
}
if (snapshotText.includes("confirmation_code")&&snapshotText.includes("coupon_id")) {
  var reservation_code = snapshotText.substring(snapshotText.indexOf("confirmation_code") + 19,snapshotText.indexOf("coupon_id")-2);
  reservationCode= reservation_code

  var linkCodeInsert = document.createElement('a');
  var linkCodeNode = document.createTextNode(reservation_code);
  linkCodeInsert.appendChild(linkCodeNode);
  linkCodeInsert.title = reservation_code;
  linkCodeInsert.setAttribute("target","blank")
  linkCodeInsert.href = "https://nova.airbnb.tools/reservations/" + reservation_code;
}
else {
  reservation_code="";
}
document.getElementById(alterationNumber + "reservation_code").appendChild(linkCodeInsert);



/* Created at */
if (insertedtoptext.includes("created_at")&&insertedtoptext.includes("currency_fee")) {
  var created_at = insertedtoptext.substring(insertedtoptext.indexOf("created_at") + 12,insertedtoptext.indexOf("currency_fee")-12) + " at " + insertedtoptext.substring(insertedtoptext.indexOf("created_at") + 23,insertedtoptext.indexOf("currency_fee")-3);
}
else {
  created_at="";
}
document.getElementById(alterationNumber + "created_at").innerText = created_at;


/* Pending Began at */
if (snapshotText.includes("pending_began_at")&&snapshotText.includes("pending_expires_at")) {
  var pending_began_at = snapshotText.substring(snapshotText.indexOf("pending_began_at") + 18,snapshotText.indexOf("pending_expires_at")-12) + " at " + snapshotText.substring(snapshotText.indexOf("pending_began_at") + 29,snapshotText.indexOf("pending_expires_at")-3);
}
else {
  pending_began_at="";
}
document.getElementById(alterationNumber + "pending_began_at").innerText = pending_began_at;


/* Pending Expired at */
if (snapshotText.includes("pending_expires_at")&&snapshotText.includes("price_version_count")) {
  var pending_expires_at = snapshotText.substring(snapshotText.indexOf("pending_expires_at") + 20,snapshotText.indexOf("price_version_count")-12) + " at " + snapshotText.substring(snapshotText.indexOf("pending_expires_at") + 31,snapshotText.indexOf("price_version_count")-3);
}
else {
  pending_expires_at="";
}
document.getElementById(alterationNumber + "pending_expires_at").innerText = pending_expires_at;


/* Host responded at */
if (snapshotText.includes("host_responded_at")&&snapshotText.includes("host_vat_country")) {
      if (snapshotText.substring(snapshotText.indexOf("host_responded_at") + 18, snapshotText.indexOf("host_responded_at") + 22) == "NULL") {
      var host_Responded_at = "N/A";
      }
        else {
          var host_Responded_at = snapshotText.substring(snapshotText.indexOf("host_responded_at") + 18,snapshotText.indexOf("host_vat_country")-11) + " at " + snapshotText.substring(snapshotText.indexOf("host_responded_at") + 29,snapshotText.indexOf("host_vat_country")-2);
        }
    }
    else {
      host_Responded_at="";
    }
document.getElementById(alterationNumber + "host_Responded_at").innerText = host_Responded_at;


/* Cancelled at */
if (snapshotText.includes("canceled_at")&&snapshotText.includes("cancellation_guest_fee")) {
    if (snapshotText.substring(snapshotText.indexOf("canceled_at") + 12,snapshotText.indexOf("canceled_at")+16)=="NULL") {
      var canceled_at = "N/A";
    }
      else {
    var canceled_at = snapshotText.substring(snapshotText.indexOf("canceled_at") + 12,snapshotText.indexOf("cancellation_guest_fee")-11) + " at " + snapshotText.substring(snapshotText.indexOf("canceled_at") + 23,snapshotText.indexOf("cancellation_guest_fee")-2);
    }
  }
  else {
    canceled_at="";
  }
document.getElementById(alterationNumber + "canceled_at").innerText = canceled_at;


/* Cancellation Policy */
var cancel_policy;

if (snapshotText.includes("cancel_policy")) {

        var cancel_policy_raw = snapshotText.substring(snapshotText.indexOf("cancel_policy") + 15,snapshotText.indexOf("canceled_at")-2);
        
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
	document.getElementById(alterationNumber + "cancel_policy").innerText = cancel_policy;


/* Listing Details */



// Listing Links
// Listing ID retrieval
var listingID = snapshotText.substring(snapshotText.indexOf('hypothetical_rank'),snapshotText.indexOf('instant_book_lead_time'));
listingID = listingID.substring(listingID.indexOf('id')+4,listingID.indexOf('instant_book')-2);


// Rooms & MYS Link
var roomsLink = "https://admin.airbnb.com/rooms/" + listingID
var mysLink = "https://admin.airbnb.com/manage-your-space/" + listingID +"/details"


var roomsLinkDiv = document.createElement('div');
roomsLinkDiv.className="linkListingDiv"
var roomsLinkInsert = document.createElement('a');
var roomsLinkNode = document.createTextNode('Listing Page');
roomsLinkInsert.appendChild(roomsLinkNode);
roomsLinkInsert.title = 'Listing Page';
roomsLinkInsert.setAttribute("target","blank")
roomsLinkInsert.href = roomsLink;
roomsLinkInsert.className="linkListing"
roomsLinkDiv.appendChild(roomsLinkInsert);

var mysLinkDiv = document.createElement('div');
mysLinkDiv.className="linkListingDiv"
var mysLinkInsert = document.createElement('a');
var mysLinkNode = document.createTextNode('MYS Page');
mysLinkInsert.appendChild(mysLinkNode);
mysLinkInsert.title = 'Manage Your Space Page';
mysLinkInsert.setAttribute("target","blank")
mysLinkInsert.href = mysLink;
mysLinkInsert.className="linkListing"
mysLinkDiv.appendChild(mysLinkInsert);

var linksDiv = document.createElement('div');
linksDiv.id=alterationNumber + "linksListingDiv"
linksDiv.className= "linksListingDiv"
linksDiv.appendChild(roomsLinkDiv);
linksDiv.appendChild(mysLinkDiv);

document.getElementById(alterationNumber + "DivListingDetails").prepend(linksDiv);


/* Listing title */
var listingTitle = snapshotText.substring(snapshotText.indexOf('main_photo_is_dirty'),snapshotText.indexOf('place_recommendations_count'));
listingTitle = listingTitle.substring(listingTitle.indexOf('monthly_price_native'),listingTitle.indexOf('native_currency')-1);
listingTitle = listingTitle.substring(listingTitle.indexOf('name')+6);
document.getElementById(alterationNumber + "HeaderListingDetails").innerText = listingTitle;



/* Listing Icon Numbers */
var listingGuests = snapshotText.substring(snapshotText.indexOf('person_capacity')-1,snapshotText.indexOf('phone_country'));
listingGuests = listingGuests.substring(listingGuests.indexOf('person_capacity')+17,listingGuests.indexOf('phone')-2);
document.getElementById(alterationNumber + "ListingGuests").innerText = listingGuests;

var listingBedrooms = snapshotText.substring(snapshotText.indexOf('bed_type')-1,snapshotText.indexOf('bookmarks_count'));
listingBedrooms = listingBedrooms.substring(listingBedrooms.indexOf('bedrooms')+10,listingBedrooms.indexOf('beds')-2);
document.getElementById(alterationNumber + "ListingBedrooms").innerText = listingBedrooms;

var ListingBeds = snapshotText.substring(snapshotText.indexOf('bed_type'),snapshotText.indexOf('bookmarks_count')+20);
ListingBeds = ListingBeds.substring(ListingBeds.indexOf('beds')+6,ListingBeds.indexOf('bookmarks_count')-2);
document.getElementById(alterationNumber + "ListingBeds").innerText = ListingBeds;

var ListingBaths = snapshotText.substring(snapshotText.indexOf('bathroom_type'),snapshotText.indexOf('bed_type')+15);
ListingBaths = ListingBaths.substring(ListingBaths.indexOf('bathrooms')+11,ListingBaths.indexOf('bed_type')-2);
document.getElementById(alterationNumber + "ListingBaths").innerText = ListingBaths;




/* Listing Description */
var listingDescription = snapshotText.substring(snapshotText.indexOf('craigslist_provide_reminder'),snapshotText.indexOf('dist_to_train'));
listingDescription = listingDescription.substring(listingDescription.indexOf('deleted_at'),listingDescription.indexOf('directions'));
listingDescription = listingDescription.substring(listingDescription.indexOf('description') +13);
document.getElementById(alterationNumber + "DescriptionListingDetails").innerText = listingDescription;



/* Listing Amenities */
// Data twice in snapshot
if ((snapshotText.split('amenities_with_names').length-1) >1) {
    var amenitiesTotal = snapshotText.substring(snapshotText.indexOf('amenities_with_names')-10,snapshotText.indexOf('weekly_price_usd'));
    var amenitiesTotal = amenitiesTotal.substring(amenitiesTotal.indexOf('amenities_with_names'),amenitiesTotal.indexOf('price_usd'));


  amenitiesTotal = amenitiesTotal.replace("\n","XXX")
while (amenitiesTotal.includes(" -")) {
  var amenity = amenitiesTotal.substring(amenitiesTotal.indexOf(" -")+2,amenitiesTotal.indexOf("(")-1);
  amenitiesTotal = amenitiesTotal.replace(" -","XXX")
  amenitiesTotal = amenitiesTotal.replace("(","XXX")

    var x = document.createElement("div");
    var a = document.createElement("div");
    var anode = document.createTextNode(amenity);
    a.appendChild(anode);
    x.className="amenityName";
    x.appendChild(a);

    document.getElementById(alterationNumber + "AmenitiesData").appendChild(x);

}
}


//Data once in snapshot
else {
var amenitiesTotal = snapshotText.substring(snapshotText.indexOf('amenities_with_names')-10,snapshotText.indexOf('price_for_extra_person_usd'));
amenitiesTotal = amenitiesTotal.substring(amenitiesTotal.indexOf('amenities_with_names'),amenitiesTotal.indexOf('price_usd'));


  amenitiesTotal = amenitiesTotal.replace("\n","XXX")
while (amenitiesTotal.includes(" -")) {

    if (amenitiesTotal.includes('(')) {
    var amenity = amenitiesTotal.substring(amenitiesTotal.indexOf(" -")+2,amenitiesTotal.indexOf("(")-1);
    amenitiesTotal = amenitiesTotal.replace("(","XXX")
}
    else {
        var amenity = amenitiesTotal.substring(amenitiesTotal.indexOf(" -")+2,amenitiesTotal.indexOf("\n"));
    }
  amenitiesTotal = amenitiesTotal.replace(" -","XXX")
  amenitiesTotal = amenitiesTotal.replace("\n","XXX")

    var x = document.createElement("div");
    var a = document.createElement("div");
    var anode = document.createTextNode(amenity);
    a.appendChild(anode);
    x.className="amenityName";
    x.appendChild(a);

    document.getElementById(alterationNumber + "AmenitiesData").appendChild(x);
}
}


/* Listing House Rules */
var listingHouseRules = snapshotText.substring(snapshotText.indexOf('has_premium_override'),snapshotText.indexOf('hypothetical_rank')+17);
var listingHouseRules = listingHouseRules.substring(listingHouseRules.indexOf('house_rules')+12,listingHouseRules.indexOf('hypothetical_rank')-1);
document.getElementById(alterationNumber + "HouseRulesListingDetails").innerText = listingHouseRules;





/* !! Pricing Details !! */



  var table = document.getElementById(alterationNumber + "DailyPricingTable");
  var amount_micros_usd = "";
  var numberNight = 0;


/* Checking Type of snapshot, creating text data*/
// Type 2
if (insertedPricingText.includes("guest_fee_reservation_stamp")) {
    
    //Pricing_History can be Empty, checking if not. If so, take data from line_items
    var checkPricing_History = insertedPricingText.substring(insertedPricingText.indexOf('pricing_history')+25,insertedPricingText.indexOf("admin_points")-6)
    if(checkPricing_History.length >1){
        var Snapshot2PriceText = insertedPricingText.substring(insertedPricingText.indexOf('pricing_history'), insertedPricingText.indexOf('admin_points'));

    }
    else { // If Empty
        var Snapshot2PriceText = insertedPricingText.substring(insertedPricingText.indexOf('line_items'), insertedPricingText.indexOf('guest_fee_reservation_stamp'));
    }


        var listingCurrency = insertedPricingText.substring(insertedPricingText.indexOf('listing_currency')-3,insertedPricingText.indexOf('line_items'))
        listingCurrency = listingCurrency.substring(listingCurrency.indexOf('listing_currency')+18,listingCurrency.indexOf('dated')-2)
        var guestCurrency = snapshotText.substring(snapshotText.indexOf('guest_currency')+16,snapshotText.indexOf('guest_currency_rate')-2)

        var listingCurrencyRate = snapshotText.substring(snapshotText.indexOf('host_currency_rate')-10,snapshotText.indexOf('host_fee_revenue_cents')-2)
        listingCurrencyRate = parseFloat(listingCurrencyRate.substring(listingCurrencyRate.indexOf('host_currency_rate')+20,listingCurrencyRate.indexOf('host_fee')-2))
        var guestCurrencyRate = parseFloat(snapshotText.substring(snapshotText.indexOf('guest_currency_rate')+21,snapshotText.indexOf('guest_currency_spread')-2))
}
/* Snapshot Type 1 */
  else {
    var Snapshot1PriceText = insertedPricingText;

        var listingCurrency = Snapshot1PriceText.substring(Snapshot1PriceText.indexOf('"listing_currency":"')+20,Snapshot1PriceText.indexOf('"listing_currency":"')+23);
        var guestCurrency = insertedtoptext.substring(insertedtoptext.indexOf('guest_currency')-1);
        guestCurrency = guestCurrency.substring(guestCurrency.indexOf('guest_currency')+16, guestCurrency.indexOf('guest_currency_rate')-2);
}  /* End of If - Checking Snapshot Type */




/* Transforming currency into Symbol */
function changeCurrencyToSymbol(currency) {
if (currency === "ALL") {
return "Lek" 
}
else if (currency === "AFN") {
return "؋"
}
else if (currency === "ARS") {
return "$"
}
else if (currency === "AWG") {
return "ƒ"
}
else if (currency === "AUD") {
return "AUD$"
}
else if (currency === "AZN") {
return "₼"
}
else if (currency === "BSD") {
return "B$"
}
else if (currency === "BBD") {
return "Bds$"
}
else if (currency === "BYN") {
return "Br"
}
else if (currency === "BZD") {
return "BZ$"
}
else if (currency === "BMD") {
return "$"
}
else if (currency === "BOB") {
return "$b"
}
else if (currency === "BAM") {
return "KM"
}
else if (currency === "BWP") {
return "P"
}
else if (currency === "BGN") {
return "лв"
}
else if (currency === "BRL") {
return "R$"
}

else if (currency === "BND") {
return "B$"
}
else if (currency === "KHR") {
return "៛"
}
else if (currency === "CAD") {
return "Can$"
}
else if (currency === "KYD") {
return "$"
}
else if (currency === "CLP") {
return "$"
}
else if (currency === "CNY") {
return "¥"
}
else if (currency === "COP") {
return "$"
}
else if (currency === "CRC") {
return "₡"
}
else if (currency === "HRK") {
return "kn"
}
else if (currency === "CUP") {
return "₱"
}
else if (currency === "CZK") {
return "Kč"
}
else if (currency === "DKK") {
return "kr"
}
else if (currency === "DOP") {
return "RD$"
}
else if (currency === "XCD") {
return "$"
}
else if (currency === "EGP") {
return "ج.م"
}
else if (currency === "SVC") {
return "$"
}
else if (currency === "EUR") {
return "€"
}
else if (currency === "FKP") {
return "£"
}
else if (currency === "FJD") {
return "FJ$"
}
else if (currency === "GHS") {
return "¢"
}
else if (currency === "GIP") {
return "£"
}
else if (currency === "GTQ") {
return "Q"
}
else if (currency === "GGP") {
return "£"
}
else if (currency === "GYD") {
return "GY$"
}
else if (currency === "HNL") {
return "L"
}
else if (currency === "HKD") {
return "HK$"
}
else if (currency === "HUF") {
return "Ft"
}
else if (currency === "ISK") {
return "kr"
}
else if (currency === "INR") {
return "₹"
}
else if (currency === "IDR") {
return "Rp"
}
else if (currency === "IRR") {
return "﷼"
}
else if (currency === "IMP") {
return "£"
}
else if (currency === "ILS") {
return "₪"
}
else if (currency === "JMD") {
return "J$"
}
else if (currency === "JPY") {
return "¥"
}
else if (currency === "JEP") {
return "£"
}
else if (currency === "KZT") {
return "лв"
}
else if (currency === "KPW") {
return "₩"
}
else if (currency === "KRW") {
return "₩"
}
else if (currency === "KGS") {
return "лв"
}
else if (currency === "LAK") {
return "₭"
}
else if (currency === "LBP") {
return "£"
}
else if (currency === "LRD") {
return "L$"
}
else if (currency === "MKD") {
return "ден"
}
else if (currency === "MYR") {
return "RM"
}
else if (currency === "MUR") {
return "₨"
}
else if (currency === "MXN") {
return "$"
}
else if (currency === "MNT") {
return "₮"
}
else if (currency === "MZN") {
return "MT"
}
else if (currency === "NAD") {
return "N$"
}
else if (currency === "NPR") {
return "₨"
}
else if (currency === "ANG") {
return "ƒ"
}
else if (currency === "NZD") {
return "$"
}
else if (currency === "NIO") {
return "C$"
}
else if (currency === "NPR") {
return "₨"
}
else if (currency === "ANG") {
return "ƒ"
}
else if (currency === "NZD") {
return "$"
}
else if (currency === "NIO") {
return "C$"
}
else if (currency === "NGN") {
return "₦"
}
else if (currency === "NOK") {
return "kr"
}
else if (currency === "NOK") {
return "kr"
}
else if (currency === "OMR") {
return "﷼"
}
else if (currency === "PKR") {
return "₨"
}
else if (currency === "PAB") {
return "B/."
}
else if (currency === "PYG") {
return "Gs"
}
else if (currency === "PEN") {
return "S/."
}
else if (currency === "PHP") {
return "₱"
}
else if (currency === "PLN") {
return "zł"
}
else if (currency === "QAR") {
return "﷼"
}
else if (currency === "RON") {
return "lei"
}
else if (currency === "RUB") {
return "руб"
}
else if (currency === "SHP") {
return "£"
}
else if (currency === "SAR") {
return "﷼"
}
else if (currency === "RSD") {
return "Дин."
}
else if (currency === "SCR") {
return "₨"
}
else if (currency === "SGD") {
return "$"
}
else if (currency === "SBD") {
return "Si$"
}
else if (currency === "SOS") {
return "S"
}
else if (currency === "ZAR") {
return "R"
}
else if (currency === "LKR") {
return "₨"
}
else if (currency === "SEK") {
return "kr"
}
else if (currency === "CHF") {
return "CHF"
}
else if (currency === "SRD") {
return "$"
}
else if (currency === "SYP") {
return "LS"
}
else if (currency === "TWD") {
return "NT$"
}
else if (currency === "THB") {
return "฿"
}
else if (currency === "TTD") {
return "TT$"
}
else if (currency === "TRY") {
return "TRY"
}
else if (currency === "TVD") {
return "$"
}
else if (currency === "UAH") {
return "₴"
}
else if (currency === "GBP") {
return "£"
}
else if (currency === "USD") {
return "$"
}
else if (currency === "UYU") {
return "$U"
}
else if (currency === "UZS") {
return "лв"
}
else if (currency === "VEF") {
return "Bs"
}
else if (currency === "VND") {
return "₫"
}
else if (currency === "YER") {
return "﷼"
}
else if (currency === "ZWD") {
return "Z$"
}
else {
    return currency
}
}

var listingCurrencySymbol = changeCurrencyToSymbol(listingCurrency);
var guestCurrencySymbol = changeCurrencyToSymbol(guestCurrency);



// Creating Header Host / USD / Guest

    var listingDiv = document.createElement("div");
    var usdDiv = document.createElement("div");
    var guestDiv = document.createElement("div");
    var listingContent = document.createElement("div")
    var usdContent = document.createElement("div")
    var guestContent = document.createElement("div")


    var listingNode = document.createTextNode("Host: " + listingCurrency)
    var usdNode = document.createTextNode("System: USD")
    var guestNode = document.createTextNode("Guest: " + guestCurrency)

    listingDiv.appendChild(listingNode);
    usdDiv.appendChild(usdNode);
    guestDiv.appendChild(guestNode);

    listingDiv.id = alterationNumber + "listingPriceDiv";
    usdDiv.id = alterationNumber + "usdPriceDiv";
    guestDiv.id = alterationNumber +"guestPriceDiv";
    listingDiv.className = "listingPriceDiv";
    usdDiv.className = "usdPriceDiv";
    guestDiv.className = "guestPriceDiv";
    listingContent.id = alterationNumber + "listingContentDiv"
    usdContent.id = alterationNumber + "usdContentDiv"
    guestContent.id = alterationNumber + "guestContentDiv"
    listingContent.className =  "listingContentDiv"
    usdContent.className =  "usdContentDiv"
    guestContent.className =   "guestContentDiv"
    listingDiv.setAttribute("onclick","ClickPricingBarHeader(this);");
    usdDiv.setAttribute("onclick","ClickPricingBarHeader(this);");
    guestDiv.setAttribute("onclick","ClickPricingBarHeader(this);");


    var listingContainer = document.createElement('div');
    listingContainer.className = "listingContainer"
    listingContainer.id = alterationNumber + "listingContainer"

    var usdContainer = document.createElement('div');
    usdContainer.className = "usdContainer"
    usdContainer.id = alterationNumber + "usdContainer"
    
    var guestContainer = document.createElement('div');
    guestContainer.className = "guestContainer"
    guestContainer.id = alterationNumber + "guestContainer"

    document.getElementById(alterationNumber + "OverviewNights").appendChild(listingDiv);
    document.getElementById(alterationNumber + "OverviewNights").appendChild(usdDiv);
    document.getElementById(alterationNumber + "OverviewNights").appendChild(guestDiv);


    document.getElementById(alterationNumber + "OverviewNights").appendChild(listingContainer)
    document.getElementById(alterationNumber + "OverviewNights").appendChild(usdContainer)
    document.getElementById(alterationNumber + "OverviewNights").appendChild(guestContainer)


    document.getElementById(alterationNumber + "listingContainer").appendChild(listingContent);
    document.getElementById(alterationNumber + "usdContainer").appendChild(usdContent);
    document.getElementById(alterationNumber + "guestContainer").appendChild(guestContent);




    var expandImgListing = document.createElement("img")
    expandImgListing.setAttribute('src', 'images/expand-arrows.png');
    expandImgListing.setAttribute("onclick","expandItemsListing(this);")
    expandImgListing.id=alterationNumber + "expandImgListing";
    expandImgListing.className = "expandImg";
    document.getElementById(alterationNumber + "listingContentDiv").insertBefore(expandImgListing, document.getElementById(alterationNumber + "listingContentDiv").childNodes[0]);
    document.getElementById(alterationNumber + 'expandImgListing').ondragstart = function() { return false; };


    var expandImgUsd = document.createElement("img")
    expandImgUsd.setAttribute('src', 'images/expand-arrows.png');
    expandImgUsd.setAttribute("onclick","expandItemsUsd(this);")
    expandImgUsd.id=alterationNumber + "expandImgUsd";
    expandImgUsd.className = "expandImg";
    document.getElementById(alterationNumber + "usdContentDiv").insertBefore(expandImgUsd, document.getElementById(alterationNumber + "usdContentDiv").childNodes[0]);
    document.getElementById(alterationNumber + 'expandImgUsd').ondragstart = function() { return false; };



    var expandImgGuest = document.createElement("img")
    expandImgGuest.setAttribute('src', 'images/expand-arrows.png');
    expandImgGuest.setAttribute("onclick","expandItemsGuest(this);")
    expandImgGuest.id=alterationNumber + "expandImgGuest";
    expandImgGuest.className = "expandImg";
    document.getElementById(alterationNumber + "guestContentDiv").insertBefore(expandImgGuest, document.getElementById(alterationNumber + "guestContentDiv").childNodes[0]);
    document.getElementById(alterationNumber + 'expandImgGuest').ondragstart = function() { return false; };



    /*Nights Special Offer Base Price */

if(insertedPricingText.includes('SPECIAL_OFFER_BASE_PRICE')) {

var insertedDailyPricingText = insertedPricingText.substring(insertedPricingText.indexOf('SPECIAL_OFFER_BASE_PRICE') - 15);
var nightReplacedText = insertedDailyPricingText;
var dailyPriceReplacedText =  insertedPricingText;

    while (nightReplacedText.includes('SPECIAL_OFFER_BASE_PRICE')) {
      var start_date = nightReplacedText.substring(nightReplacedText.indexOf('start_date')+13, nightReplacedText.indexOf('start_date') +23);
      numberNight++;

    nightReplacedText = nightReplacedText.replace('start_date','X-X'); 
    nightReplacedText = nightReplacedText.replace('start_date','X-X'); 
    nightReplacedText = nightReplacedText.replace('SPECIAL_OFFER_BASE_PRICE','X-X'); 
    nightReplacedText = nightReplacedText.replace('SPECIAL_OFFER_BASE_PRICE','X-X'); 

    createNightBarsInsert (start_date,numberNight,alterationNumber);


    }


} //if special offer


    /*Nights */
else {


// Snapshot #2
if (insertedPricingText.includes("guest_fee_reservation_stamp")) {
    var replacedSnapshot2PriceText = Snapshot2PriceText;
    var dailyPriceSnapshot2ReplacedText = Snapshot2PriceText;  

// Weekly Price Snapshot
if (insertedPricingText.includes ('WEEKLY_PRICE') || insertedPricingText.includes ('MONTHLY_PRICE')) {

alert('Oops, this booking is not working yet. Please send this on to me to investigate by clicking on the email button')

        replacedSnapshot2PriceText.replace(/}}/g,"")
  while (replacedSnapshot2PriceText.includes('}, {')) {
        
    replacedSnapshot2PriceText = replacedSnapshot2PriceText.replace('start_date','X-X');
    replacedSnapshot2PriceText = replacedSnapshot2PriceText.replace('start_date','X-X'); 

        start_date = replacedSnapshot2PriceText.substring(replacedSnapshot2PriceText.indexOf('start_date')+14,replacedSnapshot2PriceText.indexOf('start_date')+24)

    replacedSnapshot2PriceText = replacedSnapshot2PriceText.replace('start_date','X-X');
    replacedSnapshot2PriceText = replacedSnapshot2PriceText.replace('}, {','X-X');

    numberNight++;

    createNightBarsInsert (start_date,numberNight,alterationNumber);

}
} // Weekly Price Snapshot




else {

// Normal Type Snapshot
    while (replacedSnapshot2PriceText.includes('"settings"=>[{"type"=>')) {
        
    replacedSnapshot2PriceText = replacedSnapshot2PriceText.replace('start_date','X-X');
    replacedSnapshot2PriceText = replacedSnapshot2PriceText.replace('start_date','X-X'); 

        start_date = replacedSnapshot2PriceText.substring(replacedSnapshot2PriceText.indexOf('start_date')+14,replacedSnapshot2PriceText.indexOf('start_date')+24)

    replacedSnapshot2PriceText = replacedSnapshot2PriceText.replace('start_date','X-X');
    replacedSnapshot2PriceText = replacedSnapshot2PriceText.replace('"settings"=>[{"type"=>','X-X');

    numberNight++;

    createNightBarsInsert (start_date,numberNight,alterationNumber);
} // Normal Type Snapshot



    }
}  //end snapshot #2 nights
 

 else {  //Start snapshot #1 nights

    var insertedDailyPricingText = insertedPricingText.substring(insertedPricingText.indexOf('[{"type":') - 3);
    var nightReplacedText = insertedDailyPricingText;
    var dailyPriceReplacedText = insertedDailyPricingText;   


    while (nightReplacedText.includes('start_date')) {
    start_date = nightReplacedText.substring(nightReplacedText.indexOf('start_date') +13 , nightReplacedText.indexOf('start_date') +23);
    numberNight++;

    nightReplacedText = nightReplacedText.replace('start_date','X-X');
    nightReplacedText = nightReplacedText.replace('start_date','X-X'); 
    nightReplacedText = nightReplacedText.replace('start_date','X-X');   


    createNightBarsInsert (start_date,numberNight,alterationNumber);


} // while contains Start_date to create nights





//Cleaning Fee Snapshot #1
    if (insertedPricingText.includes('"CLEANING_FEE"')) {
    var cleaningFeeLine = insertedPricingText.substring(insertedPricingText.indexOf('"CLEANING_FEE"')-10);
    cleaningFeeLine = cleaningFeeLine.substring(cleaningFeeLine.indexOf('"CLEANING_FEE"')-10,cleaningFeeLine.indexOf('},{'));

    var cleaningFeeType = cleaningFeeLine.substring(cleaningFeeLine.indexOf('"CLEANING_FEE"')+1,cleaningFeeLine.indexOf('"amount_micro_guest"')-2);
    cleaningFeeType = cleaningFeeType.toLowerCase();
    cleaningFeeType = cleaningFeeType.replace(/_/g," ");
    cleaningFeeType = cleaningFeeType.charAt(0).toUpperCase() + cleaningFeeType.slice(1);

    var cleaningFeePriceListing = cleaningFeeLine.substring(cleaningFeeLine.indexOf('"amount_micro_listing"')+23,cleaningFeeLine.indexOf('"amount_micro_usd"')-1);
    var cleaningFeePriceUsd = cleaningFeeLine.substring(cleaningFeeLine.indexOf('"amount_micro_usd"')+19,cleaningFeeLine.indexOf('"start_date"')-1);
    var cleaningFeePriceGuest = cleaningFeeLine.substring(cleaningFeeLine.indexOf('"amount_micro_guest"')+21,cleaningFeeLine.indexOf('"amount_micro_listing"')-1);

    cleaningFeePriceListing = (parseFloat(cleaningFeePriceListing)/1000000).toFixed(2);
    cleaningFeePriceUsd = (parseFloat(cleaningFeePriceUsd)/1000000).toFixed(2);
    cleaningFeePriceGuest = (parseFloat(cleaningFeePriceGuest)/1000000).toFixed(2);


    createCleaningFeeInsert (cleaningFeeType,listingCurrencySymbol,cleaningFeePriceListing,cleaningFeePriceUsd,guestCurrencySymbol,cleaningFeePriceGuest,alterationNumber);


    }



// Service Fees & Taxes

    // Airbnb Fee Guest & Listing
        var airbnbFeeListingAmount = insertedPricingText.substring(insertedPricingText.indexOf('AIRBNB_HOST_FEE')-10);
        airbnbFeeListingAmount = airbnbFeeListingAmount.substring(airbnbFeeListingAmount.indexOf('"amount_micro_listing"')-10);
        airbnbFeeListingAmount = airbnbFeeListingAmount.substring(airbnbFeeListingAmount.indexOf('"amount_micro_listing"')+23,airbnbFeeListingAmount.indexOf('amount_micro_usd')-2);
        airbnbFeeListingAmount = (parseInt(airbnbFeeListingAmount)/1000000).toFixed(2);
        airbnbFeeListingAmountDisplay = listingCurrencySymbol + " " + airbnbFeeListingAmount;

        var airbnbFeeGuestAmount = insertedPricingText.substring(insertedPricingText.indexOf('AIRBNB_GUEST_FEE')-10);
        airbnbFeeGuestAmount = airbnbFeeGuestAmount.substring(airbnbFeeGuestAmount.indexOf('"amount_micro_guest"')-10);
        airbnbFeeGuestAmount = airbnbFeeGuestAmount.substring(airbnbFeeGuestAmount.indexOf('"amount_micro_guest"')+21,airbnbFeeGuestAmount.indexOf('amount_micro_listing')-2);
        airbnbFeeGuestAmount = (parseInt(airbnbFeeGuestAmount)/1000000).toFixed(2);
        airbnbFeeGuestAmountDisplay = guestCurrencySymbol + " " + airbnbFeeGuestAmount;



        createAirbnbFeeInsert (airbnbFeeListingAmountDisplay,airbnbFeeGuestAmountDisplay,alterationNumber)



        //VAT Listing 
        if (insertedPricingText.includes('VALUE_ADDED_TAX_HOST')) {
            var taxAmountListing = insertedPricingText.substring(insertedPricingText.indexOf('VALUE_ADDED_TAX_HOST'))
            taxAmountListing = taxAmountListing.substring(taxAmountListing.indexOf('host_amount_micros')+20, taxAmountListing.indexOf('"id"')-1);
            taxAmountListing = (parseFloat(taxAmountListing)/1000000).toFixed(2)
            taxAmountListingDisplay = listingCurrencySymbol + " " + taxAmountListing
            taxPercentageListing = document.getElementById(alterationNumber + 'airbnbFeeListing').innerText;
            taxPercentageListing = parseFloat(taxPercentageListing.substring(taxPercentageListing.indexOf(" ")+1));
            taxPercentageListing = (Math.round((taxAmountListing / taxPercentageListing *100 )*100)/100) + "%";

            var taxListingDiv = document.createElement('div');
            var taxTypeListingInsert = document.createElement('div');
            var taxAmountListingInsert = document.createElement('div');

            var taxTypeListingNode = document.createTextNode("VAT (" + taxPercentageListing + ")");
            var taxAmountListingNode = document.createTextNode(taxAmountListingDisplay);
            taxListingDiv.className="feeDiv"
            taxTypeListingInsert.className= "taxListingType";
            taxAmountListingInsert.className= "taxListingAmount";
            taxAmountListingInsert.id =alterationNumber + "taxListingAmount";

            taxTypeListingInsert.appendChild(taxTypeListingNode);
            taxAmountListingInsert.appendChild(taxAmountListingNode);

            taxListingDiv.appendChild(taxTypeListingInsert);
            taxListingDiv.appendChild(taxAmountListingInsert);
            document.getElementById(alterationNumber + 'contentFeesListing').appendChild(taxListingDiv);
}


            //Creating total for Header with Tax Listing

        if (insertedPricingText.includes('VALUE_ADDED_TAX_HOST')) {
            var totalFeesListing = listingCurrencySymbol + " " + (parseFloat(taxAmountListing) + parseFloat(airbnbFeeListingAmount)).toFixed(2);
        }
        else {
            var totalFeesListing = listingCurrencySymbol + " "  + (parseFloat(airbnbFeeListingAmount).toFixed(2));
        }

            var totalHeaderFeesTypeListingInsert = document.createElement('div')
            var totalHeaderFeesListingAmountInsert = document.createElement('div')

            var totalHeaderFeesTypeListingNode = document.createTextNode("Fees & VAT");
            var totalHeaderFeesAmountListingNode = document.createTextNode(totalFeesListing);

        totalHeaderFeesTypeListingInsert.className= "headerFeesType";
        totalHeaderFeesListingAmountInsert.className= "headerFeesAmount";
        totalHeaderFeesListingAmountInsert.id= alterationNumber + "headerFeesAmountListing";

            totalHeaderFeesTypeListingInsert.appendChild(totalHeaderFeesTypeListingNode);
            totalHeaderFeesListingAmountInsert.appendChild(totalHeaderFeesAmountListingNode);

            document.getElementById(alterationNumber + 'FeesHeaderBarListing').appendChild(totalHeaderFeesTypeListingInsert)
            document.getElementById(alterationNumber + 'FeesHeaderBarListing').appendChild(totalHeaderFeesListingAmountInsert)
        


     //VAT Guest 
        if (insertedPricingText.includes('VALUE_ADDED_TAX_GUEST')) {
            var taxAmountGuest = insertedPricingText.substring(insertedPricingText.indexOf('VALUE_ADDED_TAX_GUEST'))
            taxAmountGuest = taxAmountGuest.substring(taxAmountGuest.indexOf('guest_amount_micros')+21,taxAmountGuest.indexOf('host_amount_currency')-2);
            taxAmountGuest = (parseFloat(taxAmountGuest)/1000000).toFixed(2)
            taxAmountGuestDisplay = guestCurrencySymbol + " " + taxAmountGuest
            taxPercentageGuest = document.getElementById(alterationNumber + 'airbnbFeeGuest').innerText;
            taxPercentageGuest = parseFloat(taxPercentageGuest.substring(taxPercentageGuest.indexOf(" ")+1));
            taxPercentageGuest = (Math.round((taxAmountGuest / taxPercentageGuest *100 )*100)/100) + "%";


            var taxGuestDiv = document.createElement('div');
            var taxTypeGuestInsert = document.createElement('div');
            var taxAmountGuestInsert = document.createElement('div');

            var taxTypeGuestNode = document.createTextNode("VAT (" + taxPercentageGuest + ")");
            var taxAmountGuestNode = document.createTextNode(taxAmountGuestDisplay);
            taxGuestDiv.className="feeDiv"
            taxTypeGuestInsert.className= "taxGuestType";
            taxAmountGuestInsert.className= "taxGuestAmount";
            taxAmountGuestInsert.id =alterationNumber + "taxGuestAmount";

            taxTypeGuestInsert.appendChild(taxTypeGuestNode);
            taxAmountGuestInsert.appendChild(taxAmountGuestNode);

            taxGuestDiv.appendChild(taxTypeGuestInsert);
            taxGuestDiv.appendChild(taxAmountGuestInsert);
            document.getElementById(alterationNumber + 'contentFeesGuest').appendChild(taxGuestDiv);
  }


            //Creating total for Header with Tax Guest
            if (insertedPricingText.includes('VALUE_ADDED_TAX_GUEST')) {
            var totalFeesGuest = guestCurrencySymbol + " " + (parseFloat(taxAmountGuest) + parseFloat(airbnbFeeGuestAmount)).toFixed(2);
        }
        else {
            var totalFeesGuest = guestCurrencySymbol + " "  + (parseFloat(airbnbFeeGuestAmount).toFixed(2));
        }
        
            var totalHeaderFeesTypeGuestInsert = document.createElement('div')
            var totalHeaderFeesAmountGuestInsert = document.createElement('div')

            var totalHeaderFeesTypeGuestNode = document.createTextNode("Fees & VAT");
            var totalHeaderFeesAmountGuestNode = document.createTextNode(totalFeesGuest);

        totalHeaderFeesTypeGuestInsert.className= "headerFeesType";
        totalHeaderFeesAmountGuestInsert.className= "headerFeesAmount";
        totalHeaderFeesAmountGuestInsert.id= alterationNumber + "headerFeesAmountGuest";

            totalHeaderFeesTypeGuestInsert.appendChild(totalHeaderFeesTypeGuestNode);
            totalHeaderFeesAmountGuestInsert.appendChild(totalHeaderFeesAmountGuestNode);

            document.getElementById(alterationNumber + 'FeesHeaderBarGuest').appendChild(totalHeaderFeesTypeGuestInsert)
            document.getElementById(alterationNumber + 'FeesHeaderBarGuest').appendChild(totalHeaderFeesAmountGuestInsert)
      






} //End snapshot #1 nights


} // If not special offer




    /*!! Daily Price !!*/
//special offer
if(insertedPricingText.includes('SPECIAL_OFFER_BASE_PRICE')) {
    var insertedSpecialOfferPricingText = insertedPricingText.substring(insertedPricingText.indexOf('{"type":"SPECIAL_OFFER_BASE_PRICE"') - 3);
    var specialOfferPriceReplacedText = insertedSpecialOfferPricingText;   
    counter = 1;

while (specialOfferPriceReplacedText.includes('SPECIAL_OFFER_BASE_PRICE')) {
    var type = specialOfferPriceReplacedText.substring(specialOfferPriceReplacedText.indexOf('"type":"')+8,specialOfferPriceReplacedText.indexOf(',"amount_micro_guest":')-1)
    type = type.toLowerCase();
    type = type.replace(/_/g," ");
    type = type.charAt(0).toUpperCase() + type.slice(1);
  
    if (type === "Default daily") {
        type = "Base Price";
    }
        else if (type === "Weekend daily") {
            type= "Weekend Pricing";
        }
    

    dailyPriceListing = specialOfferPriceReplacedText.substring(specialOfferPriceReplacedText.indexOf('amount_micro_listing') +22,specialOfferPriceReplacedText.indexOf('amount_micro_usd')-2);
    dailyPriceUSD = specialOfferPriceReplacedText.substring(specialOfferPriceReplacedText.indexOf('amount_micro_usd')+18, specialOfferPriceReplacedText.indexOf('start_date')-2);
    dailyPriceGuest = specialOfferPriceReplacedText.substring(specialOfferPriceReplacedText.indexOf('amount_micro_guest')+20,specialOfferPriceReplacedText.indexOf('amount_micro_listing')-2);

    dailyPriceListing = listingCurrencySymbol + " " + (parseFloat(dailyPriceListing)/1000000).toFixed(2)
    dailyPriceUSD =  "$" + " " + (parseFloat(dailyPriceUSD)/1000000).toFixed(2)
    dailyPriceGuest =  guestCurrencySymbol + " " + (parseFloat(dailyPriceGuest)/1000000).toFixed(2)



    specialOfferPriceReplacedText = specialOfferPriceReplacedText.replace('"type":"','X-X');
    specialOfferPriceReplacedText = specialOfferPriceReplacedText.replace(',"amount_micro_listing":','X-X');
    specialOfferPriceReplacedText = specialOfferPriceReplacedText.replace(',"amount_micro_listing":','X-X');
    specialOfferPriceReplacedText = specialOfferPriceReplacedText.replace(',"amount_micro_usd":','X-X');
    specialOfferPriceReplacedText = specialOfferPriceReplacedText.replace(',"amount_micro_usd":','X-X');
    specialOfferPriceReplacedText = specialOfferPriceReplacedText.replace(',"amount_micro_guest":','X-X');
    specialOfferPriceReplacedText = specialOfferPriceReplacedText.replace(',"amount_micro_guest":','X-X');
    specialOfferPriceReplacedText = specialOfferPriceReplacedText.replace(',"start_date":','X-X');
    specialOfferPriceReplacedText = specialOfferPriceReplacedText.replace(',"start_date":','X-X');
    specialOfferPriceReplacedText = specialOfferPriceReplacedText.replace('SPECIAL_OFFER_BASE_PRICE','X-X');
    specialOfferPriceReplacedText = specialOfferPriceReplacedText.replace('SPECIAL_OFFER_BASE_PRICE','X-X');


      createNightlyPriceInsert (counter,type,dailyPriceListing,dailyPriceUSD,dailyPriceGuest,alterationNumber)

        counter++


} // While if special offer base price



// Service Fees & Taxes SPECIAL OFFER

    // Airbnb Fee Guest & Listing
        var airbnbFeeListingAmount = insertedPricingText.substring(insertedPricingText.indexOf('AIRBNB_HOST_FEE')-10);
        airbnbFeeListingAmount = airbnbFeeListingAmount.substring(airbnbFeeListingAmount.indexOf('"amount_micro_listing"')-10);
        airbnbFeeListingAmount = airbnbFeeListingAmount.substring(airbnbFeeListingAmount.indexOf('"amount_micro_listing"')+23,airbnbFeeListingAmount.indexOf('amount_micro_usd')-2);
        airbnbFeeListingAmount = (parseInt(airbnbFeeListingAmount)/1000000).toFixed(2);
        airbnbFeeListingAmountDisplay = listingCurrencySymbol + " " + airbnbFeeListingAmount;

        var airbnbFeeGuestAmount = insertedPricingText.substring(insertedPricingText.indexOf('AIRBNB_GUEST_FEE')-10);
        airbnbFeeGuestAmount = airbnbFeeGuestAmount.substring(airbnbFeeGuestAmount.indexOf('"amount_micro_guest"')-10);
        airbnbFeeGuestAmount = airbnbFeeGuestAmount.substring(airbnbFeeGuestAmount.indexOf('"amount_micro_guest"')+21,airbnbFeeGuestAmount.indexOf('amount_micro_listing')-2);
        airbnbFeeGuestAmount = (parseInt(airbnbFeeGuestAmount)/1000000).toFixed(2);
        airbnbFeeGuestAmountDisplay = guestCurrencySymbol + " " + airbnbFeeGuestAmount;


          createAirbnbFeeInsert (airbnbFeeListingAmountDisplay,airbnbFeeGuestAmountDisplay,alterationNumber)


        //VAT Listing 
        if (insertedPricingText.includes('VALUE_ADDED_TAX_HOST')) {
            var taxAmountListing = insertedPricingText.substring(insertedPricingText.indexOf('VALUE_ADDED_TAX_HOST'))
            taxAmountListing = taxAmountListing.substring(taxAmountListing.indexOf('host_amount_micros')+20, taxAmountListing.indexOf('"id"')-1);
            taxAmountListing = (parseFloat(taxAmountListing)/1000000).toFixed(2)
            taxAmountListingDisplay = listingCurrencySymbol + " " + taxAmountListing
            taxPercentageListing = document.getElementById(alterationNumber + 'airbnbFeeListing').innerText;
            taxPercentageListing = parseFloat(taxPercentageListing.substring(taxPercentageListing.indexOf(" ")+1));
            taxPercentageListing = (Math.round((taxAmountListing / taxPercentageListing *100 )*100)/100) + "%";

            var taxListingDiv = document.createElement('div');
            var taxTypeListingInsert = document.createElement('div');
            var taxAmountListingInsert = document.createElement('div');

            var taxTypeListingNode = document.createTextNode("VAT (" + taxPercentageListing + ")");
            var taxAmountListingNode = document.createTextNode(taxAmountListingDisplay);
            taxListingDiv.className="feeDiv"
            taxTypeListingInsert.className= "taxListingType";
            taxAmountListingInsert.className= "taxListingAmount";
            taxAmountListingInsert.id =alterationNumber + "taxListingAmount";

            taxTypeListingInsert.appendChild(taxTypeListingNode);
            taxAmountListingInsert.appendChild(taxAmountListingNode);

            taxListingDiv.appendChild(taxTypeListingInsert);
            taxListingDiv.appendChild(taxAmountListingInsert);
            document.getElementById(alterationNumber + 'contentFeesListing').appendChild(taxListingDiv);
}


            //Creating total for Header with Tax Listing

        if (insertedPricingText.includes('VALUE_ADDED_TAX_HOST')) {
            var totalFeesListing = listingCurrencySymbol + " " + (parseFloat(taxAmountListing) + parseFloat(airbnbFeeListingAmount)).toFixed(2);
        }
        else {
            var totalFeesListing = listingCurrencySymbol + " "  + (parseFloat(airbnbFeeListingAmount).toFixed(2));
        }

            var totalHeaderFeesTypeListingInsert = document.createElement('div')
            var totalHeaderFeesListingAmountInsert = document.createElement('div')

            var totalHeaderFeesTypeListingNode = document.createTextNode("Fees & VAT");
            var totalHeaderFeesAmountListingNode = document.createTextNode(totalFeesListing);

        totalHeaderFeesTypeListingInsert.className= "headerFeesType";
        totalHeaderFeesListingAmountInsert.className= "headerFeesAmount";
        totalHeaderFeesListingAmountInsert.id= alterationNumber + "headerFeesAmountListing";

            totalHeaderFeesTypeListingInsert.appendChild(totalHeaderFeesTypeListingNode);
            totalHeaderFeesListingAmountInsert.appendChild(totalHeaderFeesAmountListingNode);

            document.getElementById(alterationNumber + 'FeesHeaderBarListing').appendChild(totalHeaderFeesTypeListingInsert)
            document.getElementById(alterationNumber + 'FeesHeaderBarListing').appendChild(totalHeaderFeesListingAmountInsert)
        


     //VAT Guest 
        if (insertedPricingText.includes('VALUE_ADDED_TAX_GUEST')) {
            var taxAmountGuest = insertedPricingText.substring(insertedPricingText.indexOf('VALUE_ADDED_TAX_GUEST'))
            taxAmountGuest = taxAmountGuest.substring(taxAmountGuest.indexOf('guest_amount_micros')+21,taxAmountGuest.indexOf('host_amount_currency')-2);
            taxAmountGuest = (parseFloat(taxAmountGuest)/1000000).toFixed(2)
            taxAmountGuestDisplay = guestCurrencySymbol + " " + taxAmountGuest
            taxPercentageGuest = document.getElementById(alterationNumber + 'airbnbFeeGuest').innerText;
            taxPercentageGuest = parseFloat(taxPercentageGuest.substring(taxPercentageGuest.indexOf(" ")+1));
            taxPercentageGuest = (Math.round((taxAmountGuest / taxPercentageGuest *100 )*100)/100) + "%";


            var taxGuestDiv = document.createElement('div');
            var taxTypeGuestInsert = document.createElement('div');
            var taxAmountGuestInsert = document.createElement('div');

            var taxTypeGuestNode = document.createTextNode("VAT (" + taxPercentageGuest + ")");
            var taxAmountGuestNode = document.createTextNode(taxAmountGuestDisplay);
            taxGuestDiv.className="feeDiv"
            taxTypeGuestInsert.className= "taxGuestType";
            taxAmountGuestInsert.className= "taxGuestAmount";
            taxAmountGuestInsert.id =alterationNumber + "taxGuestAmount";

            taxTypeGuestInsert.appendChild(taxTypeGuestNode);
            taxAmountGuestInsert.appendChild(taxAmountGuestNode);

            taxGuestDiv.appendChild(taxTypeGuestInsert);
            taxGuestDiv.appendChild(taxAmountGuestInsert);
            document.getElementById(alterationNumber + 'contentFeesGuest').appendChild(taxGuestDiv);
  }


            //Creating total for Header with Tax Guest
            if (insertedPricingText.includes('VALUE_ADDED_TAX_GUEST')) {
            var totalFeesGuest = guestCurrencySymbol + " " + (parseFloat(taxAmountGuest) + parseFloat(airbnbFeeGuestAmount)).toFixed(2);
        }
        else {
            var totalFeesGuest = guestCurrencySymbol + " "  + (parseFloat(airbnbFeeGuestAmount).toFixed(2));
        }
        
            var totalHeaderFeesTypeGuestInsert = document.createElement('div')
            var totalHeaderFeesAmountGuestInsert = document.createElement('div')

            var totalHeaderFeesTypeGuestNode = document.createTextNode("Fees & VAT");
            var totalHeaderFeesAmountGuestNode = document.createTextNode(totalFeesGuest);

        totalHeaderFeesTypeGuestInsert.className= "headerFeesType";
        totalHeaderFeesAmountGuestInsert.className= "headerFeesAmount";
        totalHeaderFeesAmountGuestInsert.id= alterationNumber + "headerFeesAmountGuest";

            totalHeaderFeesTypeGuestInsert.appendChild(totalHeaderFeesTypeGuestNode);
            totalHeaderFeesAmountGuestInsert.appendChild(totalHeaderFeesAmountGuestNode);

            document.getElementById(alterationNumber + 'FeesHeaderBarGuest').appendChild(totalHeaderFeesTypeGuestInsert)
            document.getElementById(alterationNumber + 'FeesHeaderBarGuest').appendChild(totalHeaderFeesAmountGuestInsert)
      





} // If special offer base price



else { //not special offer base price

// Start Snapshot #2, daily price

if (insertedPricingText.includes("guest_fee_reservation_stamp")) { 


    while (dailyPriceSnapshot2ReplacedText.includes('"settings"=>[{"type"=>')) {

    dailyPriceSnapshot2ReplacedText = dailyPriceSnapshot2ReplacedText.replace('start_date','X-X');
    dailyPriceSnapshot2ReplacedText = dailyPriceSnapshot2ReplacedText.replace('start_date','X-X'); 

    start_date = dailyPriceSnapshot2ReplacedText.substring(dailyPriceSnapshot2ReplacedText.indexOf('start_date') +14 , dailyPriceSnapshot2ReplacedText.indexOf('start_date') +24);



if(checkPricing_History.length >1) {
    dailyPriceSnapshot2ReplacedText = dailyPriceSnapshot2ReplacedText.replace('start_date','X-X'); 
}

type = dailyPriceSnapshot2ReplacedText.substring(dailyPriceSnapshot2ReplacedText.indexOf('"settings"=>[{"type"=>') +23,dailyPriceSnapshot2ReplacedText.indexOf('start_date')-4);


    type = type.toLowerCase();
    type = type.replace(/_/g," ");
    type = type.charAt(0).toUpperCase() + type.slice(1);

            if (type === "Default daily") {
            type = "Base Price";
    }
            else if (type === "Weekend daily") {
            type= "Weekend Pricing";
        }
            else if (type === "Custom daily") {
            type= "Custom Price";
        }
            else if (type === "Smart pricing daily") {
            type= "Smart Pricing";
        }
    


    exact_amount_micros_usd = parseFloat(dailyPriceSnapshot2ReplacedText.substring(dailyPriceSnapshot2ReplacedText.indexOf('original_amount_usd') +22,dailyPriceSnapshot2ReplacedText.indexOf('applied_amount_usd')-3));
    amount_micros_usd = exact_amount_micros_usd.toFixed(2);
    original_amount_micro_listing = (exact_amount_micros_usd * listingCurrencyRate).toFixed(2);
    guest_amount_micros = (exact_amount_micros_usd * guestCurrencyRate).toFixed(2);


if(checkPricing_History.length <1) {
    dailyPriceSnapshot2ReplacedText = dailyPriceSnapshot2ReplacedText.replace('start_date','X-X');
}
    dailyPriceSnapshot2ReplacedText = dailyPriceSnapshot2ReplacedText.replace('"settings"=>[{"type"=>', "X-X");
    dailyPriceSnapshot2ReplacedText = dailyPriceSnapshot2ReplacedText.replace('original_amount_usd', "X-X");
    dailyPriceSnapshot2ReplacedText = dailyPriceSnapshot2ReplacedText.replace('applied_amount_usd', "X-X");

    var original_amount_listing = listingCurrencySymbol + " " + original_amount_micro_listing; 
    var amount_usd =  "$ " + amount_micros_usd;
    guest_amount_micros = guestCurrencySymbol +" "+ guest_amount_micros; 

    var counter = 1;


   while (numberNight >= counter) {
      
      if (document.getElementById(alterationNumber + "DateListing"+counter).textContent === start_date) {
   
        createNightlyPriceInsert (counter,type,original_amount_listing,amount_usd,guest_amount_micros,alterationNumber)

        break;
      }
      else {
        counter= counter +1;
      }
    } // while number of nights
  } // while includes




//Cleaning Fee Snapshot #2
    if (insertedPricingText.includes('"CLEANING_FEE"')) { 
    var cleaningFeeLine = insertedPricingText.substring(insertedPricingText.indexOf('"CLEANING_FEE"')-10);
    cleaningFeeLine = cleaningFeeLine.substring(cleaningFeeLine.indexOf('"CLEANING_FEE"')-10,cleaningFeeLine.indexOf('}}'));

    var cleaningFeeType = "Cleaning fee"


    var cleaningFeePriceUsdRaw = parseFloat(cleaningFeeLine.substring(cleaningFeeLine.indexOf('"amount_usd"=>')+14,cleaningFeeLine.indexOf('"price_type"')-2));


    var cleaningFeePriceListing = (cleaningFeePriceUsdRaw * listingCurrencyRate).toFixed(2) ;
    var cleaningFeePriceUsd = (cleaningFeePriceUsdRaw.toFixed(2));
    var cleaningFeePriceGuest = (cleaningFeePriceUsdRaw * guestCurrencyRate).toFixed(2) ; 


     createCleaningFeeInsert (cleaningFeeType,listingCurrencySymbol,cleaningFeePriceListing,cleaningFeePriceUsd,guestCurrencySymbol,cleaningFeePriceGuest,alterationNumber);


}



// Service Fees & Taxes SNAPSHOT #2

    // Airbnb Fee Guest & Listing
        var airbnbFeeListingAmount = snapshotText.substring(snapshotText.indexOf('host_fee_revenue_cents')-10);
        airbnbFeeListingAmount = airbnbFeeListingAmount.substring(airbnbFeeListingAmount.indexOf('"host_fee_revenue_cents"')+35,airbnbFeeListingAmount.indexOf('host_id')-2);
        airbnbFeeListingAmount = ((parseFloat(airbnbFeeListingAmount)*listingCurrencyRate)/100).toFixed(2);
        airbnbFeeListingAmountDisplay = "±" + listingCurrencySymbol + " " + airbnbFeeListingAmount;

        var airbnbFeeGuestAmount = snapshotText.substring(snapshotText.indexOf('guest_fee_revenue_cents')-10);
        airbnbFeeGuestAmount = airbnbFeeGuestAmount.substring(airbnbFeeGuestAmount.indexOf('"guest_fee_revenue_cents"')+34,airbnbFeeGuestAmount.indexOf('guest_id')-2);
        airbnbFeeGuestAmount = ((parseFloat(airbnbFeeGuestAmount)*guestCurrencyRate)/100).toFixed(2);
        airbnbFeeGuestAmountDisplay = "±" + guestCurrencySymbol + " " + airbnbFeeGuestAmount;


         createAirbnbFeeInsert (airbnbFeeListingAmountDisplay,airbnbFeeGuestAmountDisplay,alterationNumber)


        //VAT Listing 
        if (snapshotText.includes('host_vat_remittance_cents')) {
            var taxAmountListing = snapshotText.substring(snapshotText.indexOf('host_vat_remittance_cents')-5)
            taxAmountListing = taxAmountListing.substring(taxAmountListing.indexOf('host_vat_remittance_cents')+26, taxAmountListing.indexOf('hosting_id')-1);
            taxAmountListing = ((parseFloat(taxAmountListing)*listingCurrencyRate)/100).toFixed(2)
            taxAmountListingDisplay = "±" + listingCurrencySymbol + " " + taxAmountListing
            taxPercentageListing = snapshotText.substring(snapshotText.indexOf('host_vat_rate')-2)
            taxPercentageListing = taxPercentageListing.substring(taxPercentageListing.indexOf('host_vat_rate')+15,taxPercentageListing.indexOf('host_vat_remittance_cents')-2)
            taxPercentageListing = parseFloat(taxPercentageListing) * 100;
            taxPercentageListing = "±" + taxPercentageListing + "%";

            var taxListingDiv = document.createElement('div');
            var taxTypeListingInsert = document.createElement('div');
            var taxAmountListingInsert = document.createElement('div');

            var taxTypeListingNode = document.createTextNode("VAT (" + taxPercentageListing + ")");
            var taxAmountListingNode = document.createTextNode(taxAmountListingDisplay);
            taxListingDiv.className="feeDiv"
            taxTypeListingInsert.className= "taxListingType";
            taxAmountListingInsert.className= "taxListingAmount";
            taxAmountListingInsert.id =alterationNumber + "taxListingAmount";

            taxTypeListingInsert.appendChild(taxTypeListingNode);
            taxAmountListingInsert.appendChild(taxAmountListingNode);

            taxListingDiv.appendChild(taxTypeListingInsert);
            taxListingDiv.appendChild(taxAmountListingInsert);
            document.getElementById(alterationNumber + 'contentFeesListing').appendChild(taxListingDiv);
}


            //Creating total for Header with Tax Listing
        if (snapshotText.includes('host_vat_remittance_cents')) {
            var totalFeesListing = "±" + listingCurrencySymbol + " " + (parseFloat(taxAmountListing) + parseFloat(airbnbFeeListingAmount)).toFixed(2);
        }
        else {
            var totalFeesListing = "±" + listingCurrencySymbol + " "  + (parseFloat(airbnbFeeListingAmount).toFixed(2));
        }

            var totalHeaderFeesTypeListingInsert = document.createElement('div')
            var totalHeaderFeesListingAmountInsert = document.createElement('div')

            var totalHeaderFeesTypeListingNode = document.createTextNode("Fees & VAT");
            var totalHeaderFeesAmountListingNode = document.createTextNode(totalFeesListing);

        totalHeaderFeesTypeListingInsert.className= "headerFeesType";
        totalHeaderFeesListingAmountInsert.className= "headerFeesAmount";
        totalHeaderFeesListingAmountInsert.id= alterationNumber + "headerFeesAmountListing";

            totalHeaderFeesTypeListingInsert.appendChild(totalHeaderFeesTypeListingNode);
            totalHeaderFeesListingAmountInsert.appendChild(totalHeaderFeesAmountListingNode);

            document.getElementById(alterationNumber + 'FeesHeaderBarListing').appendChild(totalHeaderFeesTypeListingInsert)
            document.getElementById(alterationNumber + 'FeesHeaderBarListing').appendChild(totalHeaderFeesListingAmountInsert)
        



     //VAT Guest 
        if (snapshotText.includes('guest_vat_remittance_cents')) {
            var taxAmountGuest = snapshotText.substring(snapshotText.indexOf('guest_vat_remittance_cents')-5)
            taxAmountGuest = taxAmountGuest.substring(taxAmountGuest.indexOf('guest_vat_remittance_cents')+28, taxAmountGuest.indexOf('host_currency')-1);
            taxAmountGuest = ((parseFloat(taxAmountGuest)*listingCurrencyRate)/100).toFixed(2)
            taxAmountGuestDisplay = "±" + guestCurrencySymbol + " " + taxAmountGuest
            taxPercentageGuest = snapshotText.substring(snapshotText.indexOf('guest_vat_rate')-2)
            taxPercentageGuest = taxPercentageGuest.substring(taxPercentageGuest.indexOf('guest_vat_rate')+15,taxPercentageGuest.indexOf('guest_vat_remittance_cents')-2)
            taxPercentageGuest = parseFloat(taxPercentageGuest) * 100;
            taxPercentageGuest = "±" + taxPercentageGuest + "%";


            var taxGuestDiv = document.createElement('div');
            var taxTypeGuestInsert = document.createElement('div');
            var taxAmountGuestInsert = document.createElement('div');

            var taxTypeGuestNode = document.createTextNode("VAT (" + taxPercentageGuest + ")");
            var taxAmountGuestNode = document.createTextNode(taxAmountGuestDisplay);
            taxGuestDiv.className="feeDiv"
            taxTypeGuestInsert.className= "taxGuestType";
            taxAmountGuestInsert.className= "taxGuestAmount";
            taxAmountGuestInsert.id =alterationNumber + "taxGuestAmount";

            taxTypeGuestInsert.appendChild(taxTypeGuestNode);
            taxAmountGuestInsert.appendChild(taxAmountGuestNode);

            taxGuestDiv.appendChild(taxTypeGuestInsert);
            taxGuestDiv.appendChild(taxAmountGuestInsert);
            document.getElementById(alterationNumber + 'contentFeesGuest').appendChild(taxGuestDiv);
  }


            //Creating total for Header with Tax Guest
            if (snapshotText.includes('guest_vat_remittance_cents')) {
            var totalFeesGuest = "±" + guestCurrencySymbol + " " + (parseFloat(taxAmountGuest) + parseFloat(airbnbFeeGuestAmount)).toFixed(2);
        }
        else {
            var totalFeesGuest = "±" + guestCurrencySymbol + " "  + (parseFloat(airbnbFeeGuestAmount).toFixed(2));
        }
        
            var totalHeaderFeesTypeGuestInsert = document.createElement('div')
            var totalHeaderFeesAmountGuestInsert = document.createElement('div')

            var totalHeaderFeesTypeGuestNode = document.createTextNode("Fees & VAT");
            var totalHeaderFeesAmountGuestNode = document.createTextNode(totalFeesGuest);

        totalHeaderFeesTypeGuestInsert.className= "headerFeesType";
        totalHeaderFeesAmountGuestInsert.className= "headerFeesAmount";
        totalHeaderFeesAmountGuestInsert.id= alterationNumber + "headerFeesAmountGuest";

            totalHeaderFeesTypeGuestInsert.appendChild(totalHeaderFeesTypeGuestNode);
            totalHeaderFeesAmountGuestInsert.appendChild(totalHeaderFeesAmountGuestNode);

            document.getElementById(alterationNumber + 'FeesHeaderBarGuest').appendChild(totalHeaderFeesTypeGuestInsert)
            document.getElementById(alterationNumber + 'FeesHeaderBarGuest').appendChild(totalHeaderFeesAmountGuestInsert)
      


} // End If snapshot #2, daily price

else {
    while (dailyPriceReplacedText.includes('[{"type":')) {
    start_date = dailyPriceReplacedText.substring(dailyPriceReplacedText.indexOf('start_date') +13 , dailyPriceReplacedText.indexOf('start_date') +23);
    type = dailyPriceReplacedText.substring(dailyPriceReplacedText.indexOf('[{"type":') +10,dailyPriceReplacedText.indexOf('","start_date":"'));
    type = type.toLowerCase();
    type = type.replace(/_/g," ");
    type = type.charAt(0).toUpperCase() + type.slice(1);

            if (type === "Default daily") {
            type = "Base Price";
    }
            else if (type === "Weekend daily") {
            type= "Weekend Pricing";
        }
            else if (type === "Custom daily") {
            type= "Custom Price";
        }
            else if (type === "Smart pricing daily") {
            type= "Smart Pricing";
        }
    





    amount_micros_usd = dailyPriceReplacedText.substring(dailyPriceReplacedText.indexOf('original_amount_micro_usd') +27,dailyPriceReplacedText.indexOf('applied_amount_micro_usd')-2);
    original_amount_micro_listing = dailyPriceReplacedText.substring(dailyPriceReplacedText.indexOf('original_amount_micro_listing')+31, dailyPriceReplacedText.indexOf('applied_amount_micro_listing')-2);
    guest_amount_micros = dailyPriceReplacedText.substring(dailyPriceReplacedText.indexOf('","guest_amount_micros":')+24,dailyPriceReplacedText.indexOf('host_amount_currency')-2)

    dailyPriceReplacedText = dailyPriceReplacedText.replace('start_date','X-X');
    dailyPriceReplacedText = dailyPriceReplacedText.replace('start_date','X-X'); 
    dailyPriceReplacedText = dailyPriceReplacedText.replace('start_date','X-X');
    dailyPriceReplacedText = dailyPriceReplacedText.replace('","guest_amount_micros":','X-X'); 
    dailyPriceReplacedText = dailyPriceReplacedText.replace('host_amount_currency','X-X');
    dailyPriceReplacedText = dailyPriceReplacedText.replace('[{"type":', "X-X");
    dailyPriceReplacedText = dailyPriceReplacedText.replace('original_amount_micro_usd', "X-X");
    dailyPriceReplacedText = dailyPriceReplacedText.replace('applied_amount_micro_usd', "X-X");
    dailyPriceReplacedText = dailyPriceReplacedText.replace('original_amount_micro_listing','X-X');
    dailyPriceReplacedText = dailyPriceReplacedText.replace('applied_amount_micro_listing','X-X'); 

    var amount_usd =  "$ " + (parseFloat(amount_micros_usd) / 1000000).toFixed(2); 
    var original_amount_listing =  listingCurrencySymbol + " " + (parseFloat(original_amount_micro_listing) / 1000000).toFixed(2); 
    guest_amount_micros = guestCurrencySymbol +" "+ (parseFloat(guest_amount_micros) / 1000000).toFixed(2); 

    var counter = 1;


   while (numberNight >= counter) {
      
      if (document.getElementById(alterationNumber + "DateListing"+counter).textContent === start_date) {

        createNightlyPriceInsert (counter,type,original_amount_listing,amount_usd,guest_amount_micros,alterationNumber)




        break;
      }
      else {
        counter= counter +1;
      }
    }
  }

} // If snapshot #1, daily price

} // if not special offer base price




/* Daily Discounts */
if (insertedPricingText.includes(':"DAILY_DISCOUNT"')) {
    var replacedInsertedPricingText = insertedPricingText.substring(insertedPricingText.indexOf(':"DAILY_DISCOUNT"')-2, insertedPricingText.indexOf('[{"type"'));

    while (replacedInsertedPricingText.includes(':"DAILY_DISCOUNT"')) {
      var eachDiscountLine = replacedInsertedPricingText.substring(replacedInsertedPricingText.indexOf(':"DAILY_DISCOUNT"')+2,replacedInsertedPricingText.indexOf('"payment_pricing_item_meta":{"type"'));
      var discountNight = eachDiscountLine.substring(eachDiscountLine.indexOf('start_date')+13,eachDiscountLine.indexOf('nights')-3);
      var discountType = eachDiscountLine.replace('type":"')


      var discountAmountListing = eachDiscountLine.substring(eachDiscountLine.indexOf('amount_micro_listing')+22,eachDiscountLine.indexOf('amount_micro_usd')-2);
      discountAmountListing = parseFloat(discountAmountListing);
      discountAmountListing = listingCurrencySymbol +" "+ ((discountAmountListing/1000000).toFixed(2));  

    var discountAmountUSD = eachDiscountLine.substring(eachDiscountLine.indexOf('amount_micro_usd')+18,eachDiscountLine.indexOf('start_date')-2);
    discountAmountUSD = parseFloat(discountAmountUSD);
    discountAmountUSD = "$" +" "+ ((discountAmountUSD/1000000).toFixed(2));  

    var discountAmountGuest = eachDiscountLine.substring(eachDiscountLine.indexOf('amount_micro_guest')+20,eachDiscountLine.indexOf('amount_micro_listing')-2);
    discountAmountGuest = parseFloat(discountAmountGuest);
    discountAmountGuest = guestCurrencySymbol +" "+ ((discountAmountGuest/1000000).toFixed(2)); 


      discountType = discountType.replace('type":"')
      discountType = discountType.substring( discountType.indexOf('type":"')+7, discountType.indexOf('price_factor'))
      discountType = discountType.substring( 0 , discountType.indexOf('"'))
      discountType = discountType.toLowerCase();
      discountType = discountType.replace(/_/g," ");
      discountType = discountType.charAt(0).toUpperCase() + discountType.slice(1);
      var discountTypeLength = ""


      if (insertedPricingText.includes('"min_length"')) {
        var discountMinLength = parseInt(insertedPricingText.substring(insertedPricingText.indexOf('"min_length"')+13, insertedPricingText.indexOf('max_length')-2))

      }
      else {
        var discountMinLength = 0;
      }


      if (numberNight >=28 && discountType== "Length of stay discount") {
        discountTypeLength = "Monthly Discount";
      }
      else if (numberNight >=14 && discountType== "Length of stay discount") {
        discountTypeLength = "Weekly Discount";
      }
      else if (discountMinLength >0 && discountType== "Length of stay discount"){
        discountTypeLength = discountMinLength +"-night discount";
}
    else{
        discountTypeLength = discountType;
      }




      var discountPercentage = eachDiscountLine.substring(eachDiscountLine.indexOf('price_factor')+14,eachDiscountLine.indexOf('guest_amount_currency'));
      discountPercentage = discountPercentage.substring(discountPercentage.indexOf('.')+1,discountPercentage.indexOf(',"'));
      discountPercentage = parseInt(discountPercentage);

      if (discountPercentage === 0) {
        discountPercentage = 100;
      }
      else if (discountPercentage === 1||discountPercentage === 2||discountPercentage === 3||discountPercentage === 4||discountPercentage === 5||discountPercentage === 6||discountPercentage === 7||discountPercentage === 8||discountPercentage === 9) {
        discountPercentage = discountPercentage *10;
    }
      else {
        discountPercentage === discountPercentage;
      }

      discountPercentage = 100 - discountPercentage;

      replacedInsertedPricingText = replacedInsertedPricingText.replace (':"DAILY_DISCOUNT"',"X-X");
      replacedInsertedPricingText = replacedInsertedPricingText.replace ('"payment_pricing_item_meta":{"type"',"X-X");
      replacedInsertedPricingText = replacedInsertedPricingText.replace (/,"amount_micro_guest":/,"X-X");
      replacedInsertedPricingText = replacedInsertedPricingText.replace (/,"amount_micro_guest":/,"X-X");


      discountTypeID= discountType.replace(/ /g,"");
      counter = 1;

   while (numberNight >= counter) {
      
      if (document.getElementById(alterationNumber + "DateListing"+counter).textContent === discountNight) {
       
       // Listing
        var divDayInsert = document.createElement("div");
        divDayInsert.className="discountDiv";
        divDayInsert.id=alterationNumber + "discountDivListing"+counter+discountTypeID;
        document.getElementById(alterationNumber + "discountDiv"+counter).appendChild(divDayInsert);

        var discountTypeInsert = document.createElement("div");
        if (discountPercentage == "0") {
        var discountTypeNode = document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' +discountTypeLength);       
        }
        else{
        var discountTypeNode = document.createTextNode(discountPercentage + "% ⇒ " +discountTypeLength);
    }
        discountTypeInsert.appendChild(discountTypeNode);
        discountTypeInsert.className="discountType";
        discountTypeInsert.id= alterationNumber + "discountType"+counter;
        document.getElementById(alterationNumber + "discountDivListing"+counter+discountTypeID).appendChild(discountTypeInsert);

        var discountAmountListingInsert = document.createElement("div");
        var discountAmountListingNode = document.createTextNode(discountAmountListing);
        discountAmountListingInsert.appendChild(discountAmountListingNode);
        discountAmountListingInsert.className="discountAmountListing";
        discountAmountListingInsert.id= alterationNumber + "discountAmountListing"+counter+"-"+ ($("#ContentPricesDivListing"+counter).find(".discountAmountListing").length+1);
        document.getElementById(alterationNumber + "discountDivListing"+counter+discountTypeID).appendChild(discountAmountListingInsert);


       // USD
        var divDayInsert = document.createElement("div");
        divDayInsert.className="discountDiv";
        divDayInsert.id=alterationNumber + "discountDivUsd"+counter+discountTypeID;
        document.getElementById(alterationNumber + "ContentPricesDivUsd"+counter).appendChild(divDayInsert);

        var discountTypeInsert = document.createElement("div");
        if (discountPercentage == "0") {
        var discountTypeNode = document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' +discountTypeLength);       
        }
        else{
        var discountTypeNode = document.createTextNode(discountPercentage + "% ⇒ " +discountTypeLength);
    }
        discountTypeInsert.appendChild(discountTypeNode);
        discountTypeInsert.className="discountType";
        discountTypeInsert.id= alterationNumber + "discountType"+counter;
        document.getElementById(alterationNumber + "discountDivUsd"+counter+discountTypeID).appendChild(discountTypeInsert);

        var discountAmountUSDInsert = document.createElement("div");
        var discountAmountUSDNode = document.createTextNode(discountAmountUSD);
        discountAmountUSDInsert.appendChild(discountAmountUSDNode);
        discountAmountUSDInsert.className="discountAmountUSD";
        discountAmountUSDInsert.id= alterationNumber + "discountAmountUSD"+counter+"-"+ ($("#ContentPricesDivUsd"+counter).find(".discountAmountUSD").length+1);
        document.getElementById(alterationNumber + "discountDivUsd"+counter+discountTypeID).appendChild(discountAmountUSDInsert);


        // GUEST
        var divDayInsert = document.createElement("div");
        divDayInsert.className="discountDiv";
        divDayInsert.id=alterationNumber + "discountDivGuest"+counter+discountTypeID;
        document.getElementById(alterationNumber + "ContentPricesDivGuest"+counter).appendChild(divDayInsert);

        var discountTypeInsert = document.createElement("div");
        if (discountPercentage == "0") {
        var discountTypeNode = document.createTextNode( '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0' +discountTypeLength);       
        }
        else{
        var discountTypeNode = document.createTextNode(discountPercentage + "% ⇒ " +discountTypeLength);
    }
        discountTypeInsert.appendChild(discountTypeNode);
        discountTypeInsert.className="discountType";
        discountTypeInsert.id= alterationNumber + "discountType"+counter;
        document.getElementById(alterationNumber + "discountDivGuest"+counter+discountTypeID).appendChild(discountTypeInsert);

        var discountAmountGuestInsert = document.createElement("div");
        var discountAmountGuestNode = document.createTextNode(discountAmountGuest);
        discountAmountGuestInsert.appendChild(discountAmountGuestNode);
        discountAmountGuestInsert.className="discountAmountGuest";
        discountAmountGuestInsert.id= alterationNumber + "discountAmountGuest"+counter+"-"+ ($("#ContentPricesDivGuest"+counter).find(".discountAmountGuest").length+1);
        document.getElementById(alterationNumber + "discountDivGuest"+counter+discountTypeID).appendChild(discountAmountGuestInsert);



        counter = counter + numberNight;
 

      }
      else {
        counter= counter +1;
      }
    }


    }
    }


/* Extra guest fee */
if (insertedPricingText.includes('"type":"EXTRA_GUEST_FEE"')) {
    var replacedExtraGuestFeeText = insertedPricingText.substring(insertedPricingText.indexOf('"type":"EXTRA_GUEST_FEE"')-1,insertedPricingText.indexOf('price_sub_type":"EXTRA_GUEST_FEE_period')+20);
    var extra_guest_fee_type=replacedExtraGuestFeeText.substring(replacedExtraGuestFeeText.indexOf('"type":"EXTRA_GUEST_FEE"')+8,replacedExtraGuestFeeText.indexOf('amount_micro_guest')-3);
    extra_guest_fee_type = extra_guest_fee_type.toLowerCase();
    extra_guest_fee_type = extra_guest_fee_type.replace(/_/g," ");
    extra_guest_fee_type = extra_guest_fee_type.charAt(0).toUpperCase() + extra_guest_fee_type.slice(1);
    

    var extra_guest_fee_Guest = replacedExtraGuestFeeText.substring(replacedExtraGuestFeeText.indexOf('amount_micro_guest')+20,replacedExtraGuestFeeText.indexOf('amount_micro_listing')-2);
    extra_guest_fee_Guest =  guestCurrencySymbol + " " + (parseFloat((extra_guest_fee_Guest)/numberNight) / 1000000).toFixed(2) ; 
    
    var extra_guest_fee_Listing = replacedExtraGuestFeeText.substring(replacedExtraGuestFeeText.indexOf('amount_micro_listing')+22,replacedExtraGuestFeeText.indexOf('amount_micro_usd')-2);
    extra_guest_fee_Listing = listingCurrencySymbol + " " + (parseFloat((extra_guest_fee_Listing)/numberNight) / 1000000).toFixed(2); 
 
    var extra_guest_fee_USD = replacedExtraGuestFeeText.substring(replacedExtraGuestFeeText.indexOf('amount_micro_usd')+18,replacedExtraGuestFeeText.indexOf('start_date')-2);
    extra_guest_fee_USD =  "$ " + (parseFloat((extra_guest_fee_USD) / 1000000)/numberNight).toFixed(2); 



    var extraGuestsIncluded = replacedExtraGuestFeeText.substring(replacedExtraGuestFeeText.indexOf('number_of_guests_included')+27,replacedExtraGuestFeeText.indexOf('number_of_extra_guests')-2);
    var extraGuestsNumber = replacedExtraGuestFeeText.substring(replacedExtraGuestFeeText.indexOf('number_of_extra_guests')+24,replacedExtraGuestFeeText.indexOf('price_per_extra_guest_per_night_micro_guest')-2);
    var extraGuestsPriceGuest = parseFloat(replacedExtraGuestFeeText.substring(replacedExtraGuestFeeText.indexOf('guest_amount_micros')+21,replacedExtraGuestFeeText.indexOf('host_amount_currency')-2));
        if(extraGuestsPriceGuest >0) {
            extraGuestsPriceGuest = (parseFloat(extraGuestsPriceGuest)/1000000 / numberNight / extraGuestsNumber).toFixed(2);
        }
        else {
            extraGuestsPriceGuest = extraGuestsPriceGuest.toFixed(2);
        }
    var extraGuestsPriceListing = replacedExtraGuestFeeText.substring(replacedExtraGuestFeeText.indexOf('host_amount_micros')-2);
    extraGuestsPriceListing = parseFloat(extraGuestsPriceListing.substring(extraGuestsPriceListing.indexOf('host_amount_micros')+20 , extraGuestsPriceListing.indexOf('id')-2));
        if(extraGuestsPriceListing >0) {
            extraGuestsPriceListing = (parseFloat(extraGuestsPriceListing)/1000000 / numberNight / extraGuestsNumber).toFixed(2);
    }
    else {
        extraGuestsPriceListing = extraGuestsPriceListing.toFixed(2);
    }


    var counter =1;
    while(numberNight >= counter) {


 createExtraGuestInsert (counter,extra_guest_fee_type,extraGuestsIncluded,extraGuestsNumber,listingCurrencySymbol,extraGuestsPriceListing,extra_guest_fee_Listing,extra_guest_fee_USD,guestCurrencySymbol,extraGuestsPriceGuest,extra_guest_fee_Guest,alterationNumber);

        counter++;

    }
}



counter = 1

while (numberNight >= counter) {
    var numItemsListing = $("#ContentPricesDivListing"+counter).find(".discountAmountListing").length ;
    var numItemsUsd = $("#ContentPricesDivUsd"+counter).find(".discountAmountUSD").length ;
    var numItemsGuest = $("#ContentPricesDivGuest"+counter).find(".discountAmountGuest").length ;
    var totalDiscountListing = 0
    var totalDiscountUSD = 0
    var totalDiscountGuest = 0

    while (numItemsListing > 0 ) {
    tempDiscountHolderListing = (document.getElementById(alterationNumber + 'discountAmountListing' + counter + '-' + numItemsListing)).textContent;
    tempDiscountHolderListing = parseFloat( tempDiscountHolderListing.substring(tempDiscountHolderListing.indexOf(" ")+1) )
    totalDiscountListing = totalDiscountListing + tempDiscountHolderListing;

    tempDiscountHolderUSD = (document.getElementById(alterationNumber + 'discountAmountUSD' + counter + '-' + numItemsUsd)).textContent;
    tempDiscountHolderUSD = parseFloat( tempDiscountHolderUSD.substring(tempDiscountHolderUSD.indexOf(" ")+1) )
    totalDiscountUSD = totalDiscountUSD + tempDiscountHolderUSD;

    tempDiscountHolderGuest = (document.getElementById(alterationNumber + 'discountAmountGuest' + counter + '-' + numItemsGuest)).textContent;
    tempDiscountHolderGuest = parseFloat( tempDiscountHolderGuest.substring(tempDiscountHolderGuest.indexOf(" ")+1) )
    totalDiscountGuest = totalDiscountGuest + tempDiscountHolderGuest; 



    numItemsListing--
    numItemsUsd--
    numItemsGuest--
    }






 //Listing
    //pulling Daily Price Listing
    var listingPriceListing = document.getElementById(alterationNumber + 'dailyListing'+counter).innerText
    listingPriceListing = parseFloat(listingPriceListing.substring(listingPriceListing.indexOf(" ")+1));
    
    //pulling Extra guest price Listing
    if (($('#extraGuestListing'+counter).length)===0){
        var extraGuestPriceListing = 0;
    }
    else {
    var extraGuestPriceListing = document.getElementById(alterationNumber + 'extraGuestListing'+counter).innerText
    extraGuestPriceListing= parseFloat(extraGuestPriceListing.substring(extraGuestPriceListing.indexOf(" ")+1));
}
    document.getElementById(alterationNumber + "HeaderHostPrice"+counter).innerText = listingCurrencySymbol + " " + (listingPriceListing + totalDiscountListing + extraGuestPriceListing).toFixed(2)
    

//USD
   //pulling Daily Price USD
   var listingPriceUSD = document.getElementById(alterationNumber + 'dailyUSD'+counter).innerText
   listingPriceUSD = parseFloat(listingPriceUSD.substring(listingPriceUSD.indexOf(" ")+1));
    //pulling Extra guest price USD
   if (($('#extraGuestUSD'+counter).length)===0){
        var extraGuestPriceUSD = 0;
    }
    else {
    var extraGuestPriceUSD = document.getElementById(alterationNumber + 'extraGuestUSD'+counter).innerText
    extraGuestPriceUSD= parseFloat(extraGuestPriceUSD.substring(extraGuestPriceUSD.indexOf(" ")+1));
}
    document.getElementById(alterationNumber + "HeaderUSDPrice"+counter).innerText = "$" + " " + (listingPriceUSD + totalDiscountUSD + extraGuestPriceUSD).toFixed(2)
    

//Guest
    //pulling Daily Price Guest
    var listingPriceGuest = document.getElementById(alterationNumber + 'dailyGuest'+counter).innerText
    listingPriceGuest = parseFloat(listingPriceGuest.substring(listingPriceGuest.indexOf(" ")+1));

     //pulling Extra guest price Guest
    if (($('#extraGuestGuest'+counter).length)===0){
        var extraGuestPriceGuest = 0;
    }
    else {
    var extraGuestPriceGuest = document.getElementById(alterationNumber + 'extraGuestGuest'+counter).innerText
    extraGuestPriceGuest= parseFloat(extraGuestPriceGuest.substring(extraGuestPriceGuest.indexOf(" ")+1));
}
    document.getElementById(alterationNumber + "HeaderGuestPrice"+counter).innerText =  guestCurrencySymbol + " " + ((listingPriceGuest + totalDiscountGuest + extraGuestPriceGuest).toFixed(2))
    

    counter++;
    } // While Loop through NumNights




// Total prices all nights + Cleaning fee LISTING
 
        var totalAmountListing = 0
        i=1
        while (i<= numberNight) {
            var amountNightCounter = document.getElementById(alterationNumber + 'HeaderHostPrice'+i).innerText
            amountNightCounter = parseFloat(amountNightCounter.substring(amountNightCounter.indexOf(" ")+1))
            totalAmountListing = totalAmountListing + amountNightCounter;
            i++
        }
        if ($('#cleaningFeePriceListing').length > 0) {
           var cleaningFeeTotal = document.getElementById(alterationNumber + 'cleaningFeePriceListing').innerText;
        cleaningFeeTotal = parseFloat(cleaningFeeTotal.substring(cleaningFeeTotal.indexOf(" ")+1));
        }
        else {
        var cleaningFeeTotal = 0; 
}

        totalAmountListing = totalAmountListing + cleaningFeeTotal 
        var percentageAirbnbFeeListing = (airbnbFeeListingAmount / totalAmountListing * 100).toFixed(2) +"%)";
        document.getElementById(alterationNumber + 'airbnbFeeListingType').append(percentageAirbnbFeeListing)




        // Total prices all nights + Cleaning fee GUEST
        var totalAmountGuest = 0
        i=1
        while (i<= numberNight) {
            var amountNightCounter = document.getElementById(alterationNumber + 'HeaderGuestPrice'+i).innerText
            amountNightCounter = parseFloat(amountNightCounter.substring(amountNightCounter.indexOf(" ")+1))
            totalAmountGuest = totalAmountGuest + amountNightCounter;
            i++
        }
        if ($('#cleaningFeePriceGuest').length > 0) {
        var cleaningFeeTotal = document.getElementById(alterationNumber + 'cleaningFeePriceGuest').innerText
        cleaningFeeTotal = parseFloat(cleaningFeeTotal.substring(cleaningFeeTotal.indexOf(" ")+1))
}
    else {
        var cleaningFeeTotal = 0; 
    }

        totalAmountGuest = totalAmountGuest + cleaningFeeTotal
        var percentageAirbnbFeeGuest = (airbnbFeeGuestAmount / totalAmountGuest * 100).toFixed(2) +"%)";
        document.getElementById(alterationNumber + 'airbnbFeeGuestType').append(percentageAirbnbFeeGuest)


alterationNumber++;



 }//While — Looping through Alterations



} // End Function Transform Text



