function showSection(sectionId) {
    document.querySelectorAll('.content').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}
