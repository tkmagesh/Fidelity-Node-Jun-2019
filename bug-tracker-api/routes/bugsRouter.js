var express = require('express'),
	router = express.Router();

var bugsList = [
	{id : 1, name : 'Server communication failure', isClosed : false}
];

router.get('/', function(req, res, next){
	res.json(bugsList);
});

router.get('/:id', function(req, res, next){
	var id = req.params.id;
	var result = bugsList.find(function(bug){
		return bug.id == id;
	});
	if (result){
		res.json(result);
	} else {
		res.status(404).end();
	}
});

router.post('/', function(req, res, next){
	var bugData = req.body;
	if (!bugData.id){
		bugData.id = bugsList.reduce(function(result, bug){
			return result > bug.id ? result : bug.id;
		}, 0) + 1;
	}
	bugsList.push(bugData);
	res.status(201).json(bugData);
});

module.exports = router;