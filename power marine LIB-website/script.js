document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobile Menu Toggle Setup
    const nav = document.querySelector("nav");
    const header = document.querySelector(".header .container");
    
    const menuBtn = document.createElement("button");
    menuBtn.className = "mobile-menu-btn";
    menuBtn.setAttribute("aria-label", "Toggle Navigation");
    menuBtn.innerHTML = "☰";
    menuBtn.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 28px;
        color: #17221c;
        cursor: pointer;
    `;
    
    header.appendChild(menuBtn);

    menuBtn.addEventListener("click", () => {
        if (nav.style.display === "flex") {
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";
            nav.style.flexDirection = "column";
            nav.style.position = "absolute";
            nav.style.top = "82px";
            nav.style.left = "0";
            nav.style.width = "100%";
            nav.style.background = "#ffffff";
            nav.style.padding = "20px";
            nav.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
        }
    });

    const handleResize = () => {
        if (window.innerWidth <= 900) {
            menuBtn.style.display = "block";
            nav.style.display = "none";
        } else {
            menuBtn.style.display = "none";
            nav.style.display = "flex";
            nav.style.position = "static";
            nav.style.padding = "0";
            nav.style.boxShadow = "none";
            nav.style.flexDirection = "row";
        }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // 2. Direct WhatsApp Form Submission Handling
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const inputs = form.querySelectorAll("input");
            const select = form.querySelector("select");
            const textarea = form.querySelector("textarea");

            const name = inputs[0]?.value || "Not provided";
            const company = inputs[1]?.value || "Not provided";
            const phone = inputs[2]?.value || "Not provided";
            const service = select?.value || "Not selected";
            const details = textarea?.value || "No additional details";

            const message = `Hello Power Marine Inc.,%0A%0A` +
                `*New Service Request Submission:*%0A` +
                `• *Name:* ${encodeURIComponent(name)}%0A` +
                `• *Company:* ${encodeURIComponent(company)}%0A` +
                `• *Phone/WhatsApp:* ${encodeURIComponent(phone)}%0A` +
                `• *Service Needed:* ${encodeURIComponent(service)}%0A` +
                `• *Project Details:* ${encodeURIComponent(details)}`;

            const whatsappUrl = `https://wa.me/231770202441?text=${message}`;
            window.open(whatsappUrl, "_blank");
            
            form.reset();
        });
    }
});