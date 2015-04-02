(function() {
    'use strict';

    angular
    .module('pomodoro')
    .service('TimerSettings', TimerSettings);

    /**
     * @ngdoc service
     * @name pomodoro.service:TimerSettings
     * @description store the timer settings
     *
     * @ngInject
     */
    function TimerSettings($window, Storage) {

        var times = {
            shortBreak: 10,
            longBreak: 15,
            active: 3
        };

        return {
            setTime: setTime,
            getTime: getTime,
            getMsg: getMsg,
            setNotification: setNotification,
            getNotification: getNotification
        };

        function setTime(type, value) {
            times[type] = Number(value * 60);
        }

        function getTime(type) {
            return times[type] || 0;
        }

        function getMsg(type) {
            var time = times[type];

            if (type !== 'active') {
                return 'enjoy a ' + time + ' min break';
            } else {
                return 'keep up the good work, only ' + time + ' mins till your next break';
            }
        }

        function setNotification(type, value) {
            Storage.set(type, value);
        }

        function getNotification(type) {
            return (Storage.get(type) === 'true') || false;
        }
    }

})();
