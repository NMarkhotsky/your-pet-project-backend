const { catchAsync } = require('../../utils');
const { Friends } = require('../../models');

const ourFriends = catchAsync(async (req, res) => {
	const getFriends = await Friends.find();

	res.status(200).json({
		total: getFriends.length,
		data: getFriends,
	});
});

module.exports = {
	ourFriends,
};
