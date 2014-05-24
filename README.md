Array2D
=======

Javascript library for managing 2D arrays


Constructors
------------

array2D(x, y)

> Creates a new array2D object, with dimensions (x, y)

array2D(&lt;array2D&gt;)

> Copy constructor: clones the contents of the given array2D object


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



####Row and Column Operations


.row(y)

.col(x)

> Returns the selected row or column as an Array


.setRow(y, array)

.setCol(x, array)

> Sets the selected row or column to the contents of the given array (existing data will be overwritten)


.spliceRow(y, array)

.spliceCol(x, array)

> Creates a new row or column at the requested index, and fills it with the contents of the given array



####2D Operations

.resize(right, bottom, left, top)

.crop(x, y, width, height)

.rotate(clockwise)



####Debug

.log()

> Prints the array to the console
