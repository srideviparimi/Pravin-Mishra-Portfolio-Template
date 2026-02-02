document.addEventListener("DOMContentLoaded", () => {
    const deploySpan = document.getElementById('deployDate');
    
    const options = { 
        day: '2-digit', 
        month: 'short', 
        year: 'numeric' 
    };

    // 'en-GB' ensures the DD Mon YYYY order
    const today = new Date().toLocaleDateString('en-GB', options);
    
    if (deploySpan) {
        // This will output: 01 Feb 2026
        deploySpan.textContent = today;
    }
});