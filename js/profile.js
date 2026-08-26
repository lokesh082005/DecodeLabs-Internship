const editProfile = document.getElementById('edit-profile');
if (editProfile) {
  editProfile.addEventListener('click', () => {
    editProfile.textContent = '✓ Profile ready to edit';
  });
}
