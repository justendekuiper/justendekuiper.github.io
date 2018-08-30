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


var lattitude = 1;
var longtitude = 1;
alterationNumber = 0

function initMap() {
  var myLatLng = {lat: lattitude, lng: longtitude};

  var map = new google.maps.Map(document.getElementById(alterationNumber + 'map'), {
    zoom: 15,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}





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
 

function adjustBorderPriceSpecify(){
$('.priceSpecifyDiv').each(function(i, obj) {
   obj.classList.remove("priceSpecifyDivSelected");
});
}

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

var outputArea = document.getElementById('DivOutputField');
 
 if (outputArea.hasChildNodes()) {
     // Get all children of node
     var children = outputArea.childNodes;               

     // Loop through the children
     for(var c=0; c < children.length; c++) {
      if(children[c].style) {
       children[c].style.display = 'none';
      }
     }
 }
adjustBorderPriceSpecify();
document.getElementById("borderDivOutputField").style.display = "block";


    var object = e +'BookingDetails'
    object = document.getElementById(object);
    if (object.style.display === "none") {
        object.style.display = "block";
    }
  else {
        object.style.display = "none";
}

var divRightField = document.getElementById('DivRightField')
 if (divRightField.hasChildNodes()) {
     // Get all children of node
     var children = divRightField.childNodes;               

     // Loop through the children
     for(var c=0; c < children.length; c++) {
      if(children[c].style) {
       children[c].style.display = 'none';
     } } }
     document.getElementById('borderDivRightField').style.display= 'block';

}






/* Pricing */
function collapseReservationPrice(e) {
    listingSpecify = document.getElementById(e + "listingPriceDiv");
ClickPricingBarHeaderListing(e,listingSpecify);

   var specifyBarListing = document.getElementById(e + 'listingPriceDiv');
    var specifyBarUsd = document.getElementById(e + 'usdPriceDiv');
    var specifyBarGuest = document.getElementById(e + 'guestPriceDiv');
    var specifyBarRaw = document.getElementById(e + 'rawSnapshotDiv');
 

 
    if (specifyBarListing.style.display === "none") {
        specifyBarListing.style.display = "block";
    }
  else {
        specifyBarListing.style.display = "none";
}

 
    if (specifyBarUsd.style.display === "none") {
        specifyBarUsd.style.display = "block";
    }
  else {
        specifyBarUsd.style.display = "none";
}

 
    if (specifyBarGuest.style.display === "none") {
        specifyBarGuest.style.display = "block";
    }
  else {
        specifyBarGuest.style.display = "none";
}
 
    if (specifyBarRaw.style.display === "none") {
        specifyBarRaw.style.display = "block";
    }
  else {
        specifyBarRaw.style.display = "none";
}

}


/* Listing Details */
  function collapseReservationListingDetails(e) {

    var outputArea = document.getElementById('DivOutputField');
 
 if (outputArea.hasChildNodes()) {
     // Get all children of node
     var children = outputArea.childNodes;               

     // Loop through the children
     for(var c=0; c < children.length; c++) {
      if(children[c].style) {
       children[c].style.display = 'none';
      }
     }
 }
adjustBorderPriceSpecify();
document.getElementById("borderDivOutputField").style.display = "block";

    var object = e +'DivListingDetails'
    object = document.getElementById(object);
    
    if (object.style.display === "none") {
        object.style.display = "block";
    }
  else {
        object.style.display = "none";
}
var divRightField = document.getElementById('DivRightField')
 if (divRightField.hasChildNodes()) {
     // Get all children of node
     var children = divRightField.childNodes;               

     // Loop through the children
     for(var c=0; c < children.length; c++) {
      if(children[c].style) {
       children[c].style.display = 'none';
     } } }
     document.getElementById('borderDivRightField').style.display= 'block';

}
  


/*function transformtext() {
	var insertedtext = document.getElementById("EntreeField").value;
	document.getElementById("DivOutputField").innerText = insertedtext;

}
*/




/*Onclick Pricing Bar Expand */
function ClickPricingBar(e) {
    if (e.nextSibling.style.display === "none") {
        e.nextSibling.style.display = "inline-block";
    }
    else {
        e.nextSibling.style.display = "none";
    }
};


//Onclick night bar Expand Listing
    function ClickPricingBarHeaderListing(e,obj){
   var outputArea = document.getElementById('DivOutputField');
 
 if (outputArea.hasChildNodes()) {
     // Get all children of node
     var children = outputArea.childNodes;               

     // Loop through the children
     for(var c=0; c < children.length; c++) {
      if(children[c].style) {
       children[c].style.display = 'none';
      }
     }
}

   var outputAreaPrice = document.getElementById(e +'OverviewNights');
 
 if (outputAreaPrice.hasChildNodes()) {
     // Get all children of node
     var children = outputAreaPrice.childNodes;               

     // Loop through the children
     for(var c=0; c < children.length; c++) {
      if(children[c].style) {
       children[c].style.display = 'none';
      }
     }
}

adjustBorderPriceSpecify();
obj.classList.add('priceSpecifyDivSelected');
document.getElementById("borderDivOutputField").style.display = "block";

    var object = document.getElementById(e +'DivPricingDetails');
    
    if (object.style.display === "none") {
        object.style.display = "block";
    }



     var object = document.getElementById(e + 'listingContainer')
     if (object.style.display ==="none") {
        object.style.display = "block";
     }

var divRightField = document.getElementById('DivRightField')
 if (divRightField.hasChildNodes()) {
     // Get all children of node
     var children = divRightField.childNodes;               

     // Loop through the children
     for(var c=0; c < children.length; c++) {
      if(children[c].style) {
       children[c].style.display = 'none';
     } } }
     document.getElementById('borderDivRightField').style.display= 'block';
     document.getElementById(e+ 'definitionDiv').style.display = 'block';
 
}



//Onclick night bar Expand USD
    function ClickPricingBarHeaderUsd(e,obj){
   var outputArea = document.getElementById('DivOutputField');
 
 if (outputArea.hasChildNodes()) {
     // Get all children of node
     var children = outputArea.childNodes;               

     // Loop through the children
     for(var c=0; c < children.length; c++) {
      if(children[c].style) {
       children[c].style.display = 'none';
      }
     }}


   var outputAreaPrice = document.getElementById(e +'OverviewNights');
 
 if (outputAreaPrice.hasChildNodes()) {
     // Get all children of node
     var children = outputAreaPrice.childNodes;               

     // Loop through the children
     for(var c=0; c < children.length; c++) {
      if(children[c].style) {
       children[c].style.display = 'none';
      }
     }
}


adjustBorderPriceSpecify();
obj.classList.add('priceSpecifyDivSelected');
document.getElementById("borderDivOutputField").style.display = "block";

    var object = document.getElementById(e +'DivPricingDetails');

    if (object.style.display === "none") {
        object.style.display = "block";
    }


    var object = document.getElementById(e + 'usdContainer')
     if (object.style.display ==="none") {
        object.style.display = "block";
     }
 
var divRightField = document.getElementById('DivRightField')
 if (divRightField.hasChildNodes()) {
     // Get all children of node
     var children = divRightField.childNodes;               

     // Loop through the children
     for(var c=0; c < children.length; c++) {
      if(children[c].style) {
       children[c].style.display = 'none';
     } } }
     document.getElementById('borderDivRightField').style.display= 'block';
     document.getElementById(e+ 'definitionDiv').style.display = 'block';

}


//Onclick night bar Expand Listing
    function ClickPricingBarHeaderGuest(e,obj){
   var outputArea = document.getElementById('DivOutputField');
 
 if (outputArea.hasChildNodes()) {
     // Get all children of node
     var children = outputArea.childNodes;               

     // Loop through the children
     for(var c=0; c < children.length; c++) {
      if(children[c].style) {
       children[c].style.display = 'none';
      }
     }
 }

    var outputAreaPrice = document.getElementById(e +'OverviewNights');
 
 if (outputAreaPrice.hasChildNodes()) {
     // Get all children of node
     var children = outputAreaPrice.childNodes;               

     // Loop through the children
     for(var c=0; c < children.length; c++) {
      if(children[c].style) {
       children[c].style.display = 'none';
      }
     }
}


adjustBorderPriceSpecify();
obj.classList.add('priceSpecifyDivSelected');
document.getElementById("borderDivOutputField").style.display = "block";

     var object = document.getElementById(e +'DivPricingDetails');
    
    if (object.style.display === "none") {
        object.style.display = "block";
    }


    var object = document.getElementById(e + 'guestContainer')
     if (object.style.display ==="none") {
        object.style.display = "block";
     }

     var divRightField = document.getElementById('DivRightField')
 if (divRightField.hasChildNodes()) {
     // Get all children of node
     var children = divRightField.childNodes;               

     // Loop through the children
     for(var c=0; c < children.length; c++) {
      if(children[c].style) {
       children[c].style.display = 'none';
     } } }
     document.getElementById('borderDivRightField').style.display= 'block';
     document.getElementById(e+ 'definitionDiv').style.display = 'block';
 }



//Onclick night bar Expand Raw Snapshots
    function ClickPricingBarHeaderRaw(e,obj){
   var outputArea = document.getElementById('DivOutputField');
 
 if (outputArea.hasChildNodes()) {
     // Get all children of node
     var children = outputArea.childNodes;               

     // Loop through the children
     for(var c=0; c < children.length; c++) {
      if(children[c].style) {
       children[c].style.display = 'none';
      }
     }}


   var outputAreaPrice = document.getElementById(e +'OverviewNights');
 
 if (outputAreaPrice.hasChildNodes()) {
     // Get all children of node
     var children = outputAreaPrice.childNodes;               

     // Loop through the children
     for(var c=0; c < children.length; c++) {
      if(children[c].style) {
       children[c].style.display = 'none';
      }
     }
}


adjustBorderPriceSpecify();
obj.classList.add('priceSpecifyDivSelected');
document.getElementById("borderDivOutputField").style.display = "block";

    var object = document.getElementById(e +'DivPricingDetails');

    if (object.style.display === "none") {
        object.style.display = "block";
    }


    var object = document.getElementById(e + 'rawSnapshotContainer')
     if (object.style.display ==="none") {
        object.style.display = "block";
     }
 
var divRightField = document.getElementById('DivRightField')
 if (divRightField.hasChildNodes()) {
     // Get all children of node
     var children = divRightField.childNodes;               

     // Loop through the children
     for(var c=0; c < children.length; c++) {
      if(children[c].style) {
       children[c].style.display = 'none';
     } } }
     document.getElementById('borderDivRightField').style.display= 'block';
     document.getElementById(e+ 'definitionDiv').style.display = 'block';

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



var expandListing = "expand-arrows.png";
// Listing
function expandItemsListing(e) {
    if(expandListing == "expand-arrows.png") {
        $(e).siblings('.ContentPricesDivListing').css({"display": "inline-block"});
        $(e).attr("src","images/minimize-arrows.png");
        expandListing  = "minimize-arrows.png";
}
else {
        $(e).siblings('.ContentPricesDivListing').css({"display": "none"});
        $(e).attr("src","images/expand-arrows.png");
        expandListing  = "expand-arrows.png";
}

}



var expandUsd = "expand-arrows.png";
// Usd
function expandItemsUsd(e) {
    if(expandUsd == "expand-arrows.png") {
        $(e).siblings('.ContentPricesDivUsd').css({"display": "inline-block"});
        $(e).attr("src","images/minimize-arrows.png");
        expandUsd  = "minimize-arrows.png";
}
else {
        $(e).siblings('.ContentPricesDivUsd').css({"display": "none"});
        $(e).attr("src","images/expand-arrows.png");
        expandUsd  = "expand-arrows.png";
}

}


var expandGuest = "expand-arrows.png";
// Guest
function expandItemsGuest(e) {
    if(expandGuest == "expand-arrows.png") {
        $(e).siblings('.ContentPricesDivGuest').css({"display": "inline-block"});
        $(e).attr("src","images/minimize-arrows.png");
        expandGuest  = "minimize-arrows.png";
}
else {
        $(e).siblings('.ContentPricesDivGuest').css({"display": "none"});
        $(e).attr("src","images/expand-arrows.png");
        expandGuest  = "expand-arrows.png";
}

}



 
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
        alterationNumberDisplay = "Alteration #" + (alterationTotal - alterationNumber);
    }
    var createAlterationButton = document.createElement('div')
    var createAlterationButtonTextNode = document.createTextNode(alterationNumberDisplay)
    createAlterationButton.appendChild(createAlterationButtonTextNode)
    createAlterationButton.className = "alterationButton"
    createAlterationButton.id= alterationNumber + "alterationButton"
    createAlterationButton.setAttribute("onclick","collapseAlteration(this);");
    document.getElementById('DivMenuField').appendChild(createAlterationButton);

    var createAlterationContent = document.createElement('div')
    createAlterationContent.id= alterationNumber + "alterationContent";
    createAlterationContent.className = "alterationContent"
    createAlterationContent.style.display = "none";
    document.getElementById('DivMenuField').appendChild(createAlterationContent);
}



 




// Creating Content for Booking Without Alteration
function noAlterationContent(alterationNumber){
    var createAlterationContent = document.createElement('div')
    createAlterationContent.id= alterationNumber + "alterationContent";
    createAlterationContent.className = "alterationContent"
    createAlterationContent.style.display = "block";
    document.getElementById('DivMenuField').appendChild(createAlterationContent);
}




// Creating Dropdown Menu With Alteration
    function createDropdownMenu(alterationNumber) {
        var createDropdownDetails = document.createElement('div');
        var createDropdownDetailsNode = document.createTextNode('Details');
        createDropdownDetails.appendChild(createDropdownDetailsNode);
        createDropdownDetails.className = 'Dropdown'
        createDropdownDetails.id = alterationNumber + 'DropdownReservationDetails'
        createDropdownDetails.setAttribute("onclick","collapseReservationDetails(" + alterationNumber + ");");
        document.getElementById(alterationNumber + "alterationContent").appendChild(createDropdownDetails);

        var createBookingDetailsInner = document.createElement('div');
        createBookingDetailsInner.style.display ="none";
        createBookingDetailsInner.id = alterationNumber + "BookingDetails";
        createBookingDetailsInner.className = "BookingDetails";
        document.getElementById('DivOutputField').appendChild(createBookingDetailsInner);




        var createDropdownPrice = document.createElement('div');
        var createDropdownPriceNode = document.createTextNode('Price');
        createDropdownPrice.appendChild(createDropdownPriceNode);
        createDropdownPrice.className = 'Dropdown'
        createDropdownPrice.id = alterationNumber + 'DropdownReservationPricing'
        createDropdownPrice.setAttribute("onclick","collapseReservationPrice("+alterationNumber+");");
        document.getElementById(alterationNumber + "alterationContent").appendChild(createDropdownPrice);

        var createBookingPriceInner = document.createElement('div');
        createBookingPriceInner.style.display ="none";
        createBookingPriceInner.id = alterationNumber + "DivPricingDetails";
        document.getElementById('DivOutputField').appendChild(createBookingPriceInner);

        var createBookingPriceInnerst = document.createElement('div');
        createBookingPriceInnerst.style.display ="block";
        createBookingPriceInnerst.id = alterationNumber + "OverviewNights";
        document.getElementById(alterationNumber + 'DivPricingDetails').appendChild(createBookingPriceInnerst);





        var createDropdownListing = document.createElement('div');
        var createDropdownListingNode = document.createTextNode('Listing');
        createDropdownListing.appendChild(createDropdownListingNode);
        createDropdownListing.className = 'Dropdown'
        createDropdownListing.id = alterationNumber + 'DropdownListingDetails'
        createDropdownListing.setAttribute("onclick","collapseReservationListingDetails("+alterationNumber+");");
        document.getElementById(alterationNumber + "alterationContent").appendChild(createDropdownListing);


        var createListingDetails = document.createElement('div')
        createListingDetails.id = alterationNumber + "DivListingDetails";
        createListingDetails.className = "DivListingDetails";
        createListingDetails.style.display = "none";
        document.getElementById('DivOutputField').appendChild(createListingDetails);

        var typeListingDetails = document.createElement('div')
        typeListingDetails.id = alterationNumber + 'typeListingDetails';
        typeListingDetails.className =  'typeListingDetails';
        document.getElementById(alterationNumber + 'DivListingDetails').appendChild(typeListingDetails)

        var headerListingDetails = document.createElement('div')
        headerListingDetails.id = alterationNumber + 'HeaderListingDetails';
        headerListingDetails.className =  'HeaderListingDetails';
        document.getElementById(alterationNumber + 'DivListingDetails').appendChild(headerListingDetails)

        var locationListing = document.createElement('div')
        locationListing.id = alterationNumber + 'locationListing';
        locationListing.className =  'locationListing';
        document.getElementById(alterationNumber + 'DivListingDetails').appendChild(locationListing)


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

        var createListingDescriptionHeader = document.createElement('div');
        var createListingDescriptionHeaderNode = document.createTextNode('Description');
        createListingDescriptionHeader.appendChild(createListingDescriptionHeaderNode);
        createListingDescriptionHeader.className = 'listingHeader';
        document.getElementById(alterationNumber + 'DivListingDetails').appendChild(createListingDescriptionHeader);


        var createListingDescription = document.createElement('div');
        createListingDescription.id = alterationNumber + "DescriptionListingDetails";
        createListingDescription.className =  "DescriptionListingDetails";
        document.getElementById(alterationNumber + 'DivListingDetails').appendChild(createListingDescription);

        var createListingAmenitiesHeader = document.createElement('div');
        var createListingAmenitiesHeaderNode = document.createTextNode('Amenities');
        createListingAmenitiesHeader.appendChild(createListingAmenitiesHeaderNode);
        createListingAmenitiesHeader.className = 'listingHeader';
        document.getElementById(alterationNumber + 'DivListingDetails').appendChild(createListingAmenitiesHeader);


        var createListingAmenities = document.createElement('div');
        createListingAmenities.id = alterationNumber + "AmenitiesData"
        createListingAmenities.className = "AmenitiesData"
        document.getElementById(alterationNumber + 'DivListingDetails').appendChild(createListingAmenities);

        var createListingRulesHeader = document.createElement('div');
        var createListingRulesHeaderNode = document.createTextNode('House Rules');
        createListingRulesHeader.appendChild(createListingRulesHeaderNode);
        createListingRulesHeader.className = 'listingHeader';
        document.getElementById(alterationNumber + 'DivListingDetails').appendChild(createListingRulesHeader);


        var createListingRules = document.createElement('div');
        createListingRules.id = alterationNumber + "HouseRulesListingDetails"
        createListingRules.className =  "HouseRulesListingDetails"
        document.getElementById(alterationNumber + 'DivListingDetails').appendChild(createListingRules);
    }








function setAmenityImageName(amenityPicName) {
        if(amenityPicName == "Air conditioning" || amenityPicName == "Baby bath" || amenityPicName == "Baby monitor" || amenityPicName == "Babysitter recommendations" || amenityPicName == "Bathtub" || amenityPicName == "Breakfast" || amenityPicName == "Changing table" || amenityPicName == "Children’s books and toys" || 
             amenityPicName == "Children’s dinnerware" || amenityPicName == "Crib" || amenityPicName == "Dryer" || amenityPicName == "Elevator" || amenityPicName == "Essentials" || amenityPicName == "Ethernet connection" || amenityPicName == "Fireplace guards" || amenityPicName == "Free parking on premises" || amenityPicName == "Game console" 
             || amenityPicName == "Gym" || amenityPicName == "Hair dryer" || amenityPicName == "Hangers" || amenityPicName == "Heating" || amenityPicName == "High chair" || amenityPicName == "Hot tub" || amenityPicName == "Indoor fireplace" || amenityPicName == "Iron" || amenityPicName == "Kitchen" 
             || amenityPicName == "Laptop friendly workspace" || amenityPicName == "Outlet covers" || amenityPicName == "Pack ’n Play-travel crib" || amenityPicName == "Pool" || amenityPicName == "Private entrance" || amenityPicName == "Room-darkening shades" || amenityPicName == "Shampoo" || amenityPicName == "Stair gates" || amenityPicName == "Table corner guards" 
             || amenityPicName == "TV" || amenityPicName == "Washer" || amenityPicName == "Wifi" || amenityPicName == "Window guards"){
       return 'images/amenities/' + amenityPicName + '.png';
}
else {
    return 'images/amenities/empty.png';
}
}


function convertInstantBookRequirement(instantBookRequirement) {
    if(instantBookRequirement == "0") {
        return "Instant book is not allowed";
    }
    else if(instantBookRequirement == "1"){
        return "Instant book is allowed for experienced guests";
    }
    else if(instantBookRequirement == "2"){
        return "Instant book is allowed for any guests";
    }
    else if(instantBookRequirement == "3"){
        return "Instant book is allowed for social connections";
    }
    else if(instantBookRequirement == "4"){
        return "Instant book is allowed for guests with government ID";
    }
    else if(instantBookRequirement == "5"){
        return "Instant book is allowed for guests with high ratings";
    }
    else if(instantBookRequirement == "6"){
        return "Instant book is allowed for guests with high ratings and government ID";
    }
    else if(instantBookRequirement == "7"){
        return "Instant book is allowed for experienced guests with government ID";
    }
    else {
        return "N/A";
    }
}



function convertCancellationPolicy(cancel_policy_raw){
            if (cancel_policy_raw == "3") {
          return "Flexible";
        }
        else if (cancel_policy_raw == "0") {
        return "Deprecated Full Refund Before Arrival";
        }
        else if (cancel_policy_raw == "1") {
        return "Full Refund between 5-75 day cancellation";
        }
        else if (cancel_policy_raw == "2") {
        return "Full First 5 days None,Last 5 -75 days otherwise, ";
        }
        else if (cancel_policy_raw == "4") {
        return "Moderate";
        }
        else if (cancel_policy_raw == "5") {
        return "Strict";
        }
        else if (cancel_policy_raw == "44") {
        return "Strict with Grace Period";
        }
        else if (cancel_policy_raw == "6") {
        return "Super Strict 30";
        }
        else if (cancel_policy_raw == "7") {
        return "No Refund";
        }
        else if (cancel_policy_raw == "8") {
        return "Long Term";
        }
        else if (cancel_policy_raw == "9") {
        return "Super Strict 60";
        }
        else if (cancel_policy_raw == "10") {
        return "New Flexible";
        }
        else if (cancel_policy_raw == "11") {
        return "New Moderate";
        }
        else if (cancel_policy_raw == "12") {
        return "New Strict";
        }
        else if (cancel_policy_raw == "13") {
        return "New Super Strict 30";
        }
        else if (cancel_policy_raw == "14") {
        return "New Super Strict 60";
        }
        else if (cancel_policy_raw == "15") {
        return "New Long Term";
        }
        else if (cancel_policy_raw == "40") {
        return "Beyond Moderate";
        }
        else if (cancel_policy_raw == "41") {
        return "Beyond Super Strict 95";
        }
        else if (cancel_policy_raw == "42") {
        return "Beyond Super Strict 125";
        }
        else if (cancel_policy_raw == "43") {
        return "No Refund";
        }
        else if (cancel_policy_raw == "44") {
        return "48hr Grace Period Strict with 14 day cut off";
        }
        else if (cancel_policy_raw == "45") {
        return "48 hr Grace Period Strict with mobile";
        }
        else if (cancel_policy_raw == "46") {
        return "48hr Grace Period Strict Full Refund on mobile";
        }
        else if (cancel_policy_raw == "51") {
        return "Tiered Pricing Non Refundable";
        }
        else if (cancel_policy_raw == "16") {
        return "(Test) Flexible Grace Period";
        }
        else if (cancel_policy_raw == "17") {
        return "(Test)Moderate Grace Period";
        }
        else if (cancel_policy_raw == "18") {
        return "Strict Grace Period";
        }
        else if (cancel_policy_raw == "19") {
        return "(Test) Super Strict 30 Grace Period";
        }
        else if (cancel_policy_raw == "20") {
        return "(Test) Super Strict 60 Grace Period";
        }
        else if (cancel_policy_raw == "21") {
        return "(Test) Long Term Grace Period";
        }
        else if (cancel_policy_raw == "22") {
        return "(Test) Flexible No Refunds";
        }
        else if (cancel_policy_raw == "23") {
        return "(Test) Moderate No Refunds";
        }
        else if (cancel_policy_raw == "24") {
        return "(Test) Strict No Refunds";
        }
        else if (cancel_policy_raw == "25") {
        return "(Test) Super Strict 30 No Refunds";
        }
        else if (cancel_policy_raw == "26") {
        return "(Test) SUperstrict 60 No Refunds";
        }
        else if (cancel_policy_raw == "27") {
        return "(Test) Long Term No Refunds";
        }
        else if (cancel_policy_raw == "28") {
        return "(Test) Flexible Full Refunds";
        }
        else if (cancel_policy_raw == "29") {
        return "(Test) Moderate Full Refunds";
        }
        else if (cancel_policy_raw == "30") {
        return "(Test) Strict Full Refunds";
        }
        else if (cancel_policy_raw == "31") {
        return "(Test) Super Strict 30 Full Refunds";
        }
        else if (cancel_policy_raw == "32") {
        return "(Test) Super Strict 60 Full Refunds";
        }
        else if (cancel_policy_raw == "33") {
        return "(Test) Long Term Full Refunds";
        }
        else if (cancel_policy_raw == "34") {
        return "(Test) New Flexible FUll Refunds";
        }
        else if (cancel_policy_raw == "35") {
        return "(Test) New Moderate Full Refunds";
        }
        else if (cancel_policy_raw == "36") {
        return "(Test) New Strict Full Refunds";
        }
        else if (cancel_policy_raw == "37") {
        return "(Test) New Super Strict 30 Full Refunds";
        }
        else if (cancel_policy_raw == "38") {
        return "(Test) New Super Strict 60 Full Refunds";
        }
        else if (cancel_policy_raw == "39") {
        return "(Test)New Long Term Full Refunds";
        }
        else {
            return cancel_policy_raw
          }
      };

 

function createReservationDetails(alterationNumber,reservation_code,nameGuest,nameHost,listingID,guestID,hostID,created_at,pending_began_at,pending_expires_at,host_Responded_at,canceled_at,instantBookRequirement,numberOfGuests,numberOfNights,cancel_policy,checkinTime,checkoutTime,reviewsBlocked,guestCurrencyRate,hostCurrencyRate,guestCurrency,hostCurrency,checkinDate,checkoutDate){
//Listin Icon
    //OuterDiv Listing
    var listingOuterDiv = document.createElement('div');
    listingOuterDiv.className = 'listingOuterDiv';
    listingOuterDiv.setAttribute('onclick',"window.open('https://admin.airbnb.com/rooms/"+ listingID+"');")
    //Image of Listing
    var listingImage = document.createElement('img');
    listingImage.src = "images/listingIcon.png";
    listingImage.className = 'listingImage';
    //Menu Bars
    var listingMenuBars = document.createElement('div');
    listingMenuBars.className = 'listingMenuBars';
    //Menu Bar1
    var listingMenuBar1 = document.createElement('div');
    listingMenuBar1.className = 'listingMenuBar';
    //Menu Bar2
    var listingMenuBar2 = document.createElement('div');
    listingMenuBar2.className = 'listingMenuBar';
    //Menu Bar3
    var listingMenuBar3 = document.createElement('div');
    listingMenuBar3.className = 'listingMenuBar';
    //appending Menus
    listingMenuBars.appendChild(listingMenuBar1);
    listingMenuBars.appendChild(listingMenuBar2);
    listingMenuBars.appendChild(listingMenuBar3);
    //ID of Listing
    var listingIDDiv = document.createElement('div');
    listingIDNode = document.createTextNode(listingID);
    listingIDDiv.appendChild(listingIDNode);
    listingIDDiv.className = 'listingID';
    //Appending all Items
    listingOuterDiv.appendChild(listingImage);
    listingOuterDiv.appendChild(listingMenuBars);
    listingOuterDiv.appendChild(listingIDDiv);
    document.getElementById(alterationNumber + 'BookingDetails').appendChild(listingOuterDiv);




    //Reservation Code
    var reservationCodeDiv = document.createElement('div');
    reservationCodeDiv.setAttribute('onclick',"window.open('https://nova.airbnb.tools/reservations/"+ reservation_code+"');")
    var reservationCodeNode = document.createTextNode(reservation_code);
    reservationCodeDiv.appendChild(reservationCodeNode);
    reservationCodeDiv.className = "reservationCode";
    document.getElementById(alterationNumber + 'BookingDetails').appendChild(reservationCodeDiv);



//GUEST Div
    //OuterDiv
    var guestDivOuter = document.createElement('div');
    guestDivOuter.className = "guestDivOuter";
    // Guest 
    var guestDivIndicate = document.createElement('div');
    var guestDivIndicateNode = document.createTextNode('Guest')
    guestDivIndicate.appendChild(guestDivIndicateNode);
    guestDivIndicate.className = 'guestDivIndicate';
    //InnerDivName
    var guestDivName = document.createElement('div')
    var guestDivNameNode = document.createTextNode(nameGuest);
    guestDivName.appendChild(guestDivNameNode);
    guestDivName.className = 'guestDivName';
    //InnerDivNova
    guestDivNova = document.createElement('div');
    guestDivNova.setAttribute('onclick',"window.open('https://nova.airbnb.tools/profiles/"+ guestID+"');")
    guestDivNovaLinkText = document.createTextNode('Nova');
    guestDivNova.appendChild(guestDivNovaLinkText);
    guestDivNova.className = 'guestDivNova divNova';
    //InnerDivPublic
    guestDivPublic = document.createElement('div');
    guestDivPublic.setAttribute('onclick',"window.open('https://admin.airbnb.com/users/show/"+ guestID+"');")
    guestDivPublicLinkText = document.createTextNode('Public');
    guestDivPublic.appendChild(guestDivPublicLinkText);
    guestDivPublic.className = 'guestDivPublic divPublic';
    //Creating in Document
    guestDivOuter.appendChild(guestDivIndicate);
    guestDivOuter.appendChild(guestDivName);
    guestDivOuter.appendChild(guestDivNova);
    guestDivOuter.appendChild(guestDivPublic);


//HOST Div
    //OuterDiv
    var hostDivOuter = document.createElement('div');
    hostDivOuter.className = "hostDivOuter";
    // Host 
    var hostDivIndicate = document.createElement('div');
    var hostDivIndicateNode = document.createTextNode('Host')
    hostDivIndicate.appendChild(hostDivIndicateNode);
    hostDivIndicate.className = 'hostDivIndicate';
    //InnerDivName
    var hostDivName = document.createElement('div')
    var hostDivNameNode = document.createTextNode(nameHost);
    hostDivName.appendChild(hostDivNameNode);
    hostDivName.className = 'hostDivName';
    //InnerDivNova
    hostDivNova = document.createElement('div');
    guestDivPublic.setAttribute('onclick',"window.open('https://nova.airbnb.tools/profiles/"+ hostID+"');")
    hostDivNovaLinkText = document.createTextNode('Nova');
    hostDivNova.appendChild(hostDivNovaLinkText);
    hostDivNova.className = 'hostDivNova divNova';
    //InnerDivPublic
    hostDivPublic = document.createElement('div');
    hostDivPublic.setAttribute('onclick',"window.open('https://admin.airbnb.com/users/show/"+ hostID+"');")
    hostDivPublicLinkText = document.createTextNode('Public');
    hostDivPublic.appendChild(hostDivPublicLinkText);
    hostDivPublic.className = 'hostDivPublic divPublic';
    //Creating in Document
    hostDivOuter.appendChild(hostDivIndicate);
    hostDivOuter.appendChild(hostDivName);
    hostDivOuter.appendChild(hostDivNova);
    hostDivOuter.appendChild(hostDivPublic);


// HOST AND GUEST IN DIV
    var usersDiv = document.createElement('div')
    usersDiv.className = 'usersDiv';
    usersDiv.appendChild(guestDivOuter);
    usersDiv.appendChild(hostDivOuter);
    document.getElementById(alterationNumber + 'BookingDetails').appendChild(usersDiv);


// Timeframe Outer Div
    var timeframeOuterDiv = document.createElement('div');
    timeframeOuterDiv.className = 'timeframeOuterDiv';


// Created at
    //outer
    var createdAtDiv = document.createElement('div');
    createdAtDiv.className = 'createdAtDiv itemTimeDiv';
    //type
    createdAtDivType = document.createElement('div');
    createdAtDivTypeNode = document.createTextNode('Created at');
    createdAtDivType.appendChild(createdAtDivTypeNode);
    createdAtDivType.className = 'timeframeType'
    //Line
    var createdAtLine = document.createElement('div');
    createdAtLine.className = 'timeframeLine';
    //data
    var createdAtData = document.createElement('div');
    createdAtData.className = 'timeframeData';
    createdAtDataNode = document.createTextNode(created_at);
    createdAtData.appendChild(createdAtDataNode);
    //appending Data
    createdAtDiv.appendChild(createdAtDivType);
    createdAtDiv.appendChild(createdAtLine);
    createdAtDiv.appendChild(createdAtData);


// Pending Began at
    //outer
    var pendingBeganAtDiv = document.createElement('div');
    pendingBeganAtDiv.className = 'pendingBeganAtDiv itemTimeDiv';
    //type
    pendingBeganAtDivType = document.createElement('div');
    pendingBeganAtDivTypeNode = document.createTextNode('Pending Began at');
    pendingBeganAtDivType.appendChild(pendingBeganAtDivTypeNode);
    pendingBeganAtDivType.className = 'timeframeType'
    //Line
    var pendingBeganAtLine = document.createElement('div');
    pendingBeganAtLine.className = 'timeframeLine';
    //data
    var pendingBeganAtData = document.createElement('div');
    pendingBeganAtData.className = 'timeframeData';
    pendingBeganAtDataNode = document.createTextNode(pending_began_at);
    pendingBeganAtData.appendChild(pendingBeganAtDataNode);
    //appending Data
    pendingBeganAtDiv.appendChild(pendingBeganAtDivType);
    pendingBeganAtDiv.appendChild(pendingBeganAtLine);
    pendingBeganAtDiv.appendChild(pendingBeganAtData);


// Pending Expires at
    //outer
    var pendingExpiresAtDiv = document.createElement('div');
    pendingExpiresAtDiv.className = 'pendingExpiresAtDiv itemTimeDiv';
    //type
    pendingExpiresAtDivType = document.createElement('div');
    pendingExpiresAtDivTypeNode = document.createTextNode('Pneding Expires at');
    pendingExpiresAtDivType.appendChild(pendingExpiresAtDivTypeNode);
    pendingExpiresAtDivType.className = 'timeframeType'
    //Line
    var pendingExpiresAtLine = document.createElement('div');
    pendingExpiresAtLine.className = 'timeframeLine';
    //data
    var pendingExpiresAtData = document.createElement('div');
    pendingExpiresAtData.className = 'timeframeData';
    pendingExpiresAtDataNode = document.createTextNode(pending_expires_at);
    pendingExpiresAtData.appendChild(pendingExpiresAtDataNode);
    //appending Data
    pendingExpiresAtDiv.appendChild(pendingExpiresAtDivType);
    pendingExpiresAtDiv.appendChild(pendingExpiresAtLine);
    pendingExpiresAtDiv.appendChild(pendingExpiresAtData);


// Host responded at
    //outer
    var hostRespondedAtDiv = document.createElement('div');
    hostRespondedAtDiv.className = 'hostRespondedAtDiv itemTimeDiv';
    //type
    hostRespondedAtDivType = document.createElement('div');
    hostRespondedAtDivTypeNode = document.createTextNode('Host Responded at');
    hostRespondedAtDivType.appendChild(hostRespondedAtDivTypeNode);
    hostRespondedAtDivType.className = 'timeframeType'
    //Line
    var hostRespondedAtLine = document.createElement('div');
    hostRespondedAtLine.className = 'timeframeLine';
    //data
    var hostRespondedAtData = document.createElement('div');
    hostRespondedAtData.className = 'timeframeData';
    hostRespondedAtDataNode = document.createTextNode(host_Responded_at);
    hostRespondedAtData.appendChild(hostRespondedAtDataNode);
    //appending Data
    hostRespondedAtDiv.appendChild(hostRespondedAtDivType);
    hostRespondedAtDiv.appendChild(hostRespondedAtLine);
    hostRespondedAtDiv.appendChild(hostRespondedAtData);


// Cancelled at
    //outer
    var cancelledAtDiv = document.createElement('div');
    cancelledAtDiv.className = 'cancelledAtDiv itemTimeDiv';
    //type
    cancelledAtDivType = document.createElement('div');
    cancelledAtDivTypeNode = document.createTextNode('Cancelled at');
    cancelledAtDivType.appendChild(cancelledAtDivTypeNode);
    cancelledAtDivType.className = 'timeframeType'
    //Line
    var cancelledAtLine = document.createElement('div');
    cancelledAtLine.className = 'timeframeLine';
    //data
    var cancelledAtData = document.createElement('div');
    cancelledAtData.className = 'timeframeData';
    cancelledAtDataNode = document.createTextNode(canceled_at);
    cancelledAtData.appendChild(cancelledAtDataNode);
    //appending Data
    cancelledAtDiv.appendChild(cancelledAtDivType);
    cancelledAtDiv.appendChild(cancelledAtLine);
    cancelledAtDiv.appendChild(cancelledAtData);


// Reso Details
    var reservationDetailsDiv = document.createElement('div');
    reservationDetailsDiv.className = 'reservationDetailsDiv';

    //Instant Book
    var instantBookRequirementDiv = document.createElement('div');
    var instantBookRequirementNode = document.createTextNode(instantBookRequirement);
    instantBookRequirementDiv.appendChild(instantBookRequirementNode);
    instantBookRequirementDiv.className = 'instantBookRequirement'

    //Guests
    var numberOfGuestsDiv = document.createElement('div');
    if(numberOfGuests == 1){
    var numberOfGuestsNode = document.createTextNode(numberOfGuests + ' guest');   
    }
    else{  
    var numberOfGuestsNode = document.createTextNode(numberOfGuests + ' guests');
    }
    numberOfGuestsDiv.appendChild(numberOfGuestsNode);
    numberOfGuestsDiv.className = 'numberOfGuests';
    
    //Nights
    var numberOfNightsDiv = document.createElement('div');
    if(numberOfNights == 1){
    var numberOfNightsNode = document.createTextNode(numberOfNights + ' night');
}
else{
    var numberOfNightsNode = document.createTextNode(numberOfNights + ' nights');
    }
    numberOfNightsDiv.appendChild(numberOfNightsNode);
    numberOfNightsDiv.className = 'numberOfNights';
    
    //Cancellation Policy
    var cancellationPolicy = document.createElement('div');
    var cancellationPolicyNode = document.createTextNode(cancel_policy + " cancellation policy");
    cancellationPolicy.appendChild(cancellationPolicyNode);
    cancellationPolicy.className = 'cancellationPolicy';
    
    //Check-in
    var checkinDiv = document.createElement('div');
    checkinDiv.className = 'checkinDiv';
    var checkinType = document.createElement('div');
    var checkinTypeNode = document.createTextNode('Check in')
    checkinType.appendChild(checkinTypeNode)
    checkinType.className = 'checkType'
    var checkinData = document.createElement('div');
    var checkinDataNode = document.createTextNode(checkinDate + " at " +checkinTime)
    checkinData.appendChild(checkinDataNode);
    checkinData.className = 'checkData';
    checkinDiv.appendChild(checkinType);
    checkinDiv.appendChild(checkinData);
   
    //Check-out
    var checkoutDiv = document.createElement('div');
    checkoutDiv.className = 'checkoutDiv';
    var checkoutType = document.createElement('div');
    var checkoutTypeNode = document.createTextNode('Check out')
    checkoutType.appendChild(checkoutTypeNode)
    checkoutType.className = 'checkType'
    var checkoutData = document.createElement('div');
    var checkoutDataNode = document.createTextNode(checkoutDate + " at " +checkoutTime)
    checkoutData.appendChild(checkoutDataNode);
    checkoutData.className = 'checkData';
    checkoutDiv.appendChild(checkoutType);
    checkoutDiv.appendChild(checkoutData);
    
    //Reviews Blocked
    var reviewsBlockedDiv = document.createElement('div');
    var reviewsBlockedNode = document.createTextNode(reviewsBlocked)
    reviewsBlockedDiv.appendChild(reviewsBlockedNode);
    reviewsBlockedDiv.className = 'reviewsBlocked';

    // Appending Reservation details
    reservationDetailsDiv.appendChild(instantBookRequirementDiv);
    reservationDetailsDiv.appendChild(numberOfGuestsDiv);
    reservationDetailsDiv.appendChild(numberOfNightsDiv);
    reservationDetailsDiv.appendChild(cancellationPolicy);
    reservationDetailsDiv.appendChild(checkinDiv);
    reservationDetailsDiv.appendChild(checkoutDiv);
    reservationDetailsDiv.appendChild(reviewsBlockedDiv);




// Price FX Rate Data
    var fxRateDetails = document.createElement('div');
    fxRateDetails.className = 'FxRateDetails';

    //USD
    var usdFxRateDiv = document.createElement('div');
    var usdFxRateNode = document.createTextNode('1 USD');
    usdFxRateDiv.appendChild(usdFxRateNode);
    usdFxRateDiv.className = 'usdFxRate'
  // Arrows
  var arrowLeftImage = document.createElement('img');
  arrowLeftImage.className = 'arrowLeftImage';
  arrowLeftImage.src = 'images/ArrowLeft1.png';
  var arrowRightImage = document.createElement('img');
  arrowRightImage.className = 'arrowRightImage';
  arrowRightImage.src = 'images/ArrowRight.png';
    //Guest
    var guestFxRateDiv = document.createElement('div');
    guestFxRateDiv.className = 'guestFxRateDiv'
    var guestFxRateTypeDiv = document.createElement('div');
    var guestFxRateTypeNode = document.createTextNode('Guest');
    guestFxRateTypeDiv.appendChild(guestFxRateTypeNode);
    var guestFxRateDataDiv = document.createElement('div');
    var guestFxRateDataNode = document.createTextNode(guestCurrencyRate + " " + guestCurrency);
    guestFxRateDataDiv.appendChild(guestFxRateDataNode);
    guestFxRateDiv.appendChild(guestFxRateTypeDiv);
    guestFxRateDiv.appendChild(guestFxRateDataDiv);
    //Host
    var hostFxRateDiv = document.createElement('div');
    hostFxRateDiv.className = 'hostFxRateDiv'
    var hostFxRateTypeDiv = document.createElement('div');
    var hostFxRateTypeNode = document.createTextNode('Host');
    hostFxRateTypeDiv.appendChild(hostFxRateTypeNode);
    var hostFxRateDataDiv = document.createElement('div');
    var hostFxRateDataNode = document.createTextNode(hostCurrencyRate + " " + hostCurrency);
    hostFxRateDataDiv.appendChild(hostFxRateDataNode);
    hostFxRateDiv.appendChild(hostFxRateTypeDiv);
    hostFxRateDiv.appendChild(hostFxRateDataDiv);
    //Adding Elements to FX Rate Data
    fxRateDetails.appendChild(usdFxRateDiv);
    fxRateDetails.appendChild(arrowLeftImage);
    fxRateDetails.appendChild(arrowRightImage);
    fxRateDetails.appendChild(guestFxRateDiv);
    fxRateDetails.appendChild(hostFxRateDiv);
    // FX Link
    var createdAt = created_at.substring(0,created_at.indexOf(' '));
    createdAtYear = createdAt.substring(0,4);
    createdAtMonth = createdAt.substring(5,7);
    createdAtDay = createdAt.substring(8,10);
    var fxRateLink = document.createElement('div')
    fxRateLink.setAttribute('onclick',"window.open('https://admin.airbnb.com/admin/general/exchange_rates?date=" + createdAtMonth + '%2F' + createdAtDay + '%2F' + createdAtYear +"');")
    fxRateLink.className = 'fxRateLink';
    fxRateLinkNode = document.createTextNode('View the exchange rate by Airbnb on ' + createdAtYear +'-' + createdAtMonth +'-'+ createdAtDay);
    fxRateLink.appendChild(fxRateLinkNode);
    fxRateDetails.appendChild(fxRateLink);



// Adding Booking Details in Document
    timeframeOuterDiv.appendChild(createdAtDiv)
    timeframeOuterDiv.appendChild(pendingBeganAtDiv)
    timeframeOuterDiv.appendChild(pendingExpiresAtDiv)
    timeframeOuterDiv.appendChild(hostRespondedAtDiv)
    timeframeOuterDiv.appendChild(cancelledAtDiv)
    document.getElementById(alterationNumber + 'BookingDetails').appendChild(timeframeOuterDiv);
    document.getElementById(alterationNumber + 'BookingDetails').appendChild(reservationDetailsDiv);
    document.getElementById(alterationNumber + 'BookingDetails').appendChild(fxRateDetails);


};




function convertMonthName(month){
    if(month == "01") {
        return "January";
    }
    else if (month == "02") {
        return "February";
    }
    else if (month == "03") {
        return "March";
    }
    else if (month == "04") {
        return "April";
    }
    else if (month == "05") {
        return "May";
    }
    else if (month == "06") {
        return "June";
    }
    else if (month == "07") {
        return "July";
    }
    else if (month == "08") {
        return "August";
    }
    else if (month == "09") {
        return "September";
    }
    else if (month == "10") {
        return "October";
    }
    else if (month == "11") {
        return "November";
    }
    else if (month == "12") {
        return "December";
    }
}






// Inserting pricing Divs through Functions
// Creating Nights Lines
function createNightBarsInsert (start_date,numberNight,alterationNumber,issueCheck) {

if(issueCheck == true) {
    var issueBarGuest = document.createElement('div')
    var issueBarTextGuest = document.createTextNode('There is an issue with these snapshots. The details might be displayed, but most likely the dates are not correct. This is what is shown in the actual Snapshots, so there is an issue on the side of Airbnb. If you suspect an issue on this website, please send me an email!')
    issueBarGuest.appendChild(issueBarTextGuest);
    issueBarGuest.className="issueBar";
    var outputGuest = document.getElementById(alterationNumber + "guestContentDiv")
    outputGuest.insertBefore(issueBarGuest, outputGuest.childNodes[0]);

    var issueBarListing = document.createElement('div')
    var issueBarTextListing = document.createTextNode('There is an issue with these snapshots. The details might be displayed, but most likely the dates are not correct. This is what is shown in the actual Snapshots, so there is an issue on the side of Airbnb. If you suspect an issue on this website, please send me an email!')
    issueBarListing.appendChild(issueBarTextListing);
    issueBarListing.className="issueBar";
    var outputListing = document.getElementById(alterationNumber + "listingContentDiv")
    outputListing.insertBefore(issueBarListing, outputListing.childNodes[0]);

    var issueBarUsd = document.createElement('div')
    var issueBarTextUsd = document.createTextNode('There is an issue with these snapshots. The details might be displayed, but most likely the dates are not correct. This is what is shown in the actual Snapshots, so there is an issue on the side of Airbnb. If you suspect an issue on this website, please send me an email!')
    issueBarUsd.appendChild(issueBarTextUsd);
    issueBarUsd.className="issueBar";
    var outputUsd = document.getElementById(alterationNumber + "usdContentDiv")
    outputUsd.insertBefore(issueBarUsd, outputUsd.childNodes[0]);  
}




var startDay = start_date.substring(8)
    if(numberNight == "1"){
        var month = start_date.substring(5,7)
        month = convertMonthName(month);

        var monthDiv = document.createElement('div');
        var monthNode = document.createTextNode(month);
        monthDiv.appendChild(monthNode);
        monthDiv.className = "monthDivFirst";
        document.getElementById(alterationNumber + "listingContentDiv").appendChild(monthDiv);

        var monthDiv = document.createElement('div');
        var monthNode = document.createTextNode(month);
        monthDiv.appendChild(monthNode);
        monthDiv.className = "monthDivFirst";
        document.getElementById(alterationNumber + "usdContentDiv").appendChild(monthDiv);

        var monthDiv = document.createElement('div');
        var monthNode = document.createTextNode(month);
        monthDiv.appendChild(monthNode);
        monthDiv.className = "monthDivFirst";
        document.getElementById(alterationNumber + "guestContentDiv").appendChild(monthDiv);
    }

    else if(startDay == "01") {
        var month = start_date.substring(5,7)
        month = convertMonthName(month);

        var monthDiv = document.createElement('div');
        var monthNode = document.createTextNode(month);
        monthDiv.appendChild(monthNode);
        monthDiv.className = "monthDiv";
        document.getElementById(alterationNumber + "listingContentDiv").appendChild(monthDiv);

        var monthDiv = document.createElement('div');
        var monthNode = document.createTextNode(month);
        monthDiv.appendChild(monthNode);
        monthDiv.className = "monthDiv";
        document.getElementById(alterationNumber + "usdContentDiv").appendChild(monthDiv);

        var monthDiv = document.createElement('div');
        var monthNode = document.createTextNode(month);
        monthDiv.appendChild(monthNode);
        monthDiv.className = "monthDiv";
        document.getElementById(alterationNumber + "guestContentDiv").appendChild(monthDiv);

    }


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




        //USD
        var divDayHeaderUsdInsert = document.createElement("div");
        divDayHeaderUsdInsert.className="divDayHeader";
        divDayHeaderUsdInsert.id=alterationNumber + "divDayUsdHeader"+counter;
        document.getElementById(alterationNumber + "ContentPricesDivUsd"+counter).appendChild(divDayHeaderUsdInsert);


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



        // Guest
        var divDayHeaderGuestInsert = document.createElement("div");
        divDayHeaderGuestInsert.className="divDayHeader";
        divDayHeaderGuestInsert.id=alterationNumber + "divDayGuestHeader"+counter;
        document.getElementById(alterationNumber + "ContentPricesDivGuest"+counter).appendChild(divDayHeaderGuestInsert);

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




}





// Extra Guest insert
function createExtraGuestInsert (counter,extra_guest_fee_type,extraGuestsIncluded,extraGuestsNumber,listingCurrencySymbol,extraGuestsPriceListing,extra_guest_fee_Listing,extra_guest_fee_USD,guestCurrencySymbol,extraGuestsPriceGuest,extra_guest_fee_Guest,alterationNumber,extraGuestFeeUSDNotApplied,extraGuestFeeGuestNotApplied,extraGuestFeeListingNotApplied) {
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
        if(extraGuestsPriceListing > 0) {
        moreInfoExtraGuestInclNode = document.createTextNode (listingCurrencySymbol +" " + extraGuestsPriceListing)
      }
      else{
        moreInfoExtraGuestInclNode = document.createTextNode (listingCurrencySymbol +" " + extraGuestFeeListingNotApplied)
      }
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
        if(extraGuestsPriceGuest >0) {
        moreInfoExtraGuestInclNode = document.createTextNode (guestCurrencySymbol +" " + extraGuestsPriceGuest)
      }
      else{
        moreInfoExtraGuestInclNode = document.createTextNode (guestCurrencySymbol +" " + extraGuestFeeGuestNotApplied)
      }
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




    function adjustTypePrice(type){
            type = type.toLowerCase();
            type = type.replace(/_/g," ");
            type = type.charAt(0).toUpperCase() + type.slice(1);


            if (type === "Default daily") {
            return "Base Price";
    }
            else if (type === "Weekend daily") {
            return "Weekend Pricing";
        }
            else if (type === "Custom daily") {
            return "Custom Price";
        }
            else if (type === "Smart pricing daily") {
            return "Smart Pricing";
        }
        else{
            return type;
        }
    
    }




    function convertDiscountPercentage(discountPercentage) {

      if (discountPercentage === 0) {
        discountPercentage = 100;
      }
      else if (discountPercentage === 1||discountPercentage === 2||discountPercentage === 3||discountPercentage === 4||discountPercentage === 5||discountPercentage === 6||discountPercentage === 7||discountPercentage === 8||discountPercentage === 9) {
        discountPercentage = discountPercentage *10;
    }
      else {
        discountPercentage === discountPercentage;
      }

      return (100 - discountPercentage);
}



function convertDiscountName(numberNight,discountType,discountTypeLength,discountMinLength) {

      if (numberNight >=28 && discountType== "Length of stay discount") {
        return "Monthly Discount";
      }
      else if (numberNight >=7 && discountType== "Length of stay discount") {
        return "Weekly Discount";
      }
      else if (discountMinLength >0 && discountType== "Length of stay discount"){
        return discountMinLength +"-night discount";
}
    else{
        return discountType;
      }
};






function createDiscountInsert(alterationNumber,counter,discountTypeID,discountPercentage,discountTypeLength,discountAmountListing,discountAmountUSD,discountAmountGuest) {
           // Listing
        var divDayInsert = document.createElement("div");
        divDayInsert.className="dailyDiv";
        divDayInsert.id=alterationNumber + "dailyDivListing"+counter;
        document.getElementById(alterationNumber + "ContentPricesDivListing"+counter).appendChild(divDayInsert);


        var divDayInsert = document.createElement("div");
        divDayInsert.className="discountDiv";
        divDayInsert.id=alterationNumber + "discountDiv"+counter;
        document.getElementById(alterationNumber + "dailyDivListing"+counter).appendChild(divDayInsert);
          
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
        discountAmountListingInsert.id= alterationNumber + "discountAmountListing"+counter+"-"+ ($("#" + alterationNumber + "ContentPricesDivListing"+counter).find(".discountAmountListing").length+1);
        document.getElementById(alterationNumber + "discountDivListing"+counter+discountTypeID).appendChild(discountAmountListingInsert);


       // USD
        var divDayInsert = document.createElement("div");
        divDayInsert.className="dailyDiv";
        divDayInsert.id=alterationNumber + "dailyDivUsd"+counter;
        document.getElementById(alterationNumber + "ContentPricesDivUsd"+counter).appendChild(divDayInsert);


        var divDayInsert = document.createElement("div");
        divDayInsert.className="discountDiv";
        divDayInsert.id=alterationNumber + "discountDiv"+counter;
        document.getElementById(alterationNumber + "dailyDivUsd"+counter).appendChild(divDayInsert);


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
        discountAmountUSDInsert.id= alterationNumber + "discountAmountUSD"+counter+"-"+ ($("#" + alterationNumber + "ContentPricesDivUsd"+counter).find(".discountAmountUSD").length+1);
        document.getElementById(alterationNumber + "discountDivUsd"+counter+discountTypeID).appendChild(discountAmountUSDInsert);


        // GUEST
        var divDayInsert = document.createElement("div");
        divDayInsert.className="dailyDiv";
        divDayInsert.id=alterationNumber + "dailyDivGuest"+counter;
        document.getElementById(alterationNumber + "ContentPricesDivGuest"+counter).appendChild(divDayInsert);

        var divDayInsert = document.createElement("div");
        divDayInsert.className="discountDiv";
        divDayInsert.id=alterationNumber + "discountDiv"+counter;
        document.getElementById(alterationNumber + "dailyDivGuest"+counter).appendChild(divDayInsert);

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
        discountAmountGuestInsert.id= alterationNumber + "discountAmountGuest"+counter+"-"+ ($("#" + alterationNumber + "ContentPricesDivGuest"+counter).find(".discountAmountGuest").length+1);
        document.getElementById(alterationNumber + "discountDivGuest"+counter+discountTypeID).appendChild(discountAmountGuestInsert);

 
}

    /* Clearing Text in EntreeField */
    function cleartext() {
        document.getElementById('EntreeField').value = ""
    }



            /*changing inserted text*/
function transformtext() {


$("#DivMenuField").children(":not(#borderDivMenuField)").remove();
$("#DivOutputField").children(":not(#borderDivOutputField)").remove();
$("#DivRightField").children(":not(#borderDivRightField)").remove();

var arrowOutput = document.createElement('img')
arrowOutput.setAttribute('src', 'images/arrowLeft.png');
arrowOutput.id = "arrowOutput";
document.getElementById('DivOutputField').appendChild(arrowOutput);
document.getElementById('arrowOutput').ondragstart = function() { return false; };







// Inserted text finding
    var insertedtext = document.getElementById("EntreeField").value;


// If not full snapshot inserted
if(insertedtext.indexOf('admin_notes') > -1 && insertedtext.indexOf('visible_pictures') > -1){
  //Snapshots correctly inserted
}
else{
  document.getElementById('arrowOutput').style.display = 'none';

  //creating error message
  var errorSnapshotDiv = document.createElement('div');
  errorSnapshotDiv.id = 'errorSnapshotDiv';

  errorSnapshotHeader = document.createElement('div');
  errorSnapshotHeader.id = 'errorSnapshotHeader';
  errorSnapshotHeaderNode = document.createTextNode('Oops, Something went wrong here!')
  errorSnapshotHeader.appendChild(errorSnapshotHeaderNode)

  errorSnapshotText = document.createElement('div');
  errorSnapshotText.id = 'errorSnapshotText';
  errorSnapshotTextNode = document.createTextNode('There seems to be an issue with the snapshots that was pasted in the textbox. Please make sure to select all, copy all and paste all by following these steps:')
  errorSnapshotText.appendChild(errorSnapshotTextNode);

  errorSnapshotSteps = document.createElement('div');
  errorSnapshotSteps.id = 'errorSnapshotSteps';
  errorSnapshotStepsNode1 = document.createTextNode('1. Go to the snapshot page through Nova')
  errorSnapshotStepsBreak1 = document.createElement('br');
  errorSnapshotStepsNode2 = document.createTextNode('2. Select all the text by holding the CMD button (or Ctrl on windows) and by pressing the A button')
  errorSnapshotStepsBreak2 = document.createElement('br');
  errorSnapshotStepsNode3 = document.createTextNode('3. When all text is selected, hold the CMD button (or Ctrl on windows) and by pressing the C button')
  errorSnapshotStepsBreak3 = document.createElement('br');
  errorSnapshotStepsNode4 = document.createTextNode('4. Now go to this page, the Snapshot tool, and paste the text in the textfield box above. Then select the "View Snapshots" button')
  errorSnapshotSteps.appendChild(errorSnapshotStepsNode1);
  errorSnapshotSteps.appendChild(errorSnapshotStepsBreak1);
  errorSnapshotSteps.appendChild(errorSnapshotStepsNode2);
  errorSnapshotSteps.appendChild(errorSnapshotStepsBreak2);
  errorSnapshotSteps.appendChild(errorSnapshotStepsNode3);
  errorSnapshotSteps.appendChild(errorSnapshotStepsBreak3);
  errorSnapshotSteps.appendChild(errorSnapshotStepsNode4);
  

  errorSnapshotDiv.appendChild(errorSnapshotHeader);
  errorSnapshotDiv.appendChild(errorSnapshotText)
  errorSnapshotDiv.appendChild(errorSnapshotSteps)

  document.getElementById('DivOutputField').appendChild(errorSnapshotDiv);

        $('html,body').animate({
        scrollTop: $("#DivOutputField").offset().top},
        'slow');
  return;
}





    var snapshotText = insertedtext.substring(insertedtext.indexOf("admin_notes"),insertedtext.indexOf("visible_pictures")+10)
if(snapshotText.includes('Justen') || snapshotText.includes('justen') || snapshotText.includes('Aleksei') || snapshotText.includes('aleksei') ) {
    // alert("Awesome, that's a booking that involves the developer!");
}





// Alteration Checking
var alterationTotal = ((insertedtext.match(/base_price_breakdown/g) || []).length - 1 );


var alterationNumber = 0;

while (alterationTotal >= alterationNumber) {//While — Looping through Alterations



// Creating Pricing text 
    var snapshotText = insertedtext.substring(insertedtext.indexOf("admin_notes"),insertedtext.indexOf("visible_pictures")+10)
    var insertedtoptext =  snapshotText.substring(snapshotText.indexOf("admin_notes") + 1,snapshotText.indexOf("reservation_schedule2s")-2);
    var insertedPricingText = snapshotText.substring(snapshotText.indexOf("pricing_snapshot_data") ,snapshotText.indexOf("admin_points")+15);

    insertedtext = insertedtext.substring(insertedtext.indexOf('visible_pictures')+15);


// Errors, Working on it
if (insertedPricingText.includes ('"WEEKLY_PRICE"') || insertedtext.includes ('"MONTHLY_PRICE"')) {
 var issue = true;
}
else {
    issue = false;
}





if (alterationTotal == 0) {
    noAlterationContent(alterationNumber);
}
else {
    createAlterationButton(alterationNumber,alterationTotal)
}
    createDropdownMenu(alterationNumber);




        /* Scroll To Output */
        $('html,body').animate({
        scrollTop: $("#DivOutputField").offset().top},
        'slow');









/* Reservation Details Pulling Data */

var reservation_code = snapshotText.substring(snapshotText.indexOf("confirmation_code") + 19,snapshotText.indexOf("coupon_id")-2);

var nameFirstGuest = snapshotText.substring(snapshotText.indexOf('available_hosting_count')+15);
nameFirstGuest = nameFirstGuest.substring(nameFirstGuest.indexOf('available_hosting_count')+10)
nameFirstGuest = nameFirstGuest.substring(nameFirstGuest.indexOf('first_name')-5);
nameFirstGuest = nameFirstGuest.substring(nameFirstGuest.indexOf('first_name')+12,nameFirstGuest.indexOf('hosting_count')-2);

var nameLastGuest = snapshotText.substring(snapshotText.indexOf('available_hosting_count')+15);
nameLastGuest = nameLastGuest.substring(nameLastGuest.indexOf('available_hosting_count')+10)
nameLastGuest = nameLastGuest.substring(nameLastGuest.indexOf('last_name')-4);
nameLastGuest = nameLastGuest.substring(nameLastGuest.indexOf('last_name')+11, nameLastGuest.indexOf('market')-2);

nameGuest = nameFirstGuest + " " + nameLastGuest;


var nameFirstHost = snapshotText.substring(snapshotText.indexOf('available_hosting_count')+15);
nameFirstHost = nameFirstHost.substring(nameFirstHost.indexOf('first_name')-5);
nameFirstHost = nameFirstHost.substring(nameFirstHost.indexOf('first_name')+12,nameFirstHost.indexOf('hosting_count')-2);

var nameLastHost = snapshotText.substring(snapshotText.indexOf('available_hosting_count')+15);
nameLastHost = nameLastHost.substring(nameLastHost.indexOf('last_name')-4);
nameLastHost = nameLastHost.substring(nameLastHost.indexOf('last_name')+11, nameLastHost.indexOf('market')-2);

nameHost = nameFirstHost + " " + nameLastHost;


var listingID = snapshotText.substring(snapshotText.indexOf('hypothetical_rank'),snapshotText.indexOf('instant_book_lead_time'));
listingID = listingID.substring(listingID.indexOf('id')+4,listingID.indexOf('instant_book')-2);




var guestID = snapshotText.substring(snapshotText.indexOf('available_hosting_count')+15);
guestID = guestID.substring(guestID.indexOf('available_hosting_count')+10)
guestID = guestID.substring(guestID.indexOf('facebook_id')+20);
guestID = guestID.substring(guestID.indexOf('id')+4,guestID.indexOf('initial_ip')-2);

var hostID = snapshotText.substring(snapshotText.indexOf('available_hosting_count')+15);
hostID = hostID.substring(hostID.indexOf('facebook_id')+20);
hostID = hostID.substring(hostID.indexOf('id')+4,hostID.indexOf('initial_ip')-2);


var created_at = insertedtoptext.substring(insertedtoptext.indexOf("created_at") + 12,insertedtoptext.indexOf("currency_fee")-12) + " at " + insertedtoptext.substring(insertedtoptext.indexOf("created_at") + 23,insertedtoptext.indexOf("currency_fee")-3);

var pending_began_at = snapshotText.substring(snapshotText.indexOf("pending_began_at") + 18,snapshotText.indexOf("pending_expires_at")-12) + " at " + snapshotText.substring(snapshotText.indexOf("pending_began_at") + 29,snapshotText.indexOf("pending_expires_at")-3);

var pending_expires_at = snapshotText.substring(snapshotText.indexOf("pending_expires_at") + 20,snapshotText.indexOf("price_version_count")-12) + " at " + snapshotText.substring(snapshotText.indexOf("pending_expires_at") + 31,snapshotText.indexOf("price_version_count")-3);

if (snapshotText.substring(snapshotText.indexOf("host_responded_at") + 18, snapshotText.indexOf("host_responded_at") + 22) == "NULL") {
    var host_Responded_at = "N/A";
}
else {
    var host_Responded_at = snapshotText.substring(snapshotText.indexOf("host_responded_at") + 18,snapshotText.indexOf("host_vat_country")-11) + " at " + snapshotText.substring(snapshotText.indexOf("host_responded_at") + 29,snapshotText.indexOf("host_vat_country")-2);
}


if (snapshotText.substring(snapshotText.indexOf("canceled_at") + 12,snapshotText.indexOf("canceled_at")+16)=="NULL") {
    var canceled_at = "N/A";
}
else {
    var canceled_at = snapshotText.substring(snapshotText.indexOf("canceled_at") + 12,snapshotText.indexOf("cancellation_guest_fee")-11) + " at " + snapshotText.substring(snapshotText.indexOf("canceled_at") + 23,snapshotText.indexOf("cancellation_guest_fee")-2);
}


var instantBookRequirement = snapshotText.substring(snapshotText.indexOf('instant_booking_allowed')-2);
instantBookRequirement = instantBookRequirement.substring(instantBookRequirement.indexOf('instant_booking_allowed')+26,instantBookRequirement.indexOf('is_generic')-2);
instantBookRequirement = convertInstantBookRequirement(instantBookRequirement);


var numberOfGuests = snapshotText.substring(snapshotText.indexOf('number_of_guests')-2);
numberOfGuests = numberOfGuests.substring(numberOfGuests.indexOf('number_of_guests')+18,numberOfGuests.indexOf('original_payment2_id')-2);

var numberOfNights = snapshotText.substring(snapshotText.indexOf('lock_version')+10);
numberOfNights = numberOfNights.substring(numberOfNights.indexOf('nights')+8,numberOfNights.indexOf('number_of_guests')-2);

var cancel_policy_raw = snapshotText.substring(snapshotText.indexOf("cancel_policy") + 15,snapshotText.indexOf("canceled_at")-2);
cancel_policy = convertCancellationPolicy(cancel_policy_raw);

var checkinTime = snapshotText.substring(snapshotText.indexOf('check_in_time')-2);
checkinTime = checkinTime.substring(checkinTime.indexOf('check_in_time')+15,checkinTime.indexOf('check_out_time')-2);
if(checkinTime == "0" || checkinTime == '-1'){
    checkinTime = "Flexible";
}
else if (checkinTime == 'NULL' || checkinTime == 'ULL' || checkinTime == 'LL' || checkinTime == 'UL' || checkinTime == 'LL' || checkinTime == 'ULL') {
  checkinTime = "Not Set"
}
else{
checkinTime = checkinTime + ":00";
}

var checkoutTime = snapshotText.substring(snapshotText.indexOf('check_out_time')-2);
checkoutTime = checkoutTime.substring(checkoutTime.indexOf('check_out_time')+16,checkoutTime.indexOf('city')-2);
if(checkoutTime == "0" || checkinTime == '-1') {
    checkoutTime = "Flexible";
}
else if (checkoutTime == 'NULL' || checkoutTime == 'ULL' || checkoutTime == 'LL' || checkoutTime == 'UL' || checkoutTime == 'LL' || checkoutTime == 'ULL') {
  checkoutTime = "Not Set"
}
else{
checkoutTime = checkoutTime + ":00";
}


var reviewsBlocked = snapshotText.substring(snapshotText.indexOf('block_reviews')-2);
reviewsBlocked = reviewsBlocked.substring(reviewsBlocked.indexOf('block_reviews')+15,reviewsBlocked.indexOf('cancel_policy')-2)
if(reviewsBlocked == "false"){
    reviewsBlocked = "The reviews are not blocked";
}
else{
    reviewsBlocked = "The reviews are blocked";
}



var guestCurrencyRate = snapshotText.substring(snapshotText.indexOf('guest_currency_rate')-2);
guestCurrencyRate = guestCurrencyRate.substring(guestCurrencyRate.indexOf('guest_currency_rate')+21,guestCurrencyRate.indexOf('guest_currency_spread')-2)

var hostCurrencyRate = snapshotText.substring(snapshotText.indexOf('host_currency_rate')-2);
hostCurrencyRate = hostCurrencyRate.substring(hostCurrencyRate.indexOf('host_currency_rate')+20, hostCurrencyRate.indexOf('host_fee')-2);


var guestCurrency = snapshotText.substring(snapshotText.indexOf('guest_currency')-2);
guestCurrency = guestCurrency.substring(guestCurrency.indexOf('guest_currency')+16,guestCurrency.indexOf('guest_currency_rate')-2)

var hostCurrency = snapshotText.substring(snapshotText.indexOf('guest_currency')-2);
hostCurrency = hostCurrency.substring(hostCurrency.indexOf('host_currency')+15,hostCurrency.indexOf('host_currency_rate')-2)

var checkinDate = snapshotText.substring(snapshotText.indexOf('start_date')-4);
checkinDate = checkinDate.substring(checkinDate.indexOf('start_date')+12,checkinDate.indexOf('status')-2);

var checkoutDate = snapshotText.substring(snapshotText.indexOf('end_date')-4);
checkoutDate = checkoutDate.substring(checkoutDate.indexOf('end_date')+10,checkoutDate.indexOf('error_flag')-2);
if((checkoutDate.length)>12){
  checkoutDate="";
}


createReservationDetails(alterationNumber,reservation_code,nameGuest,nameHost,listingID,guestID,hostID,created_at,pending_began_at,pending_expires_at,host_Responded_at,canceled_at,instantBookRequirement,numberOfGuests,numberOfNights,cancel_policy,checkinTime,checkoutTime,reviewsBlocked,guestCurrencyRate,hostCurrencyRate,guestCurrency,hostCurrency,checkinDate,checkoutDate);





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
roomsLinkInsert.setAttribute("target","_blank")
roomsLinkInsert.href = roomsLink;
roomsLinkInsert.className="linkListing"
roomsLinkDiv.appendChild(roomsLinkInsert);

var mysLinkDiv = document.createElement('div');
mysLinkDiv.className="linkListingDiv"
var mysLinkInsert = document.createElement('a');
var mysLinkNode = document.createTextNode('MYS Page');
mysLinkInsert.appendChild(mysLinkNode);
mysLinkInsert.title = 'Manage Your Space Page';
mysLinkInsert.setAttribute("target","_blank")
mysLinkInsert.href = mysLink;
mysLinkInsert.className="linkListing"
mysLinkDiv.appendChild(mysLinkInsert);

var linksDiv = document.createElement('div');
linksDiv.id=alterationNumber + "linksListingDiv"
linksDiv.className= "linksListingDiv"
linksDiv.appendChild(roomsLinkDiv);
linksDiv.appendChild(mysLinkDiv);

document.getElementById(alterationNumber + "DivListingDetails").prepend(linksDiv);

/* Listing Type */
var listingType = snapshotText.substring(snapshotText.indexOf('review_score_percentile')+10);
listingType = listingType.substring(listingType.indexOf('room_type')+11,listingType.indexOf('security_deposit_native')-1);
document.getElementById(alterationNumber + "typeListingDetails").innerText = listingType;


/* Listing title */
var listingTitle = snapshotText.substring(snapshotText.indexOf('main_photo_is_dirty'),snapshotText.indexOf('place_recommendations_count'));
listingTitle = listingTitle.substring(listingTitle.indexOf('monthly_price_native'),listingTitle.indexOf('native_currency')-1);
listingTitle = listingTitle.substring(listingTitle.indexOf('name')+6);
document.getElementById(alterationNumber + "HeaderListingDetails").innerText = listingTitle;

/* Listing Location */
var listingLocation = snapshotText.substring(snapshotText.indexOf('are_children_allowed'));
listingLocation = listingLocation.substring(listingLocation.indexOf('check_out_time'),listingLocation.indexOf('craigslist_provide_reminder'));
listingLocation = listingLocation.substring(listingLocation.indexOf('city')+6,listingLocation.indexOf('city_native')-2);
document.getElementById(alterationNumber + "locationListing").innerText = listingLocation;



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
listingDescription = listingDescription.substring(listingDescription.indexOf('deleted_at'),listingDescription.indexOf('directions')-2);
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

    var amenityDiv = document.createElement("div");
    var amenityName = document.createElement("div");
    var amenityNameNode = document.createTextNode(amenity);
    var amenityPic = document.createElement('div')

    amenityName.className="amenityName";
    amenityName.appendChild(amenityNameNode);
    amenityDiv.className="amenityDiv";
    amenityDiv.appendChild(amenityPic);
    amenityDiv.appendChild(amenityName);

    document.getElementById(alterationNumber + "AmenitiesData").appendChild(amenityDiv);

}
}


//Data once in snapshot
else {
var amenitiesTotal = snapshotText.substring(snapshotText.indexOf('amenities_with_names')-10,snapshotText.indexOf('price_for_extra_person_usd'));
amenitiesTotal = amenitiesTotal.substring(amenitiesTotal.indexOf('amenities_with_names'),amenitiesTotal.indexOf('price_usd'));


  amenitiesTotal = amenitiesTotal.replace("\n","XXX")
while (amenitiesTotal.includes(" -")) {

    if (amenitiesTotal.includes('(')) {
    var amenity = amenitiesTotal.substring(amenitiesTotal.indexOf(" -")+3,amenitiesTotal.indexOf("(")-1);
    amenitiesTotal = amenitiesTotal.replace("(","XXX")
}
    else {
        var amenity = amenitiesTotal.substring(amenitiesTotal.indexOf(" -")+3,amenitiesTotal.indexOf("\n"));
    }
  amenitiesTotal = amenitiesTotal.replace(" -","XXX")
  amenitiesTotal = amenitiesTotal.replace("\n","XXX")

    var amenityDiv = document.createElement("div");
    var amenityName = document.createElement("div");
    var amenityNameNode = document.createTextNode(amenity);
    var amenityPic = document.createElement('div')
    var amenityImage = document.createElement('img')

    amenityPicName = amenity.replace('/', "-")

    amenityImageName = setAmenityImageName(amenityPicName);


    amenityImage.setAttribute('src',amenityImageName);

    amenityImage.className='amenityImage';
    amenityName.className="amenityName";
    amenityName.appendChild(amenityNameNode);
    amenityPic.className="amenityPic";
    amenityDiv.className="amenityDiv";
    amenityPic.appendChild(amenityImage);
    amenityDiv.appendChild(amenityPic);
    amenityDiv.appendChild(amenityName);

    document.getElementById(alterationNumber + "AmenitiesData").appendChild(amenityDiv);
}
}


/* Listing House Rules */
var listingHouseRules = snapshotText.substring(snapshotText.indexOf('has_premium_override'),snapshotText.indexOf('hypothetical_rank')+17);
var listingHouseRules = listingHouseRules.substring(listingHouseRules.indexOf('house_rules')+13,listingHouseRules.indexOf('hypothetical_rank')-1);
document.getElementById(alterationNumber + "HouseRulesListingDetails").innerText = listingHouseRules;


/* Google Maps 
function initMap() {
  var myLatLng = {lat: -25.363, lng: 131.044};

  var map = new google.maps.Map(document.getElementById(alterationNumber + "listingMap"), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Location of the Listing'
  });
}
/*
        var createListingMapScript = document.createElement("script");
        createListingMapScript.type = "text/javascript";
        createListingMapScript.defer = true;
        createListingMapScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC9zMgngKoB0gZIiN0zmO0rvrmpG59MoEo&callback=initMap";
        $("#" + alterationNumber + 'DivListingDetails').append(createListingMapScript);




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
        var SnapshotPriceText = insertedPricingText.substring(insertedPricingText.indexOf('pricing_history'), insertedPricingText.indexOf('admin_points'));
        var emptyPricingHistory = false;
    }
    else { // If Empty
        var SnapshotPriceText = insertedPricingText.substring(insertedPricingText.indexOf('line_items'), insertedPricingText.indexOf('guest_fee_reservation_stamp'));
        var emptyPricingHistory = true;
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
    var SnapshotPriceText = insertedPricingText;

        var listingCurrency = SnapshotPriceText.substring(SnapshotPriceText.indexOf('"listing_currency":"')+20,SnapshotPriceText.indexOf('"listing_currency":"')+23);
        var guestCurrency = insertedtoptext.substring(insertedtoptext.indexOf('guest_currency')-1);
        guestCurrency = guestCurrency.substring(guestCurrency.indexOf('guest_currency')+16, guestCurrency.indexOf('guest_currency_rate')-2);

        var listingCurrencyRate = snapshotText.substring(snapshotText.indexOf('host_currency_rate')-10,snapshotText.indexOf('host_fee_revenue_cents')-2)
        listingCurrencyRate = parseFloat(listingCurrencyRate.substring(listingCurrencyRate.indexOf('host_currency_rate')+20,listingCurrencyRate.indexOf('host_fee')-2))
        var guestCurrencyRate = parseFloat(snapshotText.substring(snapshotText.indexOf('guest_currency_rate')+21,snapshotText.indexOf('guest_currency_spread')-2))

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

    var listingTextDiv = document.createElement('div');
    var usdTextDiv = document.createElement('div');
    var guestTextDiv = document.createElement('div');
    listingTextDiv.className = "expandSpecifyTypePrice";
    usdTextDiv.className = "expandSpecifyTypePrice";
    guestTextDiv.className = "expandSpecifyTypePrice";
    var listingTextNode = document.createTextNode("Host: ")
    var usdTextNode = document.createTextNode("System: ")
    var guestTextNode = document.createTextNode("Guest: ")
    listingTextDiv.appendChild(listingTextNode);
    usdTextDiv.appendChild(usdTextNode);
    guestTextDiv.appendChild(guestTextNode);


    var listingCurrencyDiv = document.createElement('div');
    var usdCurrencyDiv = document.createElement('div');
    var guestCurrencyDiv = document.createElement('div');
    listingCurrencyDiv.className = "expandSpecifyCurrencyPrice";
    usdCurrencyDiv.className = "expandSpecifyCurrencyPrice";
    guestCurrencyDiv.className = "expandSpecifyCurrencyPrice";

    var listingCurrencyNode = document.createTextNode(listingCurrency)
    var usdCurrencyNode = document.createTextNode("USD")
    var guestCurrencyNode = document.createTextNode(guestCurrency)
    listingCurrencyDiv.appendChild(listingCurrencyNode);
    usdCurrencyDiv.appendChild(usdCurrencyNode);
    guestCurrencyDiv.appendChild(guestCurrencyNode);

    listingDiv.appendChild(listingTextDiv);
    usdDiv.appendChild(usdTextDiv);
    guestDiv.appendChild(guestTextDiv);

    listingDiv.appendChild(listingCurrencyDiv);
    usdDiv.appendChild(usdCurrencyDiv);
    guestDiv.appendChild(guestCurrencyDiv);



    listingDiv.style.display = "none";
    usdDiv.style.display = "none";
    guestDiv.style.display = "none";
    listingDiv.id = alterationNumber + "listingPriceDiv";
    usdDiv.id = alterationNumber + "usdPriceDiv";
    guestDiv.id = alterationNumber +"guestPriceDiv";
    listingDiv.className = "listingPriceDiv priceSpecifyDiv";
    usdDiv.className = "usdPriceDiv priceSpecifyDiv";
    guestDiv.className = "guestPriceDiv priceSpecifyDiv";
    listingContent.id = alterationNumber + "listingContentDiv"
    usdContent.id = alterationNumber + "usdContentDiv"
    guestContent.id = alterationNumber + "guestContentDiv"
    listingContent.className =  "listingContentDiv"
    usdContent.className =  "usdContentDiv"
    guestContent.className =   "guestContentDiv"
    listingDiv.setAttribute("onclick","ClickPricingBarHeaderListing("+alterationNumber+",this);");
    usdDiv.setAttribute("onclick","ClickPricingBarHeaderUsd("+alterationNumber+",this);");
    guestDiv.setAttribute("onclick","ClickPricingBarHeaderGuest("+alterationNumber+",this);");


    var listingContainer = document.createElement('div');
    listingContainer.className = "listingContainer"
    listingContainer.id = alterationNumber + "listingContainer"
    listingContainer.style.display = "none";

    var usdContainer = document.createElement('div');
    usdContainer.className = "usdContainer"
    usdContainer.id = alterationNumber + "usdContainer"
    usdContainer.style.display = "none";
    
    var guestContainer = document.createElement('div');
    guestContainer.className = "guestContainer"
    guestContainer.id = alterationNumber + "guestContainer"
    guestContainer.style.display = "none";

    document.getElementById(alterationNumber + "DropdownReservationPricing").after(guestDiv);
    document.getElementById(alterationNumber + "DropdownReservationPricing").after(usdDiv);
    document.getElementById(alterationNumber + "DropdownReservationPricing").after(listingDiv);


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


// Creating Raw Snapshot Specify Header
    var rawSnapshotDiv = document.createElement("div");
    var rawSnapshotContent = document.createElement("div")

    var rawSnapshotTextDiv = document.createElement('div');
    rawSnapshotTextDiv.className = "expandSpecifyTypePrice expandRawSnapshot";
    var rawSnapshotTextNode = document.createTextNode("Raw Snapshots")
    rawSnapshotTextDiv.appendChild(rawSnapshotTextNode);


    rawSnapshotDiv.appendChild(rawSnapshotTextDiv);


    rawSnapshotDiv.style.display = "none";
    rawSnapshotDiv.id = alterationNumber + "rawSnapshotDiv";
    rawSnapshotDiv.className = "rawSnapshotDiv priceSpecifyDiv";
    rawSnapshotContent.id = alterationNumber + "rawSnapshotContent"
    rawSnapshotContent.className =  "rawSnapshotContent"
    rawSnapshotDiv.setAttribute("onclick","ClickPricingBarHeaderRaw("+alterationNumber+",this);");

    var rawSnapshotContainer = document.createElement('div');
    rawSnapshotContainer.className = "rawSnapshotContainer"
    rawSnapshotContainer.id = alterationNumber + "rawSnapshotContainer"
    rawSnapshotContainer.style.display = "none";

    document.getElementById(alterationNumber + "guestPriceDiv").after(rawSnapshotDiv);


    document.getElementById(alterationNumber + "OverviewNights").appendChild(rawSnapshotContainer)


    document.getElementById(alterationNumber + "rawSnapshotContainer").appendChild(rawSnapshotContent);








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

    createNightBarsInsert (start_date,numberNight,alterationNumber,issue);
    issue = false;
    } //End While
} //if special offer






    /*Nights */
else {


// Snapshot #2
if  (insertedPricingText.includes("guest_fee_reservation_stamp")) {
    var replacedSnapshotPriceText = SnapshotPriceText;
    var dailyPriceSnapshot2ReplacedText = SnapshotPriceText;  


// Weekly Price Snapshot
if (insertedPricingText.includes('"WEEKLY_PRICE"')) {

        var insertedDailyPricingText = SnapshotPriceText.substring(SnapshotPriceText.indexOf('"WEEKLY_PRICE"') - 10);
        insertedDailyPricingText = insertedDailyPricingText.substring(insertedDailyPricingText.indexOf('WEEKLY_PRICE')-5)

        var allDailyPriceReplacedText = insertedDailyPricingText;
        var dailyPriceReplacedText =  SnapshotPriceText;

    while(allDailyPriceReplacedText.includes('"WEEKLY_PRICE"')) {

        var nightReplacedText = allDailyPriceReplacedText.substring(allDailyPriceReplacedText.indexOf('"WEEKLY_PRICE"')-3,allDailyPriceReplacedText.indexOf('WEEKLY_DISCOUNT'));
        nightReplacedText = nightReplacedText.replace ('start_date','X-X');
        nightReplacedText = nightReplacedText.replace ('start_date','X-X');
        nightReplacedText = nightReplacedText.replace ('nights','X-X');
        nightReplacedText = nightReplacedText.replace ('nights','X-X');

            while (nightReplacedText.includes('start_date')) {
                var start_date = nightReplacedText.substring(nightReplacedText.indexOf('start_date')+14,nightReplacedText.indexOf('nights')-4);

                nightReplacedText = nightReplacedText.replace('start_date','X-X');
                nightReplacedText = nightReplacedText.replace('nights','X-X');

                    numberNight++;
                    createNightBarsInsert (start_date,numberNight,alterationNumber,issue);
                    issue = false;
            }
        allDailyPriceReplacedText = allDailyPriceReplacedText.replace('"WEEKLY_PRICE"','X-X')
        allDailyPriceReplacedText = allDailyPriceReplacedText.replace('"WEEKLY_DISCOUNT"','X-X')
    } // While if text includes Weekly_price


} // End If weekly Price


// Monthly Price Snapshot
else if (insertedPricingText.includes('"MONTHLY_PRICE"')) {
        var insertedDailyPricingText = SnapshotPriceText.substring(SnapshotPriceText.indexOf('"MONTHLY_PRICE"') - 10);
        insertedDailyPricingText = insertedDailyPricingText.substring(insertedDailyPricingText.indexOf('MONTHLY_PRICE')-5)

        var allDailyPriceReplacedText = insertedDailyPricingText;
        var dailyPriceReplacedText =  SnapshotPriceText;

    while(allDailyPriceReplacedText.includes('"MONTHLY_PRICE"')) {

        var nightReplacedText = allDailyPriceReplacedText.substring(allDailyPriceReplacedText.indexOf('"MONTHLY_PRICE"')-3,allDailyPriceReplacedText.indexOf('MONTHLY_DISCOUNT'));
        nightReplacedText = nightReplacedText.replace ('start_date','X-X');
        nightReplacedText = nightReplacedText.replace ('start_date','X-X');
        nightReplacedText = nightReplacedText.replace ('nights','X-X');
        nightReplacedText = nightReplacedText.replace ('nights','X-X');

            while (nightReplacedText.includes('start_date')) {
                var start_date = nightReplacedText.substring(nightReplacedText.indexOf('start_date')+14,nightReplacedText.indexOf('nights')-4);

                nightReplacedText = nightReplacedText.replace('start_date','X-X');
                nightReplacedText = nightReplacedText.replace('nights','X-X');

                    numberNight++;
                    createNightBarsInsert (start_date,numberNight,alterationNumber,issue);
                    issue = false;
            }
        allDailyPriceReplacedText = allDailyPriceReplacedText.replace('"MONTHLY_PRICE"','X-X')
        allDailyPriceReplacedText = allDailyPriceReplacedText.replace('"MONTHLY_DISCOUNT"','X-X')
    } // While if text includes MONTHLY_PRICE


} // End If Monthly Price






else {
// Normal Type Snapshot #2 

if(emptyPricingHistory == true) { // If Snapshot 2, Pricing history is Empty
    while(replacedSnapshotPriceText.includes('"settings"=>[{"type"=>')) {
        var itemLine = replacedSnapshotPriceText.substring(replacedSnapshotPriceText.indexOf('"settings"=>[{"type"=>"'))
        itemLine = itemLine.substring(itemLine.indexOf('['),itemLine.indexOf("}]}}"))

        if(itemLine.includes('discount')) {
        } // Discount Line
        else {
        start_date = itemLine.substring(itemLine.indexOf('start_date')+14,itemLine.indexOf('nights')-4)
        numberNight++;

        createNightBarsInsert (start_date,numberNight,alterationNumber,issue);
        issue = false;
        replacedSnapshotPriceText = replacedSnapshotPriceText.replace('"settings"=>[{"type"=>')
} // Not a Discount Line
} // End While

} // End Snapshot 2, Pricing history is Empty
    else{ //Pricing history is not Empty, Snapshot 2


    while (replacedSnapshotPriceText.includes('"settings"=>[{"type"=>')) {

    replacedSnapshotPriceText = replacedSnapshotPriceText.replace('start_date','X-X');
    replacedSnapshotPriceText = replacedSnapshotPriceText.replace('start_date','X-X'); 

        start_date = replacedSnapshotPriceText.substring(replacedSnapshotPriceText.indexOf('start_date')+14,replacedSnapshotPriceText.indexOf('start_date')+24)

    replacedSnapshotPriceText = replacedSnapshotPriceText.replace('start_date','X-X');
    replacedSnapshotPriceText = replacedSnapshotPriceText.replace('"settings"=>[{"type"=>','X-X');

    numberNight++;

    createNightBarsInsert (start_date,numberNight,alterationNumber,issue);
    issue = false;
} // Normal Type Snapshot
}  //Pricing history is not Empty, Snapshot 2


    }
}  //end snapshot #2 nights
 

 else {  //Start snapshot #1 nights


    var insertedDailyPricingText = insertedPricingText.substring(insertedPricingText.indexOf('[{"type":') - 3);
    var nightReplacedText = insertedDailyPricingText;
    var dailyPriceReplacedText = insertedDailyPricingText;   






// Weekly Price Snapshot
if (insertedPricingText.includes('"WEEKLY_PRICE"')) {

        var insertedDailyPricingText = SnapshotPriceText.substring(SnapshotPriceText.indexOf('"WEEKLY_PRICE"') - 10);
        insertedDailyPricingText = insertedDailyPricingText.substring(insertedDailyPricingText.indexOf('WEEKLY_PRICE')-5)

        var allDailyPriceReplacedText = insertedDailyPricingText;
        var dailyPriceReplacedText =  SnapshotPriceText;

    while(allDailyPriceReplacedText.includes('"WEEKLY_PRICE"')) {

        var nightReplacedText = allDailyPriceReplacedText.substring(allDailyPriceReplacedText.indexOf('"WEEKLY_PRICE"')-3,allDailyPriceReplacedText.indexOf('WEEKLY_PRICE_period'));
        nightReplacedText = nightReplacedText.replace ('start_date','X-X');
        nightReplacedText = nightReplacedText.replace ('start_date','X-X');
        nightReplacedText = nightReplacedText.replace ('nights','X-X');
        nightReplacedText = nightReplacedText.replace ('nights','X-X');

            while (nightReplacedText.includes('start_date')) {
                var start_date = nightReplacedText.substring(nightReplacedText.indexOf('start_date')+13,nightReplacedText.indexOf('nights')-3);

                nightReplacedText = nightReplacedText.replace('start_date','X-X');
                nightReplacedText = nightReplacedText.replace('nights','X-X');

                    numberNight++;
                    createNightBarsInsert (start_date,numberNight,alterationNumber,issue);
                    issue = false;
            }
        allDailyPriceReplacedText = allDailyPriceReplacedText.replace('"WEEKLY_PRICE"','X-X')
        allDailyPriceReplacedText = allDailyPriceReplacedText.replace('WEEKLY_PRICE_period','X-X')
    } // While if text includes WEEKLY_PRICE


} // End If WEEKLY Price



// Monthly Price Snapshot
else if (insertedPricingText.includes('"MONTHLY_PRICE"')) {

        var insertedDailyPricingText = SnapshotPriceText.substring(SnapshotPriceText.indexOf('"MONTHLY_PRICE"') - 10);
        insertedDailyPricingText = insertedDailyPricingText.substring(insertedDailyPricingText.indexOf('MONTHLY_PRICE')-5)

        var allDailyPriceReplacedText = insertedDailyPricingText;
        var dailyPriceReplacedText =  SnapshotPriceText;

    while(allDailyPriceReplacedText.includes('"MONTHLY_PRICE"')) {

        var nightReplacedText = allDailyPriceReplacedText.substring(allDailyPriceReplacedText.indexOf('"MONTHLY_PRICE"')-3,allDailyPriceReplacedText.indexOf('MONTHLY_PRICE_period'));
        nightReplacedText = nightReplacedText.replace ('start_date','X-X');
        nightReplacedText = nightReplacedText.replace ('start_date','X-X');
        nightReplacedText = nightReplacedText.replace ('nights','X-X');
        nightReplacedText = nightReplacedText.replace ('nights','X-X');

            while (nightReplacedText.includes('start_date')) {
                var start_date = nightReplacedText.substring(nightReplacedText.indexOf('start_date')+13,nightReplacedText.indexOf('nights')-3);

                nightReplacedText = nightReplacedText.replace('start_date','X-X');
                nightReplacedText = nightReplacedText.replace('nights','X-X');

                    numberNight++;
                    createNightBarsInsert (start_date,numberNight,alterationNumber,issue);
                    issue = false;
            }
        allDailyPriceReplacedText = allDailyPriceReplacedText.replace('"MONTHLY_PRICE"','X-X')
        allDailyPriceReplacedText = allDailyPriceReplacedText.replace('MONTHLY_PRICE_period','X-X')
    } // While if text includes MONTHLY_PRICE


} // End If Monthly Price






else {





    while (nightReplacedText.includes('[{"type":')) {
    start_date = nightReplacedText.substring(nightReplacedText.indexOf('start_date') +13 , nightReplacedText.indexOf('start_date') +23);
    numberNight++;

    nightReplacedText = nightReplacedText.replace('start_date','X-X');
    nightReplacedText = nightReplacedText.replace('start_date','X-X'); 
    nightReplacedText = nightReplacedText.replace('start_date','X-X'); 
    nightReplacedText = nightReplacedText.replace('[{"type":','X-X');   


    createNightBarsInsert (start_date,numberNight,alterationNumber,issue);
    issue = false;


} // while contains Start_date to create nights
} //If Not Weekly / Monthly Price




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







// Beyond

// Damage Waiver
if (insertedPricingText.includes('"PASS_THROUGH_DAMAGE_WAIVER"')) {
    var type = "Pass Through Damage Waiver"
    var priceListing = insertedPricingText.substring(insertedPricingText.indexOf('"PASS_THROUGH_DAMAGE_WAIVER"')+10)
    priceListing = priceListing.substring(priceListing.indexOf('amount_micro_listing')+22,priceListing.indexOf('amount_micro_usd')-2) 
    priceListing = listingCurrencySymbol + " " + ((parseFloat(priceListing / 1000000)).toFixed(2))
    
    var priceUsd = insertedPricingText.substring(insertedPricingText.indexOf('"PASS_THROUGH_DAMAGE_WAIVER"')+10)
    priceUsd = priceUsd.substring(priceUsd.indexOf('amount_micro_usd')+18,priceUsd.indexOf('start_date')-2) 
    priceUsd =  "$ " + ((parseFloat(priceUsd / 1000000)).toFixed(2))
    
    var priceGuest = insertedPricingText.substring(insertedPricingText.indexOf('"PASS_THROUGH_DAMAGE_WAIVER"')+10)
    priceGuest = priceGuest.substring(priceGuest.indexOf('amount_micro_guest')+20,priceGuest.indexOf('amount_micro_listing')-2) 
    priceGuest =  "$ " + ((parseFloat(priceGuest / 1000000)).toFixed(2))


    //Guest
    var dwDiv = document.createElement('div');
    dwDiv.className = "feeDiv"
    dwDiv.id = alterationNumber + "DW"

    var dwType = document.createElement('div');
    dwType.className = "DWTypeGuest airbnbFeeGuestType";
    dwType.id = alterationNumber + "DWTypeGuest";
    var dwTypeNode = document.createTextNode(type);
    dwType.appendChild(dwTypeNode);

    var amount = document.createElement('div');
    amount.className = "DWAmountGuest airbnbFeeGuestAmount";
    amount.id = alterationNumber + "DWAmountGuest"
    var amountNode = document.createTextNode(priceGuest)
    amount.appendChild(amountNode);

    dwDiv.appendChild(dwType);
    dwDiv.appendChild(amount);
    document.getElementById(alterationNumber + "contentFeesGuest").appendChild(dwDiv); 
}




// Gratuity Fee
if (insertedPricingText.includes('"PASS_THROUGH_GRATUITY_FEE"')) {
    var type = "Pass Through Gratuity Fee"
    var priceListing = insertedPricingText.substring(insertedPricingText.indexOf('"PASS_THROUGH_GRATUITY_FEE"')+10)
    priceListing = priceListing.substring(priceListing.indexOf('amount_micro_listing')+22,priceListing.indexOf('amount_micro_usd')-2) 
    priceListing = listingCurrencySymbol + " " + ((parseFloat(priceListing / 1000000)).toFixed(2))
    
    var priceUsd = insertedPricingText.substring(insertedPricingText.indexOf('"PASS_THROUGH_GRATUITY_FEE"')+10)
    priceUsd = priceUsd.substring(priceUsd.indexOf('amount_micro_usd')+18,priceUsd.indexOf('start_date')-2) 
    priceUsd =  "$ " + ((parseFloat(priceUsd / 1000000)).toFixed(2))
    
    var priceGuest = insertedPricingText.substring(insertedPricingText.indexOf('"PASS_THROUGH_GRATUITY_FEE"')+10)
    priceGuest = priceGuest.substring(priceGuest.indexOf('amount_micro_guest')+20,priceGuest.indexOf('amount_micro_listing')-2) 
    priceGuest =  "$ " + ((parseFloat(priceGuest / 1000000)).toFixed(2))


    //Guest
    var dwDiv = document.createElement('div');
    dwDiv.className = "feeDiv"
    dwDiv.id = alterationNumber + "GF"

    var dwType = document.createElement('div');
    dwType.className = "GFType airbnbFeeGuestType";
    dwType.id = alterationNumber + "GFTypeGuest";
    var dwTypeNode = document.createTextNode(type);
    dwType.appendChild(dwTypeNode);

    var amount = document.createElement('div');
    amount.className = "GFAmount airbnbFeeGuestAmount";
    amount.id = alterationNumber + "GFAmountGuest"
    var amountNode = document.createTextNode(priceGuest)
    amount.appendChild(amountNode);

    dwDiv.appendChild(dwType);
    dwDiv.appendChild(amount);
    document.getElementById(alterationNumber + "contentFeesGuest").appendChild(dwDiv); 
}




// Service Charge
if (insertedPricingText.includes('"PASS_THROUGH_SERVICE_CHARGE"')) {
    var type = "Pass Through Service Charge"
    var priceListing = insertedPricingText.substring(insertedPricingText.indexOf('"PASS_THROUGH_SERVICE_CHARGE"')+10)
    priceListing = priceListing.substring(priceListing.indexOf('amount_micro_listing')+22,priceListing.indexOf('amount_micro_usd')-2) 
    priceListing = listingCurrencySymbol + " " + ((parseFloat(priceListing / 1000000)).toFixed(2))
    
    var priceUsd = insertedPricingText.substring(insertedPricingText.indexOf('"PASS_THROUGH_SERVICE_CHARGE"')+10)
    priceUsd = priceUsd.substring(priceUsd.indexOf('amount_micro_usd')+18,priceUsd.indexOf('start_date')-2) 
    priceUsd =  "$ " + ((parseFloat(priceUsd / 1000000)).toFixed(2))
    
    var priceGuest = insertedPricingText.substring(insertedPricingText.indexOf('"PASS_THROUGH_SERVICE_CHARGE"')+10)
    priceGuest = priceGuest.substring(priceGuest.indexOf('amount_micro_guest')+20,priceGuest.indexOf('amount_micro_listing')-2) 
    priceGuest =  "$ " + ((parseFloat(priceGuest / 1000000)).toFixed(2))


    //Guest
    var dwDiv = document.createElement('div');
    dwDiv.className = "feeDiv"
    dwDiv.id = alterationNumber + "SC"

    var dwType = document.createElement('div');
    dwType.className = "SCType airbnbFeeGuestType";
    dwType.id = alterationNumber + "SCType";
    var dwTypeNode = document.createTextNode(type);
    dwType.appendChild(dwTypeNode);

    var amount = document.createElement('div');
    amount.className = "SCAmount airbnbFeeGuestAmount";
    amount.id = alterationNumber + "SCAmountGuest"
    var amountNode = document.createTextNode(priceGuest)
    amount.appendChild(amountNode);

    dwDiv.appendChild(dwType);
    dwDiv.appendChild(amount);
    document.getElementById(alterationNumber + "contentFeesGuest").appendChild(dwDiv); 
}





          // Beyond Fees
          var beyondFeeGuest = 0;

          if (insertedPricingText.includes('PASS_THROUGH_DAMAGE_WAIVER')) {
            var placeHolderFee = document.getElementById(alterationNumber + 'DWAmountGuest').innerText;
            placeHolderFee = parseFloat(placeHolderFee.substring(placeHolderFee.indexOf(" ")+1));
            beyondFeeGuest = beyondFeeGuest + placeHolderFee
          }

          if (insertedPricingText.includes('PASS_THROUGH_GRATUITY_FEE')) {
            var placeHolderFee = document.getElementById(alterationNumber + 'GFAmountGuest').innerText;
            placeHolderFee = parseFloat(placeHolderFee.substring(placeHolderFee.indexOf(" ")+1));
            beyondFeeGuest = beyondFeeGuest + placeHolderFee
          }

          if (insertedPricingText.includes('PASS_THROUGH_SERVICE_CHARGE')) {
            var placeHolderFee = document.getElementById(alterationNumber + 'SCAmountGuest').innerText;
            placeHolderFee = parseFloat(placeHolderFee.substring(placeHolderFee.indexOf(" ")+1));
            beyondFeeGuest = beyondFeeGuest + placeHolderFee
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
        
  

// (((airbnbFeeGuestAmount * 100).toFixed(2)/100) + ((beyondFeeGuest * 100).toFixed(2)/100)) -- Making sure it adds up even if number is (1.7 + 1.71)

            //Creating total for Header with Tax Guest
            if (insertedPricingText.includes('VALUE_ADDED_TAX_GUEST')) {
            var totalFeesGuest = guestCurrencySymbol + " " + (((taxAmountGuest * 100).toFixed(2)/100) + ((airbnbFeeGuestAmount * 100).toFixed(2)/100) + ((beyondFeeGuest * 100).toFixed(2)/100)).toFixed(2);

        }
        else {
            var totalFeesGuest = guestCurrencySymbol + " "  + (((airbnbFeeGuestAmount * 100).toFixed(2)/100) + ((beyondFeeGuest * 100).toFixed(2)/100)).toFixed(2);     
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

    type = adjustTypePrice(type);

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



// Weekly Price Snapshot 
if (insertedPricingText.includes('"WEEKLY_PRICE"')) {
        var insertedDailyPricingText = SnapshotPriceText.substring(SnapshotPriceText.indexOf('"WEEKLY_PRICE"') - 10);
        insertedDailyPricingText = insertedDailyPricingText.substring(insertedDailyPricingText.indexOf('WEEKLY_PRICE')-5)

        var allDailyPriceReplacedText = insertedDailyPricingText;
        var dailyPriceReplacedText =  SnapshotPriceText;



    while(allDailyPriceReplacedText.includes('"WEEKLY_PRICE"')) {

        var nightReplacedText = allDailyPriceReplacedText.substring(allDailyPriceReplacedText.indexOf('"WEEKLY_PRICE"')-3);
        nightReplacedText = nightReplacedText.substring(nightReplacedText.indexOf('"settings"')-3,nightReplacedText.indexOf('}}'));


            while (nightReplacedText.includes('{"type"=>"')) {
                    var counter = 1;

                var start_date = nightReplacedText.substring(nightReplacedText.indexOf('start_date')+14,nightReplacedText.indexOf('nights')-4);

                var type = nightReplacedText.substring(nightReplacedText.indexOf('{"type"=>"')+10,nightReplacedText.indexOf('start_date')-4)
                var exact_amount_micros_usd = parseFloat(nightReplacedText.substring(nightReplacedText.indexOf('original_amount_usd')+22,nightReplacedText.indexOf('applied_amount_usd')-3));

                    var amount_micros_usd = exact_amount_micros_usd.toFixed(2);
                    var original_amount_micro_listing = (exact_amount_micros_usd * listingCurrencyRate).toFixed(2);
                    var guest_amount_micros = (exact_amount_micros_usd * guestCurrencyRate).toFixed(2);


                type = adjustTypePrice(type);
                nightReplacedText = nightReplacedText.replace('{"type"=>"',"X-X")
                nightReplacedText = nightReplacedText.replace('original_amount_usd',"X-X")
                nightReplacedText = nightReplacedText.replace('applied_amount_usd',"X-X")
                nightReplacedText = nightReplacedText.replace('start_date','X-X',"X-X");
                nightReplacedText = nightReplacedText.replace('nights','X-X',"X-X");
                
                    var original_amount_listing = listingCurrencySymbol + " " + original_amount_micro_listing; 
                    var amount_usd =  "$ " + amount_micros_usd;
                    guest_amount_micros = guestCurrencySymbol +" "+ guest_amount_micros; 


                while (numberNight >= counter) {
      
      if (document.getElementById(alterationNumber + "DateListing"+counter).textContent === start_date) {
   
        createNightlyPriceInsert (counter,type,original_amount_listing,amount_usd,guest_amount_micros,alterationNumber)
        counter ++


      }
      else {
        counter= counter +1;
      }
    } // while number of nights   

            }
        allDailyPriceReplacedText = allDailyPriceReplacedText.replace('"WEEKLY_PRICE"','X-X')
        allDailyPriceReplacedText = allDailyPriceReplacedText.replace('"WEEKLY_DISCOUNT"','X-X')
    } // While if text includes Weekly_price



// Adding Discounts Weekly Price

    var discountPercentage = SnapshotPriceText.substring(SnapshotPriceText.indexOf('WEEKLY_DISCOUNT'));
    discountPercentage = discountPercentage.substring(discountPercentage.indexOf('price_factor'));
    discountPercentage = discountPercentage.substring(discountPercentage.indexOf('>')+1,discountPercentage.indexOf('}'));
    discountPercentage = parseInt(discountPercentage *100)

      discountPercentage = convertDiscountPercentage(discountPercentage);

      var discountTypeID = "Lengthofstaydiscount";
      var discountTypeLength = "Weekly Discount";


        var counter =1;
        var discountAmountListing = document.getElementById(alterationNumber+ "dailyListing" + counter).innerText;
        discountAmountListing = parseFloat(discountAmountListing.substring(discountAmountListing.indexOf(" ")+1) *-1)
        discountAmountListing = listingCurrencySymbol + " "  + (discountAmountListing * (discountPercentage/100)).toFixed(2);

        var discountAmountUSD = document.getElementById(alterationNumber+ "dailyUSD" + counter).innerText;
        discountAmountUSD = parseFloat(discountAmountUSD.substring(discountAmountUSD.indexOf(" ")+1) *-1)
        discountAmountUSD =  "$ "  + (discountAmountUSD * (discountPercentage/100)).toFixed(2);


        var discountAmountGuest = document.getElementById(alterationNumber+ "dailyGuest" + counter).innerText;
        discountAmountGuest = parseFloat(discountAmountGuest.substring(discountAmountGuest.indexOf(" ")+1) *-1)
        discountAmountGuest = guestCurrencySymbol + " "  + (discountAmountGuest * (discountPercentage/100)).toFixed(2);



    while(numberNight >= counter) {

createDiscountInsert(alterationNumber,counter,discountTypeID,discountPercentage,discountTypeLength,discountAmountListing,discountAmountUSD,discountAmountGuest)


 //createExtraGuestInsert (counter,extra_guest_fee_type,extraGuestsIncluded,extraGuestsNumber,listingCurrencySymbol,extraGuestsPriceListing,extra_guest_fee_Listing,extra_guest_fee_USD,guestCurrencySymbol,extraGuestsPriceGuest,extra_guest_fee_Guest,alterationNumber);

        counter++;

    }


} // End If weekly  Price





// Monthly Price Snapshot 
else if (insertedPricingText.includes('"MONTHLY_PRICE"')) {
    
        var insertedDailyPricingText = SnapshotPriceText.substring(SnapshotPriceText.indexOf('"MONTHLY_PRICE"') - 10);
        insertedDailyPricingText = insertedDailyPricingText.substring(insertedDailyPricingText.indexOf('MONTHLY_PRICE')-5)

        var allDailyPriceReplacedText = insertedDailyPricingText;
        var dailyPriceReplacedText =  SnapshotPriceText;



    while(allDailyPriceReplacedText.includes('"MONTHLY_PRICE"')) {

        var nightReplacedText = allDailyPriceReplacedText.substring(allDailyPriceReplacedText.indexOf('"MONTHLY_PRICE"')-3);
        nightReplacedText = nightReplacedText.substring(nightReplacedText.indexOf('"settings"')-3,nightReplacedText.indexOf('}}'));


            while (nightReplacedText.includes('{"type"=>"')) {
                    var counter = 1;

                var start_date = nightReplacedText.substring(nightReplacedText.indexOf('start_date')+14,nightReplacedText.indexOf('nights')-4);

                var type = nightReplacedText.substring(nightReplacedText.indexOf('{"type"=>"')+10,nightReplacedText.indexOf('start_date')-4)
                var exact_amount_micros_usd = parseFloat(nightReplacedText.substring(nightReplacedText.indexOf('original_amount_usd')+22,nightReplacedText.indexOf('applied_amount_usd')-3));

                    var amount_micros_usd = exact_amount_micros_usd.toFixed(2);
                    var original_amount_micro_listing = (exact_amount_micros_usd * listingCurrencyRate).toFixed(2);
                    var guest_amount_micros = (exact_amount_micros_usd * guestCurrencyRate).toFixed(2);


                type = adjustTypePrice(type);
                nightReplacedText = nightReplacedText.replace('{"type"=>"',"X-X")
                nightReplacedText = nightReplacedText.replace('original_amount_usd',"X-X")
                nightReplacedText = nightReplacedText.replace('applied_amount_usd',"X-X")
                nightReplacedText = nightReplacedText.replace('start_date','X-X',"X-X");
                nightReplacedText = nightReplacedText.replace('nights','X-X',"X-X");
                
                    var original_amount_listing = listingCurrencySymbol + " " + original_amount_micro_listing; 
                    var amount_usd =  "$ " + amount_micros_usd;
                    guest_amount_micros = guestCurrencySymbol +" "+ guest_amount_micros; 


                while (numberNight >= counter) {
      
      if (document.getElementById(alterationNumber + "DateListing"+counter).textContent === start_date) {
   
        createNightlyPriceInsert (counter,type,original_amount_listing,amount_usd,guest_amount_micros,alterationNumber)
        counter ++


      }
      else {
        counter= counter +1;
      }
    } // while number of nights   

            }
        allDailyPriceReplacedText = allDailyPriceReplacedText.replace('"MONTHLY_PRICE"','X-X')
        allDailyPriceReplacedText = allDailyPriceReplacedText.replace('"MONTHLY_DISCOUNT"','X-X')
    } // While if text includes MONTHLY_PRICE



// Adding Discounts Monthly Price

    var discountPercentage = SnapshotPriceText.substring(SnapshotPriceText.indexOf('MONTHLY_DISCOUNT'));
    discountPercentage = discountPercentage.substring(discountPercentage.indexOf('price_factor'));
    discountPercentage = discountPercentage.substring(discountPercentage.indexOf('>')+1,discountPercentage.indexOf('}'));
    discountPercentage = parseInt(discountPercentage *100)

      discountPercentage = convertDiscountPercentage(discountPercentage);

      var discountTypeID = "Lengthofstaydiscount";
      var discountTypeLength = "Monthly Discount";


        var counter =1;
        var discountAmountListing = document.getElementById(alterationNumber+ "dailyListing" + counter).innerText;
        discountAmountListing = parseFloat(discountAmountListing.substring(discountAmountListing.indexOf(" ")+1) *-1)
        discountAmountListing = listingCurrencySymbol + " "  + (discountAmountListing * (discountPercentage/100)).toFixed(2);

        var discountAmountUSD = document.getElementById(alterationNumber+ "dailyUSD" + counter).innerText;
        discountAmountUSD = parseFloat(discountAmountUSD.substring(discountAmountUSD.indexOf(" ")+1) *-1)
        discountAmountUSD =  "$ "  + (discountAmountUSD * (discountPercentage/100)).toFixed(2);


        var discountAmountGuest = document.getElementById(alterationNumber+ "dailyGuest" + counter).innerText;
        discountAmountGuest = parseFloat(discountAmountGuest.substring(discountAmountGuest.indexOf(" ")+1) *-1)
        discountAmountGuest = guestCurrencySymbol + " "  + (discountAmountGuest * (discountPercentage/100)).toFixed(2);



    while(numberNight >= counter) {

createDiscountInsert(alterationNumber,counter,discountTypeID,discountPercentage,discountTypeLength,discountAmountListing,discountAmountUSD,discountAmountGuest)


 //createExtraGuestInsert (counter,extra_guest_fee_type,extraGuestsIncluded,extraGuestsNumber,listingCurrencySymbol,extraGuestsPriceListing,extra_guest_fee_Listing,extra_guest_fee_USD,guestCurrencySymbol,extraGuestsPriceGuest,extra_guest_fee_Guest,alterationNumber);

        counter++;

    }


} // End If Monthly Price





else { // If not weekly / Monthly Price





// Normal, Snapshot 2

// Checking if Pricing history is empty or not - Snapshot 2
  if(emptyPricingHistory == true) { // If Snapshot 2, Pricing history is Empty

    while(dailyPriceSnapshot2ReplacedText.includes('"settings"=>[{"type"=>')) {
        var itemLine = dailyPriceSnapshot2ReplacedText.substring(dailyPriceSnapshot2ReplacedText.indexOf('"settings"=>[{"type"=>"'))
        itemLine = dailyPriceSnapshot2ReplacedText.substring(dailyPriceSnapshot2ReplacedText.indexOf('['),dailyPriceSnapshot2ReplacedText.indexOf("}]}}"))

        if(itemLine.includes('discount')) {
        } // Discount Line
        else {
        start_date = itemLine.substring(itemLine.indexOf('start_date')+14,itemLine.indexOf('nights')-4)
        type = itemLine.substring(itemLine.indexOf('"')+9,itemLine.indexOf('start_date')-4)
        type = adjustTypePrice(type);

        exact_amount_micros_usd = parseFloat(itemLine.substring(itemLine.indexOf('original_amount_usd') + 22, itemLine.indexOf('applied_amount_usd')-3));
        amount_micros_usd = exact_amount_micros_usd.toFixed(2);
        original_amount_micro_listing = (exact_amount_micros_usd * listingCurrencyRate).toFixed(2);
        guest_amount_micros = (exact_amount_micros_usd * guestCurrencyRate).toFixed(2);
        
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

        }// No discount line

        dailyPriceSnapshot2ReplacedText = dailyPriceSnapshot2ReplacedText.replace('}]}}',"")
        dailyPriceSnapshot2ReplacedText = dailyPriceSnapshot2ReplacedText.replace('"settings"=>[{"type"=>',"")
        dailyPriceSnapshot2ReplacedText = dailyPriceSnapshot2ReplacedText.replace('nights',"")
        dailyPriceSnapshot2ReplacedText = dailyPriceSnapshot2ReplacedText.replace('start_date',"")
    }// end While Includes Type

  }


  else{ //If Pricing History is not empty - Snapshot 2
    while (dailyPriceSnapshot2ReplacedText.includes('"settings"=>[{"type"=>')) {

    dailyPriceSnapshot2ReplacedText = dailyPriceSnapshot2ReplacedText.replace('start_date','X-X');
    dailyPriceSnapshot2ReplacedText = dailyPriceSnapshot2ReplacedText.replace('start_date','X-X'); 

    start_date = dailyPriceSnapshot2ReplacedText.substring(dailyPriceSnapshot2ReplacedText.indexOf('start_date') +14 , dailyPriceSnapshot2ReplacedText.indexOf('start_date') +24);



if(checkPricing_History.length >1) {
    dailyPriceSnapshot2ReplacedText = dailyPriceSnapshot2ReplacedText.replace('start_date','X-X'); 
}

type = dailyPriceSnapshot2ReplacedText.substring(dailyPriceSnapshot2ReplacedText.indexOf('"settings"=>[{"type"=>') +23,dailyPriceSnapshot2ReplacedText.indexOf('start_date')-4);
 

   


    exact_amount_micros_usd = parseFloat(dailyPriceSnapshot2ReplacedText.substring(dailyPriceSnapshot2ReplacedText.indexOf('original_amount_usd') +22,dailyPriceSnapshot2ReplacedText.indexOf('applied_amount_usd')-3));
    

     type = adjustTypePrice(type);


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
} // End If Pricing History is not empty

} // End If not monthly / weekly price


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


// Weekly Price Snapshot 
if (insertedPricingText.includes('"WEEKLY_PRICE"')) {

        var insertedDailyPricingText = SnapshotPriceText.substring(SnapshotPriceText.indexOf('"WEEKLY_PRICE"') - 10);
        insertedDailyPricingText = insertedDailyPricingText.substring(insertedDailyPricingText.indexOf('WEEKLY_PRICE')-3)

        var allDailyPriceReplacedText = insertedDailyPricingText;
        var dailyPriceReplacedText =  SnapshotPriceText;



    while(allDailyPriceReplacedText.includes('"WEEKLY_PRICE"')) {

        var nightReplacedText = allDailyPriceReplacedText.substring(allDailyPriceReplacedText.indexOf('"WEEKLY_PRICE"')-3);
        nightReplacedText = nightReplacedText.substring(nightReplacedText.indexOf('"settings"')-3,nightReplacedText.indexOf('}}'));


            while (nightReplacedText.includes('"type":"')) {
                    var counter = 1;

                var start_date = nightReplacedText.substring(nightReplacedText.indexOf('start_date')+13,nightReplacedText.indexOf('nights')-3);

                var type = nightReplacedText.substring(nightReplacedText.indexOf('"type":"')+8,nightReplacedText.indexOf('start_date')-3)
                var original_amount_micro_listing = nightReplacedText.substring(nightReplacedText.indexOf('original_amount_micro_listing')-1);
                original_amount_micro_listing = original_amount_micro_listing.substring(original_amount_micro_listing.indexOf('original_amount_micro_listing')+31, original_amount_micro_listing.indexOf(','))
                original_amount_micro_listing = parseFloat(original_amount_micro_listing)
                var original_amount_micro_usd = nightReplacedText.substring(nightReplacedText.indexOf('original_amount_micro_usd')-1);
                original_amount_micro_usd = original_amount_micro_usd.substring(original_amount_micro_usd.indexOf('original_amount_micro_usd')+27, original_amount_micro_usd.indexOf(','))
                original_amount_micro_usd = parseFloat(original_amount_micro_usd)
                var amount_guest =  insertedPricingText.substring(insertedPricingText.indexOf('guest_currency_to_usd_rate')-1)
                amount_guest = parseFloat(amount_guest.substring(amount_guest.indexOf('guest_currency_to_usd_rate')+28,amount_guest.indexOf(',')))
                amount_guest = original_amount_micro_usd / amount_guest


                    var amount_micros_usd = ( original_amount_micro_usd / 1000000 ).toFixed(2);
                    var original_amount_micro_listing = (original_amount_micro_listing / 1000000).toFixed(2);
                    var guest_amount_micros = (amount_guest / 1000000).toFixed(2);


                type = adjustTypePrice(type);
                nightReplacedText = nightReplacedText.replace('"type":"',"X-X")
                nightReplacedText = nightReplacedText.replace('start_date',"X-X");
                nightReplacedText = nightReplacedText.replace('nights',"X-X");
                nightReplacedText = nightReplacedText.replace('original_amount_micro_listing',"X-X");
                nightReplacedText = nightReplacedText.replace('original_amount_micro_usd',"X-X");
       
                    var original_amount_listing = listingCurrencySymbol + " " + original_amount_micro_listing; 
                    var amount_usd =  "$ " + amount_micros_usd;
                    guest_amount_micros = guestCurrencySymbol +" "+ guest_amount_micros; 


                while (numberNight >= counter) {
      
      if (document.getElementById(alterationNumber + "DateListing"+counter).textContent === start_date) {
   
        createNightlyPriceInsert (counter,type,original_amount_listing,amount_usd,guest_amount_micros,alterationNumber)
        counter ++


      }
      else {
        counter= counter +1;
      }
    } // while number of nights   

            }
        allDailyPriceReplacedText = allDailyPriceReplacedText.replace('"WEEKLY_PRICE"','X-X')
        allDailyPriceReplacedText = allDailyPriceReplacedText.replace('"WEEKLY_DISCOUNT"','X-X')
    } // While if text includes WEEKLY_PRICE



// Adding Discounts WEEKLY Price

    var discountPercentage = SnapshotPriceText.substring(SnapshotPriceText.indexOf('WEEKLY_DISCOUNT'));
    discountPercentage = discountPercentage.substring(discountPercentage.indexOf('price_factor'));
    discountPercentage = discountPercentage.substring(discountPercentage.indexOf(':')+1,discountPercentage.indexOf(','));
    discountPercentage = parseInt(discountPercentage *100)

      discountPercentage = convertDiscountPercentage(discountPercentage);

      var discountTypeID = "Lengthofstaydiscount";
      var discountTypeLength = "Weekly Discount";

        var counter =1;


        var discountAmountListing = document.getElementById(alterationNumber+ "dailyListing" + counter).innerText;
        discountAmountListing = parseFloat(discountAmountListing.substring(discountAmountListing.indexOf(" ")+1) *-1)
        discountAmountListing = listingCurrencySymbol + " "  + (discountAmountListing * (discountPercentage/100)).toFixed(2);

        var discountAmountUSD = document.getElementById(alterationNumber+ "dailyUSD" + counter).innerText;
        discountAmountUSD = parseFloat(discountAmountUSD.substring(discountAmountUSD.indexOf(" ")+1) *-1)
        discountAmountUSD =  "$ "  + (discountAmountUSD * (discountPercentage/100)).toFixed(2);


        var discountAmountGuest = document.getElementById(alterationNumber+ "dailyGuest" + counter).innerText;
        discountAmountGuest = parseFloat(discountAmountGuest.substring(discountAmountGuest.indexOf(" ")+1) *-1)
        discountAmountGuest = guestCurrencySymbol + " "  + (discountAmountGuest * (discountPercentage/100)).toFixed(2);



    while(numberNight >= counter) {

createDiscountInsert(alterationNumber,counter,discountTypeID,discountPercentage,discountTypeLength,discountAmountListing,discountAmountUSD,discountAmountGuest)


 //createExtraGuestInsert (counter,extra_guest_fee_type,extraGuestsIncluded,extraGuestsNumber,listingCurrencySymbol,extraGuestsPriceListing,extra_guest_fee_Listing,extra_guest_fee_USD,guestCurrencySymbol,extraGuestsPriceGuest,extra_guest_fee_Guest,alterationNumber);

        counter++;

    }


} // End If WEEKLY Price





// Monthly Price Snapshot 
else if (insertedPricingText.includes('"MONTHLY_PRICE"')) {

        var insertedDailyPricingText = SnapshotPriceText.substring(SnapshotPriceText.indexOf('"MONTHLY_PRICE"') - 10);
        insertedDailyPricingText = insertedDailyPricingText.substring(insertedDailyPricingText.indexOf('MONTHLY_PRICE')-3)

        var allDailyPriceReplacedText = insertedDailyPricingText;
        var dailyPriceReplacedText =  SnapshotPriceText;



    while(allDailyPriceReplacedText.includes('"MONTHLY_PRICE"')) {

        var nightReplacedText = allDailyPriceReplacedText.substring(allDailyPriceReplacedText.indexOf('"MONTHLY_PRICE"')-3);
        nightReplacedText = nightReplacedText.substring(nightReplacedText.indexOf('"settings"')-3,nightReplacedText.indexOf('}}'));


            while (nightReplacedText.includes('"type":"')) {
                    var counter = 1;

                var start_date = nightReplacedText.substring(nightReplacedText.indexOf('start_date')+13,nightReplacedText.indexOf('nights')-3);

                var type = nightReplacedText.substring(nightReplacedText.indexOf('"type":"')+8,nightReplacedText.indexOf('start_date')-3)
                var original_amount_micro_listing = nightReplacedText.substring(nightReplacedText.indexOf('original_amount_micro_listing')-1);
                original_amount_micro_listing = original_amount_micro_listing.substring(original_amount_micro_listing.indexOf('original_amount_micro_listing')+31, original_amount_micro_listing.indexOf(','))
                original_amount_micro_listing = parseFloat(original_amount_micro_listing)
                var original_amount_micro_usd = nightReplacedText.substring(nightReplacedText.indexOf('original_amount_micro_usd')-1);
                original_amount_micro_usd = original_amount_micro_usd.substring(original_amount_micro_usd.indexOf('original_amount_micro_usd')+27, original_amount_micro_usd.indexOf(','))
                original_amount_micro_usd = parseFloat(original_amount_micro_usd)
                var amount_guest =  insertedPricingText.substring(insertedPricingText.indexOf('guest_currency_to_usd_rate')-1)
                amount_guest = parseFloat(amount_guest.substring(amount_guest.indexOf('guest_currency_to_usd_rate')+28,amount_guest.indexOf(',')))
                amount_guest = original_amount_micro_usd / amount_guest


                    var amount_micros_usd = ( original_amount_micro_usd / 1000000 ).toFixed(2);
                    var original_amount_micro_listing = (original_amount_micro_listing / 1000000).toFixed(2);
                    var guest_amount_micros = (amount_guest / 1000000).toFixed(2);


                type = adjustTypePrice(type);
                nightReplacedText = nightReplacedText.replace('"type":"',"X-X")
                nightReplacedText = nightReplacedText.replace('start_date',"X-X");
                nightReplacedText = nightReplacedText.replace('nights',"X-X");
                nightReplacedText = nightReplacedText.replace('original_amount_micro_listing',"X-X");
                nightReplacedText = nightReplacedText.replace('original_amount_micro_usd',"X-X");
       
                    var original_amount_listing = listingCurrencySymbol + " " + original_amount_micro_listing; 
                    var amount_usd =  "$ " + amount_micros_usd;
                    guest_amount_micros = guestCurrencySymbol +" "+ guest_amount_micros; 


                while (numberNight >= counter) {
      
      if (document.getElementById(alterationNumber + "DateListing"+counter).textContent === start_date) {
   
        createNightlyPriceInsert (counter,type,original_amount_listing,amount_usd,guest_amount_micros,alterationNumber)
        counter ++


      }
      else {
        counter= counter +1;
      }
    } // while number of nights   

            }
        allDailyPriceReplacedText = allDailyPriceReplacedText.replace('"MONTHLY_PRICE"','X-X')
        allDailyPriceReplacedText = allDailyPriceReplacedText.replace('"MONTHLY_DISCOUNT"','X-X')
    } // While if text includes MONTHLY_PRICE



// Adding Discounts Monthly Price

    var discountPercentage = SnapshotPriceText.substring(SnapshotPriceText.indexOf('MONTHLY_DISCOUNT'));
    discountPercentage = discountPercentage.substring(discountPercentage.indexOf('price_factor'));
    discountPercentage = discountPercentage.substring(discountPercentage.indexOf(':')+1,discountPercentage.indexOf(','));
    discountPercentage = parseInt(discountPercentage *100)

      discountPercentage = convertDiscountPercentage(discountPercentage);

      var discountTypeID = "Lengthofstaydiscount";
      var discountTypeLength = "Monthly Discount";

        var counter =1;


        var discountAmountListing = document.getElementById(alterationNumber+ "dailyListing" + counter).innerText;
        discountAmountListing = parseFloat(discountAmountListing.substring(discountAmountListing.indexOf(" ")+1) *-1)
        discountAmountListing = listingCurrencySymbol + " "  + (discountAmountListing * (discountPercentage/100)).toFixed(2);

        var discountAmountUSD = document.getElementById(alterationNumber+ "dailyUSD" + counter).innerText;
        discountAmountUSD = parseFloat(discountAmountUSD.substring(discountAmountUSD.indexOf(" ")+1) *-1)
        discountAmountUSD =  "$ "  + (discountAmountUSD * (discountPercentage/100)).toFixed(2);


        var discountAmountGuest = document.getElementById(alterationNumber+ "dailyGuest" + counter).innerText;
        discountAmountGuest = parseFloat(discountAmountGuest.substring(discountAmountGuest.indexOf(" ")+1) *-1)
        discountAmountGuest = guestCurrencySymbol + " "  + (discountAmountGuest * (discountPercentage/100)).toFixed(2);



    while(numberNight >= counter) {

createDiscountInsert(alterationNumber,counter,discountTypeID,discountPercentage,discountTypeLength,discountAmountListing,discountAmountUSD,discountAmountGuest)


 //createExtraGuestInsert (counter,extra_guest_fee_type,extraGuestsIncluded,extraGuestsNumber,listingCurrencySymbol,extraGuestsPriceListing,extra_guest_fee_Listing,extra_guest_fee_USD,guestCurrencySymbol,extraGuestsPriceGuest,extra_guest_fee_Guest,alterationNumber);

        counter++;

    }


} // End If Monthly Price

else { // If not Monthly / Weekly price








    while (dailyPriceReplacedText.includes('[{"type":')) {
    start_date = dailyPriceReplacedText.substring(dailyPriceReplacedText.indexOf('start_date') +13 , dailyPriceReplacedText.indexOf('start_date') +23);
    type = dailyPriceReplacedText.substring(dailyPriceReplacedText.indexOf('[{"type":') +10,dailyPriceReplacedText.indexOf('","start_date":"'));
    type = type.toLowerCase();
    type = type.replace(/_/g," ");
    type = type.charAt(0).toUpperCase() + type.slice(1);


     type = adjustTypePrice(type);
    






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
} // end If not Weekly / monthly price

} // If snapshot #1, daily price

} // if not special offer base price




/* Daily Discounts */
if(emptyPricingHistory==true) {
if(replacedSnapshotPriceText.includes('"DAILY_DISCOUNT"')){ // Text includes Discount
    while(replacedSnapshotPriceText.includes('DAILY_DISCOUNT')) {
      var eachDiscountLine = replacedSnapshotPriceText.substring(replacedSnapshotPriceText.indexOf('DAILY_DISCOUNT'));
      eachDiscountLine = eachDiscountLine.substring(eachDiscountLine.indexOf('"details"=>{')+15,eachDiscountLine.indexOf('}'));
      discountNight = eachDiscountLine.substring(eachDiscountLine.indexOf('start_date')+14);
      discountNight = discountNight.substring(0,10);
      
      var discountType = eachDiscountLine.substring(eachDiscountLine.indexOf('type"=>"')+8,eachDiscountLine.indexOf('min_length')-4)
      
        discountType = discountType.toLowerCase();
      discountType = discountType.replace(/_/g," ");
      discountType = discountType.charAt(0).toUpperCase() + discountType.slice(1);
      discountTypeID= discountType.replace(/ /g,"");

      var discountTypeLength = ""
      if (insertedPricingText.includes('"min_length"')) {
        var discountMinLength = parseFloat(insertedPricingText.substring(insertedPricingText.indexOf('"min_length"')+14, insertedPricingText.indexOf('max_length')-3))
      }
      else {
        var discountMinLength = 0;
      }
      discountTypeLength = convertDiscountName(numberNight,discountType,discountTypeLength,discountMinLength);


    var discountAmountUSD = parseFloat(eachDiscountLine.substring(eachDiscountLine.indexOf('amount_usd')+13,eachDiscountLine.indexOf('start_date')-3));
    discountAmountUSD = discountAmountUSD.toFixed(2);


    counter = 1;

   while (numberNight >= counter) {
      
      if (document.getElementById(alterationNumber + "DateListing"+counter).textContent === discountNight) {
    var discountPercentage = document.getElementById(alterationNumber + "dailyUSD" + counter).innerText;
    discountPercentage = discountPercentage.substring(discountPercentage.indexOf(" ")+1)
    discountPercentage = Math.abs(discountAmountUSD) / (parseFloat(discountPercentage)) *100; 
    discountPercentage = discountPercentage.toFixed(0)
    break
}
    else {
        counter++;
    }
    break
}
    var discountAmountListing = listingCurrencySymbol + " " + (discountAmountUSD * listingCurrencyRate).toFixed(2);
    var discountAmountGuest = guestCurrencySymbol + " " + (discountAmountUSD * guestCurrencyRate).toFixed(2);
    discountAmountUSD = "$ " + discountAmountUSD;

     
    // Finding Date, creating element
      counter = 1;
   while (numberNight >= counter) {
      
      if (document.getElementById(alterationNumber + "DateListing"+counter).textContent === discountNight) {
       
createDiscountInsert(alterationNumber,counter,discountTypeID,discountPercentage,discountTypeLength,discountAmountListing,discountAmountUSD,discountAmountGuest)

        counter = counter + numberNight;

      }
      else {
        counter= counter +1;
      }
    }



      replacedSnapshotPriceText = replacedSnapshotPriceText.replace('"DAILY_DISCOUNT"',"");
    }
} // End if Text includes Discount
} //If Empty Pricing History




else{ //If Not Empty Pricing History
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

      discountTypeLength = convertDiscountName(numberNight,discountType,discountTypeLength,discountMinLength);




      var discountPercentage = eachDiscountLine.substring(eachDiscountLine.indexOf('price_factor')+14,eachDiscountLine.indexOf('guest_amount_currency'));
      discountPercentage = discountPercentage.substring(discountPercentage.indexOf('.')+1,discountPercentage.indexOf(',"'));
      discountPercentage = parseInt(discountPercentage);

      discountPercentage = convertDiscountPercentage(discountPercentage);

      replacedInsertedPricingText = replacedInsertedPricingText.replace (':"DAILY_DISCOUNT"',"X-X");
      replacedInsertedPricingText = replacedInsertedPricingText.replace ('"payment_pricing_item_meta":{"type"',"X-X");
      replacedInsertedPricingText = replacedInsertedPricingText.replace (/,"amount_micro_guest":/,"X-X");
      replacedInsertedPricingText = replacedInsertedPricingText.replace (/,"amount_micro_guest":/,"X-X");


      discountTypeID= discountType.replace(/ /g,"");
      counter = 1;

   while (numberNight >= counter) {
      
      if (document.getElementById(alterationNumber + "DateListing"+counter).textContent === discountNight) {
       

createDiscountInsert(alterationNumber,counter,discountTypeID,discountPercentage,discountTypeLength,discountAmountListing,discountAmountUSD,discountAmountGuest)


        counter = counter + numberNight;

      }
      else {
        counter= counter +1;
      }
    }


    }
    }
} // End If not Empty Pricing History


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
    if(extra_guest_fee_USD > 0) {
    extra_guest_fee_USD =  "$ " + (parseFloat((extra_guest_fee_USD) / 1000000)/numberNight).toFixed(2); 
    var extraGuestFeeUSDNotApplied =  extra_guest_fee_USD;
}
else{
  var extraGuestFeeUSDNotApplied = replacedExtraGuestFeeText.substring(replacedExtraGuestFeeText.indexOf('price_per_extra_guest_per_night_micro_guest')+45,replacedExtraGuestFeeText.indexOf('}}}'));
  extraGuestFeeUSDNotApplied = parseFloat(extraGuestFeeUSDNotApplied / 1000000).toFixed(2);
  extra_guest_fee_USD = "$ " + (parseFloat((extra_guest_fee_USD) / 1000000)/numberNight).toFixed(2); 
}


    var extraGuestsIncluded = replacedExtraGuestFeeText.substring(replacedExtraGuestFeeText.indexOf('number_of_guests_included')+27,replacedExtraGuestFeeText.indexOf('number_of_extra_guests')-2);
    var extraGuestsNumber = replacedExtraGuestFeeText.substring(replacedExtraGuestFeeText.indexOf('number_of_extra_guests')+24,replacedExtraGuestFeeText.indexOf('price_per_extra_guest_per_night_micro_guest')-2);
    var extraGuestsPriceGuest = parseFloat(replacedExtraGuestFeeText.substring(replacedExtraGuestFeeText.indexOf('guest_amount_micros')+21,replacedExtraGuestFeeText.indexOf('host_amount_currency')-2));
        if(extraGuestsPriceGuest >0) {
            extraGuestsPriceGuest = (parseFloat(extraGuestsPriceGuest)/1000000 / numberNight / extraGuestsNumber).toFixed(2);
            var extraGuestFeeGuestNotApplied = extraGuestsPriceGuest;
        }
        else {
            extraGuestsPriceGuest = extraGuestsPriceGuest.toFixed(2);
            var extraGuestFeeGuestNotApplied = (extraGuestFeeUSDNotApplied * guestCurrencyRate).toFixed(2);
        }

    var extraGuestsPriceListing = replacedExtraGuestFeeText.substring(replacedExtraGuestFeeText.indexOf('host_amount_micros')-2);
    extraGuestsPriceListing = parseFloat(extraGuestsPriceListing.substring(extraGuestsPriceListing.indexOf('host_amount_micros')+20 , extraGuestsPriceListing.indexOf('id')-2));
        if(extraGuestsPriceListing >0) {
            extraGuestsPriceListing = (parseFloat(extraGuestsPriceListing)/1000000 / numberNight / extraGuestsNumber).toFixed(2);
            var extraGuestFeeListingNotApplied = extraGuestsPriceListing
    }
    else {
        extraGuestsPriceListing = extraGuestsPriceListing.toFixed(2);
        var extraGuestFeeListingNotApplied = (extraGuestFeeUSDNotApplied * listingCurrencyRate).toFixed(2);
    }

    var counter =1;
    while(numberNight >= counter) {


 createExtraGuestInsert (counter,extra_guest_fee_type,extraGuestsIncluded,extraGuestsNumber,listingCurrencySymbol,extraGuestsPriceListing,extra_guest_fee_Listing,extra_guest_fee_USD,guestCurrencySymbol,extraGuestsPriceGuest,extra_guest_fee_Guest,alterationNumber,extraGuestFeeUSDNotApplied,extraGuestFeeGuestNotApplied,extraGuestFeeListingNotApplied);

        counter++;

    }
}



counter = 1



while (numberNight >= counter) {
    var numItemsListing = $("#" + alterationNumber + "ContentPricesDivListing"+counter).find(".discountAmountListing").length ;
    var numItemsUsd = $("#" + alterationNumber + "ContentPricesDivUsd"+counter).find(".discountAmountUSD").length ;
    var numItemsGuest = $("#" + alterationNumber + "ContentPricesDivGuest"+counter).find(".discountAmountGuest").length ;
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
    if (($('#' + alterationNumber + 'extraGuestListing'+counter).length)===0){
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
   if (($('#' + alterationNumber + 'extraGuestUSD'+counter).length)===0){
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
    if (($('#' + alterationNumber + 'extraGuestGuest'+counter).length)===0){
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

        if ($("#" + alterationNumber + 'cleaningFeePriceListing').length > 0) {
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
        if ($('#' +alterationNumber + 'cleaningFeePriceGuest').length > 0) {
        var cleaningFeeTotal = document.getElementById(alterationNumber + 'cleaningFeePriceGuest').innerText
        cleaningFeeTotal = parseFloat(cleaningFeeTotal.substring(cleaningFeeTotal.indexOf(" ")+1))
}
    else {
        var cleaningFeeTotal = 0; 
    }

        totalAmountGuest = totalAmountGuest + cleaningFeeTotal
        var percentageAirbnbFeeGuest = (airbnbFeeGuestAmount / totalAmountGuest * 100).toFixed(2) +"%)";
        document.getElementById(alterationNumber + 'airbnbFeeGuestType').append(percentageAirbnbFeeGuest)




        // Declaring definition of Prices
        counter = 1;
        var allPriceTypes = [];
        while (counter <= numberNight) {
            var priceType = (document.getElementById(alterationNumber +'dailyType' + counter).innerText);

            var countArray=allPriceTypes.length;
            var existsInArray = false;

            if(countArray == 0){
                allPriceTypes.push(priceType);
            }
            else{
                for(var i=0;i<countArray;i++)
                {
                 if(allPriceTypes[i]===priceType){
                    existsInArray = true;
                 }
             }

                 if(existsInArray == false){
                 allPriceTypes.push(priceType);
                 }
             } //end if not 0 in array
            counter++;
        }

        // Returning Values in Array
        var definitionDiv = document.createElement('div');
        definitionDiv.className = "definitionDiv";
        definitionDiv.id = alterationNumber +'definitionDiv';
        definitionDiv.style.display = 'none';
        document.getElementById('DivRightField').appendChild(definitionDiv);



        var countArray=allPriceTypes.length;
        for (var i=0;i<countArray;i++) {
            if(allPriceTypes[i] === "Base Price") {
               var definitionType = document.createElement('div');
                definitionType.className = "definitionType";
                var definitionTypeNode = document.createTextNode('Base Price — The price is taken from the base price as set up in the Pricing Settings ➜ ')
                definitionType.appendChild(definitionTypeNode);
                definitionTypeNodeLink = document.createElement('a');
                definitionTypeNodeLink.setAttribute('href',"https://admin.airbnb.com/manage-your-space/" + listingID + "/pricing/nightly-price");
                definitionTypeNodeLink.innerHTML = 'Nightly Price';
                definitionTypeNodeLink.setAttribute("target","_blank")
                definitionType.appendChild(definitionTypeNodeLink);
                document.getElementById(alterationNumber + 'definitionDiv').appendChild(definitionType);
            }
            else if (allPriceTypes[i] === "Weekend Pricing") {
               var definitionType = document.createElement('div');
                definitionType.className = "definitionType";
                var definitionTypeNode = document.createTextNode('Weekend Pricing — The price is taken from weekend price as set up in the Pricing Settings ➜ ')
                definitionType.appendChild(definitionTypeNode);
                definitionTypeNodeLink = document.createElement('a');
                definitionTypeNodeLink.setAttribute('href',"https://admin.airbnb.com/manage-your-space/" + listingID + "/pricing/extra-fees");
                definitionTypeNodeLink.innerHTML = 'Extra Charges';
                definitionTypeNodeLink.setAttribute("target","_blank")
                definitionType.appendChild(definitionTypeNodeLink);
                document.getElementById(alterationNumber + 'definitionDiv').appendChild(definitionType);
            }
            else if (allPriceTypes[i] === "Smart Pricing") {
               var definitionType = document.createElement('div');
                definitionType.className = "definitionType";
                var definitionTypeNode = document.createTextNode("Smart Pricing — The price is calculated base on the smart price's minimum and maximum rate as set up in the Pricing Settings ➜ ")
                definitionType.appendChild(definitionTypeNode);
                definitionTypeNodeLink = document.createElement('a');
                definitionTypeNodeLink.setAttribute('href',"https://admin.airbnb.com/manage-your-space/" + listingID + "/pricing/nightly-price");
                definitionTypeNodeLink.innerHTML = 'Nightly Price';
                definitionTypeNodeLink.setAttribute("target","_blank")
                definitionType.appendChild(definitionTypeNodeLink);
                document.getElementById(alterationNumber + 'definitionDiv').appendChild(definitionType);
            }
            else if (allPriceTypes[i] === "Custom Price") {
               var definitionType = document.createElement('div');
                definitionType.className = "definitionType";
                var definitionTypeNode = document.createTextNode("Custom Price — The price based on what the host selected this night to cost, which is set in ➜ ")
                definitionType.appendChild(definitionTypeNode);
                definitionTypeNodeLink = document.createElement('a');
                definitionTypeNodeLink.setAttribute('href',"https://admin.airbnb.com/multicalendar/" + listingID );
                definitionTypeNodeLink.innerHTML = 'the calendar';
                definitionTypeNodeLink.setAttribute("target","_blank")
                definitionType.appendChild(definitionTypeNodeLink);
                document.getElementById(alterationNumber + 'definitionDiv').appendChild(definitionType);
            }
            else if (allPriceTypes[i] === "Custom monthly") {
               var definitionType = document.createElement('div');
                definitionType.className = "definitionType";
                var definitionTypeNode = document.createTextNode("Custom monthly — The price is set per Month, as a seasonal pricing, and taken from the Pricing Settings ➜ ")
                definitionType.appendChild(definitionTypeNode);
                definitionTypeNodeLink = document.createElement('a');
                definitionTypeNodeLink.setAttribute('href',"https://admin.airbnb.com/manage-your-space/" + listingID + "/pricing/discounts");
                definitionTypeNodeLink.innerHTML = 'Length-of-stay discounts';
                definitionTypeNodeLink.setAttribute("target","_blank")
                definitionType.appendChild(definitionTypeNodeLink);
                document.getElementById(alterationNumber + 'definitionDiv').appendChild(definitionType);
            }

        }





// Raw Snapshots Display
    
    var insertedPricingText = snapshotText.substring(snapshotText.indexOf("pricing_snapshot_data") ,snapshotText.indexOf("admin_points")+15); 

if (insertedPricingText.includes("guest_fee_reservation_stamp")) {
    
    //Pricing_History can be Empty, checking if not. If so, take data from line_items
    var checkPricing_History = insertedPricingText.substring(insertedPricingText.indexOf('pricing_history')+25,insertedPricingText.indexOf("admin_points")-6)

    if(checkPricing_History.length >1){
        var SnapshotPriceText = insertedPricingText.substring(insertedPricingText.indexOf('pricing_history'), insertedPricingText.indexOf('admin_points'));

    SnapshotPriceText = SnapshotPriceText.replace(/{"type"=>"/g, '\n');
    SnapshotPriceText = SnapshotPriceText.replace(/_/g, ' ');
    SnapshotPriceText = SnapshotPriceText.replace(/"/g, '');
    SnapshotPriceText = SnapshotPriceText.replace(/,/g, ' ');


    }
    else { // If Empty
        var SnapshotPriceText = insertedPricingText.substring(insertedPricingText.indexOf('line_items'), insertedPricingText.indexOf('guest_fee_reservation_stamp'));
    SnapshotPriceText = SnapshotPriceText.replace(/\[{"type"=>"/g, ' ');
    SnapshotPriceText = SnapshotPriceText.replace(/{"type"=>"/g, '\n');
    SnapshotPriceText = SnapshotPriceText.replace(/"/g, '');
    SnapshotPriceText = SnapshotPriceText.replace(/,/g, ' ');
    SnapshotPriceText = SnapshotPriceText.replace(/_/g, ' ');

    }
}
/* Snapshot Type 1 */
  else {
    var SnapshotPriceText = insertedPricingText;
    SnapshotPriceText = SnapshotPriceText.replace(/payment_pricing_item_meta":{"type":"/g, '\n');
    SnapshotPriceText = SnapshotPriceText.replace(/_/g, ' ');
    SnapshotPriceText = SnapshotPriceText.replace(/"/g, '');
    SnapshotPriceText = SnapshotPriceText.replace(/,/g, ' ');

} 


    var snapshotRaw = document.createElement('div')
    snapshotRaw.className= 'snapshotRaw';
    snapshotRaw.id = alterationNumber + 'snapshotRaw';
    var snapshotRawNode = document.createTextNode(SnapshotPriceText);
    snapshotRaw.appendChild(snapshotRawNode);
    document.getElementById(alterationNumber + 'rawSnapshotContent').appendChild(snapshotRaw);

$('#'+alterationNumber+'snapshotRaw').html($('#'+alterationNumber+'snapshotRaw').html().replace(/\n\\*/g,'</p> <span style="visibility:hidden;">.</span> <p>'));
//document.getElementById(alterationNumber + 'snapshotRaw').replace(/\n\\*/g,"</p><p>");

//(document.getElementById(alterationNumber+'snapshotRaw').html((document.getElementById(alterationNumber+'snapshotRaw')).html().replace(/<br>\\*/g,"</p><p>")));


/* Google Maps */

if(alterationNumber == 0){
lattitude = snapshotText.substring(snapshotText.indexOf('are_children_allowed'));
lattitude = lattitude.substring(lattitude.indexOf('is_weekly_price_prorated'));
lattitude = lattitude.substring(lattitude.indexOf('lat')+5,lattitude.indexOf('listing_obj_type')-2);
lattitude = parseFloat(lattitude)

longtitude = snapshotText.substring(snapshotText.indexOf('are_children_allowed'));
longtitude = longtitude.substring(longtitude.indexOf('listing_obj_type'));
longtitude = longtitude.substring(longtitude.indexOf('lng')+5,longtitude.indexOf('locale')-2);
longtitude = parseFloat(longtitude)

var createMap = document.createElement('div');
createMap.id = alterationNumber + 'map';
createMap.className = 'maps'
createMap.style.width = '51.2vw';
createMap.style.height = '40vh';
document.getElementById(alterationNumber + 'DivListingDetails').appendChild(createMap)

        var createListingMapScript = document.createElement("script");
        createListingMapScript.type = "text/javascript";
        createListingMapScript.defer = true;
        createListingMapScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCivSX9T27Pc-3eM1shi6_ddzqGQp6qzxk&callback=initMap";
        $("#" + alterationNumber + 'DivListingDetails').append(createListingMapScript);
}


var createMapLinkDiv = document.createElement('div');
var createMapLinkNode = document.createTextNode('View the location on Google Maps')
createMapLinkDiv.appendChild(createMapLinkNode);
createMapLinkDiv.setAttribute('onclick',"window.open('https://www.google.com/maps/?q="+lattitude+ "," + longtitude + "');")
createMapLinkDiv.className= 'mapsLink';
document.getElementById(alterationNumber + 'DivListingDetails').appendChild(createMapLinkDiv)





alterationNumber++;

 }//While — Looping through Alterations



} // End Function Transform Text



