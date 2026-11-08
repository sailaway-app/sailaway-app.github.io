'use strict';
// No analytics, remote requests, cookies, or local-storage writes.
document.querySelectorAll('[data-copy-email]').forEach((button) => {
  button.hidden = false;
  button.addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    const email = 'hemletdice34@gmail.com';
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('clipboard-unavailable');
      await navigator.clipboard.writeText(email);
      status.textContent = '이메일 주소를 복사했습니다.';
    } catch {
      status.textContent = '위의 이메일 주소를 길게 누르거나 선택하여 복사하십시오.';
    }
  });
});
