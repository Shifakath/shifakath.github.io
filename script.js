// Existing code for link click event
document.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the link from being followed
    alert('You clicked a link!');
});

// New code for scroll event
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.project');
    elements.forEach((el) => {
        const position = el.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        } else {
            el.style.opacity = 0;
            el.style.transform = 'translateY(20px)';
        }
    });
});
