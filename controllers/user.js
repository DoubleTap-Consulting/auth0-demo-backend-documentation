import userModel from '../models/user'

/**
 * Un-favorite article
 * @name get/user
 * @function
 * @memberof module:user
 * @returns {Object} Returns user object
 * @param {string} access_token
 * Note: access_token should be attached to header
 */
function getByEmail(req, res) {
  userModel.getByEmail(req.user.email)
    .then((user) => {
      res.status(200).send(user)
    })
}

function create(req, res) {
  userModel.create(req.user.email)
    .then((user) => {
      res.status(200).send(user)
    })
}

/**
 * Add preferred category
 * @name post/user/views
 * @function
 * @memberof module:user
 * @returns {Object} Returns user object
 * @param {string} access_token
 * Note: access_token should be attached to header
 */
function addToViewCount(req, res) {
  userModel.addToViewCount(req.user.email)
    .then((user) => {
      res.status(200).send(user)
    })
}

/**
 * Add preferred category
 * @name delete/user/views
 * @function
 * @memberof module:user
 * @returns {Object} Returns user object
 * @param {string} access_token
 * Note: access_token should be attached to header
 */
function removeViewCount(req, res) {
  userModel.removeViewCount(req.user.email)
    .then((user) => {
      res.status(200).send(user)
    })
}

/**
 * Add preferred category
 * @name post/user/category
 * @function
 * @memberof module:user
 * @returns {Object} Returns user object
 * @param {string} access_token
 * @param {string} category
 * Note: access_token should be attached to header
 */
function addCategory(req, res) {
  userModel.addCategory(req.user.email, req.body.category)
    .then((user) => {
      res.status(200).send(user)
    })
}

/**
 * Remove preferred category
 * @name delete/user/category
 * @function
 * @memberof module:user
 * @returns {Object} Returns user object
 * @param {string} access_token
 * @param {string} category
 * Note: access_token should be attached to header
 */
function removeCategory(req, res) {
  userModel.removeCategory(req.user.email, req.body.category)
    .then((user) => {
      res.status(200).send(user)
    })
}

export default {
  getByEmail,
  create,
  addCategory,
  removeCategory,
  addToViewCount,
  removeViewCount
}
