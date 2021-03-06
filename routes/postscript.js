var express = require('express');
var router = express.Router();

var postscript = require('../models/postscriptModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('web_index', { title: 'OutFrog' });
});



// 1-1. 활동후기 작성
router.get('/writePostscriptPage', function(req, res, next){
  res.render('web_writeFormPostscript');
});

router.post('/insertPostscript', function(req, res, next){
  postscript.insertPostscript(req, function(result){ res.json(result); });
  // postscriptModel.insertPostscript(req, function(result){ res.json(result); });
});


/* ----- 대외활동 페이지 -----
	1. 활동후기 리스트
	2. 활동후기 상세페이지
------------------------*/

// 1. 활동후기 리스트
router.get('/postscriptList/:activity_seq', function(req, res, next){
	var seq = req.params.activity_seq;
	postscript.postscriptList(seq, function(result){ res.json(result); });
});	// /postscriptList

// 2. 활동후기 상세페잊
router.get('/detailPostscript/:postscript_seq', function(req, res, next){
	var seq = req.params.postscript_seq;
	postscript.detailPostscript(seq, function(result){ res.json(result); });
});	// detailPostscript





/* ----- 마이페이지 -----
	1. 내가 작성한 활동후기 리스트
--------------------*/
router.get('/myPostscriptList', function(req, res, next){
	postscript.myPostscriptList(req, function(result){ res.json(result); });
});	// myPostscriptList


router.get('/findOnePostscript/:seq', function(req, res, next){
	var seq = req.params.seq;
	postscript.findOnePostscript(seq, function(result){ res.json(result); });
});
module.exports = router;
