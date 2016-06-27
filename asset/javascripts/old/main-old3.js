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


// credit card initialize

$('#form-paid').card({
    // a selector or DOM element for the container
    // where you want the card to appear
    container: '.card-wrapper', // *required*

    // all of the other options from above
});

// Functions

function currencySign() {
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
function currencyText() {
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
function tcfcn() {
    var cFrom = $("select[name='country']").val();
    var cTo = $("#country-selection").find(".selected").data("country");
    var program = $("#program").find(".selected").data("program");
    if (program == "Working Holiday") {
        var pgr = "wh";
    }else if (program == "Au Pair") {
        var pgr = "aupair";
    }else {
        var pgr = "vti";
    }
    if (cTo == "Australia") {
        var cToF = "aus";
    }else if (cTo == "Canada") {
        var cToF = "can";
    }else if (cTo == "United Kingdom") {
        var cToF = "uk";
    }else if (cTo == "United States") {
        var cToF = "usa";
    }else {
        var cToF = "gen";
    }

    if (cFrom == "Australia" || cFrom == "New Zealand") {
        var cfromF =  "aus";
    }else if (cFrom == "Canada" || cFrom == "United States") {
        var cfromF =  "can";
    }else if (cFrom == "United Kingdom") {
        var cfromF =  "uk";
    }else if (cFrom == "Belgium" || cFrom == "Finland" || cFrom == "France" || cFrom == "Germany" || cFrom == "Ireland" || cFrom == "Italy" || cFrom == "Netherlands" || cFrom == "Norway" || cFrom == "Russia" || cFrom == "Spain" || cFrom == "Sweden" || cFrom == "Switzerland") {
        var cfromF =  "uk";
    }else {
        var cfromF =  "aus";
    }

    if (cfromF == "uk") {
        var cToF = "gen" ;
    }

    if (pgr == "vol" || pgr == "aupair") {
        var cToF = "gen" ;
    }

    var urltc = pgr + '-' + cfromF + '-' + cToF
    console.log(urltc);
    $("#iftc").load('tc/tc-'+ urltc +'.html');
    $("input[name='tocname']").val(urltc);
}
function prgfcn(pg,pgC) {
    var country = $("select[name='country']").val();
    var where = $("#country-selection");
    $.each(pg, function(i){
        if (country == pg[i]) {
                var chkc = "disabled";
        }
        where.append("<div class='col-md-8 col-md-offset-2 tile-sec' data-country='" + pg[i] + "' id='"+ pgC[i] + "-parent'><div class='row'><div class='col-md-2'><div class='icon-gl " + pgC[i] + " globalblue'></div></div><div class='col-md-7 detail'><h6>"+ pg[i] + "</h6></div><div class='col-md-3'><a class='btn btn-primary btn-large btn-block program-country " + chkc + "' data-country='" + pgC[i] + "'" + chkc + ">Select</a></div></div></div>");
    });
}
function toggleDisableInput (glid,glans,glopt) {
    $("input:radio[name='"+ glid +"']").click(function() {
        var value = $(this).val();
        if (value == glans) {
            $("#" +glid + "-" + glopt).prop('disabled',false);
        }
        else {
            $("#" +glid + "-" + glopt).prop('disabled',true);
        }
    });
}
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
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
function postdb () {
    var cardNumber = $("#already-paid-card-number").val().replace(/ /g,'');
    var cardNumberNew = cardNumber.substr(0, 4) + " **** **** " + cardNumber.substr(cardNumber.length - 4);
    $.post( "http://globalworkandtravel.com/book/email.php", {
        fname:                          $("input[name='fname']").val(),
        lname:                          $("input[name='lname']").val(),
        email:                          $("input[name='email']").val(),
        nationality:                    $("select[name='nationality']").val(),
        passport:                       $("input:radio[name='passport']:checked").val(),
        gender:                         $("input:radio[name='gender']:checked").val(),
        preferredContactNo:             $("input[name='preferred-contact-no']").val(),
        secondaryContactNo:             $("input[name='secondary-contact-no']").val(),
        skype:                          $("input[name='skype']").val(),
        age:                            $("input[name='age']").val(),
        dob:                            $("input[name='dob']").val(),
        weight:                         $("input[name='weight']").val(),
        height:                         $("input[name='height']").val(),
        address:                        $("input[name='address']").val(),
        suburb:                         $("input[name='suburb']").val(),
        state:                          $("input[name='state']").val(),
        country:                        $("select[name='country']").val(),
        postCode:                       $("input[name='post-code']").val(),
        tripExPName:                    $("#program").find(".selected").data("program"),
        TripDestination:                $("#country-selection").find(".selected").data("country"),
        TripCode:                       $("input[name='trip-code']").val(),
        TripDuration:                   $("input[name='trip-duration']").val(),
        TripPrice:                      $("input[name='trip-price']").val(),
        addons:                         $("input[name='add-ons']").val(),
        dateDeparture:                  $("input[name='date-departure']").val(),
        travelBeforeExp:                $("input:radio[name='travel-before-work']:checked").val(),
        travelBeforeExpHowLong:         $("input[name='travel-before-work-how-long']").val(),
        travelWithFriend:               $("input:radio[name='travel-with-someone']:checked").val(),
        travelWithFriendWho:            $("input[name='travel-with-someone-who']").val(),
        howlongtravel:                  $("input[name='how-long-travel']").val(),
        emergencycontactname:           $("input[name='emergency-contact-name']").val(),
        emergencycontactrelation:       $("input[name='emergency-contact-relation']").val(),
        emergencycontactemail:          $("input[name='emergency-contact-email']").val(),
        emergencycontactnumber:         $("input[name='emergency-contact-number']").val(),
        drinkDriving:                   $("input:radio[name='drink-driving']:checked").val(),
        drinkDrivingDate:               $("input[name='drink-driving-date']").val(),
        drinkDrivingBac:                $("input[name='drink-driving-bac']").val(),
        drinkDrivingDescribe:           $("input[name='drink-driving-describe']").val(),
        criminalConviction:             $("input:radio[name='criminal-conviction']:checked").val(),
        criminalConvictionDate:         $("input[name='criminal-conviction-date']").val(),
        criminalConvictionDescribe:     $("input[name='criminal-conviction-describe']").val(),
        trafficOffence:                 $("input:radio[name='traffic-offence']:checked").val(),
        trafficOffenceDate:             $("input[name='traffic-offence-date']").val(),
        trafficOffenceDescribe:         $("input[name='traffic-offence-describe']").val(),
        tattoos:                        $("input:radio[name='tattoos']:checked").val(),
        tattoosDescribe:                $("input[name='tattoos-describe']").val(),
        takeMedication:                 $("input:radio[name='take-medication']:checked").val(),
        takeMedicationDescribe:         $("input[name='take-medication-describe']").val(),
        illnessDiagnosed:               $("input:radio[name='illness-diagnosed']:checked").val(),
        illnessDiagnosedDescribe:       $("input[name='illness-diagnosed-describe']").val(),
        smoke:                          $("input:radio[name='smoke']:checked").val(),
        alcohol:                        $("input:radio[name='drink-alcohol']:checked").val(),
        illicit:                        $("input:radio[name='use-illicit']:checked").val(),
        dietary:                        $("input:radio[name='dietary']:checked").val(),
        dietaryDescribe:                $("input[name='dietary-describe']").val(),
        tocName:                        $("#tocname").val(),
        tc1:                            $("#tc-1").is(':checked'),
        tc2:                            $("#tc-2").is(':checked'),
        tc3:                            $("#tc-3").is(':checked'),
        hear:                           $("input:radio[name='first-hear']:checked").val(),
        hearOther:                      $("input[name='first-hear-other']").val(),
        FriendName:                     $("input[name='refer-friend-name']").val(),
        FriendEmail:                    $("input[name='refer-friend-email']").val(),
        FriendPhone:                    $("input[name='refer-friend-phone']").val(),
        consultantname:                 $("input[name='consultant-name']").val(),
        consultantanswer:               $("input:radio[name='consultant-answer']:checked").val(),
        consultantanswerDescribe:       $("input[name='consultant-answer-describe']").val(),
        consultantguarantee:            $("input:radio[name='consultant-guarantess']:checked").val(),
        consultantguaranteeDescribe:    $("input[name='consultant-guarantess-describe']").val(),
        rate:                           $("input:radio[name='rating']:checked").val(),
        comment:                        $("textarea[name='additional-comments']").val(),
        paymentStatus:                  $("input:radio[name='payment-status']:checked").val(),
        paymentType:                    $("input:radio[name='payment-type']:checked").val(),
        paymentPromotionalAmount:       $("input[name='payment-type-special-deposit-type']").val(),
        paymentMethod:                  $(".paymentmthd.selected").data("option"),
        payingAmount:                   $('#payingamount').val(),
        paidCardName:                   $("#already-paid-card-name").val(),
        paidCardNum:                    cardNumberNew,
        paidCardExp:                    $("#already-paid-card-expiry").val(),
        paidCardCvc:                    $("#already-paid-card-cvc").val(),
        paidAmount:                     $("#already-paid-amount").val(),
        paidDate:                       $("#already-paid-date").val(),
        paidTc:                         $("#cc-authorize-3").is(':checked'),
        status:                         $("input[name='booking-status']").val(),
        cid:                            $("input[name='booking-cid']").val(),
        ip:                             $("input[name='booking-ip']").val(),
        time:                           $("input[name='booking-time']").val(),
        office:                         $("input[name='gloffice']").val(),
    });
    console.log("success")
}
function officefcn () {
    var country = $("select[name='country']").val();
    var officeName;
    if (country == "Australia" || country == "New Zealand") {
        officeName = "Australia";
        return officeName;
    }
    else if (country == "United States" || country == "Canada") {
        officeName = "Canada";
        return officeName;
    }
    else if (country == "United Kingdom" || country == "Belgium" || country == "Finland" || country == "France" || country == "Germany" || country == "Ireland" || country == "Italy" || country == "Netherlands" || country == "Norway" || country == "Russia" || country == "Spain" || country == "Sweden" || country == "Switzerland") {
        officeName = "United Kingdom";
        return officeName;
    }else {
        officeName = "Australia";
        return officeName;
    }
}



//Personal Validation
$('#personal').on("click keyup", function() {
    var valempt1 = true;
    var valempt2 = $("input[name='gender']").is(':checked');
    var valempt3 = $("input[name='passport']").is(':checked');
    $("#personal input[data-validation='mand']").each(function() {
        if ($(this).val() == '') {
            valempt1 = false;
        }
    });
    if ( valempt1 && valempt2 && valempt3 ) {
        $('#personal-btn').removeClass("disabled");
    }else {
        $('#personal-btn').addClass("disabled");
    }
});

//Program Validation
$('#program').on("click keyup", function() {
    var valemptpr1 = true;
    $("#program input[data-validation='mand']").each(function() {
        if ($(this).val() == '') {
            valemptpr1 = false;
        }
    });
    if ( valemptpr1 ) {
        $('#program-btn').removeClass("disabled");
    }else {
        $('#program-btn').addClass("disabled");
    }
});

//Travel Validation
$('#travel').on("click keyup", function() {
    var valempttr1 = true;
    var valempttr2 = $("input[name='travel-before-work']").is(':checked');
    var valempttr3 = $("input[name='travel-with-someone']").is(':checked');
    $("#travel input[data-validation='mand']").each(function() {
        if ($(this).val() == '') {
            valempttr1 = false;
        }
    });
    if ( valempttr1 && valempttr2 && valempttr3 ) {
        $('#travel-btn').removeClass("disabled");
    }else {
        $('#travel-btn').addClass("disabled");
    }
});

// Other validation
$('#other').on("click keyup", function() {
    var valemptot1 = true;
    var valemptot2 = $("input[name='drink-driving']").is(':checked');
    var valemptot3 = $("input[name='criminal-conviction']").is(':checked');
    var valemptot4 = $("input[name='traffic-offence']").is(':checked');
    var valemptot5 = $("input[name='tattoos']").is(':checked');
    var valemptot6 = $("input[name='take-medication']").is(':checked');
    var valemptot7 = $("input[name='illness-diagnosed']").is(':checked');
    var valemptot8 = $("input[name='smoke']").is(':checked');
    var valemptot9 = $("input[name='drink-alcohol']").is(':checked');
    var valemptot10 = $("input[name='use-illicit']").is(':checked');
    var valemptot11 = $("input[name='dietary']").is(':checked');
    $("#other input[data-validation='mand']").each(function() {
        if ($(this).val() == '') {
            valemptot1 = false;
        }
    });
    if ( valemptot1 && valemptot2 && valemptot3 && valemptot4 && valemptot5 && valemptot6 && valemptot7 && valemptot8 && valemptot9 && valemptot10 && valemptot11 ) {
        $('#other-btn').removeClass("disabled");
    }else {
        $('#other-btn').addClass("disabled");
    }
});

// TC validation
$('#tc').on("click keyup", function() {
    var valempttc1 = $("input[name='tc-1']").is(':checked');

    if($("#tc-2").length > 0) {
        var valempttc2 = $("input[name='tc-2']").is(':checked');
    }else {
        var valempttc2 = true;
    }

    if($("#tc-3").length > 0) {
        var valempttc3 = $("input[name='tc-3']").is(':checked');
    }else {
        var valempttc3 = true;
    }

    if ( valempttc1 && valempttc2 && valempttc3 ) {
        $('#tc-btn').removeClass("disabled");
    }else {
        $('#tc-btn').addClass("disabled");
    }
});

// Terms & condition

$(".tc").scroll(function() {
    console.log($(this).scrollTop() + $(this).innerHeight());
    console.log($(this)[0].scrollHeight);
    if($(this).scrollTop() + $(this).innerHeight() >= ($(this)[0].scrollHeight - 300)) {
        $("#tc-1").prop('disabled',false);
        $("#tc-1-blur").fadeOut(200);
        $("#tc-1-lb").removeClass("overlay-tc");
        $("#tc-1-blur").remove(200);
    }
});
$("#tc-1-lb").click(function(){
    $(".tc").addClass("tc-blink");
});


//survey validation
$('#survey').on("click keyup", function() {
    var valemptsu1 = true;
    var valemptsu2 = $("input[name='first-hear']").is(':checked');
    var valemptsu3 = $("input[name='consultant-answer']").is(':checked');
    var valemptsu4 = $("input[name='consultant-guarantess']").is(':checked');
    var valemptsu5 = $("input[name='rating']").is(':checked');


    $("#survey input[data-validation='mand']").each(function() {
        if ($(this).val() == '') {
            valemptsu1 = false;
        }
    });
    if ( valemptsu1 && valemptsu2 && valemptsu3 && valemptsu4 && valemptsu5 ) {
        $('#survey-btn').removeClass("disabled");
    }else {
        $('#survey-btn').addClass("disabled");
    }
});


//Payment Validation
$('#payment').on("click keyup", function() {

    var typm = $("input:radio[name='payment-status']:checked").val();

    if (typm == "I wish to pay now") {
console.log("clicked");
        var valempaying1 = $("input[name='payment-type']").is(':checked');
        var valempaying2 = $(".paymentmthd.selected").data("option").length;

        if ( valempaying1 && valempaying2 > 0 ) {
            $('#payment-btn').removeClass("disabled");
        }else {
            $('#payment-btn').addClass("disabled");
        }

    }else {

        var valepaid1 = $("#cc-authorize-3").is(':checked');
        var valepaid2 = true;
        $("#payment input[data-validation='mandpaid']").each(function() {
            if ($(this).val() == '') {
                valepaid2 = false;
            }
        });
        if ( valepaid1 && valepaid2 ) {
            $('#payment-btn').removeClass("disabled");
        }else {
            $('#payment-btn').addClass("disabled");
        }
    };

});


// Previous Btn
$('.btn-prv').click(function(){
    $('.prog-bar > .active').prev('li').find('a').trigger('click');
    $('html, body').animate({scrollTop: '0px'}, 300);
});


$(document).ready(function() {
    $('#personal-form').formValidation({
        framework: 'bootstrap',
        autoFocus: 'true',
        live: 'enabled',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            fname: {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            lname: {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            nationality: {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            passport: {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'preferred-contact-no': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    },
                    numeric: {
                        message: 'This field is required'
                    }
                }
            },
            age: {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            dob: {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            address: {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            suburb: {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            country: {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'post-code': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            }
        }
    });
    $('#travel-form').formValidation({
        framework: 'bootstrap',
        autoFocus: 'true',
        live: 'enabled',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'date-departure': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'travel-before-work': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'travel-with-someone': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            }
        }
    });
    $('#other-form').formValidation({
        framework: 'bootstrap',
        autoFocus: 'true',
        live: 'enabled',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'emergency-contact-name': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'emergency-contact-relation': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'emergency-contact-email': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'emergency-contact-number': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'drink-driving': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'criminal-conviction': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'traffic-offence': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'tattoos': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'take-medication': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'illness-diagnosed': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            smoke: {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'drink-alcohol': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'use-illicit': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'dietary': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            }
        }
    });
    $('#tc-form').formValidation({
        framework: 'bootstrap',
        autoFocus: 'true',
        live: 'enabled',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'tc-1': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'tc-2': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'tc-3': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            }
        }
    });
    $('#survey-form').formValidation({
        framework: 'bootstrap',
        autoFocus: 'true',
        live: 'enabled',
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'first-hear': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'consultant-name': {
                validators: {
                    notEmpty: {
                        message: 'This filed is required'
                    }
                }
            },
            'consultant-answer': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            },
            'consultant-guarantess': {
                validators: {
                    notEmpty: {
                        message: 'This field is required'
                    }
                }
            }
        }
    });
});

//Validation

//$('#personalCheck').on("keyup",function() {
//    if ($('#personalCheck').hasClass("has-success")) {
//        $('#personal-btn').removeClass("disabled");
//    }else {
//        $('#personal-btn').addClass("disabled");
//    }
//});






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
$('#personal-btn').click(function(e) {
    if (!$('#personal-btn').hasClass("disabled")) {
        e.preventDefault();
        $("#personal-step").addClass("done");
        $("#program-step").attr("data-toggle", "tab");
        $("#program-step").tab('show');
        var cSign = currencySign();
        var cText = currencyText();
        var coffice = officefcn();
        $("#price-currency").html(cSign);
        $("#price-currency-text").html(cText);
        $("#special-deposit-currency").html(cText);
        $("#gloffice").val(coffice);
        $('html, body').animate({scrollTop: '0px'}, 300);
    }
});
$('#program-btn').click(function(e) {
    if (!$('#program-btn').hasClass("disabled")) {
    e.preventDefault();
    $("#program-step").addClass("done");
    $("#addons-step").attr("data-toggle", "tab");
    $("#addons-step").tab('show');
    $('html, body').animate({scrollTop: '0px'}, 300);
    var tcn = tcfcn();
    }
});
if (!$('#addons-btn').hasClass("disabled")) {
    $('#addons-btn').click(function(e) {
        e.preventDefault();
        $("#addons-step").addClass("done");
        $("#travel-step").attr("data-toggle", "tab");
        $("#travel-step").tab('show');
        $('html, body').animate({scrollTop: '0px'}, 300);
    });
}
$('#travel-btn').click(function(e) {
    if (!$('#travel-btn').hasClass("disabled")) {
        e.preventDefault();
        $("#travel-step").addClass("done");
        $("#other-step").attr("data-toggle", "tab");
        $("#other-step").tab('show');
        $('html, body').animate({scrollTop: '0px'}, 300);
    }
});
$('#other-btn').click(function(e) {
    if (!$('#other-btn').hasClass("disabled")) {
    e.preventDefault();
    $("#other-step").addClass("done");
    $("#tc-step").attr("data-toggle", "tab");
    $("#tc-step").tab('show');
    $('html, body').animate({scrollTop: '0px'}, 300);
    }
});
$('#tc-btn').click(function(e) {
    if (!$('#tc-btn').hasClass("disabled")) {
        e.preventDefault();
        $("#tc-step").addClass("done");
        $("#survey-step").attr("data-toggle", "tab");
        $("#survey-step").tab('show');
        $('html, body').animate({scrollTop: '0px'}, 300);
    }
});
$('#survey-btn').click(function(e) {
    if (!$('#survey-btn').hasClass("disabled")) {
        e.preventDefault();
        $("#survey-step").addClass("done");
        $("#payment-step").attr("data-toggle", "tab");
        $("#payment-step").tab('show');
        $('html, body').animate({scrollTop: '0px'}, 300);
    }
});
$('#payment-btn').click(function(e) {
    if (!$('#payment-btn').hasClass("disabled")) {
        e.preventDefault();
        $("#payment-step").addClass("done");
        $("#overview-step").attr("data-toggle", "tab");
        $("#overview-step").tab('show');
        $('html, body').animate({scrollTop: '0px'}, 300);
        postdb();
    }
});
if (!$('#overview-btn').hasClass("disabled")) {
    $('#overview-btn').click(function(e) {
        e.preventDefault();
        $("#overview-step").addClass("done");
        $("#confirmation-step").addClass("done");
        $("#confirmation-step").attr("data-toggle", "tab");
        $("#confirmation-step").tab('show');
        $('html, body').animate({scrollTop: '0px'}, 300);
        var cidovr = $("input[name='booking-cid']").val();
        var pyamnt = $('#payingamount').val()
        $.post( "http://globalworkandtravel.com/book/final.php", {
            cid:                            cidovr,
            status:                         "Completed",
        });
    console.log("final success 2");
    });
}

// Program selection

$(document).on('click','.program-exp',function(){
    $(".program").toggleClass("not-sel");
    var program = $(this).data('exp');
    if ($(".program").hasClass("not-sel")) {
        var wh = ['Canada', 'Australia', 'United States', 'United Kingdom'],
            whC = ['canada', 'australia', 'usa', 'uk'],
            vol = ['Africa', 'South America', 'Asia', 'Europe','Central America','South Pacific'],
            volC = ['africa', 'south-america', 'asia', 'europe','central-america','south-pacific'],
            aupair = ['Canada', 'Australia', 'New Zealand', 'Europe', 'China', 'United Kingdom', 'United States'],
            aupairC = ['canada', 'australia', 'new-zealand', 'europe', 'china', 'uk', 'usa'],
            teach = ['China', 'Thailand', 'Myanmar', 'South Korea'],
            teachC = ['china', 'thailand', 'myanmar', 'south-korea'],
            internship = ['United States', 'Canada', 'Australia', 'New Zealand','South Africa'],
            internshipC = ['usa', 'canada', 'australia', 'new-zealand','africa'];

        var country = $("select[name='country']").val(),
            where = $("#country-selection");

        where.html("<h4 class='ttl'>Select Your Destination</h4>");
        where.fadeIn(500);

        $('#' + program + '-parent').addClass("selected");
    //    $('#' + program + '-parent').siblings().not(".selected").addClass("not-selected").delay(1000).hide(500);
        $('#' + program + '-parent').siblings().not(".selected").fadeOut(500);

        if(program=="wh"){
            prgfcn(wh,whC);
            $("#trip-price").prop('disabled',true);
            $("#trip-code").prop('disabled',true);
            $("#trip-code").val("N/A");
            if (country == "United States") {
                $("a[data-country='canada']").addClass('disabled');
                $("a[data-country='usa']").addClass('disabled');
                $("a[data-country='uk']").addClass('disabled');
            }else if (country == "Canada") {
                $("a[data-country='usa']").addClass('disabled');
            }else if (country == "New Zealand") {
                $("a[data-country='aus']").addClass('disabled');
            }
        }
        if(program=="aupair"){
            prgfcn(aupair,aupairC);
            $("#trip-price").prop('disabled',true);
            $("#trip-code").prop('disabled',true);
            $("#trip-code").val("N/A");
            if (country == "United States") {
                $("a[data-country='canada']").addClass('disabled');
                $("a[data-country='usa']").addClass('disabled');
                $("a[data-country='uk']").addClass('disabled');
                $("a[data-country='europe']").addClass('disabled');
            }else if (country == "Canada") {
                $("a[data-country='usa']").addClass('disabled');
            }
        }
        if(program=="volunteer"){
            prgfcn(vol,volC);
            $("#tc-chk-sec").remove();
            $("#tc-chk-thrd").remove();
            $("#tc-2-overview").remove();
            $("#tc-3-overview").remove();
            $("#trip-price").prop('disabled',false);
            $("#trip-code").prop('disabled',false);
            $("#trip-code").val("");
            $("#trip-price").val("");
        }
        if(program=="teaching"){
            prgfcn(teach,teachC);
            $("#tc-chk-sec").remove();
            $("#tc-2-overview").remove();
            $("#trip-price").prop('disabled',false);
            $("#trip-code").prop('disabled',false);
            $("#trip-code").val("");
            $("#trip-price").val("");
        }
        if(program=="internship"){
            prgfcn(internship,internshipC);
            $("#tc-chk-sec").remove();
            $("#tc-chk-thrd").remove();
            $("#tc-2-overview").remove();
            $("#tc-3-overview").remove();
            $("#trip-price").prop('disabled',false);
            $("#trip-code").prop('disabled',false);
            $("#trip-code").val("");
            $("#trip-price").val("");
        }
        var price = pricefcn();
        $("#price").val(price);
        $("#trip-price").val(price);
    }
    else {
        $('#' + program + '-parent').removeClass("selected");
        $("#country-selection").fadeOut(500);
//        $('#' + program + '-parent').siblings().not(".selected").removeClass("not-selected").delay(1000).fadeIn(500);
        $('#' + program + '-parent').siblings().not(".selected").delay(1000).fadeIn(500);

        $("#program-punch").addClass("hidden").fadeOut(500);
    }
//
});

$(document).on('click', '.program-country', function() {
    var country = $(this).data('country'),
        program = $("#program").find(".selected").attr("id").replace(/(-|parent)/g, '');
    $('#' + country + '-parent').addClass("selected");
//    $('#' + country + '-parent').siblings().not(".selected, .ttl").addClass("not-selected").delay(1000).fadeOut(500);
    $('#' + country + '-parent').siblings().not(".selected, .ttl").fadeOut(500);
    $("#program-punch").removeClass("hidden").fadeIn(500);
});

// Enable input by select option yes

toggleDisableInput ("travel-before-work","Yes","how-long");

toggleDisableInput ("travel-with-someone","Yes","who");

toggleDisableInput ("drink-driving","Yes","date");
toggleDisableInput ("drink-driving","Yes","bac");
toggleDisableInput ("drink-driving","Yes","describe");

toggleDisableInput ("criminal-conviction","Yes","date");
toggleDisableInput ("criminal-conviction","Yes","describe");

toggleDisableInput ("traffic-offence","Yes","date");
toggleDisableInput ("traffic-offence","Yes","describe");

toggleDisableInput ("tattoos","Yes","describe");

toggleDisableInput ("illness-diagnosed","Yes","describe");

toggleDisableInput ("take-medication","Yes","describe");

toggleDisableInput ("dietary","Yes","describe");

toggleDisableInput ("consultant-answer","No","describe");

toggleDisableInput ("consultant-guarantess","Yes","describe");

toggleDisableInput ("first-hear","Other","other");

toggleDisableInput ("payment-type","promotional deposit","special-deposit-type");





//Payment

$("input:radio[name='payment-status']").click(function(){
    var value = $(this).val();
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
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
    var paymentType = $('input:radio[name="payment-type"]:checked').val();
    var discount = discountPrice();
    if (paymentType == "trip in full") {
        var price = pricefcn() - discount;
    }else if (paymentType == "standard deposit"){
        var price = depositfcn();
    }else {
        var price = $("#payment-type-special-deposit-type").val();
    }

    $('#payingamount').val(price);
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

    var sign = currencySign();
    var country = $("select[name='country']").val();

    // Program
    var priceProgram = sign + pricefcn();
    var program = $("#program").find(".selected").data("program");
    var destination = $("#country-selection").find(".selected").data("country");
    var TripCode = $("input[name='trip-code']").val();
    var TripDuration = $("input[name='trip-duration']").val();

    $("#trip-name-ans").html(program);
    $("#trip-country-ans").html(destination);
    $("#trip-value-ans").html(priceProgram);
    $("#trip-code-ans").html(TripCode);
    $("#trip-duration-ans").html(TripDuration);

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
    $("#rating-ans").html(rating + " Stars");

    var comment = $("textarea[name='additional-comments']").val();
    $("#additional-comments-ans").html(comment);


    var paymentStatus = $('input:radio[name="payment-status"]:checked').val();
    var paymentType = $('input:radio[name="payment-type"]:checked').val();
    var paymentMethod = $(".paymentmthd.selected").data("option");

    var discount = discountPrice();

    if (paymentType == "trip in full") {
        var price = pricefcn() - discount;
    }else if (paymentType == "standard deposit"){
        var price = depositfcn();
    }else {
        var price = $("#payment-type-special-deposit-type").val();
    }

    $('input[name="payingamount"]').val(price);

    if (paymentStatus == "I Already Paid By Phone") {
        var cardNumber = $("#already-paid-card-number").val(),
            cardName = $("#already-paid-card-name").val(),
            cardExpiry = $("#already-paid-card-expiry").val(),
            cardCvc = $("#already-paid-card-cvc").val(),
            paidAmount = $("#already-paid-amount").val(),
            paidDate = $("#already-paid-date").val(),
            fstcdn = cardNumber.substr(0, 4),
            lstcdn = cardNumber.substr(cardNumber.length - 4);

        $('#payment-section').html( "<div class='col-md-12 column'><label id='payment-ans'>You've already paid by credit/debit card by phone.</label></div><div class='col-md-12 column'><label id='payment-card-name'>Card Name:<span> " + cardName + "</span></label></div><div class='col-md-12 column'><label id='payment-card-number'>Card Number:<span> " + fstcdn + " **** **** " + lstcdn + "</span></label></div><div class='col-md-6 column'><label id='payment-card-exp'>Card Expiry:<span> " + cardExpiry + "</span></label></div><div class='col-md-6 column'><label id='payment-card-cvc'>Card CVC:<span> " + cardCvc + "</span></label></div><div class='col-md-6 column'><label id='payment-card-amt'>Amount:<span> " + sign + paidAmount + "</span></label></div><div class='col-md-6 column'><label id='payment-card-date'>Date of Payment:<span> " + paidDate + "</span></label></div><div class='col-md-12 column'><label id='payment-card-authorize'>You herewith irrevocably authorise The Global Work & Travel Co. to charge the above card, and have prior permission to use if not in your name, for the amount entered above towards your chosen trip.</label></div><div class='col-md-12 column'><label id='payment-card-authorize'>Note: Your card will not be charged twice. We require this information for verification purposes.</label></div>" );



    }else{
        $('#payment-section').html( "<div class='col-md-12 column'><label id='payment-ans'></label>");
        $('#payment-ans').html("You wish to pay online your " + paymentType + " ( " + sign + price + " ) " + "by " + paymentMethod );


        if (paymentMethod == "bank transfer") {
            if (country == "Australia") {
                $('#payment-ans').append("<label>Bank Name:<span>Commonwealth Bank of Australia</span></label><label>Account Name:<span>The Global Work & Travel Co. (Asia Pacific) Pty. Ltd.</span></label><label>BSB #:<span>064 432</span></label><label>Account #:<span>1059 3396</span></label>")
                var pplacc = "accounts@globalworkandtravel.com.au";
            }else if (country == "Canada" || country == "United States") {
                $('#payment-ans').append("<label>Bank Name:<span>CIBC</span></label><label>Account Name:<span>The Global Work & Travel Co. Inc.</span></label><label>Transit #:<span>02210</span></label><label>Institution #:<span>010</span><label>Account #:<span>1030914</span></label>");
                var pplacc = "accounts@globalworkandtravel.ca";
            }else if (country == "United Kingdom" || country == "Belgium" || country == "Finland" || country == "France" || country == "Germany" || country == "Ireland" || country == "Italy" || country == "Netherlands" || country == "Norway" || country == "Russia" || country == "Spain" || country == "Sweden" || country == "Switzerland") {
                $('#payment-ans').append("<label>Bank Name:<span>LLOYDS BANK</span></label><label>Account Name:<span>The Global Work & Travel Co.  Ltd.</span></label><label>Sort Code:<span>30-98-97</span></label><label>Account #:<span>26156360</span></label>");
                var pplacc = "accounts@globalworkandtravel.co.uk";
            }else {
                $('#payment-ans').append("<label>Bank Name:<span>COMMONWEALTH BANK OF AUSTRALIA</span></label><label>Account Name:<span>The Global Work & Travel Co. (Asia Pacific) Pty. Ltd.</span></label><label>BSB #:<span>064 432</span></label><label>Account #:<span>1059 3396</span></label>");
                var pplacc = "accounts@globalworkandtravel.com.au";
            }
            var pplcur = currencyText()
        }else {
            $('#payment-ans').append("<label>Click 'Next' to secure your booking</label>");
            if (country == "Australia") {
                var pplacc = "accounts@globalworkandtravel.com.au";
            }else if (country == "Canada" || country == "United States") {
                var pplacc = "accounts@globalworkandtravel.ca";
            }else if (country == "United Kingdom" || country == "Belgium" || country == "Finland" || country == "France" || country == "Germany" || country == "Ireland" || country == "Italy" || country == "Netherlands" || country == "Norway" || country == "Russia" || country == "Spain" || country == "Sweden" || country == "Switzerland") {
                var pplacc = "accounts@globalworkandtravel.co.uk";
            }else {
                var pplacc = "accounts@globalworkandtravel.com.au";
            }
            var pplcur = currencyText();
            var pplcid = $("input[name='booking-cid']").val();
            $("#over-pay-btn").html("<form id='paypal-form' action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'><input type='hidden' name='business' value='"+ pplacc +"'><input type='hidden' name='item_name' value='My Global Trip'><input type='hidden' name='currency_code' value='"+ pplcur +"'><input type='hidden'name='amount' value='" + price + "'><input type='hidden' name='no_shipping' value='0'><input type='hidden' name='no_note' value='0'><input type='hidden' name='currency_code' value='"+ pplcur +"'><input type='hidden' name='lc' value='AU'><input type='hidden' name='bn' value='PP-BuyNowBF'><input type='hidden' name='return' value='http://globalworkandtravel.com/book/?status=success&cid="+ pplcid +"&amount="+price+"'><input type='hidden' name='cmd' value='_xclick'><button type='submit' class='btn btn-hg btn-primary step' autocomplete='off' tabindex='18'>Next</button></form>");
        }

    }
});

// Check the status

var paypalstatus = getParameterByName('status');
console.log(paypalstatus);
var successcid = getParameterByName('cid');
console.log(successcid);
var successamount = getParameterByName('amount');
console.log(successamount);
if (paypalstatus == "success") {
    $(".prog-bar li a").addClass("done");
    $("#confirmation-step").attr("data-toggle", "tab");
    $("#confirmation-step").tab('show');
     $.post( "http://globalworkandtravel.com/book/final.php", {
        cid:                            successcid,
        status:                         "Completed",
        payingAmount:                   successamount,
     });
    console.log("final success");
}


