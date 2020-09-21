const { fake } = require('faker')

module.exports = function () {
  const _ = require('lodash')
  const faker = require('faker')

  faker.locale = 'zh_CN'

  return {
    employees: _.times(20, function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        phone: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        avatar: faker.internet.avatar(),
      }
    }),
  }
}
