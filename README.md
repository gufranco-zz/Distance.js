Distance.js
===========

What is Distance.js?
--------------------
Distance.js is a nodejs _class_ that calculates the distance between coordinates based on latitude/longitude.

How to use
----------
``` js
var distance = new Distance();

var calculatedDistance = distance.addCoordinate({"latitude": some_value, "longitude": some_value})
						 		 .addCoordinate({"latitude": some_value, "longitude": some_value})
						 		 .addCoordinate({"latitude": some_value, "longitude": some_value})
								 .addCoordinate({"latitude": some_value, "longitude": some_value})
								 .addCoordinate({"latitude": some_value, "longitude": some_value})
								 .getDistance();
```
