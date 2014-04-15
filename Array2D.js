/*
 * Array2D Constructor
 * 
 * new Array2D(<Array2D>);
 * new Array2D(<x>, <y>;)
 */
var Array2D = function() {

	if((arguments.length === 2) && (!isNaN(arguments[0])) && (!isNaN(arguments[0])))
	{
		//normal Array2D constructor
		this.x = arguments[0];
		this.y = arguments[1];

		this.forEach(function(v, x, y, a) {
			a[x][y] = this.default_value;
		});
	}
	else if((arguments.length === 1) && (arguments[0] instanceof Array2D))
	{
		//copy constructor
		var old = arguments[0];
		this.x = old.x;
		this.y = old.y;

		this.forEach(function(v, x, y, a) {
			a[x][y] = old[x][y];
		});
	}
	else
	{
		console.log("Invalid arguments for an Array2D constructor");
	}
};


/*
 * Properties / Settings
 */

Array2D.default_value = 0;



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

Array2D.prototype.resize = function(x, y, nx, ny) {

};

Array2D.prototype.crop = function(x, y, w, h) {

};

Array2D.prototype.rotate = function(x, y) {

};
