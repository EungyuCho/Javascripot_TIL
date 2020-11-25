# Udemy Javascript TIL 💻
<hr>
<br>
<h3>자바스크립트 학습용 저장소입니다 </h3>
<a href="https://www.udemy.com/course/the-complete-javascript-course/">해당 강의 바로가기</a><hr>
<br>
<h3>1. 자바스크립트의 기본 데이터형</h3>
<ol>
    <li>Number: 정수 또는 실수형 숫자</li>
    <li>String: 문자열</li>
    <li>Boolean: true 나 false</li>
    <li>Undefined: 값이 저장되어 있지 않은 최상위 속성(빈 값)</li>
    <li>Null: null 값을 나타내는 키워드(빈 값)</li>
    <li>Symbol(ES2015): 인스턴스가 고유하고 불변인 데이터 형</li>
    <li>BigInt(ES2020): Number 원시 값이 갖는 2^53 - 1 보다 큰 정수를 저장할 수 있는 데이터형</li>
</ol>
<hr>
<h3>2. 템플릿 리터럴</h3>
템플릿 리터럴은 내장된 표현식을 허용하는 문자열 리터럴입니다. 이중따옴표나 작은따옴표를 사용하는 대신 백틱(` `) 을 이용합니다.<br>
<pre><code>const firstName = 'Jonas';
const jonas = "I'm " + firstName + "!";
console.log(jonas);     // I'm Jonas!<br>
const jonasNew = `I'm ${firstName}!`;
console.log(jonasNew);  // I'm Jonas!
</code></pre>
<hr>
<h3>3. Strict Mode</h3>
Strict Mode는 코드에 더 나은 오류검사를 적용하는 방법입니다. 흔히 발생하는 코딩 실수를 잡아내어 예외를 발생시키거나, 정확하게 고려되지 않은 기능들을 비활성화 시킵니다.<br>
<a href="https://ithub.tistory.com/162">use strict란?</a>
<hr>