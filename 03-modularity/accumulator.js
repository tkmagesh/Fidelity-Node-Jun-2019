

function accumulatorFactory(initialResult = 0){
	var result = initialResult;
	var accumulator = {
		add(x){
			result += x;
		},
		subtract(x){
			result -= x;
		},
		multiply(x){
			result *= x;
		},
		divide(x){
			result /= x;
		},
		getResult(){
			return result;
		}
	}
	return accumulator;
}

module.exports = accumulatorFactory;