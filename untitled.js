

var test = maxOfArray([0,1,4,34,2,4])



function maxOfArray(inboundArray){
	
	var resultsAll = []
	var results = []
	var finalResults = []
	console.log('test')

	for (i = 0; i < inboundArray.length; i++){

		var arrayIndex1 = inboundArray[i]


		for (j = 0; j < inboundArray.length; j++){
			
			var arrayIndex2 = inboundArray[j]
			
			var thisResult = []

			if (arrayIndex1 < arrayIndex2){
				thisResult.push("less")
			}

			if (arrayIndex1 > arrayIndex2){
				thisResult.push("greater")
			}

			if (arrayIndex1 === arrayIndex2){
				thisResult.push("equal")
			}
		
		resultsAll.push(thisResult)
		console.log(resultsAll)

	}


	for (k = 0; k < resultsAll; k++){

		var evaluation = []

		for (l = 0; l < resultsAll[k].length; l++){

			currentResult = resultsAll[k][l]

			if(currentResult === "greater"){

				evaluation.push("greater")

			}

			if(currentResult === "less"){

				evaluation.push("not greater")

			}

			if(currentResult === "equal"){

				evaluation.push("not greater")

			}

		}

		if (evaluation.includes("not greater")){
			finalResults.push("not greatest")

		}
		else{
			finalResults.push("greatest")
		}
		console.log(finalResults)

	}

}

console.log(test)