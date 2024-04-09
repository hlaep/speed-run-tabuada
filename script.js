const answerInput = document.getElementById('answer')
const questionElement = document.querySelector('.card')

const USER_SETTINGS = {
  addition: true,
  subtraction: true,
  multiplication: true,
  division: true
}

const getTableOfOperation = operation => {
  const operationTable = []
  for (let i = 2; i <= 9; i++) {
    for (let j = 2; j <= 9; j++) {
      let answer
      switch (operation) {
        case '+':
          answer = i + j
          break
        case '-':
          answer = i - j
          break
        case '×':
          answer = i * j
          break
        case '÷':
          answer = i / j
          break
        default:
          throw new Error('Invalid operation')
      }
      const question = `${i} ${operation} ${j}?`
      operationTable.push({ question, answer, index: i })
    }
  }
  return operationTable
}
const getTables = () => {
  let tables = []
  if (USER_SETTINGS.addition) tables = [...tables, ...getTableOfOperation('+')]
  if (USER_SETTINGS.subtraction)
    tables = [...tables, ...getTableOfOperation('-')]
  if (USER_SETTINGS.multiplication)
    tables = [...tables, ...getTableOfOperation('×')]
  if (USER_SETTINGS.division) tables = [...tables, ...getTableOfOperation('÷')]
  return tables
}

const questions = getTables()

let currentQuestion

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
