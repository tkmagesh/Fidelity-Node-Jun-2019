var bugsList = [
	{id : 1, name : 'Server communication failure', isClosed : false}
];

function getAll(){
	return  bugsList;
}

function get(id){
	return bugsList.find(function(bug){
		return bug.id == id;
	});
}

function addNew(bugData){
	if (!bugData.id){
		bugData.id = bugsList.reduce(function(result, bug){
			return result > bug.id ? result : bug.id;
		}, 0) + 1;
	}
	bugsList.push(bugData);
	return bugData;
}

var bugService = {
	getAll, get, addNew
};

module.exports = bugService;