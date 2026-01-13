document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    const servicesBtn = document.getElementById('servicesBtn');
    const servicesDropdown = document.getElementById('servicesDropdown');
    
    // Открытие/закрытие мобильного меню
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        // Закрываем выпадающие меню при открытии мобильного меню
        if (servicesDropdown.classList.contains('active')) {
            servicesDropdown.classList.remove('active');
            servicesBtn.classList.remove('active');
        }
    });
    
    // Открытие/закрытие выпадающего меню УСЛУГИ
    if (servicesBtn && servicesDropdown) {
        servicesBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            servicesDropdown.classList.toggle('active');
            servicesBtn.classList.toggle('active');
        });
        
        // Закрытие выпадающего меню при клике вне его
        document.addEventListener('click', function(event) {
            if (!servicesDropdown.contains(event.target) && 
                !servicesBtn.contains(event.target) && 
                servicesDropdown.classList.contains('active')) {
                servicesDropdown.classList.remove('active');
                servicesBtn.classList.remove('active');
            }
        });
        
        // Предотвращаем закрытие при клике внутри меню
        servicesDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.nav-list a, .services-column a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Закрываем мобильное меню
            mainNav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            
            // Закрываем выпадающее меню услуг
            if (servicesDropdown && servicesDropdown.classList.contains('active')) {
                servicesDropdown.classList.remove('active');
                servicesBtn.classList.remove('active');
            }
        });
    });
    
    // Закрытие меню при клике вне его области (для мобильного меню)
    document.addEventListener('click', function(event) {
        const isClickInsideNav = mainNav.contains(event.target);
        const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnMenuBtn && mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
});

