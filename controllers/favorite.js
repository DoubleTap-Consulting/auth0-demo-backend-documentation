const favoriteController = {};
const favoriteModel = require('../models/favorite');

/**
 * @api {post} /favorite Favorite an article
 * @apiName FavoriteArticle
 * @apiGroup Article
 *
 * @apiParam {Number} articleId Article unique ID.
 *
 * @apiSuccess {Number} API response code
 * @apiSuccess {Object} article object
 */
favoriteController.FAVORITE_ARTICLE = (req, res) => {
  favoriteModel.FAVORITE_ARTICLE(req.body.articleId, req.user.email)
    .then(status => {
      res.status(200).send(status)
    })
}

/**
 * @api {delete} /favorite Unfavorite an article
 * @apiName UnfavoriteArticle
 * @apiGroup Article
 *
 * @apiParam {Number} articleId Article unique ID.
 *
 * @apiSuccess {Number} API response code
 * @apiSuccess {Object} article object
 */
favoriteController.DELETE_FAVORITE = (req, res) => {
  favoriteModel.DELETE_FAVORITE(req.body.articleId, req.user.email)
    .then(status => {
      res.status(200).send(status)
    })
}


module.exports = favoriteController