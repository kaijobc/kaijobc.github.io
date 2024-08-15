document.addEventListener('DOMContentLoaded', function() {
    // スクロール時のヘッダーのクラス追加・削除処理
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // SNSリンクのトグル処理
    const snsToggle = document.querySelector('.sns-toggle');
    const snsLinks = document.querySelectorAll('.sns-links');
    
    if (snsToggle) { // snsToggle が存在するかチェック
        snsToggle.addEventListener('click', function(e) {
            e.preventDefault();
            snsLinks.forEach(link => link.classList.toggle('active'));
        });
    }
});
