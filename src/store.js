const store = {
  cards: [
    {
      title: "Agendas y bullet journals",
      body: "Para días más productivos",
      image: "https://res.cloudinary.com/adonai-luque/image/upload/v1620735058/react-ui-codeable-w16/img01.png",
      date: "2021-01-18",
    },

    {
      title: "Gafas de sol",
      body: "Un accesorio que no puede faltar en tu look",
      image: "https://res.cloudinary.com/adonai-luque/image/upload/v1620735057/react-ui-codeable-w16/img02.png",
      date: "2021-01-18",
      big: true,
    },

    {
      title: "Para IOS",
      body: "Intereses, el nuevo Widget de Pinterest",
      image: "https://res.cloudinary.com/adonai-luque/image/upload/v1620735057/react-ui-codeable-w16/img03.png",
      date: "2021-01-18",
    },

    {
      title: "Estilo colonial y moderno",
      body: "Un viaje por la arquitectura mexicana",
      image: "https://res.cloudinary.com/adonai-luque/image/upload/v1620735061/react-ui-codeable-w16/img04.png",
      date: "2021-01-17",
    },

    {
      title: "Ideas para decorar",
      body: "Espejos con mucho estilo para tu casa",
      image: "https://res.cloudinary.com/adonai-luque/image/upload/v1620735057/react-ui-codeable-w16/img05.png",
      date: "2021-01-17",
    },

    {
      title: "Inteligencia Artificial",
      body: "Cómo utilizarla para un mundo mejor",
      image: "https://res.cloudinary.com/adonai-luque/image/upload/v1620735057/react-ui-codeable-w16/img06.png",
      date: "2021-01-17",
    },

    {
      title: "Agendas y bullet journals",
      body: "Para días más productivos",
      image: "https://res.cloudinary.com/adonai-luque/image/upload/v1620735058/react-ui-codeable-w16/img07.png",
      date: "2021-01-17",
    },
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

export { store };
