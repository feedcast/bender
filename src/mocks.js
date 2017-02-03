const mocks = {
  channelList: {
    type:"template",
    payload:{
      template_type:"generic",
      elements:[
        {
          title: "Nerdcast",
          image_url: "https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg",
          subtitle: "O mundo vira piada no Jovem Nerd",
          buttons: [
            {
              type:"postback",
              title:"Listar episódios",
              payload:'recent_episodes'
            },
            {
              type: 'web_url',
              title: 'Ver no Feedcast',
              url: 'https://feedcast.com.br'
            }
          ]
        },
        {
          title: "Não Ouvo",
          image_url: "http://i.imgur.com/aEhbtxl.png",
          subtitle: "O podcast do Não Salvo!!!",
          buttons: [
            {
              type:"postback",
              title:"Listar episódios",
              payload:'recent_episodes'
            },
            {
              type: 'web_url',
              title: 'Ver no Feedcast',
              url: 'https://feedcast.com.br'
            }
          ]
        },
        {
          title: "Ultrageek",
          image_url: "http://www.redegeek.com.br/wp-content/uploads/2016/10/RG3000x3000.png",
          subtitle: "Ultrageek é um programa para apaixonados por tecnologia, curiosidades e cultura pop!",
          buttons: [
            {
              type:"postback",
              title:"Listar episódios",
              payload:'recent_episodes'
            },
            {
              type: 'web_url',
              title: 'Ver no Feedcast',
              url: 'https://feedcast.com.br'
            }
          ]
        },
        {
          title: "Melhores do Mundo",
          image_url: "http://i.imgur.com/Jrtn7F1.png",
          subtitle: "Podcast do MDM",
          buttons: [
            {
              type:"postback",
              title:"Listar episódios",
              payload:'recent_episodes'
            },
            {
              type: 'web_url',
              title: 'Ver no Feedcast',
              url: 'https://feedcast.com.br'
            }
          ]
        },
        {
          title: "SciCast",
          image_url: "http://deviante.com.br/wp-content/uploads/2016/03/scicast2_itunes_By_Deviante2.jpg  ",
          subtitle: "Porque a ciência tem que ser divertida.",
          buttons: [
            {
              type:"postback",
              title:"Listar episódios",
              payload:'recent_episodes'
            },
            {
              type: 'web_url',
              title: 'Ver no Feedcast',
              url: 'https://feedcast.com.br'
            }
          ]
        },
        {
          title: "RapaduraCast",
          image_url: "http://cinemacomrapadura.com.br/imagens/2016/11/20161124-rc-logooficial.jpg",
          subtitle: "Informação, diversão e muita opinião sobre cinema.",
          buttons: [
            {
              type:"postback",
              title:"Listar episódios",
              payload:'recent_episodes'
            },
            {
              type: 'web_url',
              title: 'Ver no Feedcast',
              url: 'https://feedcast.com.br'
            }
          ]
        },
        {
          title: "Canal42",
          image_url: "http://canal42.tv/canal42-logo.jpg  ",
          subtitle: "Podcast sobre séries da vida, universo e tudo mais.",
          buttons: [
            {
              type:"postback",
              title:"Listar episódios",
              payload:'recent_episodes'
            },
            {
              type: 'web_url',
              title: 'Ver no Feedcast',
              url: 'https://feedcast.com.br'
            }
          ]
        },
        {
          title: "O Melhor Podcast do Brasil",
          image_url: "http://i1.sndcdn.com/avatars-000215258383-17qpad-original.jpg",
          subtitle: "Notícias irrelevantes, comentários impertinentes, assiduidade imprevisível e uma edição que fará você se perguntar se eu tenho problemas auditivos e/ou de coordenação motora: seja bem vindo ao MELHOR PODCAST DO BRASIL. Atualizado todo domingo, exceto quando não for.",
          buttons: [
            {
              type:"postback",
              title:"Listar episódios",
              payload:'recent_episodes'
            },
            {
              type: 'web_url',
              title: 'Ver no Feedcast',
              url: 'https://feedcast.com.br'
            }
          ]
        },
        {
          title: "Canaltech",
          image_url: "http://i.imgur.com/N7BUspP.jpg",
          subtitle: "O Canaltech Podcast é o seu diário de tecnologia. Em poucos minutos, fique por dentro das principais notícias desse universo: mercado de TI, jogos, curiosidades, dicas e comentários sobre tudo aquilo que as pessoas conectadas precisam saber.",
          buttons: [
            {
              type:"postback",
              title:"Listar episódios",
              payload:'recent_episodes'
            },
            {
              type: 'web_url',
              title: 'Ver no Feedcast',
              url: 'https://feedcast.com.br'
            }
          ]
        },
        {
          title: "Quer ver mais canais?",
          image_url: "http://i.imgur.com/piYDKkg.jpg",
          buttons: [
            {
              type:"postback",
              title:"Carregar Mais",
              payload:'channels_list/2'
            }
          ]
        }
      ]
    }
  },


  recentEpisodesList: {
    type:"template",
    payload:{
      template_type:"generic",
      elements:[
        {
          title: "Novo golpe na Netflix, imagens do LG G6, Redmi Pro 2 e + [CTNews]",
          image_url: "http://i.imgur.com/N7BUspP.jpg",
          subtitle: "O Canaltech Podcast é o seu diário de tecnologia. Em poucos minutos, fique por dentro das principais notícias desse universo: mercado de TI, jogos, curiosidades, dicas e comentários sobre tudo aquilo que as pessoas conectadas precisam saber.",
          buttons: [
            {
              type: 'web_url',
              title: 'Ouvir no Feedcast',
              url: 'https://feedcast.com.br'
            }
          ]
        },
        {
          title: "Zenfone 3s Max, Galaxy Tab S3, Viber a favor dos imigrantes e + [CTNews]",
          image_url: "http://i.imgur.com/N7BUspP.jpg",
          subtitle: "O Canaltech Podcast é o seu diário de tecnologia. Em poucos minutos, fique por dentro das principais notícias desse universo: mercado de TI, jogos, curiosidades, dicas e comentários sobre tudo aquilo que as pessoas conectadas precisam saber.",
          buttons: [
            {
              type: 'web_url',
              title: 'Ouvir no Feedcast',
              url: 'https://feedcast.com.br'
            }
          ]
        },
        {
          title: "Preço e specs do Moto G5 e G5 Plus, Blackberry Mercury e Galaxy S8 [CTNews]",
          image_url: "http://i.imgur.com/N7BUspP.jpg",
          subtitle: "O Canaltech Podcast é o seu diário de tecnologia. Em poucos minutos, fique por dentro das principais notícias desse universo: mercado de TI, jogos, curiosidades, dicas e comentários sobre tudo aquilo que as pessoas conectadas precisam saber.",
          buttons: [
            {
              type: 'web_url',
              title: 'Ouvir no Feedcast',
              url: 'https://feedcast.com.br'
            }
          ]
        }
      ]
    }
  }
}

module.exports = mocks



