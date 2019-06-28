var express = require('express'),
	router = express.Router(),
	bugService = require('../services/bugService');

router.get('/', function(req, res, next){
	var bugsList = bugService.getAll();
	res.json(bugsList);
});

router.get('/:id', function(req, res, next){
	var result = bugService.get(req.params.id);
	if (result){
		res.json(result);
	} else {
		res.status(404).end();
	}
});

router.post('/', function(req, res, next){
	var bugData = req.body;
	var result = bugService.addNew(bugData);
	res.status(201).json(bugData);
});

module.exports = router;