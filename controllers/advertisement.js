import advertisementModel from '../models/advertisement'

/**
 * Get advertisement
 * @name get/advertisement
 * @function
 * @memberof module:advertisement
 * @returns {Array} Returns a personalized advertisement to display
 * @param {string} category
 * Accepted query:
 *   'Male', 'Female'
 * Note: This is a query parameter
 */
function index(req, res) {
  const { gender } = req.query
  advertisementModel.getPersonalizedAdvertisement(gender)
    .then((response) => {
      res.status(200).send(response)
    })
}

export default {
  index
}
