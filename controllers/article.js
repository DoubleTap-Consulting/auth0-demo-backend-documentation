const articleController = {};
const articleModel = require('../models/article')

/**
 * @api {get} /article:articleId Get one specific article
 * @apiName GetArticle
 * @apiGroup Article
 *
 * @apiParam {Number} articleId Article unique ID.
 * Note: This is a body/data parameter
 *
 * @apiSuccess {Number} API response code
 * @apiSuccess {Object} article object
 */
articleController.GET_ARTICLE = (req, res) => {
  const articleId = req.params.articleId
  articleModel.GET_ARTICLE(articleId)
    .then((response) => {
      res.status(200).send(response)
    })
}

/**
 * @api {get} /article Get articles
 * @apiName GetArticle
 * @apiGroup Article
 *
 * @apiParam {String} category Category to filter
 * Accepted filters: 'recommended', 'Sports', 'Football', 'TV & Showbiz', 'News', 'Living', 'Money', 'Motors', 'Travel', 'Tech', 'Entertainment', 'Finance'
 * Note: This is a query parameter
 * 
 * @apiSuccess {Number} API response code
 * @apiSuccess {Object} article object
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