const mockData = {
  groups: [
    { id: 1, title: "All meals" },
    { id: 2, title: "Kids Fav" },
    { id: 3, title: "Family meals" },
    { id: 4, title: "Adults meals" },
  ],
  recipes: [
    {
      id: 1,
      name: "Chili con carne",
      addInfo: "Rice+Garlic bread",
      group: [1, 3],
    },
    {
      id: 2,
      name: "Massaman Curry",
      addInfo: "Beef+Rice",
      group: [1, 4],
    },
    {
      id: 3,
      name: "Chicken Fajitas",
      addInfo: "Veg+Wraps",
      group: [1, 3],
    },
    {
      id: 4,
      name: "Pasta Bolognese",
      addInfo: "Pasta",
      group: [1, 3, 2],
    },
    {
      id: 5,
      name: "Pesto Chicken Pasta",
      addInfo: "Pasta",
      group: [1, 2],
    },
  ],
  dateRecords: [
    {
      id: "1",
      date: "05-02-2024",
      meals: [
        {
          id: 232,
          name: "Chili con carne",
          addInfo: "rice",
          label: "kids lunch",
        },
        { id: 3638, name: "Going out", addInfo: "", label: "lunch" },
      ],
    },
  ],
};

export default mockData;
