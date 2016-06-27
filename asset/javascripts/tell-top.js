var $ = jQuery.noConflict();

var caTell = "1877 744 5622";
var ukTell = "0203 002 2138";
var nzTell = "09 925 0387";
var auTell = "1300 40 11 90";
var usTell = "1877 744 5622";

//jQuery.getJSON( 'http://freegeoip.net/json/', function(location) {
//    countryCode = location.country_code;
//    tell(countryCode);
//    console.log("top - first successful");
//})
//    .fail(function() {
//    $.getJSON('http://www.telize.com/geoip/', function (location) {
//        countryCode = location.country_code;
//        tell(countryCode);
//        console.log("top - second successful");
//    })
//        .fail(function() {
//            $.getJSON('http://ip-api.com/json/', function (location) {
//                countryCode = location.countryCode;
//                tell(countryCode);
//                console.log("top - third successful");
//            })
//            .fail(function() {
//                $.getJSON('http://www.geoplugin.net/json.gp', function (location) {
//                    countryCode = location.geoplugin_countryCode;
//                    tell(countryCode);
//                    console.log("top - forth successful");
//                })
//                .fail(function() {
//                    $.getJSON('http://ipinfo.io', function (location) {
//                        countryCode = location.country;
//                        tell(countryCode);
//                        console.log("top - fifth successful");
//                    })
//                    .fail(function() {
//                        console.log("all failed");
//                    });
//                });
//            });
//        });
//    });

//var glTellTop = $(".gl-tell-top a");
//function tell(id){
//    console.log(id);
//    if ( id === 'AU') {
//        glTellTop.text(auTell);
//        glTellTop.attr("href", "tel:" + auTell);
//    };
//    if ( id === 'CA') {
//        glTellTop.text(caTell);
//        glTellTop.attr("href", "tel:" + caTell);
//    };
//    if ( id === 'NZ') {
//        glTellTop.text(nzTell);
//        glTellTop.attr("href", "tel:" + nzTell);
//    };
//    if ( id === 'US') {
//        glTellTop.text(usTell);
//        glTellTop.attr("href", "tel:" + usTell);
//    };
//    if ( id === 'GB') {
//        glTellTop.text(ukTell);
//        glTellTop.attr("href", "tel:" + ukTell);
//    }
//};

$.ajax({
    url: "http://freegeoip.net/json/",
    dataType: "json",
    type: 'get',
    data: {},
    timeout: 3000,
    success: function (data) {
        countryCode = data.country_code;
        tell(countryCode);
        console.log("top - first successful");
    },
    error: function() {
        $.ajax({
            url: "http://www.telize.com/geoip/",
            dataType: "json",
            type: 'get',
            data: {},
            timeout: 3000,
            success: function (data) {
                countryCode = data.country_code;
                tell(countryCode);
                console.log("top - second successful");
            },
            error: function() {
                $.ajax({
                    url: "http://ip-api.com/json/",
                    dataType: "json",
                    type: 'get',
                    data: {},
                    timeout: 3000,
                    success: function (data) {
                        countryCode = data.countryCode;
                        tell(countryCode);
                        console.log("top - third successful");
                    },
                    error: function() {
                        $.ajax({
                            url: "http://www.geoplugin.net/json.gp",
                            dataType: "json",
                            type: 'get',
                            data: {},
                            timeout: 3000,
                            success: function (data) {
                                countryCode = data.geoplugin_countryCode;
                                tell(countryCode);
                                console.log("top - forth successful");
                            },
                            error: function() {
                                $.ajax({
                                    url: "http://ipinfo.io",
                                    dataType: "json",
                                    type: 'get',
                                    data: {},
                                    timeout: 3000,
                                    success: function (data) {
                                        countryCode = data.country;
                                        tell(countryCode);
                                        console.log("top - fifth successful");
                                    },
                                    error: function() {
                                        countryCode = 'none';
                                        console.log("all failed");
                                    },
                                });
                            },
                        });
                    },
                });
            },
        });
    },
});

var glTellToploader = $(".tel-progress");
function tell(id){
    console.log(id);
    if ( id === 'AU') {
        glTellToploader.html( "<a href='tel:" + auTell + "'>" + auTell + "</a>" );
    };
    if ( id === 'CA') {
        glTellToploader.html( "<a href='tel:" + caTell + "'>" + caTell + "</a>" );
    };
    if ( id === 'NZ') {
        glTellToploader.html( "<a href='tel:" + nzTell + "'>" + nzTell + "</a>" );
    };
    if ( id === 'US') {
        glTellToploader.html( "<a href='tel:" + usTell + "'>" + usTell + "</a>" );
    };
    if ( id === 'GB') {
        glTellToploader.html( "<a href='tel:" + ukTell + "'>" + ukTell + "</a>" );
    };
    if ( id === 'none') {
        glTellToploader.html( "<a href=''></a>" );
    };
};
