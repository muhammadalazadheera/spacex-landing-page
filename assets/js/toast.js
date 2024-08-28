function showToast() {
    const toast = document.getElementById('toast-container');
    toast.classList.remove('hide-toast');
    toast.classList.add('show-toast');
    toast.style.visibility = 'visible';

    // Automatically hide the toast after 3 seconds
    setTimeout(() => {
        hideToast();
    }, 3000);
}

function hideToast() {
    const toast = document.getElementById('toast-container');
    toast.classList.remove('show-toast');
    toast.classList.add('hide-toast');

    // Hide the element completely after the slideout animation ends
    setTimeout(() => {
        toast.style.visibility = 'hidden';
    }, 500);
}