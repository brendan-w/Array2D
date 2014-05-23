//Written by Brendan Whitfield


"use strict";


/*
 * Array2D Constructor
 * 
 * new Array2D(<Array2D>);
 * new Array2D(<x>, <y>;)
 */
var Array2D = function() {

	/*
	 * Properties / Settings
	 */

	var _this = this;
	this.default_value = 0;

	/*
	 * Constructor
	 */
	var construct = function() {
		switch(arguments.length)
		{
			case 1: //copy constructor
				if(arg[0] instanceof Array2D)
				{
					var old = arguments[0];
					_this.x = old.x;
					_this.y = old.y;
					_this.default_value = old.default_value;

					init();

					_this.forEach(function(v, x, y, a) {
						a[x][y] = old[x][y];
					});
				}
				break;

			case 2: //normal Array2D constructor
				if(!isNaN(arguments[0]) && !isNaN(arguments[1]))
				{
					_this.x = arguments[0];
					_this.y = arguments[1];

					init();
				}
				break;

			case 3: //normal Array2D constructor
				if(!isNaN(arguments[0]) && !isNaN(arguments[1]))
				{
					_this.x = arguments[0];
					_this.y = arguments[1];
					_this.default_value = arguments[2];

					init();
				}
				break;

			default:
				console.log("Constructor Error: Invalid arguments for an Array2D constructor");
		}
	};

	var init = function() {
		for(var x = 0; x < _this.x; x++)
		{
			_this[x] = {};
			for(var y = 0; y < _this.y; y++)
			{
				_this[x][y] = _this.default_value;
			}
		}
	};

	//Start
	construct.apply(this, arguments);
};


/*
 * API functions
 */

Array2D.prototype.forEach = function(callback) {
	if((callback === undefined) || !(callback instanceof Function))
	{
		console.log("forEach Error: must supply callback function as a parameter");
		return this;
	}

	for(var x = 0; x < this.x; x++)
	{
		for(var y = 0; y < this.y; y++)
		{
			callback(this[x][y], x, y, this);
		}
	}
};


Array2D.prototype.setAll = function(value) {
	if(value === undefined)
	{
		value = this.default_value;
	}

	this.forEach(function(v, x, y) {
		this[x][y] = value;
	});
};


Array2D.prototype.row = function(y) {
	if(isNaN(y) || (y < 0) || (y > (this.y - 1)))
	{
		console.log("Invalid argument for row()");
		return this;
	}

	var array = new Array();
	for(var x = 0; x < this.x; x++)
	{
		array[x] = this[x][y];
	}
	return array;
};



Array2D.prototype.col = function(x) {
	if(isNaN(x) || (x < 0) || (x > (this.x - 1)))
	{
		console.log("Invalid argument for col()");
		return this;
	}

	var array = new Array();
	for(var y = 0; y < this.y; y++)
	{
		array[y] = this[x][y];
	}
	return array;
};

Array2D.prototype.setRow = function(y, array) {

};

Array2D.prototype.setCol = function(x, array) {
	
};

Array2D.prototype.spliceRow = function(array) {

};

Array2D.prototype.spliceCol = function(array) {
	
};


/*
Array2D.prototype.resize = function(nx, ny, yEnd, xEnd) {
	//pre-flight checks
	if((arguments.length !== 4) || isNaN(nx) || isNaN(ny))
	{
		console.log("Invalid arguments for resizing an Array2D");
		return this;
	}

	//create the new array with the new dimensions
	var array = new Array2D(nx, ny);

	//fill the new array with the old values from the source array
	for(var x = 0; x < this.x; x++)
	{
		for(var y = 0; y < this.y; y++)
		{
			//destination coordinates
			var dx = x;
			var dy = y;
			if(!xEnd) { dx = nx - this.x + x; }
			if(!yEnd) { dy = ny - this.y + y; }

			if((dx >= 0) && (dy >= 0)) //if it doesn't fall off the lower bounds
			{
				if((dx < nx) && (dy < ny)) //if it doesn't fall off the upper bounds
				{
					array[dx][dy] = this[x][y];
				}
			}
		}
	}

	return array;	
};
*/

Array2D.prototype.resize = function(_x, _y, x_, y_) {
	if(arguments.length !== 4)
	{
		console.log("Resize Error: Invalid arguments");
		return this;
	}

	arguments.forEach(function(v, i) {
		if(isNaN(v))
		{
			console.log("Resize Error: argument " + (i+1) + " is not a number");
			return this;
		}
	});

	var nx = this.x + _x + x_;
	var ny = this.y + _y + y_;

	if((nx < 1) || (ny < 1))
	{
		console.log("Resize Error: contraction not possible, will result in zero sized array");
		return this;
	}

	var array = new Array2D(nx, ny);

	this.forEach(function(v, x, y) {
		//destination coordinates
		var dx = x;
		var dy = y;
	});

	return array;
};

Array2D.prototype.crop = function(x, y, w, h) {

};

Array2D.prototype.rotate = function(x, y) {

};

Array2D.prototype.log = function(renderCallback) {

	if(renderCallback === undefined)
	{
		renderCallback = function(data) { return data; }; //default render function
	}

	function genChars(c, l)
	{
		var str = "";
		for(var i = 0; i < l; i++)
		{
			str += c;
		}
		return str;
	}

	function padLeft(str, len)
	{
		var space = genChars(" ", len - str.length);
		str = space + str;
		return str;
	}

	function padRight(str, len)
	{
		var space = genChars(" ", len - str.length);
		str = str + space;
		return str;
	}

	var maxYWidth = String(this.y - 1).length;
	var maxElementWidth = 0;
	this.forEach(function(v) {
		var width = String(v).length;
		if(width > maxElementWidth)
		{
			maxElementWidth = width;
		}
	});

	var header = genChars(" ", maxYWidth + 1) + genChars("_", (maxElementWidth + 1) * this.x) + "_";
	console.log(header);

	for(var y = 0; y < this.y; y++)
	{
		var line = padLeft(String(y), maxYWidth) + "| ";
		for(var x = 0; x < this.x; x++)
		{
			line += padRight(String(renderCallback(this[x][y])), maxElementWidth + 1);
		}
		console.log(line);
	}
};
