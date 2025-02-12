document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");

    function showSection(id) {
        sections.forEach(section => {
            section.classList.remove("active");
        });
        document.getElementById(id).classList.add("active");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute("href").substring(1);
            showSection(sectionId);

            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });

    showSection("informacion-personal");  // Mostrar "Sobre mí" al inicio
});

const toggleTheme = document.getElementById("toggle-theme");

const iconos = document.querySelectorAll(".navbar-icon");

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");

    iconos.forEach(icon => {
        if (document.body.classList.contains("modo-oscuro")) {
            icon.src = icon.src.replace("-oscuro.png", "-claro.png");
        } else {
            icon.src = icon.src.replace("-claro.png", "-oscuro.png");
        }
    });
});

function copiarAlPortapapeles(texto) {
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles: " + texto);
    }).catch(err => {
        alert("Error al copiar al portapapeles: " + err);
    });
}