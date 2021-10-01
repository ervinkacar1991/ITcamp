const quizData = [
    {
        question: 'How old is florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },{
        question: 'What is the best programing language?',
          a: 'java',
          b: 'C',
          c: 'phython',
          d: 'javascript',
          correct: a
    }, {
        question : 'Who is the Presidendt of US',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano', 
        d: ' Mihai Andrei',
        correct: 'a'
    }, {
        question: 'What does HTML stand for',
        a: 'Hypertext Markup Language',
        b: 'Cascadinc stylesheet',
        c: 'Jason Notation',
        d: 'Aplication Programing Interface',
        correct: 'a'
    }, {
        question: 'What year was javascript launched',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'd'
    }
]
 const questionEl = document.getElementById ('question')
 const a_text = document.getElementById('a_text')
 const b_text = document.getElementById('b_text')
 const c_text = document.getElementById('c_text')
 const d_text = document.getElementById('d_text')

let currentQuiz = 0;

loadQuiz();

function loadQuiz () {
     const currentQuizData = quizData[currentQuestion]
     questionEl.innerHTML = currentQuizData.question 

    currentQuestion++;
}