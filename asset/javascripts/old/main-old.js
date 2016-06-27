// Date Picker Initialize

$('.input-group.date').datepicker({
    format: "dd/mm/yyyy",
    orientation: "top left",
    autoclose: true
});
$('.datedeparture').datepicker({
    format: "mm/yyyy",
    orientation: "top left",
    minViewMode: 1,
    keyboardNavigation: false,
    autoclose: true
});
$('#drink-driving-date').datepicker({
    format: "dd/mm/yyyy",
    orientation: "top left",
    autoclose: true
});
$('#criminal-conviction-date').datepicker({
    format: "dd/mm/yyyy",
    orientation: "top left",
    autoclose: true
});
$('#traffic-offence-date').datepicker({
    format: "dd/mm/yyyy",
    orientation: "top left",
    autoclose: true
});
$('#already-paid-date').datepicker({
    format: "dd/mm/yyyy",
    orientation: "top left",
    autoclose: true,
    todayHighlight: true
});


$('.btn-prv').click(function(){
    $('.prog-bar > .active').prev('li').find('a').trigger('click');
    $('html, body').animate({scrollTop: '0px'}, 300);
});

// credit card initialize

$('#form-paid').card({
    // a selector or DOM element for the container
    // where you want the card to appear
    container: '.card-wrapper', // *required*

    // all of the other options from above
});

// Functions

function currencySign(){
    var country = $("select[name='country']").val();
    var sign;
    if (country == "United Kingdom") {
            sign = "£";
            return sign;
    }
    else {
        sign = "$";
        return sign;
    }
}
function currencyText(){
    var country = $("select[name='country']").val();
    var signText;
    if (country == "Australia" || country == "New Zealand") {
        signText = "AUD";
        return signText;
    }
    else if (country == "United States") {
        signText = "USD";
        return signText;
    }
    else if (country == "Canada") {
        signText = "CAD";
        return signText;
    }
    else if (country == "United Kingdom") {
        signText = "GBP";
        return signText;
    }else {
        signText = "AUD";
        return signText;
    }
}
function pricefcn() {
    var country = $("select[name='country']").val();
    var program = $("#program").find(".selected").data("program");
    var price;
    if (program == "Working Holiday") {
        if (country == "United Kingdom") {
            price = "995";
            return price;
        }else {
            price = "1895";
            return price;
        }
    }
    else if (program == "Au Pair") {
        if (country == "United Kingdom") {
            price = "995";
            return price;
        }else {
            price = "1795";
            return price;
        }
    }else {
        price = $("#trip-price").val();
        return price;
    }
}
function discountPrice() {
    var country = $("select[name='country']").val();
    var discount;
    if (country == "United Kingdom") {
        discount = 30;
        return discount;
    }else {
        discount = 50;
        return discount;
    }
}
function depositfcn() {
    var country = $("select[name='country']").val();
    var deposit;
    if (country == "United Kingdom") {
        deposit = "295";
        return deposit;
    }else if (country == "Canada" || country == "United States") {
        deposit = "595";
        return deposit;
    }else {
        deposit = "695";
        return deposit;
    }
}

// Progress Bar Steps Control
if (!$('#welcome-btn').hasClass("disabled")) {
    $('#welcome-btn').click(function(e) {
        e.preventDefault();
        $("#welcome-step").addClass("done");
        $("#personal-step").attr("data-toggle", "tab");
        $("#personal-step").tab('show');
        $('html, body').animate({scrollTop: '0px'}, 300);
    });

}
if (!$('#personal-btn').hasClass("disabled")) {
    $('#personal-btn').click(function(e) {
        e.preventDefault();
        $("#personal-step").addClass("done");
        $("#program-step").attr("data-toggle", "tab");
        $("#program-step").tab('show');
        var cSign = currencySign();
        var cText = currencyText()
        $("#price-currency").html(cSign);
        $("#price-currency-text").html(cText);
        $("#special-deposit-currency").html(cText);
        $('html, body').animate({scrollTop: '0px'}, 300);
    });

}
if (!$('#program-btn').hasClass("disabled")) {
    $('#program-btn').click(function(e) {
        e.preventDefault();
        $("#program-step").addClass("done");
        $("#addons-step").attr("data-toggle", "tab");
        $("#addons-step").tab('show');
        $('html, body').animate({scrollTop: '0px'}, 300);
    });
}
if (!$('#addons-btn').hasClass("disabled")) {
    $('#addons-btn').click(function(e) {
        e.preventDefault();
        $("#addons-step").addClass("done");
        $("#travel-step").attr("data-toggle", "tab");
        $("#travel-step").tab('show');
        $('html, body').animate({scrollTop: '0px'}, 300);
    });
}
if (!$('#travel-btn').hasClass("disabled")) {
    $('#travel-btn').click(function(e) {
        e.preventDefault();
        $("#travel-step").addClass("done");
        $("#other-step").attr("data-toggle", "tab");
        $("#other-step").tab('show');
        $('html, body').animate({scrollTop: '0px'}, 300);
    });
}
if (!$('#other-btn').hasClass("disabled")) {
    $('#other-btn').click(function(e) {
        e.preventDefault();
        $("#other-step").addClass("done");
        $("#tc-step").attr("data-toggle", "tab");
        $("#tc-step").tab('show');
        $('html, body').animate({scrollTop: '0px'}, 300);
    });
}
if (!$('#tc-btn').hasClass("disabled")) {
    $('#tc-btn').click(function(e) {
        e.preventDefault();
        $("#tc-step").addClass("done");
        $("#survey-step").attr("data-toggle", "tab");
        $("#survey-step").tab('show');
        $('html, body').animate({scrollTop: '0px'}, 300);
    });
}
if (!$('#survey-btn').hasClass("disabled")) {
    $('#survey-btn').click(function(e) {
        e.preventDefault();
        $("#survey-step").addClass("done");
        $("#payment-step").attr("data-toggle", "tab");
        $("#payment-step").tab('show');
        $('html, body').animate({scrollTop: '0px'}, 300);
    });
}
if (!$('#payment-btn').hasClass("disabled")) {
    $('#payment-btn').click(function(e) {
        e.preventDefault();
        $("#payment-step").addClass("done");
        $("#overview-step").attr("data-toggle", "tab");
        $("#overview-step").tab('show');
        $('html, body').animate({scrollTop: '0px'}, 300);
    });
}
if (!$('#overview-btn').hasClass("disabled")) {
    $('#overview-btn').click(function(e) {
        e.preventDefault();
        $("#overview-step").addClass("done");
        $("#confiormation-step").attr("data-toggle", "tab");
        $("#confiormation-step").tab('show');
        $(window).scrollTop(300);
    });
}

// Program selection

$(document).on('click','.program-exp',function(){
    var program = $(this).data('exp'),
        where = $("#country-selection"),
        wh = ['Canada', 'Australia', 'USA', 'UK'],
        whC = ['canada', 'australia', 'usa', 'uk'],
        vol = ['Africa', 'South America', 'Asia', 'Europe','Central America','South Pacific'],
        volC = ['africa', 'south-america', 'asia', 'europe','central-america','south-pacific'],
        aupair = ['Canada', 'Australia', 'New Zealand', 'Europe', 'China', 'UK', 'USA'],
        aupairC = ['canada', 'australia', 'new-zealand', 'europe', 'china', 'uk', 'usa'],
        teach = ['China', 'Thailand', 'Myanmar', 'South Korea'],
        teachC = ['china', 'thailand', 'myanmar', 'south-korea'],
        internship = ['USA', 'Canada', 'Australia', 'New Zealand','South Africa'];
        internshipC = ['usa', 'canada', 'australia', 'new-zealand','africa'];
    where.append("<h4 class='ttl'>Select Your Destination</h4>");
    $('#' + program + '-parent').addClass("selected");
    $('#' + program + '-parent').siblings().not(".selected").addClass("not-selected").delay(1000).hide(500);
    var country = $("select[name='country']").val();

    if(program=="wh"){
        $.each(wh, function(i){
            where.append("<div class='col-md-8 col-md-offset-2 tile-sec' data-country='" + wh[i] + "' id='"+ whC[i] + "-parent'><div class='row'><div class='col-md-2'><div class='icon-gl " + whC[i] + " globalblue'></div></div><div class='col-md-7 detail'><h6>"+ wh[i] + "</h6></div><div class='col-md-3'><a class='btn btn-primary btn-large btn-block program-country' data-country='" + whC[i] + "'>Select</a></div></div></div>");
        });
        $("#trip-price").prop('disabled',true);
        $("#trip-code").prop('disabled',true);
        $("#trip-code").val("None");
    }
    if(program=="aupair"){
        $.each(aupair, function(i){
            where.append("<div class='col-md-8 col-md-offset-2 tile-sec' data-country='" + aupair[i] + "' id='"+ aupairC[i] + "-parent'><div class='row'><div class='col-md-2'><div class='icon-gl " + aupairC[i] + " globalblue'></div></div><div class='col-md-7 detail'><h6>"+ aupair[i] + "</h6></div><div class='col-md-3'><a class='btn btn-primary btn-large btn-block program-country' data-country='" + aupairC[i] + "'>Select</a></div></div></div>");
        });
        $("#trip-price").prop('disabled',true);
        $("#trip-code").prop('disabled',true);
        $("#trip-code").val("None");
    }
    if(program=="volunteer"){
        $.each(vol, function(i){
            where.append("<div class='col-md-8 col-md-offset-2 tile-sec' data-country='" + vol[i] + "' id='"+ volC[i] + "-parent'><div class='row'><div class='col-md-2'><div class='icon-gl " + volC[i] + " globalblue'></div></div><div class='col-md-7 detail'><h6>"+ vol[i] + "</h6></div><div class='col-md-3'><a class='btn btn-primary btn-large btn-block program-country' data-country='" + volC[i] + "'>Select</a></div></div></div>");
        });
        $("#tc-chk-sec").remove();
        $("#tc-chk-thrd").remove();
        $("#tc-2-overview").remove();
        $("#tc-3-overview").remove();
    }
    if(program=="teaching"){
        $.each(teach, function(i){
            where.append("<div class='col-md-8 col-md-offset-2 tile-sec' data-country='" + teach[i] + "' id='"+ teachC[i] + "-parent'><div class='row'><div class='col-md-2'><div class='icon-gl " + teachC[i] + " globalblue'></div></div><div class='col-md-7 detail'><h6>"+ teach[i] + "</h6></div><div class='col-md-3'><a class='btn btn-primary btn-large btn-block program-country' data-country='" + teachC[i] + "'>Select</a></div></div></div>");
        });
        $("#tc-chk-sec").remove();
        $("#tc-2-overview").remove();
    }
    if(program=="internship"){
        $.each(internship, function(i){
            where.append("<div class='col-md-8 col-md-offset-2 tile-sec' data-country='" + internship[i] + "' id='"+ internshipC[i] + "-parent'><div class='row'><div class='col-md-2'><div class='icon-gl " + internshipC[i] + " globalblue'></div></div><div class='col-md-7 detail'><h6>"+ internship[i] + "</h6></div><div class='col-md-3'><a class='btn btn-primary btn-large btn-block program-country' data-country='" + internshipC[i] + "'>Select</a></div></div></div>");
        });
        $("#tc-chk-sec").remove();
        $("#tc-chk-thrd").remove();
        $("#tc-2-overview").remove();
        $("#tc-3-overview").remove();
    }

    var price = pricefcn();
    $("#price").val(price);
    $("#trip-price").val(price);
//
});

$(document).on('click', '.program-country', function() {
    var country = $(this).data('country'),
        program = $("#program").find(".selected").attr("id").replace(/(-|parent)/g, '');
    $('#' + country + '-parent').addClass("selected");
    $('#' + country + '-parent').siblings().not(".selected, .ttl").addClass("not-selected").delay(1000).hide(500);
    $("#program-punch").removeClass("hidden");
});


// Enable input by select option yes

$("input:radio[name='travel-before-work']").click(function() {
    var value = $(this).val();
    if (value == "Yes") {
        $("#travel-before-work-how-long").prop('disabled',false);
    }
    else {
        $("#travel-before-work-how-long").prop('disabled',true);
    }
});

$("input:radio[name='travel-with-someone']").click(function() {
    var value = $(this).val();
    if (value == "Yes") {
        $("#travel-with-someone-who").prop('disabled',false);
    }
    else {
        $("#travel-with-someone-who").prop('disabled',true);
    }
});

$("input:radio[name='drink-driving']").click(function() {
    var value = $(this).val();
    if (value == "Yes") {
        $("#drink-driving-date").prop('disabled',false);
        $("#drink-driving-bac").prop('disabled',false);
        $("#drink-driving-describe").prop('disabled',false);
    }
    else {
        $("#drink-driving-date").prop('disabled',true);
        $("#drink-driving-bac").prop('disabled',true);
        $("#drink-driving-describe").prop('disabled',true);
    }
});

$("input:radio[name='criminal-conviction']").click(function() {
    var value = $(this).val();
    if (value == "Yes") {
        $("#criminal-conviction-date").prop('disabled',false);
        $("#criminal-conviction-describe").prop('disabled',false);
    }
    else {
        $("#criminal-conviction-date").prop('disabled',true);
        $("#criminal-conviction-describe").prop('disabled',true);
    }
});

$("input:radio[name='traffic-offence']").click(function() {
    var value = $(this).val();
    if (value == "Yes") {
        $("#traffic-offence-date").prop('disabled',false);
        $("#traffic-offence-describe").prop('disabled',false);
    }
    else {
        $("#traffic-offence-date").prop('disabled',true);
        $("#traffic-offence-describe").prop('disabled',true);
    }
});

$("input:radio[name='tattoos']").click(function() {
    var value = $(this).val();
    if (value == "Yes") {
        $("#tattoos-describe").prop('disabled',false);
    }
    else {
        $("#tattoos-describe").prop('disabled',true);
    }
});

$("input:radio[name='illness-diagnosed']").click(function() {
    var value = $(this).val();
    if (value == "Yes") {
        $("#illness-diagnosed-describe").prop('disabled',false);
    }
    else {
        $("#illness-diagnosed-describe").prop('disabled',true);
    }
});

$("input:radio[name='take-medication']").click(function() {
    var value = $(this).val();
    if (value == "Yes") {
        $("#take-medication-describe").prop('disabled',false);
    }
    else {
        $("#take-medication-describe").prop('disabled',true);
    }
});

$("input:radio[name='dietary']").click(function() {
    var value = $(this).val();
    if (value == "Yes") {
        $("#dietary-describe").prop('disabled',false);
    }
    else {
        $("#dietary-describe").prop('disabled',true);
    }
});

$("input:radio[name='first-hear']").click(function() {
    var value = $(this).val();
    if (value == "Other") {
        $("#first-hear-other").prop('disabled',false);
    }
    else {
        $("#first-hear-other").prop('disabled',true);
    }
});

$("input:radio[name='dietary']").click(function() {
    var value = $(this).val();
    if (value == "Yes") {
        $("#dietary-describe").prop('disabled',false);
    }
    else {
        $("#dietary-describe").prop('disabled',true);
    }
});

$("input:radio[name='consultant-guarantess']").click(function() {
    var value = $(this).val();
    if (value == "Yes") {
        $("#consultant-guarantess-describe").prop('disabled',false);
    }
    else {
        $("#consultant-guarantess-describe").prop('disabled',true);
    }
});

$("input:radio[name='consultant-answer']").click(function() {
    var value = $(this).val();
    if (value == "No") {
        $("#consultant-answer-describe").prop('disabled',false);
    }
    else {
        $("#consultant-answer-describe").prop('disabled',true);
    }
});

$("input:radio[name='payment-type']").click(function() {
    var value = $(this).val();
    if (value == "Special Deposit") {
        $("#payment-type-special-deposit-type").prop('disabled',false);
    }
    else {
        $("#payment-type-special-deposit-type").prop('disabled',true);
    }
});

// Terms & condition

$(".tc").scroll(function() {
    if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
        $("#tc-1").prop('disabled',false);
        $("#tc-1-blur").fadeOut(200);
        $("#tc-1-lb").removeClass("overlay-tc");
    }
});
$("#tc-1-lb").click(function(){
    $(".tc").addClass("tc-blink");
});

//Payment

$("input:radio[name='payment-status']").click(function(){
    var value = $(this).val();
    console.log(value);
    if (value == "I wish to pay now") {
        var cSign = currencySign();
        var discount = discountPrice();
        var price = pricefcn();
        var deposit = depositfcn();
        $("#trip-in-full-lb").html("Trip in full ( " + cSign + price + " - " + cSign + discount + " )");
        $("#std-deposit-lb").html("Standard deposit only ( " + cSign + deposit + " )");
        $("#payment-options").show(200);
        $("#amount-type").show(200);
        $("#already-punch").hide(200);
    }
    if (value == "I Already Paid By Phone"){
        $("#payment-options").hide(200);
        $("#amount-type").hide(200);
        $("#already-punch").show(200);
    }
});
$(".paymentmthd").click(function(){
    var paymentmethod = $(this).attr("id");

    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
});
$('#payment-btn').click(function(e) {
    $('[data-input!=""]').each(function(input,item){
        var qId = $(item).data('input');
        var spanValue = $('#' + qId).val();
        $('#' + qId + "-ans").html(spanValue);
    });
    $('[data-radio!=""]').each(function(radio,item){
        var qIdr = $(item).data('radio');
            var spanValuer = $("input:radio[name=" + qIdr + "]:checked").val();
        $('#' + qIdr + "-ans").html(spanValuer);
    });


    function desciption(QID, Answ, AID,i) {
        var question = $("input:radio[name='" + QID + "']:checked").val();
        if (question == Answ) {
            var answer = $("#" + QID + "-" + AID).val();
            if (!$('#'+ QID + '-ans-' + i).length) {
                $('#' + QID + '-ans').after('<span id="' + QID + '-ans-'+ i +'"></span>');
                $('#'+ QID + '-ans-'+ i).html(answer);
            }else {
                $('#'+ QID + '-ans-'+ i).html(answer);
            }
        }
    }


    // Program
    var priceProgram = pricefcn();
    var program = $("#program").find(".selected").data("program");
    var country = $("#country-selection").find(".selected").data("country");
    var TripCode = $("input[name='trip-code']").val();
    var TripDuration = $("input[name='trip-duration']").val();

    $("#program-name-ans").html(program);
    $("#program-country-ans").html(country);
    $("#program-price-ans").html(priceProgram);
    $("#program-code-ans").html(TripCode);
    $("#program-duration-ans").html(TripDuration);

    // Travel Detail
    desciption('travel-before-work','Yes','how-long','1');

    desciption('travel-with-someone','Yes','who','1');

    // Other Detail

    desciption('drink-driving','Yes','describe','1');
    desciption('drink-driving','Yes','bac','2');
    desciption('drink-driving','Yes','date','3');

    desciption('criminal-conviction','Yes','date','1');
    desciption('criminal-conviction','Yes','describe','2');

    desciption('traffic-offence','Yes','date','1');
    desciption('traffic-offence','Yes','describe','2');

    desciption('tattoos','Yes','describe','1');

    desciption('take-medication','Yes','describe','1');

    desciption('illness-diagnosed','Yes','describe','1');

    desciption('dietary','Yes','describe','1');

    // Servey

    desciption('first-hear','Other','other','1');

    desciption('consultant-answer','No','describe','1');

    desciption('consultant-guarantess','Yes','describe','1');

    var rating = $("input:radio[name='rating']:checked").val();
    $("#rating-ans").text(rating + " Stars");

    var comment = $("textarea[name='additional-comments']").val();
    $("#additional-comments-ans").text(comment);




//    $('input').each(function(){
//        name = $(this).attr("name");
//        console.log(name);
//    });


    var paymentStatus = $('input:radio[name="payment-status"]:checked').val();
    var paymentType = $('input:radio[name="payment-type"]:checked').val();
    var paymentMethod = $(".paymentmthd.selected").attr("id");
    var sign = currencySign();
    var discount = discountPrice();

    if (paymentType == "trip in full") {
        var price = pricefcn() - discount;
    }else if (paymentType == "standard deposit"){
        var price = depositfcn();
    }else {
        var price = $("#payment-type-special-deposit-type").val();
    }

    if (paymentStatus == "I Already Paid By Phone") {
        var cardNumber = $("#already-paid-card-number").val(),
            cardName = $("#already-paid-card-name").val(),
            cardExpiry = $("#already-paid-card-expiry").val(),
            cardCvc = $("#already-paid-card-cvc").val(),
            paidAmount = $("#already-paid-amount").val(),
            paidDate = $("#already-paid-date").val(),
            fstcdn = cardNumber.substr(0, 4),
            lstcdn = cardNumber.substr(cardNumber.length - 4);

        $('#payment-section').append( "<div class='col-md-12 column'><label id='payment-ans'>I've already paid by credit/debit card by phone</label></div>" );
        $('#payment-section').append( "<div class='col-md-12 column'><label id='payment-card-name'>Card Name:<span> " + cardName + "</span></label></div>" );
        $('#payment-section').append( "<div class='col-md-12 column'><label id='payment-card-number'>Card Number:<span> " + fstcdn + " **** **** " + lstcdn + "</span></label></div>" );
        $('#payment-section').append( "<div class='col-md-6 column'><label id='payment-card-exp'>Card Expiry:<span> " + cardExpiry + "</span></label></div>" );
        $('#payment-section').append( "<div class='col-md-6 column'><label id='payment-card-cvc'>Card CVC:<span> " + cardCvc + "</span></label></div>" );
        $('#payment-section').append( "<div class='col-md-6 column'><label id='payment-card-amt'>Amount:<span> " + sign + paidAmount + "</span></label></div>" );
        $('#payment-section').append( "<div class='col-md-6 column'><label id='payment-card-date'>Date of Payment:<span> " + paidDate + "</span></label></div>" );
        $('#payment-section').append( "<div class='col-md-12 column'><label id='payment-card-authorize'>You herewith irrevocably authorise The Global Work & Travel Co. to charge the above card, and have prior permission to use if not in your name, for the amount entered above towards your chosen trip.</label></div>" );
        $('#payment-section').append( "<div class='col-md-12 column'><label id='payment-card-authorize'>Note: Your card will not be charged twice. We require this information for verification purposes.</label></div>" );

    }else{
        $('#payment-section').html( "<div class='col-md-12 column'><label id='payment-ans'></label>");
        $('#payment-ans').html("You wish to pay online your " + paymentType + " ( " + sign + price + " ) " + "by " + paymentMethod );
        $('#paypal-amount').val(price);
    }
});


// Check the status
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var paypalstatus = getParameterByName('status');
if (paypalstatus == "success") {
    $(".prog-bar li a").addClass("done");
    $("#confirmation-step").attr("data-toggle", "tab");
    $("#confirmation-step").tab('show');
}


