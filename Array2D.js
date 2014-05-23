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
	var construct = function(args) {
		if((args.length === 2) && (!isNaN(args[0])) && (!isNaN(args[0])))
		{
			//normal Array2D constructor
			_this.x = args[0];
			_this.y = args[1];

			init();
		}
		else if((args.length === 1) && (args[0] instanceof Array2D))
		{
			//copy constructor
			var old = args[0];
			_this.x = old.x;
			_this.y = old.y;

			init();

			_this.forEach(function(v, x, y, a) {
				a[x][y] = old[x][y];
			});
		}
		else
		{
			console.log("Invalid arguments for an Array2D constructor");
		}
	};

	/*
	 * Private Functions
	 */

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
	construct(arguments);
};


/*
 * API functions
 */

Array2D.prototype.forEach = function(callback) {
	if(callback === undefined)
	{
		console.log("Invalid arguments for iterating an Array2D");
		return;
	}

	for(var x = 0; x < this.x; x++)
	{
		for(var y = 0; y < this.y; y++)
		{
			callback(this[x][y], x, y, this);
		}
	}
};



Array2D.prototype.row = function(y) {
	if((y === undefined) || isNaN(y) || (y > (this.y - 1)))
	{
		console.log("Invalid argument for row()");
		return;
	}

	var array = new Array();
	for(var x = 0; x < this.x; x++)
	{
		array[x] = this[x][y];
	}
	return array;
};



Array2D.prototype.col = function(x) {
	if((x === undefined) || isNaN(x) || (x > (this.x - 1)))
	{
		console.log("Invalid argument for col()");
		return;
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
		return;
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
	var nx = this.x + _x + x_;
	var ny = this.y + _y + y_;

	if((nx < 1) || (ny < 1))
	{
		console.log("Resize Error: overlapping contractions");
		return;
	}

	var array = new Array2D(nx, ny);

};

Array2D.prototype.crop = function(x, y, w, h) {

};

Array2D.prototype.rotate = function(x, y) {

};

Array2D.prototype.log = function() {

	var header = "  _";
	for(var i = 0; i < this.x; i++)
	{
		header += "__";
	}

	console.log(header);
	for(var y = 0; y < this.y; y++)
	{
		var line = y + "| ";
		var row = this.row(y);
		row.forEach(function(v, i, a) {
			line += v + " ";
		});
		console.log(line);
	}
};
