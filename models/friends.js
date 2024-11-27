const { Schema, model } = require('mongoose');

const friendsSchema = Schema(
	{
		imgUrl: {
			type: String,
		},
		title: {
			type: String,
		},
		url: {
			type: String,
		},
		addressUrl: {
			type: Date,
		},
		address: {
			type: String,
		},
		workDays: {
			type: Array,
		},
		phone: {
			type: String,
		},
		email: {
			type: String,
		},
		externalId: {
			type: String,
			select: false,
		},
	},
	{
		versionKey: false,
	}
);

const Friends = model('Friends', friendsSchema);

module.exports = Friends;
