'use strict';

// declare modules
angular.module('Authentication', []);
angular.module('Home', []);
angular.module('RearingDailyData', []);
angular.module('RearingReports', []);
angular.module('ArchivedFlockRearing', []);
angular.module('RearingCharts', []);
angular.module('RearingFlockSettings', []);
angular.module('DailyData', []);
angular.module('Charts', []);
angular.module('Reports', []);
angular.module('ReportsPeriod', []);
angular.module('ReportsFullFlock', []);
angular.module('ArchivedFlockProduction', []);
angular.module('FlockSettings', []);


angular.module('SmartFlock', [
    'Authentication',
    'Home',
    'RearingDailyData',
    'RearingReports',
    'ArchivedFlockRearing',
    'RearingCharts',
    'RearingFlockSettings',
    'DailyData',
    'Charts',
    'Reports',
    'ReportsPeriod',
    'ReportsFullFlock',
    'ArchivedFlockProduction',
    'FlockSettings',
    'ngRoute',
    'ngCookies',
    'chart.js'
])
 
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            title: 'Login',
            controller: 'LoginController',
            templateUrl: 'modules/authentication/views/login.html',
            hideMenus: true
        })
 
        .when('/', {
            title: 'SmartFlock',
            controller: 'HomeController',
            templateUrl: 'modules/home/views/home.html'
        })

        .when('/rearing_dailyData', {
            title: 'Rearing>Daily Data',
            controller: 'RearingDailyDataController',
            templateUrl: 'modules/rearing_dailyData/rearing_dailyData.htm'
        })

        .when('/rearing_reports', {
            title: 'Rearing>Reports',
            controller: 'RearingReportsController',
            templateUrl: 'modules/rearing_reports/rearing_reports.htm'
        })

        .when('/archived_flock_rearing', {
            title: 'Rearing>Reports>Archived Flocks',
            controller: 'ArchivedFlockRearingController',
            templateUrl: 'modules/archived_flock_rearing/archived_flock_rearing.htm'
        })

        .when('/rearing_charts', {
            title: 'Rearing>Charts',
            controller: 'RearingChartsController',
            templateUrl: 'modules/rearing_charts/rearing_charts.htm'
        })

        .when('/rearing_flocksettings', {
            title: 'Rearing>Flock Settings',
            controller: 'RearingFlockSettingsController',
            templateUrl: 'modules/rearing_flocksettings/rearing_flocksettings.htm'
        })

        .when('/dailyData', {
            title: 'Production>Daily Data',
            controller: 'DailyDataController',
            templateUrl: 'modules/dailyData/dailyData.htm'
        })

        .when('/charts', {
            title: 'Production>Charts',
            controller: 'ChartsController',
            templateUrl: 'modules/charts/charts.htm'
        })

        .when('/reports', {
            title: 'Production>Reports>Daily+Weekly',
            controller: 'ReportsController',
            templateUrl: 'modules/reports/reports.htm'
        })

        .when('/reports-period', {
            title: 'Production>Reports>Period Report',
            controller: 'ReportsPeriodController',
            templateUrl: 'modules/reports-period/reports-period.htm'
        })

        .when('/reports-full-flock-info', {
            title: 'Production>Reports>Full Flock Info',
            controller: 'ReportsFullFlockController',
            templateUrl: 'modules/reports-full-flock/reports-full-flock.htm'
        })

        .when('/archived_flock_production', {
            title: 'Production>Reports>Archived Flocks',
            controller: 'ArchivedFlockProductionController',
            templateUrl: 'modules/archived_flock_production/archived_flock_production.htm'
        })


        .when('/flocksettings', {
            title: 'Production>Flock Settings',
            controller: 'FlockSettingsController',
            templateUrl: 'modules/flocksettings/flocksettings.htm'
        })
 
        .otherwise({ redirectTo: '/login' });
}])
 
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            $('#main-header').addClass('hide');
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });

        $rootScope.$on('$routeChangeSuccess', function(event, current, previous){
            $rootScope.title = current.$$route.title;
        });
    }]);