const careerButtons = document.querySelectorAll('[data-career-filter]');
const careerItems = document.querySelectorAll('.career-item');

careerButtons.forEach(button => {
  button.addEventListener('click', () => {
    careerButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.careerFilter;
    careerItems.forEach(item => {
      item.hidden = filter !== 'all' && item.dataset.category !== filter;
    });
  });
});
