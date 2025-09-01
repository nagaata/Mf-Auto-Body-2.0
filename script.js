  // Menu Mobile
        const mobileMenu = document.getElementById('mobileMenu');
        const menu = document.getElementById('menu');
        
        mobileMenu.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                if (menu.classList.contains('show')) {
                    menu.classList.remove('show');
                }
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

          // ======================
    // 1. Modal Galeria
    // ======================
    const modal = document.querySelector(".modal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close-button");

    document.querySelectorAll(".gallery-item img").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // ======================
    // 2. Botão Voltar ao Topo
    // ======================
    const backToTop = document.createElement("button");
    backToTop.innerHTML = "⬆";
    backToTop.id = "backToTop";
    document.body.appendChild(backToTop);

    backToTop.style.position = "fixed";
    backToTop.style.bottom = "20px";
    backToTop.style.right = "20px";
    backToTop.style.padding = "10px 15px";
    backToTop.style.fontSize = "18px";
    backToTop.style.background = "var(--secondary)";
    backToTop.style.color = "#fff";
    backToTop.style.border = "none";
    backToTop.style.borderRadius = "50%";
    backToTop.style.cursor = "pointer";
    backToTop.style.display = "none";
    backToTop.style.zIndex = "1000";

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ======================
    // 3. Confirmação Formulário
    // ======================
    const form = document.querySelector(".contact-form form");
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // evita envio real
        alert("✅ Your request has been sent successfully! We will contact you shortly.");
        form.reset();





// ----------------------
// Modal da Galeria com Transição
// ----------------------

// Seleciona elementos principais
const modal = document.querySelector(".modal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close-button");
const galleryItems = document.querySelectorAll(".gallery-item img");

// Verifica se os elementos existem antes de usar
if (modal && modalImg && captionText && closeBtn && galleryItems.length > 0) {

    // Abre modal ao clicar em uma imagem da galeria
    galleryItems.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "block";
            modalImg.src = img.src;
            captionText.textContent = img.alt || "Imagem";

            // Pequeno delay para permitir a transição
            requestAnimationFrame(() => {
                modalImg.classList.add("show");
            });
        });
    });

    // Fecha modal ao clicar no botão de fechar
    closeBtn.addEventListener("click", () => {
        modalImg.classList.remove("show");

        // Aguarda fim da animação antes de esconder
        setTimeout(() => {
            modal.style.display = "none";
            modalImg.src = "";
            captionText.textContent = "";
        }, 300);
    });

    // Também fecha o modal se clicar fora da imagem
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeBtn.click();
        }
    });

} else {
    console.warn("⚠️ Elementos do modal não encontrados no HTML.");
}




    });

    

