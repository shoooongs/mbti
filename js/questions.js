import { questions } from './data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0
let mbti = ''

function renderQuestion() {
  //함수, 변수와 명령
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}
function nextQuestion(choiceNumber) {
  if ( currentNumber === questions.length - 1 ) {
    showResultPage()
    return
  }
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value
  // mbti = '' + 'i' = 'i'
  //함수가 계속 돌면서 그다음 mbti랑 합쳐져서 재할당된다.
  currentNumber = currentNumber + 1
  renderQuestion()
}

function showResultPage() {
  location.href = '/results.html?mbti=' + mbti
  //주소에 정보를 담아 이동하는 방식, querystring 방식이라고 함 

}


choice1El.addEventListener('click', function() {
  nextQuestion(0)
})//이름을 지정해주지 않아도되는, 익명함수

choice2El.addEventListener('click', function() {
  nextQuestion(1)
})//이름을 지정해주지 않아도되는, 익명함수

renderQuestion()

