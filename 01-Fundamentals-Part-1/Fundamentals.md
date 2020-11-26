<h3>1. basic Javascript(Fundamentals) </h3>
<a href="https://github.com/EungyuCho/Javascripot_TIL">목차로 돌아가기 🏃</a><br>
<a href="https://www.udemy.com/course/the-complete-javascript-course/">해당 강의 바로가기 🙌</a><hr>
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
<h3>4. Arrow function</h3>
화살표 함수는 ES6문법으로, function 함수를 만든 것보다 간단하게 표현할 수 있습니다.<br>
<pre><code>// Function expression
const calcAge1 = function (birthYeah) {
    return 2037 - birthYeah;
}<br>
// Arrow function
const calcAge2 = birthYeah => 2037 - birthYeah;</code></pre>
<h3>5. 객체 리터럴</h3>
일반적인 자바스크립트의 객체 생성 방법으로 중괄호({})를 이용해서 객체를 생성할 수 있다.
<pre><code>var emptyObject = {};
console.log(typeof emptyObject); // object<br>     
var person = {
 name: 'Lee',
 gender: 'male',
 sayHello: function () {
   console.log('Hi! My name is ' + this.name);
 }
};<br>
console.log(typeof person); // object
console.log(person); // {name: "Lee", gender: "male", sayHello: ƒ}<br>
person.sayHello(); // Hi! My name is Lee</code></pre>
<h3>6. 점표기법 vs 괄호 표기법</h3>
점 표기법은 읽기 쉬워서 자주 사용하고, 괄호 표기법은 문자열로 변수를 넣을 수 있기때문에 조건에 따라 속성값을 다르게 읽어 올 수 있어 사용한다.
<pre><code>let obj = {
    cat: 'meow',
    dog: 'woof'
};<br>
console.log(obj.cat); // objectName.propertyName; (점 표기법)
console.log(obj['cat']); // objectName["propertyName"]; (괄호 표기법)</code></pre>
