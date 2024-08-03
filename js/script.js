document.addEventListener('DOMContentLoaded', function() {
    const sections = ['header', 'hero', 'features', 'about', 'approach', 'case-studies', 'career', 'contact', 'footer'];
    
    sections.forEach(section => {
        fetch(`${section}.html`)
            .then(response => response.text())
            .then(data => {
                document.getElementById(section).innerHTML = data;
            });
    });
});

function submitForm() {
    alert('Thank you for your submission! We will contact you soon.');
}