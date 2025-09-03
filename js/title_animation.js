window.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.title h1');
    const html = title.innerHTML;
    title.innerHTML = '';
    let i = 0;
    const chars = html.match(/(<br\s*\/?>)|./g);
    function typeWriter() {
        if (i < chars.length) {
            title.innerHTML += chars[i];
            i++;
            setTimeout(typeWriter, 80);
        }
    }
    typeWriter();
});