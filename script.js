function switchLanguage(lang) {
    // Esconde ambos os containers de conteúdo
    document.getElementById('content-pt').style.display = 'none';
    document.getElementById('content-en').style.display = 'none';

    // Mostra o container do idioma selecionado
    document.getElementById('content-' + lang).style.display = 'block';

    // Opcional: Altera o atributo 'lang' da tag <html> para acessibilidade
    document.documentElement.lang = (lang === 'pt') ? 'pt-BR' : 'en';
}