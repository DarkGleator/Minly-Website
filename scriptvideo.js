function loadDynamicData() {
    // Obtém os parâmetros da URL
    var projectName = getParameterByName('project');
    var personName = getParameterByName('person');
    var videoUrl = getParameterByName('video');
    var email = getParameterByName('email'); // Adiciona esta linha para obter o email

        // Divide o nome da pessoa em partes separadas por espaços
        var nameParts = personName.split(' ');

        // Obtém o primeiro e o segundo nome
        var firstName = nameParts[0];
        var lastName = nameParts.slice(1).join('_');

    // Atualiza os elementos na página com os dados obtidos
    document.getElementById('dynamic-project-info').textContent = projectName + ' por ' + personName;
    document.getElementById('dynamic-video').src = videoUrl;
    document.getElementById('dynamic-description').textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie hendrerit justo. Pellentesque suscipit cursus orci, efficitur rutrum mi condimentum et. Mauris tincidunt mi sit amet dui dapibus, ac molestie lorem condimentum."; // Mantém a descrição como estava

    // Constrói o e-mail com o ".com" após o "@"
    var emailString = firstName.toLowerCase() + lastName.toLowerCase() + '@' + 'hotmail.com';
    document.getElementById('dynamic-email').textContent = emailString; // Adiciona o e-mail ao lado do Instagram

    // Constrói o nome de usuário do Instagram com o "@" antes do primeiro nome
    var instagramUsername = '@' + firstName.toLowerCase() + '_' + lastName.toLowerCase();
    document.getElementById('dynamic-instagram').textContent = instagramUsername;

    // Aqui você pode adicionar a lógica para atualizar o link do Instagram

}

// Carrega os dados dinâmicos quando a página é carregada
window.onload = loadDynamicData;

// Função para obter parâmetros da URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
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

// Função para redirecionar para a página dinâmica com os parâmetros
function redirectToDynamicAudioPage(projectName, personName, videoUrl) {
    // Constrói a URL dinâmica com os parâmetros como consulta
    var url = 'pagina_dinamica_audio.html?' +
              'project=' + encodeURIComponent(projectName) +
              '&person=' + encodeURIComponent(personName) +
              '&video=' + encodeURIComponent(videoUrl);
    
    // Redireciona para a página dinâmica de video
    window.location.href = url;
}


