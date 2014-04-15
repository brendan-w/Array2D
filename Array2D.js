/*
 * Array2D Constructor
 * 
 * new Array2D(<Array2D>);
 * new Array2D(<x>, <y>;)
 */
var Array2D = function() {

	if((arguments.length === 1) && (arguments[0] instanceof Array2D))
	{

	}
	else if((arguments.length === 2) && (!isNaN(arguments[0])) && (!isNaN(arguments[0])))
	{
		this.init(arguments[0], arguments[1]);
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



Array2D.prototype.init = function(x, y) {
	for(var cx = 0; cx < y; cx++)
	{
		this[cx] = {};
		for(var cy = 0; cy < x; cy++)
		{
			this[cx][cy] = this.default_value;
		}
	}

	this.x = x;
	this.y = y;
};

/*
 * API functions
 */

Array2D.prototype.forEach = function(callback, rowMajor) {
	if(callback === undefined)
	{
		console.log("Invalid arguments for iterating an Array2D");
		return;
	}

	if(rowMajor === undefined) { rowMajor = true; }

	if(rowMajor)
	{
		for(var y = 0; y < this.y; y++)
		{
			for(var x = 0; x < this.x; x++)
			{
				callback(this[x][y], x, y, this);
			}
		}
	}
	else
	{
		for(var x = 0; x < this.x; x++)
		{
			for(var y = 0; y < this.y; y++)
			{
				callback(this[x][y], x, y, this);
			}
		}
	}

};



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



Array2D.prototype.shift = function(x, y) {

};
