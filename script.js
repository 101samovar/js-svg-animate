const path = document.getElementById('path');
const DT = 10, PERIOD = 2000, R = 100, x0 = 280, y0 = 160;
const from = 0, to = 2* Math.PI;
const start = new Date().getTime();
function animate() {
    const t = new Date().getTime() - start;
    path.setAttributeNS(null, 'd', setParam(t));
    if (t < PERIOD) {
        window.setTimeout(animate, DT);
    }
}
function getParam(from, to, t) {
    return t < PERIOD ? from + (to - from) * t / PERIOD : to;
}
function setParam(t) {
    const phi = getParam(from, to, t, PERIOD);
    const x = x0 + R * Math.cos(phi);
    const y = y0 + R * Math.sin(phi);
    const largeArc = y <= y0 ? 1: 0;
    return `M ${x0} ${y0} L ${x0 + R} ${y0} A ${R} ${R} 0 ${largeArc} 1 ${x} ${y} z`;
}
animate();