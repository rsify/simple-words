const fs = require('fs')
const path = require('path')

const contents = fs.readFileSync(path.resolve(__dirname, 'words.txt')).toString()

const wordList = contents.split(require('os').EOL)
wordList.pop() // remove trailing empty new line

const pick = (arr, n = 1) => {
	const res = []
	while (n--) res.push(arr[Math.floor(Math.random() * arr.length)])
	return res
}

module.exports.one = () => pick(wordList)[0]
module.exports.pick = (n) => pick(wordList, n)
module.exports.all = wordList
