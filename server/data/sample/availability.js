const moment = require('moment')
// Example [
//     "Wed May 10 2022 00:00:00 GMT-0700 (Pacific Daylight Time)",
//     "Fri May 20 2022 00:00:00 GMT-0700 (Pacific Daylight Time)",
//     "Wed May 13 2022 00:00:00 GMT-0700 (Pacific Daylight Time)",
//     "Fri May 14 2022 00:00:00 GMT-0700 (Pacific Daylight Time)",
// ]

module.exports = [
    {
        day: moment(Date.now()).toDate()
    },
    {
        day: moment(Date.now()).add(1, 'w').toDate()
    }
]