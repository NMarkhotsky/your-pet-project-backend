const path = require('path');
const { readFile } = require('fs/promises');
const { catchAsync } = require('../../utils');

exports.ourFriends = catchAsync(async (req, res) => {
  const friendsPath = path.join('ourFriends.json');
  console.log('friendsPath: ', friendsPath);

  const friends = JSON.parse(await readFile(friendsPath));

  res.status(200).json({ friends });
});
