document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('formulario');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que o formulário seja enviado da maneira padrão
        
        // Verifica se todos os campos obrigatórios estão preenchidos
        if (validateForm()) {
            // Limpa os campos após o envio bem-sucedido
            clearFields();
            
            // Cria o elemento do pop-up de sucesso
            var successPopup = createPopup('O seu formulário foi preenchido com sucesso!');
            document.body.appendChild(successPopup);
        } else {
            // Adiciona destaque aos campos não preenchidos e exibe a mensagem de erro
            highlightEmptyFields();
        }
    });
    
    // Restringe o input de contato telefônico para permitir apenas números
    var phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(event) {
            this.value = this.value.replace(/\D/g, ''); // Remove todos os caracteres que não são dígitos
        });
    }
});

// Função para limpar os campos do formulário
function clearFields() {
    document.getElementById('email').value = '';
    document.getElementById('company').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('subject').value = '';
}

// Função para validar se todos os campos obrigatórios estão preenchidos
function validateForm() {
    var email = document.getElementById('email').value;
    var company = document.getElementById('company').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    
    // Retorna verdadeiro se todos os campos estiverem preenchidos
    return email !== '' && company !== '' && phone !== '' && subject !== '';
}

// Função para criar o elemento do pop-up com o botão "Voltar"
function createPopup(message) {
    var popup = document.createElement('div');
    popup.className = 'popup';
    
    // Adiciona a mensagem ao popup
    var messageDiv = document.createElement('div');
    messageDiv.innerHTML = message;
    popup.appendChild(messageDiv);
    
    // Define os estilos do popup
    popup.style.cssText = 'position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-color: white; color: black; padding: 30px; border-radius: 15px; text-align: center; z-index: 9999; width: 400px; height: auto; font-size: 18px;';
    
    // Adiciona uma quebra de linha entre a mensagem e o botão "Voltar"
    var lineBreak = document.createElement('br');
    popup.appendChild(lineBreak);
    
    // Adiciona o botão "Voltar" ao popup
    var backButton = document.createElement('button');
    backButton.textContent = 'Voltar';
    backButton.style.marginTop = '20px'; // Adiciona um espaço acima do botão
    backButton.addEventListener('click', function() {
        document.body.removeChild(popup); // Remove o popup da tela ao clicar no botão
    });
    popup.appendChild(backButton);
    
    return popup;
}

// Função para adicionar destaque aos campos não preenchidos e exibir a mensagem de erro
function highlightEmptyFields() {
    var fields = document.querySelectorAll('input[required], textarea[required]');
    var emptyFields = [];
    
    fields.forEach(function(field) {
        if (field.value === '') {
            field.style.border = '2px solid red';
            emptyFields.push(field);
        }
    });
    
    // Exibe a mensagem de erro em todos os campos vazios simultaneamente
    if (emptyFields.length > 0) {
        var errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
        var errorContainer = document.getElementById('error-container');
        
        // Remove mensagens de erro anteriores, se houver
        errorContainer.innerHTML = '';
        
        // Cria e adiciona as mensagens de erro ao container
        emptyFields.forEach(function(field) {
            var errorPopup = createPopup(errorMessage);
            errorContainer.appendChild(errorPopup);
        });
    }
}


// Função para alternar o menu dropdown
function toggleDropdown() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu.style.display === 'block') {
        dropdownMenu.style.display = 'none';
    } else {
        dropdownMenu.style.display = 'block';
    }
}