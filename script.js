// Get the form element
const form = document.querySelector('.formobj');

// Função para mostrar o alerta customizado
function showCustomAlert(title, message, isError = false) {
    const popup = document.createElement('div');
    popup.className = 'success-popup';
    popup.innerHTML = `
        <div class="popup-content ${isError ? 'error' : ''}">
            <h3>${title}</h3>
            <p>${message}</p>
            <button onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
    `;
    
    // Adicionar estilos se ainda não existirem
    if (!document.querySelector('#popup-styles')) {
        const style = document.createElement('style');
        style.id = 'popup-styles';
        style.textContent = `
            .success-popup {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            }
            
            .popup-content {
                background-color: white;
                padding: 20px;
                border-radius: 5px;
                text-align: center;
                max-width: 400px;
                width: 90%;
            }
            
            .popup-content.error {
                border-top: 4px solid #ff4444;
            }
            
            .popup-content button {
                background-color: #2F38A6;
                color: white;
                padding: 10px 20px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                margin-top: 10px;
            }
            
            .popup-content.error button {
                background-color: #ff4444;
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(popup);
}

// Add submit event listener to the form
form.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const inputs = form.querySelectorAll('input');
    const name = inputs[0].value;
    const email = inputs[1].value;
    const message = inputs[2].value;
    
    if (!name || !email || !message) {
        showCustomAlert('MKJR', 'Por favor, preencha todos os campos!', true);
        return;
    }
    
    // Get submit button
    const submitButton = form.querySelector('button');
    const originalButtonText = submitButton.innerHTML;
    
    // Disable button and show loading
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="loading"></span>Enviando...';
    
    // Simulate API call
    try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Show success message
        showCustomAlert('MKJR', 'Obrigado pelo seu contato. Retornaremos em breve!', false);
        
        // Reset form
        form.reset();
    } catch (error) {
        showCustomAlert('MKJR', 'Erro ao enviar mensagem. Tente novamente.', true);
    } finally {
        // Restore button state
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
    }
}); 