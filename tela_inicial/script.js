// Interação ao tocar nos cards
function actionEffect(element) {
    // Adiciona feedback visual rápido
    element.style.borderColor = 'rgba(255, 255, 255, 0.5)';
    
    setTimeout(() => {
        element.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    }, 200);
    
    // Exemplo de ação
    console.log("Card tocado: " + element.innerText);
}

// Opcional: Feedback tátil (se o dispositivo suportar)
if (window.navigator.vibrate) {
    document.querySelectorAll('.interactive').forEach(card => {
        card.addEventListener('touchstart', () => {
            window.navigator.vibrate(10); // Vibe curta
        });
    });
}
