export const scrollToSection = (sectionId: string, offset = 0) => {
    const element = document.getElementById(sectionId);
    const navbar = document.querySelector(".navbar");
    if (element && navbar) {
        const navbarHeight = navbar.getBoundingClientRect().height;
        const y = element.getBoundingClientRect().top + window.scrollY - navbarHeight - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
    }
};