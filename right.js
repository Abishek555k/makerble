document.addEventListener('DOMContentLoaded', function () {
    const showAllBtn = document.getElementById('showAllBtn');
    const extraData = document.querySelector('.extra-data');
    let isVisible = false;

    showAllBtn.addEventListener('click', function (e) {
        e.preventDefault();
        if (isVisible) {
            extraData.classList.add('hidden');
            showAllBtn.textContent = 'Show All';
        } else {
            extraData.classList.remove('hidden');
            showAllBtn.textContent = 'Show Less';
        }
        isVisible = !isVisible;
    });
});