const toggle = document.querySelector(".site-header__menu-toggle");
const sidebar = document.querySelector("#site-sidebar");
const overlay = document.querySelector("#site-sidebar-backdrop");

const open = () => {
    sidebar.classList.add("open");
    overlay.classList.add("open");
    sidebar.setAttribute("aria-hidden","false");
    toggle.setAttribute("aria-expanded","true");
}
const close = () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("open");
}

export const initSidebar = () => {
    toggle.addEventListener("click", () => 
        sidebar.classList.contains("open") ? close() : open(),
    );
    overlay.addEventListener("click", close);
}
