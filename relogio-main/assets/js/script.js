function updateClock() {
    const now = new Date();
    
    // Obtém a hora e minutos
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    // Atualiza o horário no elemento com ID "clock"
    document.getElementById('clock').innerHTML = `${hours}<span class="colon">:</span>${minutes}`;

    // Define o formato da data: dia da semana, dia e mês
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const formattedDate = now.toLocaleDateString('pt-BR', options);

    // Atualiza a data no elemento com a classe "date"
    document.querySelector('.date').textContent = formattedDate;
}

// Atualiza o relógio imediatamente e depois a cada minuto
updateClock();
setInterval(updateClock, 60000);
