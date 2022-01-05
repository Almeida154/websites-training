/* === Show / Hide === */
const showInput = (inputOverlay, inputPassword, inputIcon) => {
  const overlay = document.getElementById(inputOverlay),
    input = document.getElementById(inputPassword),
    eyeIcon = document.getElementById(inputIcon);

  eyeIcon.addEventListener('click', () => {
    // Change password to text and icon
    if (input.type === 'password') {
      input.type = 'text';
      eyeIcon.classList.add('bx-show');
    } else {
      input.type = 'password';
      eyeIcon.classList.remove('bx-show');
    }

    // Toggle overlay
    overlay.classList.toggle('overlay-content');
  });
};

showInput('input-overlay', 'input-password', 'input-icon');
