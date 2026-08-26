const questions = [
  {
    text: 'What kind of work sounds most exciting?',
    answers: [
      ['Building websites and interactive apps', 'web'],
      ['Finding patterns in data', 'data'],
      ['Designing beautiful user experiences', 'design'],
      ['Protecting systems and networks', 'security']
    ]
  },
  {
    text: 'Which activity would you enjoy most?',
    answers: [
      ['Writing code and solving bugs', 'web'],
      ['Creating charts and analyzing numbers', 'data'],
      ['Sketching screens and improving usability', 'design'],
      ['Learning how systems can be secured', 'security']
    ]
  },
  {
    text: 'Which tool would you like to learn first?',
    answers: [
      ['JavaScript', 'web'],
      ['Python for data', 'data'],
      ['Figma', 'design'],
      ['Linux security tools', 'security']
    ]
  },
  {
    text: 'What type of problem do you prefer?',
    answers: [
      ['Making a product work smoothly', 'web'],
      ['Turning information into insights', 'data'],
      ['Making a confusing experience simple', 'design'],
      ['Finding and reducing security risks', 'security']
    ]
  },
  {
    text: 'What would make you proud of a project?',
    answers: [
      ['People can use the website easily', 'web'],
      ['The project reveals useful insights', 'data'],
      ['Users love the experience', 'design'],
      ['The system is safer and more resilient', 'security']
    ]
  }
];

const questionText = document.getElementById('question-text');
const answerList = document.getElementById('answer-list');
const nextButton = document.getElementById('next-question');
const questionCount = document.getElementById('question-count');
const quizScore = document.getElementById('quiz-score');
const quizProgress = document.getElementById('quiz-progress');
const quizCard = document.getElementById('quiz-card');
const resultCard = document.getElementById('assessment-result');

let currentQuestion = 0;
const scores = { web: 0, data: 0, design: 0, security: 0 };

function renderQuestion() {
  const question = questions[currentQuestion];
  questionText.textContent = question.text;
  questionCount.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  const percentage = Math.round(((currentQuestion + 1) / questions.length) * 100);
  quizScore.textContent = `Progress ${percentage}%`;
  quizProgress.style.width = `${percentage}%`;
  nextButton.disabled = true;

  answerList.innerHTML = question.answers.map(([label, value], index) => `
    <label class="answer-option">
      <input type="radio" name="answer" value="${value}" data-index="${index}">
      <span>${label}</span>
    </label>
  `).join('');

  answerList.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', () => {
      nextButton.disabled = false;
    });
  });
}

nextButton.addEventListener('click', () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  if (!selected) return;
  scores[selected.value]++;

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  const winner = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  const results = {
    web: { title: 'Full Stack Development', icon: '💻', match: 87, skills: 'HTML, CSS, JavaScript, Git' },
    data: { title: 'AI & Data Science', icon: '🤖', match: 87, skills: 'Python, Statistics, Data Analysis' },
    design: { title: 'UI/UX Design', icon: '🎨', match: 87, skills: 'Research, Wireframing, UI Design' },
    security: { title: 'Cybersecurity', icon: '🔐', match: 87, skills: 'Networks, Linux, Security Basics' }
  };
  const result = results[winner];

  quizCard.classList.add('hidden');
  resultCard.classList.remove('hidden');
  resultCard.innerHTML = `
    <div class="card-icon">${result.icon}</div>
    <span class="eyebrow">YOUR RECOMMENDATION</span>
    <h2>${result.title}</h2>
    <div class="result-score">${result.match}%</div>
    <p>Frontend demo result based on your selected interests.</p>
    <h3>Recommended skills</h3>
    <p>${result.skills}</p>
    <a class="btn btn-primary" href="internships.html">Explore internships →</a>
    <button class="btn btn-secondary" type="button" id="restart-quiz">Retake assessment</button>
  `;

  document.getElementById('restart-quiz').addEventListener('click', () => {
    currentQuestion = 0;
    Object.keys(scores).forEach(key => scores[key] = 0);
    resultCard.classList.add('hidden');
    quizCard.classList.remove('hidden');
    renderQuestion();
  });
}

renderQuestion();
