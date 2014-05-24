Array2D
=======

Javascript library for managing 2D arrays


Constructors
------------

	array2D(x, y)				//creates a new array2D object, with dimensions (x, y)
	array2D(x, y, default)		//same as above, but sets the default value and fills all elements
	array2D(<array2D>)			//copy constructor



API Functions
------------

All callback functions are of the format:

	function(value, x, y, array2D)

All rectangular area parameters follow the format:

	(x, y, width, height)

###Traversal

	forEach(callback)							//iterates over all elements
	forGroup(x, y, width, height, callback)		//iterates over the given rectangular area
	forRow(y, callback)							//iterates over the given row
	forCol(x, callback)							//iterates over the given column

###Setting Data

	fill(value)						//sets all elements to the given value
	fill()							//if no value is given, the default value will be used
	
	setGroup(x, y, w, h, value)		//set rectangular area to the given value
	setGroup(x, y, w, h)			//if no value is given, the default value will be used

	setRow(y, array)				//sets existing row or column to the contents of the given array
	setCol(x, array)

###2D Operations

	resize(right, bottom, left, top)

Resizes this array by relatively adding or deleting the specified number of rows or columns. Positive numbers add, negative numbers delete. New elements will be filled with the default value.

	crop(x, y, width, height)

Sets this array to the given rectangular area by deleting elements.

	shift(x, y)
	shift(x, y, wrap)

Shifts the array by the specified number of rows and columns. Negative shifts are welcome. Optional boolean wrap parameter will wrap the elements around the edge. Elements will be wrapped by default.

	rotate(clockwise)

Rotates the array 90 degrees in the specified direction.

	invertX()
	invertY()

Inverts the array across the X or Y axis.

###Row and Column Operations

	row(y)					//returns the row or column as an array
	col(x)

	spliceRow(y)			//creates new row or column at the index given, and fills with the default
	spliceCol(x)
	spliceRow(y, array)		//optional array arguments fills with the array's contents
	spliceCol(x, array)

	swapRow(y1, y2)			//swaps the specified rows or columns
	swapCol(x1, x2)

	deleteRow(y)			//deletes the specified row or column
	deleteCol(x)

###Debug & Misc

	log()					//prints the array to the console
	log(callback)			//optional callback for element rendering (please return your value)
	inBounds(x, y)			//return true/false whether the point is within the array
	inBounds(x, y, w, h)	//return true/false whether the rectangular area is within the array