Array2D
=======

Javascript library for managing 2D arrays


Constructors
------------

	array2D(x, y)				//creates a new array2D object, with dimensions (x, y)
	array2D(x, y, default)		//same as above, but sets the default value and fills all elements
	array2D(&lt;array2D&gt;)	//copy constructor



API Functions
------------

All callback functions are of the format:

	function(value, x, y, array2D)

All rectangular area parameters follow the format:

	(x, y, width, height)

####Traversal

	forEach(callback)							//iterates over all elements
	forGroup(x, y, width, height, callback)		//iterates over the given rectangular area
	forRow(y, callback)							//iterates over the given row
	forCol(x, callback)							//iterates over the given column

####2D Operations

	resize(right, bottom, left, top)	//resizes this array, by adding or deleting the specified number of columns
										//positive numbers add, negative numbers delete
	crop(x, y, width, height)			//sets this array to the given rectangular area by deleting elements
	rotate(clockwise)					//rotates the array 90 degrees in the specified direction

####Row and Column Operations

	row(y)					//returns the row as an array
	col(x)					//returns the column as an array

	setRow(y, array)		//sets the row to the contents of the given array (existing data will be overwritten)
	setCol(x, array)		//sets the column to the contents of the given array (existing data will be overwritten)

	spliceRow(y)			//creates a new row at the specified index, and fills it with the default value
	spliceCol(x)			//creates a new column at the specified index, and fills it with the default value
	spliceRow(y, array)		//creates a new row at the specified index, and fills it with the contents from the array
	spliceCol(x, array)		//creates a new column at the specified index, and fills it with the contents from the array

####Debug

	log()				//prints the array to the console with standard text renderer
	log(callback)		//prints the array to the console with a custom text renderer (please return a value on each call)
