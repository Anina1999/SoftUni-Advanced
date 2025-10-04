function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const output = document.getElementById('result');

    gradient.addEventListener('mousemove', onMouseMove);
    gradient.addEventListener('mouseout', onMouseOut);

    function onMouseMove(event) {
        output.textContent = Math.floor(event.offsetX / gradient.clientWidth * 100) + '%';
    }

    function onMouseOut() {
        output.textContent = '';
    }
}