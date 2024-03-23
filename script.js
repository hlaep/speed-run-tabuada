const answerInput = document.getElementById('answer')
const questionElement = document.querySelector('.card')
const getMultiplicationTable = () => {
  const multiplicationTable = []
  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
      const question = `${i} x ${j}?`
      const answer = i * j
      multiplicationTable.push({ question, answer, index: i })
    }
  }
  return multiplicationTable
}
const questions = getMultiplicationTable()
let currentQuestion = null
const getRandomQuestion = () => {
  currentQuestion = questions[Math.floor(Math.random() * questions.length)]
  questionElement.innerText = currentQuestion.question
}
getRandomQuestion()
questionElement.innerText = currentQuestion.question

answerInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    if (parseInt(answerInput.value) === currentQuestion.answer) {
      questions.splice(questions.indexOf(currentQuestion), 1)
      answerInput.value = ''
      if (questions.length === 0) {
        questionElement.innerText = "You've complete the multiplication table!"
        return
      }
      getRandomQuestion()
    } else {
      questionElement.innerText =
        questionElement.innerText + ' wrong!!!! ' + currentQuestion.answer
      answerInput.value = ''
    }
  }
})