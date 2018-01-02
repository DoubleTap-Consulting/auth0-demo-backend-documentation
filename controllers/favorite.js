import favoriteModel from '../models/favorite'

/**
 * Post favorite article
 * @name post/favorite
 * @function
 * @memberof module:article
 * @returns {Object} Returns article that was favorited
 * @param {number} articleId
 */
function setFavorite(req, res) {
  favoriteModel.setFavorite(req.body.articleId, req.user.email)
    .then((status) => {
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
function removeFavorite(req, res) {
  favoriteModel.removeFavorite(req.body.articleId, req.user.email)
    .then((status) => {
      res.status(200).send(status)
    })
}

export default {
  setFavorite,
  removeFavorite
}
