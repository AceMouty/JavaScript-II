// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/



function getLength(arr, cb) {
	// getLength passes the length of the array into the callback.
	return cb(arr.length);
}

getLength(items, function(length){
	console.log(length);
})

function last(arr, cb) {
	// last passes the last item of the array into the callback.
	return cb(items[arr.length - 1])
}

last(items, function(lastItem){
	console.log(lastItem);
})

function sumNums(x, y, cb) {
	// sumNums adds two numbers (x, y) and passes the result to the callback.
	return cb(x + y);
}

sumNums(2,4, function(sum){
	console.log(sum);
})

function multiplyNums(x, y, cb) {
	// multiplyNums multiplies two numbers and passes the result to the callback.
	return cb(x*y);
}

multiplyNums(3,4, function(total){
	console.log(total);
})

	function contains(item, arr, cb) {
 	 return cb(total = arr.includes(item));
	}

	contains("Gum", items, function(result){
	console.log(result);
	})
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
