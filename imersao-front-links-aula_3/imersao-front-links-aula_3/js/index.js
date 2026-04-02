function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3500);
}

// Chamada no carregamento
document.addEventListener("DOMContentLoaded", () => {
    showToast("Bem-vindo ao Netflix!");
});
