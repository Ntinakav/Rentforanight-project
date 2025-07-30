function toggleButtonHandler() {

    let toggleMenu = document.querySelector('.toggle-menu');
    let slider = document.querySelector('.slider');
    let main = document.querySelector ('.main');
    let footer = document.querySelector ('.footer'); 
    let toggleMenuDisplayStatus = window.getComputedStyle(toggleMenu).getPropertyValue('display'); 

    if (toggleMenuDisplayStatus == "none") {
        toggleMenu.style.display = "block"; 
        slider.style.display = "none";
        main.style.display = "none";
        footer.style.display = "none";
    } else {
        toggleMenu.style.display = "none"; 
        slider.style.display = "block";
        main.style.display = "block";
        footer.style.display = "flex";
    }

/* ΕΧΕΙΣ ΚΑΝΕΙ ΣΤΟ ΑΡΧΕΙΟ .css ΝΑ ΕΜΦΑΝΙΖΕΤΑΙ ΤΟ ΜΕΝΟΥ ΓΙΑ ΟΘΟΝΕΣ ΜΙΚΡΟΤΕΡΕΣ ΑΠΟ 992px. ΟΜΩΣ, ΑΝ ΕΙΣΑΙ ΣΕ ΜΙΚΡΗ ΟΘΟΝΗ ΚΑΙ ΠΑΤΗΣΕΙΣ ΤΟ toggle-button ΚΑΙ ΜΕΤΑ ΞΑΝΑΚΑΝΕΙΣ ΜΕΓΙΣΤΟΠΟΙΗΣΗ, ΕΠΑΝΕΡΧΕΤΑΙ ΤΟ ΑΡΧΙΚΟ ΜΕΝΟΥ ΓΙΑ ΜΕΓΑΛΗ ΟΘΟΝΗ, ΑΛΛΑ ΕΧΕΙ ΜΕΙΝΕΙ ΤΟ block ΑΠΟ ΤΟ TOGGLE MENU.
ΓΙΑ ΝΑ ΤΟ ΔΙΟΡΘΩΣΕΙΣ ΑΥΤΟ, ΠΡΕΠΕΙ ΝΑ ΒΑΛΕΙΣ EVENT LISTENER resize, ΟΠΟΥ ΟΠΟΤΕ ΑΛΛΑΖΕΙΣ ΜΕΓΕΘΟΣ ΣΤΗ ΣΕΛΙΔΑ ΘΑ ΑΚΟΥΕΙ, ΚΑΙ ΑΝ Η ΣΕΛΙΔΑ ΕΙΝΑΙ ΠΑΝΩ ΑΠΟ 992px, ΘΑ ΕΠΑΝΑΦΕΡΕΙ ΤΟ toggle-menu σε display none.
ΔΕΝ ΤΟ ΚΑΝΕΙ ΑΥΤΟΜΑΤΑ.
 */

    window.addEventListener("resize", () => {
        if (window.innerWidth > 992) {
            toggleMenu.style.display = "none"; 
            slider.style.display = "block";
            main.style.display = "block";
            footer.style.display = "flex";
        }
    });
}