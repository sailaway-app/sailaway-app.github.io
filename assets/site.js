'use strict';
// No analytics, remote requests, cookies, or local-storage writes.
const appMenus = [...document.querySelectorAll('.apps-dropdown')];
document.addEventListener('click', (event) => {
  appMenus.forEach((menu) => {
    if (menu.open && !menu.contains(event.target)) menu.open = false;
  });
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  appMenus.forEach((menu) => {
    if (!menu.open) return;
    const focusWasInside = menu.contains(document.activeElement);
    menu.open = false;
    if (focusWasInside) menu.querySelector('summary').focus();
  });
});
document.querySelectorAll('[data-copy-email]').forEach((button) => {
  button.hidden = false;
  button.addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('clipboard-unavailable');
      await navigator.clipboard.writeText('hemletdice34@gmail.com');
      status.textContent = 'Email address copied.';
    } catch {
      status.textContent = 'Select or long-press the email address above to copy it.';
    }
  });
});
