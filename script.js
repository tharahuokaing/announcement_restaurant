// Language Switcher Logic
function switchLang(lang) {
    // 1. Remove active classes from all buttons and content
    document.getElementById('btn-km').classList.remove('active');
    document.getElementById('btn-en').classList.remove('active');
    
    document.getElementById('content-km').classList.remove('active');
    document.getElementById('content-en').classList.remove('active');

    // 2. Add active class to the selected language targets
    document.getElementById(`btn-${lang}`).classList.add('active');
    document.getElementById(`content-${lang}`).classList.add('active');
}

// Ensure Khmer is loaded by default upon script execution
document.addEventListener('DOMContentLoaded', () => {
    switchLang('km');
});
