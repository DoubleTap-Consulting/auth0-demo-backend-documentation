const articleController = {};
const articleModel = require('../models/article')


/**
 * Get one specific article
 * @name get/article:articleId
 * @function
 * @memberof module:article
 * @inner
 * @param {number} articleId
 */
articleController.GET_ARTICLE = (req, res) => {
  const articleId = req.params.articleId
  articleModel.GET_ARTICLE(articleId)
    .then((response) => {
      res.status(200).send(response)
    })
}

/**
 * Get articles
 * @name get/articles
 * @function
 * @memberof module:article
 * @returns {Array} Returns an array of article objects
 * @param {string} category
 * // Accepted filters: 'recommended', 'Sports', 'Football', 'TV & Showbiz', 'News', 'Living', 'Money', 'Motors', 'Travel', 'Tech', 'Entertainment', 'Finance'
 * // Note: This is a query parameter
 */
articleController.GET_ARTICLES = (req, res) => {
  const category = req.query.category
  if (category === 'recommended') {
    articleModel.GET_ARTICLES('Sports')
      .then((response) => {
        res.status(200).send(response)
      })
  } else {
    articleModel.GET_ARTICLES(category)
      .then((response) => {
        res.status(200).send(response)
      })
  }
}

articleController.CREATE_ARTICLE = (req, res) => {
  const articleToCreate = req.body.article
  articleModel.CREATE_ARTICLE(articleToCreate)
    .then((response) => {
      res.status(200).send(response)
    })
}

articleController.POPULATE_ARTICLES = (req, res) => {
  articleModel.POPULATE_ARTICLES()
  res.status(200).send('Success')
}

module.exports = articleController