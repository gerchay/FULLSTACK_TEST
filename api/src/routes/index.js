const { Router } = require('express')
const router = Router()

router.get('/iecho', (req, res) => {
  const { text } = req.query
  if (text) {
    // check it is palindrome
    const isPalindrome = palindromeChecke(text)
    // reverse string
    const inverted = text.split('').reverse().join('')
    res.json({ text: inverted, palindrome: isPalindrome }).status(200)
  } else {
    res.json({ error: 'no text' }).status(400)
  }
})

const palindromeChecke = (str) => {
  const strReversed = str.toLowerCase().split('').reverse().join('')
  return strReversed === str
}

module.exports = router
