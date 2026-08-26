const searchInput = document.getElementById('internship-search');
const clearSearch = document.getElementById('clear-search');
const internshipButtons = document.querySelectorAll('[data-internship-filter]');
const internshipItems = [...document.querySelectorAll('.internship-card')];
const resultCount = document.getElementById('result-count');
const emptyState = document.getElementById('empty-state');
let activeCategory = 'all';

function updateInternships() {
  const query = searchInput.value.trim().toLowerCase();
  let visible = 0;

  internshipItems.forEach(card => {
    const matchesCategory = activeCategory === 'all' || card.dataset.category === activeCategory;
    const matchesSearch = !query || card.dataset.search.includes(query);
    const show = matchesCategory && matchesSearch;
    card.hidden = !show;
    if (show) visible++;
  });

  resultCount.textContent = `${visible} internship${visible === 1 ? '' : 's'} found`;
  emptyState.classList.toggle('hidden', visible !== 0);
}

searchInput.addEventListener('input', updateInternships);

clearSearch.addEventListener('click', () => {
  searchInput.value = '';
  updateInternships();
  searchInput.focus();
});

internshipButtons.forEach(button => {
  button.addEventListener('click', () => {
    internshipButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    activeCategory = button.dataset.internshipFilter;
    updateInternships();
  });
});

document.querySelectorAll('.save-btn').forEach(button => {
  button.addEventListener('click', () => {
    const saved = button.classList.toggle('saved');
    button.textContent = saved ? '★' : '☆';
    button.setAttribute('aria-pressed', String(saved));
  });
});

document.querySelectorAll('.details-btn').forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.internship-card');
    const title = card.querySelector('h2').textContent;
    alert(`${title}\n\nThis is a frontend demonstration. A real application could open a detailed internship page here.`);
  });
});

updateInternships();
