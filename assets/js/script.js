'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Sidebar Toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const mobileOverlay = document.getElementById('mobileOverlay');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        mobileOverlay.classList.toggle('active');

        // Change icon based on state
        const icon = menuToggle.querySelector('i');
        if (sidebar.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close sidebar when clicking on overlay
    mobileOverlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        mobileOverlay.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});