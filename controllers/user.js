const userController = {};
const userModel = require('../models/user');

/**
 * @api {post} /user Get user info from external database
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiHeaderExample {json} Header-Example:
 *   {
 *     "access_token": "someaccesstokenhere"
 *   }
 * @apiSuccess {Number} API response code
 * @apiSuccess {Object} user object
 */
userController.GET_USER = (req, res) => {
  userModel.GET_USER(req.user.email)
    .then(user => {
      res.status(200).send(user)
    })
}

userController.CREATE_USER = (req, res) => {
  userModel.CREATE_USER(req.body.email)
    .then(user => {
      res.status(200).send(user)
    })
}


module.exports = userController