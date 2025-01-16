const { Users } = require('../../models');
const { catchAsync, signToken } = require('../../utils');

const { PRODUCTION_FRONT_URL } = process.env;

exports.googleAuth = catchAsync(async (req, res) => {
  const { _id: id } = req.user;
  const token = signToken(id);

  await Users.findByIdAndUpdate(id, { token });

  res.redirect(`${PRODUCTION_FRONT_URL}?token=${token}`);
});
