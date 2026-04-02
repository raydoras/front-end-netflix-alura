const defaultYoutube = "https://www.youtube.com/watch?v=GV3HUDMQ-F8";

const rawCategories = [
  {
    title: "Continuar assistindo",
    items: [
      {
        img: "https://www.comboinfinito.com.br/principal/wp-content/uploads/2016/10/cacadores-de-trolls-guillermo-del-toro.jpg",
        progress: 45,
        continue: true,
        youtube: [
          "https://www.youtube.com/watch?v=GV3HUDMQ-F8",
          "https://www.youtube.com/watch?v=QWABAs-Qahs"
        ]
      },
      {
        img: "https://uploads.tracklist.com.br/file/uploads-tracklist-com-br/2021/09/brooklyn-99-andy-samberg.jpg",
        progress: 58,
        continue: true,
        youtube: [
          "https://www.youtube.com/watch?v=GV3HUDMQ-F8",
          "https://www.youtube.com/watch?v=ourfSzoC7pA"
        ]
      },
      {
        img: "https://recreio.com.br/wp-content/uploads/2024/02/avatar-a-lenda-de-aang_capa-1.jpg",
        progress: 27,
        continue: true,
        youtube: [
          "https://www.youtube.com/watch?v=GV3HUDMQ-F8",
          "https://www.youtube.com/watch?v=FMbENDknKi4"
        ]
      }
    ]
  },
  {
    title: "Séries",
    items: [
      { img: "https://cinemacao.com/wp-content/uploads/2020/07/warrior-nun-netflix-cast-2-scaled-1-1130x570.jpg", top10: true, badge: "Nova temporada", badgeColor: "red" },
      { img: "https://t.ctcdn.com.br/4ghenKLUnMjpTe5WECMEwsAll-M=/1024x576/smart/i354756.png", top10: true },
      { img: "https://assets.b9.com.br/wp-content/uploads/2019/01/twd-896-d1-big_qgd6-1280x720.jpg", badge: "Novo episódio", badgeColor: "red" },
      { img: "https://s2-techtudo.glbimg.com/rG4c9aF3sQwAz5lsEgxOTU25Umc=/0x0:1200x700/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/n/q/7iGveERASUP3oeBinhbw/poster-titas-quarta-temporada-reproducao-netflix.jpg", badge: "Novidade", badgeColor: "red" }
    ]
  },
  {
    title: "Filmes infantis",
    items: [
      { img: "https://img.observatoriodatv.com.br/wp-content/uploads/2020/05/gente-grande-2.jpg", top10: true },
      { img: "https://assets.bileto.sympla.com.br/eventmanager/production/f22nqvc8h3fbui0kb8h35ko003srb6rm12629i10gk7qpff4mbmrncv4puuc17idb5p5f4uu13vi8o46adi8r631fceq8tb89qfhnt.webp", top10: true, badge: "Novidade", badgeColor: "red" },
      { img: "https://ogimg.infoglobo.com.br/in/25024797-3d1-e8d/FT1086A/shrek.jpg", top10: true, badge: "Novo episódio", badgeColor: "red" },
      { img: "https://megakidsv2.cdn.magazord.com.br/img/2024/02/blog/8516/1/postagem-full/como-treinar-seu-draao.jpg", top10: true, badge: "Novo episódio", badgeColor: "red" }
    ]
  }
];

// aplica o defaultYoutube só nas categorias que não têm múltiplos links
export const categories = rawCategories.map(category => {
  if (category.title === "Continuar assistindo") {
    return category; // mantém como está
  }
  return {
    ...category,
    items: category.items.map(item => ({
      ...item,
      youtube: item.youtube || [defaultYoutube] // sempre array
    }))
  };
});

