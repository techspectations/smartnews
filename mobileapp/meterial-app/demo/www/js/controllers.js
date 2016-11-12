/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout,ngFB,$location) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

        $scope.fbLogin = function () {
            ngFB.login({scope: 'public_profile,user_friends,email,user_about_me,user_actions.books,user_actions.fitness,user_actions.music,user_actions.news,user_actions.video,user_birthday,user_education_history,user_events,user_games_activity,user_hometown,user_likes,user_location,user_managed_groups,user_photos,user_posts,user_relationships,user_relationship_details,user_religion_politics,user_tagged_places,user_videos,user_website,user_work_history,read_custom_friendlists,read_insights,read_audience_network_insights,read_page_mailboxes,manage_pages,publish_pages,publish_actions,rsvp_event,pages_show_list,pages_manage_cta,pages_manage_instant_articles,ads_read,ads_management,business_management,pages_messaging,pages_messaging_phone_number'}).then(
                function (response) {
                    if (response.status === 'connected') {
                        console.log('Facebook login succeeded');
                       // $scope.closeLogin();
                        $location.path('/app/dashboard');
                    } else {
                        alert('Facebook login failed');
                    }
                });
        };

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();
})

.controller('FriendsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ProfileCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    // Set Ink
    ionicMaterialInk.displayEffect();
})

.controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');

    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

.controller('GalleryCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab(false);

    // Activate ink for controller
    ionicMaterialInk.displayEffect();

    ionicMaterialMotion.pushDown({
        selector: '.push-down'
    });
    ionicMaterialMotion.fadeSlideInRight({
        selector: '.animate-fade-slide-in .item'
    });

})

.controller('DashboardCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion,$http) {
        $scope.$parent.showHeader();
        $scope.$parent.clearFabs();
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
        $scope.$parent.setHeaderFab(false);

        $timeout(function () {
            ionicMaterialMotion.fadeSlideInRight({
                selector: '.animate-fade-slide-in .item'
            });
        }, 300);

        // Activate ink for controller
        ionicMaterialInk.displayEffect();

        ionicMaterialMotion.pushDown({
            selector: '.push-down'
        });

        $scope.myItem = "Hello";
        $http.get("http://localhost:8083/rest/widgets/1806906492925735")
            .then(function(response) {
                $scope.widgetList = response.data;
            });

    })
.directive('populatePortlets', function($timeout) {
        var directive = {};

        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "/templates/portlets.html";
        directive.scope = {
            widgets: '='
        }
        directive.link = function($scope, element, attributes) {
            console.log($scope.widgets);
            $scope.$watch('widgets', function(newValue, oldValue) {
                if (newValue != undefined){
                    $scope.widgets = newValue;
                    $scope.populateWidget();
                }
            }, true);
    $scope.populateWidget = function(){
        $scope.completeWidgetslist = [];
        $scope.completeWidgets = [];
        $scope.cricketflashlist = [];
        $scope.footballflashlist = [];
        $scope.stockflashlist = [];
        $scope.countryflashlist = [];
        $scope.districtflashlist = [];
        $scope.stateflashlist = [];
        for(var i=0;i<$scope.widgets.length;i++){
            if($scope.widgets[i].widgetid == 'cricket'){
                var cricketwidget ={};
                var additionalValues = JSON.parse($scope.widgets[i].values);
                cricketwidget.title = $scope.widgets[i].category;
                cricketwidget.widgetid = $scope.widgets[i].widgetid;
                cricketwidget.leftflag = additionalValues.leftflag;
                cricketwidget.leftcountry = additionalValues.leftcountry;
                cricketwidget.leftscore = additionalValues.leftscore;
                cricketwidget.leftsubvalue = additionalValues.leftsubvalue;
                cricketwidget.rightflag = additionalValues.rightflag;
                cricketwidget.rightcountry = additionalValues.rightcountry;
                cricketwidget.rightscore = additionalValues.rightscore;
                cricketwidget.rightsubvalue = additionalValues.rightsubvalue;
                $scope.cricketflashlist = $scope.widgets[i].flashNews;
                if($scope.cricketflashlist.length >0){
                    $scope.displayCricketFlash();
                }
                $scope.completeWidgets.push(cricketwidget);


            }else if($scope.widgets[i].widgetid == 'football'){
                var footballwidget ={};

                footballwidget.title = $scope.widgets[i].category;
                footballwidget.widgetid = $scope.widgets[i].widgetid;
                if($scope.widgets[i].values != undefined){
                    var additionalValues = JSON.parse($scope.widgets[i].values);
                    footballwidget.leftflag = additionalValues.leftflag;
                    footballwidget.leftcountry = additionalValues.leftcountry;
                    footballwidget.leftscore = additionalValues.leftscore;
                    footballwidget.leftsubvalue = additionalValues.leftsubvalue;
                    footballwidget.rightflag = additionalValues.rightflag;
                    footballwidget.rightcountry = additionalValues.rightcountry;
                    footballwidget.rightscore = additionalValues.rightscore;
                    footballwidget.rightsubvalue = additionalValues.rightsubvalue;
                }

                $scope.footballflashlist = $scope.widgets[i].flashNews;
                if($scope.footballflashlist.length >0){
                    $scope.displayFootballFlash();
                }
                $scope.completeWidgets.push(footballwidget);


            }else if($scope.widgets[i].widgetid == 'stock'){
                var stockwidget ={};
                var additionalValues = JSON.parse($scope.widgets[i].values);
                stockwidget.title = $scope.widgets[i].category;
                stockwidget.widgetid = $scope.widgets[i].widgetid;
                stockwidget.sensexstatus = additionalValues.sensexstatus;
                stockwidget.sensexvalue = additionalValues.sensexvalue;
                stockwidget.niftystatus = additionalValues.niftystatus;
                stockwidget.niftyvalue = additionalValues.niftyvalue;
                var stockFlashLst = $scope.widgets[i].flashNews;
                if(stockFlashLst != undefined){
                    for(var j=0;j<stockFlashLst.length;j++){
                        if(stockFlashLst != undefined){
                            var eachFlash = JSON.parse(stockFlashLst[j]);
                            $scope.stockflashlist.push(eachFlash);
                        }
                }

                    if($scope.stockflashlist.length >0){
                        $scope.displayStockFlash();
                    }
                }
                $scope.completeWidgets.push(stockwidget);


            }else if($scope.widgets[i].widgetid == 'district'){
                var districtwidget ={};
                //var additionalValues = JSON.parse($scope.widgets[i].values);
                $scope.districtflashlist = $scope.widgets[i].flashNews;
                if($scope.districtflashlist.length >0){
                    $scope.displaydistrictFlash();
                }
                districtwidget.widgetid = $scope.widgets[i].widgetid;
                districtwidget.title = $scope.widgets[i].category;
                $scope.completeWidgets.push(districtwidget);

            }else if($scope.widgets[i].widgetid == 'state'){
                var statewidget ={};
               // var additionalValues = JSON.parse($scope.widgets[i].values);
                $scope.stateflashlist = $scope.widgets[i].flashNews;
                if($scope.stateflashlist.length >0){
                    $scope.displayStateFlash();
                }
                statewidget.title = $scope.widgets[i].category;
                statewidget.widgetid = $scope.widgets[i].widgetid;
                $scope.completeWidgets.push(statewidget);

            }else if($scope.widgets[i].widgetid == 'country'){
                var countrywidget ={};
                //var additionalValues = JSON.parse($scope.widgets[i].values);
                $scope.countryflashlist = $scope.widgets[i].flashNews;
                if($scope.countryflashlist.length >0){
                    $scope.displayCountryFlash();
                }
                countrywidget.title = $scope.widgets[i].category;
                countrywidget.widgetid = $scope.widgets[i].widgetid;
                $scope.completeWidgets.push(countrywidget);

            }
        }
        console.log("got it");
    }

            $scope.displayStockFlash = function(){
                var i =  Math.floor((Math.random() * $scope.stockflashlist.length) + 1);
                $scope.stockflash = $scope.stockflashlist[i];
                console.log($scope.stockflash);
               $timeout(function(){

                    $scope.displayStockFlash();
                }, 3000);

            }

            $scope.displayFootballFlash = function(){
                var i =  Math.floor((Math.random() * $scope.footballflashlist.length) + 1);
                $scope.footballflash = $scope.footballflashlist[i];
                console.log($scope.footballflash);

                $timeout(function(){

                    $scope.displayFootballFlash();
                }, 3000);


            }

            $scope.displayCricketFlash = function(){
                var i =  Math.floor((Math.random() * $scope.cricketflashlist.length) + 1);
                $scope.cricketflash = $scope.cricketflashlist[i];
                console.log($scope.cricketflash);
                $timeout(function(){

                    $scope.displayCricketFlash();
                }, 3000);


            }

            $scope.displaydistrictFlash = function(){
                var i =  Math.floor((Math.random() * $scope.districtflashlist.length) + 1);
                $scope.districtflash = $scope.districtflashlist[i]
                $timeout(function(){

                    $scope.displaydistrictFlash();
                }, 3000);


            }

            $scope.displayStateFlash = function(){
                var i =  Math.floor((Math.random() * $scope.stateflashlist.length) + 1);
                $scope.stateflash = $scope.stateflashlist[i];
                console.log($scope.stateflash);
                $timeout(function(){

                    $scope.displayStateFlash();
                }, 3000);


            }

            $scope.displayCountryFlash = function(){
                var i =  Math.floor((Math.random() * $scope.districtflashlist.length) + 1);
                $scope.countryflash = $scope.countryflashlist[i];
                console.log($scope.countryflash);
               /* $timeout(function(){

                    $scope.displayCountryFlash();
                }, 3000);*/


            }

           /* $scope.completeWidgets = angular.copy($scope.widgets);*/
        }

        return directive;
    })

;
