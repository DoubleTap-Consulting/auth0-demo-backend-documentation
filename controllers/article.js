import articleModel from '../models/article'

/**
 * Get one specific article
 * @name get/article:articleId
 * @function
 * @memberof module:article
 * @inner
 * @param {number} articleId
 */
function getById(req, res) {
  const { articleId } = req.params

  articleModel.getByID(articleId)
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
 * Accepted filters:
 *   'recommended', 'Sports', 'Football', 'TV & Showbiz', 'News', 'Living',
 *   'Money', 'Motors', 'Travel', 'Tech', 'Entertainment', 'Finance'
 * Note: This is a query parameter
 */
function index(req, res) {
  const { category } = req.query
  const { email } = req.user

  if (category === 'recommended') {
    articleModel.getRecommendedArticles(email)
      .then((response) => {
        res.status(200).send(response)
      })
  } else {
    articleModel.getByCategory(category)
      .then((response) => {
        res.status(200).send(response)
      })
  }
}

function create(req, res) {
  const { article } = req.body
  articleModel.create(article)
    .then((response) => {
      res.status(200).send(response)
    })
}

function populate(req, res) {
  articleModel.populate()
  res.status(200).send('Success')
}


export default {
  getById,
  index,
  create,
  populate
}
