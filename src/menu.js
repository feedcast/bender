const menu = [
    {
        type: 'postback',
        title: 'Pesquisar Canais',
        payload: '/search'
    },
    {
        type: 'postback',
        title: 'Voltar para o início',
        payload: '/restart'
    },
    {
        type: 'web_url',
        title: 'Ir para o site',
        url: 'https://feedcast.com.br'
    }
]

module.exports = menu