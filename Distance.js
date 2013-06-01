/*jshint forin:true, noarg:true, noempty:true, eqeqeq:true, bitwise:true, strict:true, undef:true, unused:true, curly:true, browser:true, devel:true, esnext:true, node:true, indent:4, maxerr:50 */

/**
 * 'Class' to calculate the distance from coordinates based on latitude/longitude.
 *
 * @author Gustavo Franco
 * @since  2013-05-21
 */
var Distance = (function() {
    'use strict';

    Distance = function() {
        this.coordinates = [];
    };

    /**
     * Add a coordinate
     *
     * @param  float latitude
     * @param  float lontitude
     * @author Gustavo Franco
     * @since  2013-05-21
     */
    Distance.prototype.addCoordinate = function(latitude, longitude) {
        try {
            if ((typeof latitude === 'number') && (typeof longitude === 'number')) {
                this.coordinates.push({'latitude': latitude, 'longitude': longitude});
            } else {
                throw 'Invalid coordinate supplied to function addCoordinate';
            }
        } catch(exception) {
            console.log(exception);
        }

        return this;
    };

    /**
     * Calculate the distance between two coordinates using pitagoras
     *
     * @param  object firstCoordinate
     * @param  object secondCoordinate
     * @author Gustavo Franco
     * @since  2013-05-21
     */
    Distance.prototype._calculateDistance = function(firstCoordinate, secondCoordinate) {
        return Math.sqrt(Math.pow(secondCoordinate.latitude - firstCoordinate.latitude, 2) + Math.pow(secondCoordinate.longitude - firstCoordinate.longitude, 2)) * 40030000 / 360;
    };

    /**
     * Calculate the distance between all supplied coordinates
     *
     * @author Gustavo Franco
     * @since  2013-05-21
     */
    Distance.prototype.getDistance = function() {
        try {
            if (this.coordinates.length > 1) {
                var distance = 0;
                var firstCoordinate, secondCoordinate;

                for (var index, length = this.coordinates.length; index < length; index++) {
                    if (index === 0) {
                        firstCoordinate = this.coordinates[index];
                        secondCoordinate = this.coordinates[index + 1];
                    } else {
                        firstCoordinate = secondCoordinate;
                        secondCoordinate = this.coordinates[index];
                    }

                    distance += this._calculateDistance(firstCoordinate, secondCoordinate);
                }

                return distance;
            } else {
                throw 'You must supply, at least, two coordinates';
            }
        } catch (exception) {
            console.log(exception);
        }
    };

    return Distance;
})();
