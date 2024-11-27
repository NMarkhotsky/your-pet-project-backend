const path = require('path');
const { readFile } = require('fs/promises');
const { catchAsync } = require('../../utils');

// exports.ourFriends = catchAsync(async (req, res) => {
// 	const friendsPath = path.join('public', 'ourFriends.json');
// 	console.log('friendsPath: ', friendsPath);

// 	const friends = JSON.parse(await readFile(friendsPath));

// 	res.status(200).json({ friends });
// });

exports.ourFriends = catchAsync(async (req, res) => {
	const friendsUrl = 'https://your-pet-project-backend.vercel.app/ourFriends.json';

	const response = await fetch(friendsUrl);
	const friends = await response.json();

	res.status(200).json({ friends });
});
