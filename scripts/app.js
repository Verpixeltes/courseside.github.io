function createObserver(className, showClass, reverseClass) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(showClass);
            } else {
                entry.target.classList.remove(showClass);
            }
        });
    }, { threshold: 0.5 });

    const elements = document.querySelectorAll(className);
    elements.forEach((element) => {
        observer.observe(element);
    });
}

createObserver(".logo", "logo_show", "hidden_logos_reverse");
createObserver(".like_counter", ".like_counter_show", "hidden_logos_reverse");
createObserver(".area","area_show","hidden_logos_reverse");