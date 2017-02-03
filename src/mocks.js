const channels = [
  { feedcast_url:'nerdcast', title:'Nerdcast', image_url:'https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg', feed_url:'http://jovemnerd.com.br/categoria/nerdcast/feed/', description:'O mundo vira piada no Jovem Nerd', id:'1'},
  { feedcast_url:'canal42', title:'Canal42', image_url:'http://canal42.tv/canal42-logo.jpg', feed_url:'http://feeds.feedburner.com/canal42podcast?format=xml', description:'Podcast sobre séries da vida, universo e tudo mais.', id:'2'},
  { feedcast_url:'macmagazine-no-ar', title:'MacMagazine no Ar', image_url:'https://macmagazine.com.br/wp-content/uploads/2016/05/capa_podcast.png', feed_url:'http://feeds.feedburner.com/mmnoar', description:'Este é o MacMagazine no Ar, o podcast do MacMagazine — um dos maiores sites sobre o mundo Apple no Brasil e na língua portuguesa. O melhor pedaço da Maçã.', id:'3'},
  { feedcast_url:'marchwill', title:'marchwill', image_url:'http://i1.sndcdn.com/avatars-000155014792-76k32q-original.jpg', feed_url:'http://feeds.soundcloud.com/users/soundcloud:users:27370138/sounds.rss', description:'Tecnologia, Loop Infinito e outras coisas do cotidiano de @marchwill! Aqui você encontra podcasts rápidos, dinâmicos e objetivos sobre variados assuntos relacionados a tecnologia. Inscreva-se para não perder nenhum episódio!', id:'4'},
  { feedcast_url:'tecnocast', title:'Tecnocast', image_url:'http://i1.sndcdn.com/avatars-000243538958-ael1z7-original.jpg', feed_url:'http://feeds.feedburner.com/Tecnocast', description:'Tecnologia, negócios, inovação e futuro. No Tecnocast gostamos de conversar não sobre especificações técnicas, mas sobre como a tecnologia está mudando a forma como vivemos e nos relacionamos com o mundo ao nosso redor.Contato: tecnocast@tecnoblog.net', id:'5'},
  { feedcast_url:'99vidas', title:'99Vidas', image_url:'http://i.imgur.com/9cs6ncq.png', feed_url:'http://feeds.feedburner.com/99vidaspodcast', description:'Nostalgia, diversão e muita opinião sobre videogames.', id:'6'},
  { feedcast_url:'rapaduracast', title:'RapaduraCast', image_url:'http://cinemacomrapadura.com.br/imagens/2016/11/20161124-rc-logooficial.jpg', feed_url:'http://feeds.feedburner.com/rapaduracast', description:'Informação, diversão e muita opinião sobre cinema.', id:'7'},
  { feedcast_url:'braincast', title:'Braincast', image_url:'http://i1.sndcdn.com/avatars-000165274025-nkgb63-original.jpg', feed_url:'http://feeds.feedburner.com/braincastmp3', description:'O podcast do B9, que cobre a intersecção entre a criatividade, comunicação, cultura digital, inovação e negócios.', id:'8'},
  { feedcast_url:'anticast', title:'AntiCast', image_url:'http://i1.sndcdn.com/avatars-000242439656-0umewh-original.jpg', feed_url:'http://feeds.feedburner.com/anticastdesign', description:'Podcast sobre política, história, artes e qualquer outra forma de subversão. ', id:'9'}
];
const episodes = [
  { title:'NerdCast 552 - Novas teorias e conspirações', image_url:'https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg', link:'https://feedcast.com.br/nerdcast/nerdcast-552-novas-teorias-e-conspiracoes'},
  { title:'Empreendedor 25 - Resoluções e planejamento', image_url:'https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg', link:'https://feedcast.com.br/nerdcast/empreendedor-25-resolucoes-e-planejamento'},
  { title:'NerdCast 551 - Turistas babacas, na humildade', image_url:'https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg', link:'https://feedcast.com.br/nerdcast/nerdcast-551-turistas-babacas-na-humildade'},
  { title:'NerdCast 550 - O Melhor de 550 Nerdcasts!', image_url:'https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg', link:'https://feedcast.com.br/nerdcast/nerdcast-550-o-melhor-de-550-nerdcasts?time=17'}
];
const mocks = {
  channelList: () => {
    let c = channels.map(i => ({
      title: i.title,
      image_url: i.image_url,
      subtitle: i.description,
      buttons: [
        {
          type:"postback",
          title:"Listar episódios",
          payload:`episodes/${i.id}`
        },
        {
          type: 'web_url',
          title: 'Ver no Feedcast',
          url: `https://feedcast.com.br/${i.feedcast_url}`
        }
      ]
    }))
    c.push({
      title: "Quer ver mais canais?",
      buttons: [{
        type: 'web_url',
        title: 'Veja no Feedcast',
        url: `https://feedcast.com.br/`
      }]
    })
    return {
      type:"template",
      payload:{
        template_type:"generic",
        elements: c
      }
    }

  },

  recentEpisodesList: () => {
    let e = episodes.map(i => ({
      title: i.title,
      image_url: i.image_url,
      subtitle: i.description,
      buttons: [
        {
          type: 'web_url',
          title: 'Ver no Feedcast',
          url: `${i.link}`
        }
      ]
    }))
    e.push({
      title: "Quer ver mais episódios?",
      buttons: [{
        type: 'web_url',
        title: 'Veja no Feedcast',
        url: `https://feedcast.com.br/`
      }]
    })
    return {
      type:"template",
      payload:{
        template_type:"generic",
        elements: e
      }
    }
  }
}

module.exports = mocks



