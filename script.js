function showSection(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function showDay(day) {
    document.querySelectorAll('.cards').forEach(c => c.classList.remove('active'));
    document.getElementById(day).classList.add('active');
}