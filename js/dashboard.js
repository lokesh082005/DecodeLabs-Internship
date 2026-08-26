const goalButton = document.getElementById('goal-button');
if (goalButton) {
  goalButton.addEventListener('click', () => {
    goalButton.textContent = '✓ Milestone completed';
    goalButton.disabled = true;
  });
}
