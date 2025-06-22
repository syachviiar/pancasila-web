<script src="js/script.js"></script>
// Efek transisi keluar sebelum pindah halaman
document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = link.getAttribute('href');

    // Jika link menuju halaman (bukan id)
    if (target && !target.startsWith('#') && !link.hasAttribute('target')) {
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = target;
      }, 300);
    }
  });
});
