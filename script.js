window.addEventListener('DOMContentLoaded', function() {
  fetch('metin.txt')
    .then(response => response.text())
    .then(text => {
      var metinElementi = document.getElementById('metin');
      metinElementi.textContent = text;
    })
    .catch(error => {
      console.error('Metin dosyası yüklenirken bir hata oluştu:', error);
    });
});