// Accessing the link to highlight bold words
const linkToHighlight = document.getElementById('highlightLink');

// When mouse enters over the link , then we will add highlight class to bold words to highlight them.
linkToHighlight.addEventListener('mouseover', () => {
    const boldWords = document.getElementsByTagName('strong');
    for (let i = 0; i < boldWords.length; i++) {
        boldWords[i].classList.add('highlight');
    }
});

// When mouse exits from the link , then we will remove tbe highlight class from bold words to unhighlight them again.
linkToHighlight.addEventListener('mouseout', () => {
    const boldWords = document.getElementsByTagName('strong');
    for (let i = 0; i < boldWords.length; i++) {
        boldWords[i].classList.remove('highlight');
    }
});