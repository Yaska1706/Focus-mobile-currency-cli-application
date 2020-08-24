const { version } = require('../../package.json')

//get the version of the application
module.exports = (args) => {
  console.log(`v${version}`)
}