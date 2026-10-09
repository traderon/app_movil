document.querySelectorAll('button').forEach(b => {
  b.addEventListener('click', () => {
    document.getElementById(b.dataset.id).classList.toggle('abierto');
  });
});