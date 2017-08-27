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
  { title:'NerdCast 552 - Novas teorias e conspirações', image_url:'https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg', link:'https://feedcast.io/nerdcast/nerdcast-552-novas-teorias-e-conspiracoes'},
  { title:'Mergulho Diário 03/02/17 - Mt 8:23-27', image_url:'http://i1.sndcdn.com/avatars-000287133751-m0lkgn-original.jpg', link:'https://feedcast.io/igreja-rio/mergulho-diario-03-barra-02-barra-17-mt-8-23-27'},
  { title:'Interview with Lauren Cutrell (part 1)', image_url:'https://media.simplecast.com/podcast/image/363/1471485029-artwork.jpg', link:'https://feedcast.io/developer-tea/interview-with-lauren-cutrell-part-1'},
  { title:'NerdCast 550 - O Melhor de 550 Nerdcasts!', image_url:'https://jovemnerd.com.br/wp-content/themes/jovemnerd/assets/images/nc-feed.jpg', link:'https://feedcast.io/nerdcast/nerdcast-550-o-melhor-de-550-nerdcasts?time=17'}
];

const listCategories = [
  {title: 'Radio', url: 'radio', image_url: 'http://electronicdesign.com/site-files/electronicdesign.com/files/uploads/2016/02/Radio.jpg',  id:'1'},
  {title: 'Ciência', url: 'ciencia', image_url: 'https://cdn.pixabay.com/photo/2012/04/12/20/05/atom-30442_960_720.png', id:'2'},
  {title: 'Notícias', url: 'noticias ', image_url: 'http://1.bp.blogspot.com/-yXJCbnx4XYA/Ui7dcoFXJtI/AAAAAAAAKtc/5-3yzdR3wV0/s1600/2.png', id:'3'},
  {title: 'Viagens', url: 'viagens', image_url: 'https://s3-sa-east-1.amazonaws.com/chicosabetudo/images/8101c2da-613f-4b82-9282-17e80fe6c9cd.jpg', id:'4'},
  {title: 'Bebidas', url: 'bebidas', image_url: 'http://www.lcbolonha.com.br/wp-content/uploads/sucos2.png', id:'5'},
  {title: 'Musica', url: 'musica', image_url: 'https://startupi.com.br/wp-content/uploads/2016/10/musica-870x250.jpg', id:'6'},
  {title: 'Humor', url: 'humor', image_url: 'http://tudoplus.com/wp-content/uploads/2016/01/mal-humor-en-las-parejas-240x248-11.jpg', id:'7'},
  {title: 'Tecnologia', url: 'tecnologia', image_url: 'http://idocode.com.br/blog/wp-content/uploads/2016/10/tecnologia-futuro-y-nuevos-empleos-880.jpg', id:'8'}
];

const ontologyChanel = [
  { feedcast_url:'cafe-brasil-podcast', title:'Café Brasil Podcast', image_url:'http://i.imgur.com/GJlkcPM.png', id:'1', forekey: '1'},
  { feedcast_url:'pretinho-basico', title:'Pretinho Básico', image_url:'http://i1.sndcdn.com/avatars-000128044269-imdrgb-original.jpg', id:'2', forekey: '1'},
  { feedcast_url:'mundo-freak', title:'Mundo Freak', image_url:'http://www.mundofreak.com.br/wp-content/uploads/powerpress/mfc.jpg', id:'3', forekey: '2'},  
  { feedcast_url:'scicast', title:'SciCast', image_url:'http://deviante.com.br/wp-content/uploads/2016/03/scicast2_itunes_By_Deviante2.jpg', id:'4', forekey: '2'},  
  { feedcast_url:'elucidando-podcast', title:'Elucidando Podcast', image_url:'https://i1.sndcdn.com/avatars-000269441894-k5mai7-large.jpg', id:'5', forekey: '3'},  
  { feedcast_url:'balocast', title:'Balocast', image_url:'https://i1.sndcdn.com/avatars-000276428640-dg60i6-large.jpg', id:'6', forekey: '3'},
  { feedcast_url:'leandro-alemao', title:'Leandro Alemão', image_url:'https://i1.sndcdn.com/avatars-000182257746-siqtz8-large.jpg', id:'7', forekey: '4'},
  { feedcast_url:'chiclete-radioativo', title:'Chiclete Radioativo', image_url:'http://is4.mzstatic.com/image/thumb/Music62/v4/21/ea/25/21ea2587-8b0a-79b7-a4ad-6b07bba87cb7/source/170x170bb.jpg', id:'8', forekey: '4'},
  { feedcast_url:'vinho-e-arte-podcast', title:'Vinho e Arte Podcast', image_url:'https://i1.sndcdn.com/avatars-000161441285-ki1c4c-large.jpg', id:'9', forekey: '5'},
  { feedcast_url:'podbeber', title:'Podbeber', image_url:'https://i1.sndcdn.com/avatars-000095055642-kc5zws-t200x200.jpg', id:'10', forekey: '5'},
  { feedcast_url:'serginho-carnevale', title:'Serginho Carnevale', image_url:'https://i1.sndcdn.com/avatars-000155007063-yvjqq3-large.jpg', id:'11', forekey: '6'},
  { feedcast_url:'we-and-the-devil-blues', title:'We and the Devil Blues', image_url:'https://i1.sndcdn.com/avatars-000187779933-a10d53-large.jpg', id:'12', forekey: '6'},
  { feedcast_url:'melhores-do-mundo', title:'Melhores do Mundo', image_url:'http://i.imgur.com/Jrtn7F1.png', id:'13', forekey: '7'},
  { feedcast_url:'o-na-seca', title:'Só na Seca', image_url:'https://i1.sndcdn.com/avatars-000071502045-kvq9m8-large.jpg', id:'14', forekey: '7'},
  { feedcast_url:'3pm-kickoff', title:'3PM Kickoff', image_url:'https://i1.sndcdn.com/avatars-000146385855-amhec2-large.jpg', id:'15', forekey: '8'},
  { feedcast_url:'Startpo', title:'Startpo', image_url:'https://i1.sndcdn.com/avatars-000186179479-lhbhtq-large.jpg', id:'16', forekey: '8'}
]

const mocks = {
  channelList: () => {
    let c = channels.map(i => ({
      title: i.title,
      image_url: i.image_url,
      subtitle: i.description,
      buttons: [
        {
          type: 'web_url',
          title: 'Ver no Feedcast',
          url: `https://feedcast.io/${i.feedcast_url}`
        }
      ]
    }))
    c.push({
      title: "Quer ver mais canais?",
      buttons: [{
        type: 'web_url',
        title: 'Veja no Feedcast',
        url: `https://feedcast.io/`
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
        url: `https://feedcast.io/`
      }]
    })
    return {
      type:"template",
      payload:{
        template_type:"generic",
        elements: e
      }
    }
  },

  getArrayList:() => {
    return episodes;
  },

  // categoria de canal
  categoriesChannel: () => {
    let c = listCategories.map(i => ({
      title: i.title,
      image_url: i.image_url,
      buttons: [
        {
          type:"postback",
          title:"Listar canais",
          payload: `categories_show/${i.id}`
        },
        {
          type: 'web_url',
          title: 'Ver no Feedcast',
          url: `https://feedcast.io/categories/${i.url}`
        }
      ]
    }))
    c.push({
      title: "Quer ver mais categorias?",
      buttons: [{
        type: 'web_url',
        title: 'Veja no Feedcast',
        url: `https://feedcast.io/`
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

  // mostar canais selecionado
  categoriesShow: (id) => {
    let channelGroup = ontologyChanel.filter(obj => obj.forekey === id)
    let c = channelGroup.map(i => ({
      title: i.title,
      image_url: i.image_url,
      buttons: [
        {
          type: 'web_url',
          title: 'Ver no Feedcast',
          url: `https://feedcast.io/${i.feedcast_url}`
        }
      ]
    }))
    let category = listCategories.filter(item => item.id == id)[0]
    c.push({
      title: "Quer ver mais canais desta categoria?",
      buttons: [{
        type: 'web_url',
        title: 'Veja no Feedcast',
        url: `https://feedcast.io/categories/${category.url}`
      }]
    })
    return {
      type:"template",
      payload:{
        template_type:"generic",
        elements: c
      }
    }
  }

}

module.exports = mocks



