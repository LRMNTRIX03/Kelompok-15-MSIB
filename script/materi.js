const progressBar = document.getElementById('progressBar');
const progressLabel = document.getElementById('progressLabel');
const btnProject = document.getElementById('btnProject');

// Event listener untuk tombol "Kerjakan Proyek"
btnProject.addEventListener('click', function() {
    // Update progress bar menjadi 100%
    progressBar.style.width = '100%';
    progressBar.setAttribute('aria-valuenow', 100);

    // Update label progress menjadi 100%
    progressLabel.textContent = '100%';

    // Mengubah tombol setelah klik
    btnProject.textContent = 'Proyek Selesai';
    btnProject.disabled = true; // Nonaktifkan tombol setelah diklik
});