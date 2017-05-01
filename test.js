const test = require('tape')
const words = require('./index.js')

test('.one', t => {
	const word = words.one()
	//typeof string
	t.equal(typeof word, 'string', 'word should be a string')
	//length 3 - 7
	t.ok(word.length >= 3, 'word should be longer or equal 3 chars')
	t.ok(word.length <= 7, 'word should be shorter or equal 7 chars')
	t.end()
})

test('.pick', t => {
	// typeof array
	t.ok(Array.isArray(words.pick()), 'words should be an array')

	// picks one
	t.equal(words.pick().length, 1, 'words() should be of length 1')

	// picks 100
	t.equal(words.pick(100).length, 100, 'words(100) should be of length 100')
	t.end()
})

test('.all', t => {
	// typeof array
	t.ok(Array.isArray(words.all), 'words.all should be an array')

	// length > 0
	t.ok(words.all.length > 0, 'words.all should be longer than 0')

	// correct length
	let ofCorrectLength = 0
	words.all.forEach(x => {
		if (x.length >= 3 && x.length <= 7)
			ofCorrectLength++
		else console.log('ay', x)
	})
	t.equal(ofCorrectLength, words.all.length,
		'words.all should all be of correct length')
	t.end()
})
