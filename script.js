// Get the form element
const form = document.querySelector('.formobj');

// Add submit event listener to the form
form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get form input values
    const inputs = form.querySelectorAll('input');
    const name = inputs[0].value;
    const email = inputs[1].value;
    const message = inputs[2].value;
    
    // Basic validation
    if (!name || !email || !message) {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    // Create and show the success popup
    const popup = document.createElement('div');
    popup.className = 'success-popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h3>Mensagem Enviada!</h3>
            <p>Obrigado pelo seu contato. Retornaremos em breve!</p>
            <button onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
    `;
    
    // Add popup styles
    const style = document.createElement('style');
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
        
        .popup-content button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 10px;
        }
        
        .popup-content button:hover {
            background-color: #45a049;
        }
    `;
    
    // Add the style and popup to the document
    document.head.appendChild(style);
    document.body.appendChild(popup);
    
    // Reset form
    form.reset();
}); 