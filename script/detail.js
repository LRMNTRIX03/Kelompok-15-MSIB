$(document).ready(function() {
    // Efek saat klik pada elemen materi
    $('.materi .col').on('click', function() {
        // Menambah efek aktif dengan mengubah warna border
        $(this).find('.p-3').css({
            'border': '2px solid #0e3053',
            'background-color': '#e3f2fd'
        });


        // Memunculkan alert contoh interaksi (opsional)
        alert($(this).find('p').text() + ' clicked!');
    });

    // Hover efek tambahan pada button
    $('.materi .btn').hover(
        function() {
            $(this).css('background-color', '#ffeb3b');
        }, 
        function() {
            $(this).css('background-color', '#ffc107');
        }
    );

    $('.btn .btn-primary').hover(
        function() {
            $(this).css('scale', '1.2');
        }
    );
});
