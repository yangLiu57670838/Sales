<?php // include('session.php'); ?>
<?php



?>
<!DOCTYPE html>
<html lang="" ng-app="myApp" ng-controller="mainCtrl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Sales</title>
    <link rel="stylesheet" href="asset/stylesheets/css/style.css">
    <link rel="stylesheet" href="asset/stylesheets/css/bootstrap-datepicker3.css">
    <link rel="stylesheet" href="asset/stylesheets/css/style-flat-ui.css">
    <link rel="stylesheet" href="asset/stylesheets/css/formValidation.css">
    <link rel="stylesheet" href="asset/stylesheets/css/main.css">
    <style>
        body {
            padding-top: 20px;
        }
    </style>
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>


    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
     <script src="app.js"></script>
     <script src="angularMain.js"></script>
    <!--[if IE]>
<script src="https://cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://cdn.jsdelivr.net/respond/1.4.2/respond.min.js"></script>
<![endif]-->
</head>

<body>

    <section id="section-container" class="">
        <div class="container">
           <div class="row">
               <div class="col-md-3 col-xs-6 column">
                   <div class="logo"></div>
               </div>
               <div class="col-md-9 col-xs-6 column" id="#top">
                   <div class="tel-progress" data-placement="bottom" data-toggle="tooltip" data-original-title="Need help? Call us now!"></div>
               </div>
           </div>
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-4 hidden-xs column">
                    <ul class="prog-bar">
                        <li>
                            <a href="#sales" data-toggle="tab" id="sales-step">
                                <div class="icon icon-welcome"></div>
                                <div class="description">
                                    <span class="first">Commission/sales</span>
<!--                                    <span class="second">Let's make you look good!</span>-->
                                </div>
                                <span class="checking"></span>
                            </a>
                        </li>
                        <li>
                            <a href="#presentaion" data-toggle="tab" id="presentaion-step">
                                <div class="icon icon-welcome"></div>
                                <div class="description">
                                    <span class="first">Presentation/Day</span>
                                    <!--                                    <span class="second">Let's make you look good!</span>-->
                                </div>
                                <span class="checking"></span>
                            </a>
                        </li>

                    </ul>
                </div>
                <div class="col-lg-9 col-md-9 col-sm-8 column">
                    <div class="tab-content">
                        <div class="tab-pane active fade in" id="sales">
                            <form id="contact-form" name="contact-form">
                                <div class="row">
                                <div class="col-lg-4 column">
                                    <div class="form-group">
                                        <label for="fname">Team</label>
                                        <select ng-model="data.selectedOption" ng-change="teamChanged()" name="team" class='form-control' id='' ng-options="option.name for option in data.availableOptions track by option.id"></select>
                                    </div>
                                </div>
                            </div>
                                <div class="row">
                                <div class="col-lg-8 column">
                                    <div class="form-group">
                                        <label for="staff">Staff Name</label>
                                        <select ng-model="staff" name="staff" class='form-control' id='' ng-options="option.name for option in data2" ng-disabled="disableStaff" ng-change="AllInputChange()"></select>
                                    </div>
                                </div>
                            </div>
<!--


                          <div class="row">
                                <div class="col-lg-4 column">
                                    <div class="form-group">
                                        <label for="fname">First Name</label>
                                        <input id="fname" data-validation="mand" name="fname" type="text" class="form-control" tabindex="1" ng-model="fname">
                                    </div>

                                </div>
                           <div class="col-lg-4 column">
                                    <div class="form-group">
                                        <label for="mname">Middle Name</label>
                                        <input id="mname" data-validation="mand" name="mname" type="text" class="form-control" tabindex="1" ng-model="mname">

                                    </div>
                                </div>
                                <div class="col-lg-4 column">
                                    <div class="form-group">
                                        <label for="lname">Last Name</label>
                                        <input id="lname" data-validation="mand" name="lname" type="text" class="form-control" tabindex="1" ng-model="lname">
                                    </div>
                                </div>
                            </div>
-->
                                <div class="row">
                            <div class="col-lg-6 column">
                                        <div class="form-group">
                                        <label for="email">Customer Email</label>
                                        <input id="email" name="email" type="email" class="form-control" tabindex="1" ng-model="email" ng-change="AllInputChange()">
                                    </div>
                                </div>
                            </div>
                                <div class="row">
                                <div class="col-lg-12 column">
                                        <div class="form-group">
                                            <label for="amount">Notes</label>
                                        <textarea class="form-control" rows="5" name="note" id="note" placeholder="Please enter some notes" ng-model="note" ng-change="AllInputChange()"></textarea>
                                    </div>
                                </div>

                            </div>
                                <div class="row">
                                <div class="col-lg-4 column">
                                        <div class="form-group">
                                        <label for="amount">Commission Claiming</label>
                                        <input id="amount" name="amount" type="number" class="form-control" tabindex="1" ng-model="amount" ng-change="AllInputChange()">
                                    </div>
                                </div>
                            </div>
                                <div class="row next text-center">
                                <div class="col-xs-6 col-sm-6 col-md-3 col-md-offset-6 col-lg-3 col-lg-offset-6 column">
                                    <button id="contact-btn" class="btn btn-primary btn-hg step" ng-click="submitForm()" tabindex="18" ng-disabled="disableSubmit">
                                        Submit
                                    </button>
                                </div>
                            </div>
                            </form>
                        </div>
                        <div class="tab-pane fade in" id="presentaion">
                            <form id="contact-form" name="contact-form">
                                <div class="row">
                                    <div class="col-lg-4 column">
                                        <div class="form-group">
                                            <label for="fname">Team</label>
                                            <select ng-model="data.selectedOption" ng-change="teamChanged()" name="team" class='form-control' id='' ng-options="option.name for option in data.availableOptions track by option.id"></select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-8 column">
                                        <div class="form-group">
                                            <label for="staff">Staff Name</label>
                                            <select ng-model="staff" name="staff" class='form-control' id='' ng-options="option.name for option in data2" ng-disabled="disableStaff" ng-change="AllInputChange2()"></select>
                                        </div>
                                    </div>
                                </div>
                                <!--


<div class="row">
<div class="col-lg-4 column">
<div class="form-group">
<label for="fname">First Name</label>
<input id="fname" data-validation="mand" name="fname" type="text" class="form-control" tabindex="1" ng-model="fname">
</div>

</div>
<div class="col-lg-4 column">
<div class="form-group">
<label for="mname">Middle Name</label>
<input id="mname" data-validation="mand" name="mname" type="text" class="form-control" tabindex="1" ng-model="mname">

</div>
</div>
<div class="col-lg-4 column">
<div class="form-group">
<label for="lname">Last Name</label>
<input id="lname" data-validation="mand" name="lname" type="text" class="form-control" tabindex="1" ng-model="lname">
</div>
</div>
</div>
-->
                                <div class="row">
                                    <div class="col-lg-6 column">
                                        <div class="form-group">
                                            <label for="date">Day Attended</label>
                                             <div class="input-group date">
                                                    <input id="day" name="day" type="text" class="form-control" tabindex="12" ng-model="day" ng-change="AllInputChange2()">
                                                    <span class="input-group-addon">
                                                        <i class="glyphicon glyphicon-th"></i>
                                                    </span>
                                                </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 column">
                                        <div class="form-group">
                                            <label for="amount">Sales Presentations</label>
                                            <input id="salesAmount" name="salesAmount" type="number" class="form-control" tabindex="1" ng-model="salesAmount" ng-change="AllInputChange2()">
                                        </div>
                                    </div>
                                </div>
                                <div class="row next text-center">
                                    <div class="col-xs-6 col-sm-6 col-md-3 col-md-offset-6 col-lg-3 col-lg-offset-6 column">
                                        <button id="contact-btn" class="btn btn-primary btn-hg step" ng-click="submitForm2()" tabindex="18" ng-disabled="disableSubmit2">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div class="row address text-center-xs">
                    <div class="col-md-4 column">
                        <ul>
                            <li>Australia & New Zealand</li>
                            <li>The Global Work & Travel Co. (Asia Pacific) Pty. Ltd.</li>
                            <li>ABN: 38 600 280 331</li>
                            <li>-</li>
                            <li>Level 16, 50 Cavill Ave,</li>
                            <li>Surfers Paradise, Queensland</li>
                            <li>Australia, 4217</li>
                            <li>T: 1300 40 11 90 (AU)</li>
                            <li>T: 09 925 0387 (NZ)</li>
                        </ul>
                    </div>
                    <div class="col-md-4 column">
                        <ul >
                            <li>Canada & USA</li>
                            <li>The Global Work & Travel Co. Inc.</li>
                            <li>Inc.#: BC0848469 - Travel Agency Licence: 66496</li>
                            <li>-</li>
                            <li>Level 6, 1525 Robson St,</li>
                            <li>Vancouver, British Columbia</li>
                            <li>Canada, V6G 1C3</li>
                            <li>T: 1877 744 5622 (Toll Free)</li>
                        </ul>
                    </div>
                    <div class="col-md-3 column">
                        <ul >
                            <li>UK & Europe</li>
                            <li>The Global Work & Travel Co. Ltd.</li>
                            <li>Reg.#: 8087039 - ABTA#: Y6197</li>
                            <li>-</li>
                            <li>Level 4, 5-7 John Prince's St,</li>
                            <li>London, England</li>
                            <li>UK, W1G 0JN</li>
                            <li>T: 0203 002 2138</li>
                        </ul>
                    </div>
                </div>
                <div class="row privacytc text-center">
                    <span><a href="/privacy-policy-australia" target="_blank">Privacy Policy</a></span>
                </div>
            <!--Term End-->
            <!--Copy Start-->
            <div class="row text-center copy">
                <p>Copyright&copy; 2016 The Global Work & Travel Co. All rights and lefts reserved.</p>
            </div>
            </footer>
        </div>
</section>
<!--    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>-->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script src="asset/javascripts/init.js"></script>
    <script src="asset/javascripts/flat-ui-pro.js"></script>
    <script src="asset/javascripts/prettify.js"></script>
    <script src="asset/javascripts/application.js"></script>
    <script src="asset/javascripts/bootstrap-datepicker.js"></script>
    <script src="asset/javascripts/jquery.card.js"></script>
<!--    <script src="asset/javascripts/main.js"></script>-->
    <script src="asset/javascripts/tell-top.js"></script>
	<script src="asset/javascripts/new.js"></script>
    <!-- FormValidation plugin and the class supports validating Bootstrap form -->
<!--
    <script src="asset/javascripts/validation/formValidation.min.js"></script>
    <script src="asset/javascripts/validation/framework/bootstrap.min.js"></script>
-->
<!--    <script src="asset/javascripts/validation/mandatoryIcon.min.js"></script>-->
</body>

</html>
