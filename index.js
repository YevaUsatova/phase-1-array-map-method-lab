let tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
  const arr = tutorials.map(s => 
    s.split(' ').map(w=>
                      w[0].toUpperCase() + w.slice(1)
                      ).join(' '));
  return arr;
}
// let x = titleCased();
// console.log (x)