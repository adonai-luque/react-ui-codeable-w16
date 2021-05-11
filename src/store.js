const store = {
  cards: [
    {
      title: "Agendas y bullet journals",
      body: "Para días más productivos",
      image:
        "https://res.cloudinary.com/dtrjltklc/image/upload/v1613756797/image_7_jruhhl.png",
      date: "2021-01-18",
    },

    {
      title: "Gafas de sol",
      body: "Un accesorio que no puede faltar en tu look",
      image:
        "https://res.cloudinary.com/dtrjltklc/image/upload/v1613756788/image_1_tkuz4l.png",
      date: "2021-01-18",
      big: true,
    },

    {
      title: "Para IOS",
      body: "Intereses, el nuevo Widget de Pinterest",
      image:
        "https://res.cloudinary.com/dtrjltklc/image/upload/v1613756747/image_2_pfagi6.png",
      date: "2021-01-18",
    },

    {
      title: "Estilo colonial y moderno",
      body: "Un viaje por la arquitectura mexicana",
      image:
        "https://res.cloudinary.com/dtrjltklc/image/upload/v1613756765/image_3_kjmv39.png",
      date: "2021-01-17",
    },

    {
      title: "Ideas para decorar",
      body: "Espejos con mucho estilo para tu casa",
      image:
        "https://res.cloudinary.com/dtrjltklc/image/upload/v1613756777/image_4_ptvg8j.png",
      date: "2021-01-17",
    },

    {
      title: "Inteligencia Artificial",
      body: "Cómo utilizarla para un mundo mejor",
      image:
        "https://res.cloudinary.com/dtrjltklc/image/upload/v1613756756/image_5_qd1fzg.png",
      date: "2021-01-17",
    },

    {
      title: "Agendas y bullet journals",
      body: "Para días más productivos",
      image:
        "https://res.cloudinary.com/dtrjltklc/image/upload/v1613756782/image_8_t4xeqy.png",
      date: "2021-01-17",
    },
  ],

  months: [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "setiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ],
};

// let datesMap = {};
// let dates = store.cards
//   .map((card) => card.date)
//   .filter((date) => (datesMap[date] ? false : (datesMap[date] = true)))
//   .sort((a, b) => (a > b ? -1 : 1));

// let dates = store.cards
//   .reduce((uniqDates, card) => {
//     if (datesMap[card.date] === undefined) {
//       uniqDates.push(card.date)
//       datesMap[card.date] = true
//     }
//     return uniqDates
//   }, [])
//   .sort((a, b) => (a > b ? -1 : 1));
