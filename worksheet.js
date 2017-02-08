/**
 * PART 0
 *
 * Write a function that calculates the sum of all the numbers in an array
 */

function sumOfArray(inbound){
// 	var i = 0
 	var result = 0
// 	for (i in inbound){
// 		console.log(i)
// 		result = result + i
// 	}
// 	console.log(result)

 	for (i = 0; i < inbound.length; i++){
 		result = result + inbound[i]
 	}
 	return result

 }

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and returns the highest number in the array.


function maxOfArray(inboundArray){
	
	var arrayLength = inboundArray.length
	var currentHero = 0
	var destiny = true
    
	//go through each spot
	var i=0
	for(i = arrayLength; i > 0; i--){

		var hero = inboundArray[i]
		var currentIndex = inboundArray.indexOf(hero)
		
        //move left
        var direction = "left"
		var j =0;
        
        var destiny = true
		for(j = currentIndex; j > 0 && destiny === true; j--){

			var destiny = false 
			
			var enemy = inboundArray[j]

			destiny = evaluate(hero, enemy)

		}
        
        var direction = "right"
               
        //move right
		var k =0;
		for(k = 0; k < (arrayLength - currentIndex) && destiny === true; k++){

			enemy = inboundArray[k]

			destiny = evaluate(hero, enemy)
            console.log(destiny)

		}

		if (destiny === true){

			currentHero = hero 
			console.log(hero)
			return currentHero
			
		}
	}
}

function evaluate(hero, enemy){

	if (hero >= enemy){
		return true
	}
	return false
}


/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * as input and returns true if it is a vowel, false otherwise.
 */


/**
 * Part 3
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */


/**
 * Part 4
 *
 * write a function the returns a fizzbuzz string for an input number. 
 A fizzbuzz string is defined as the following:
 For every number from 1 to the input number...
 * - if that number isn't a multiple of 3 or 5, add a period "." to the fizzbuzz string
 * - for every number that is a multiple of 3 (but not 5), add "fizz" to the fizzbuzz string
 * - for every number that is a multiple of 5 (but not 3), add "buzz" to the fizzbuzz string
 * - for every number that is a multiple of 3 and 5, add "fizzbuzz" to the fizzbuzz string
 For example, the fizzbuzz string for the number 3 is "..fizz"
 For the number 15, the fizzbuzz string is "..fizz.buzzfizz..fizzbuzz.fizz..fizzbuzz"
 */


/**
 * Part 5
 *
 * Write a function findLongestWord() that takes a string of 
 words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 */


/**
 * PART 6
 *
 * write a function that returns the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

