const data = require('./users.json')
const { stringify: stringifyUser } = require('./users.js')
const { countSex: countUsersSex } = require('./sex.js')

data.forEach(user => {
	const formattedUserStr = stringifyUser(user);
	const usersSexStr = countUsersSex(user);
	console.log(formattedUserStr);
	console.log(usersSexStr);
})
