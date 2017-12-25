const favoriteController = {};
const favoriteModel = require('../models/favorite');

/**
 * Post favorite article
 * @name post/favorite
 * @function
 * @memberof module:article
 * @returns {Object} Returns article that was favorited
 * @param {number} articleId
 */
favoriteController.FAVORITE_ARTICLE = (req, res) => {
  favoriteModel.FAVORITE_ARTICLE(req.body.articleId, req.user.email)
    .then(status => {
      res.status(200).send(status)
    })
}

/**
 * Un-favorite article
 * @name delete/favorite
 * @function
 * @memberof module:article
 * @returns {Object} Returns article that was unfavorited
 * @param {number} articleId
 */
favoriteController.DELETE_FAVORITE = (req, res) => {
  favoriteModel.DELETE_FAVORITE(req.body.articleId, req.user.email)
    .then(status => {
      res.status(200).send(status)
    })
}


module.exports = favoriteController