function dark_mode() {
    document.body.classList.toggle('dark');
    var isDarkModeEnabled = document.body.classList.contains('dark');
    localStorage.setItem('darkModeEnabled', isDarkModeEnabled); // Use localStorage for persistence
}

function applyDarkModePreference() {
    var isDarkModeStored = localStorage.getItem('darkModeEnabled'); // Check localStorage
    if (isDarkModeStored && isDarkModeStored === 'true') {
        document.body.classList.add('dark');
    }
}
applyDarkModePreference();
