function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    document.getElementById('clock').innerHTML = `${hours}<span class="text-xl font-bold text-gray-50">:</span>${minutes}`;
}

// Atualiza o relógio imediatamente e depois a cada minuto
updateClock();
setInterval(updateClock, 60000);
