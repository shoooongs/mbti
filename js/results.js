import { results, mbtis } from './data.js'
//http://127.0.0.1:5500/results.html?mbti=isfj
//querystring

const mbti = new URLSearchParams(location.search).get('mbti')
//urlsearchparams - 분석한다 get-값을얻는다 

console.log(mbti)
const result = results[mbtis[mbti]]

const titelEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const jobEls = document.querySelectorAll('.job')
const lectureEl = document.querySelector('.lecture')
const lectureImgEl = document.querySelector('.lecture img')

//바꿀 데이터 요소들을 모두 자바스크립트로 검색해놓은 상태이다.

titelEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results[index]
})
jobEls.forEach(function (jobEl, index) {
  jobEl.innerHTML = result.jobs[index]
})
lectureEl.href = result.lectureUrl
lectureImgEl.src = result.lectureImg

