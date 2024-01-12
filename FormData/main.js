const continue_btn = document.getElementById('con_btn');

continue_btn.addEventListener('click', function() {
    this.style.backgroundColor = "rgb(0, 107, 0)";
});

continue_btn.addEventListener('mouseenter', function() {
    this.style.backgroundColor = "rgb(0, 107, 0)";
});

continue_btn.addEventListener('mouseleave', function() {
    this.style.backgroundColor = "rgb(87, 0, 107)";
});

continue_btn.addEventListener('mousedown', function() {
    this.style.backgroundColor = "rgb(0, 0, 0)";
    this.style.transform = "scale(0.9)";
});

continue_btn.addEventListener('mouseup', function() {
    this.style.backgroundColor = "rgb(0, 0, 0)";
    this.style.transform = "scale(1)";
});