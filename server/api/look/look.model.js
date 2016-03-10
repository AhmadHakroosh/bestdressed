'use strict';

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var lookSchema = new schema({
	image: String,
	linkUrl: String,
	title: String,
	description: String,
	tags: [{
		type: String
	}],
	_creator: {
		type: Schema.ObjectId,
		ref: 'user'
	},
	email: String,
	userName: String,
	createTime: {
		type: Date,
		'default': Date.now
	},
	views: {
		type: Number,
		'default': 0
	},
	upVotes: {
		type: Number,
		'default': 0
	}
});