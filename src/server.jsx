import { createServer, Model } from "miragejs";

createServer({
  models: {
    groups: Model,
    recipes: Model,
    labels: Model,
    dateRecords: Model,
  },
  seeds(server) {
    server.create("group", { id: 1, title: "All meals" });
    server.create("group", { id: 2, title: "Kids Fav" });
    server.create("group", { id: 3, title: "Family meals" });
    server.create("group", { id: 4, title: "Adults meals" });
    server.create("recipe", {
      id: 1,
      name: "Chili con carne",
      addInfo: "Rice+Garlic bread",
      group: [1, 3],
    });
    server.create("recipe", {
      id: 2,
      name: "Massaman Curry",
      addInfo: "Beef+Rice",
      group: [1, 4],
    });
    server.create("recipe", {
      id: 3,
      name: "Chicken Fajitas",
      addInfo: "Veg+Wraps",
      group: [1, 3],
    });
    server.create("recipe", {
      id: 4,
      name: "Pasta Bolognese",
      addInfo: "Pasta",
      group: [1, 3, 2],
    });
    server.create("recipe", {
      id: 5,
      name: "Pesto Chicken Pasta",
      addInfo: "Pasta",
      group: [1, 2],
    });

    server.create("label", { id: 1, title: "Breakfast" });
    server.create("label", { id: 2, title: "Lunch" });
    server.create("label", { id: 3, title: "Dinner" });
    server.create("label", { id: 4, title: "Kids lunch" });
    server.create("label", { id: 5, title: "Kids Dinner" });
    server.create("label", { id: 6, title: "All dinner" });

    server.create("dateRecord", {
      id: "1",
      date: "02-25-2024",
      meals: [
        {
          id: 232,
          name: "Chili con carne",
          addInfo: "rice",
          label: "Kids lunch",
        },
        { id: 3638, name: "Going out", addInfo: "", label: "Lunch" },
      ],
    });
    server.create("dateRecord", {
      id: "2",
      date: "02-26-2024",
      meals: [
        {
          id: 345,
          name: "Chicken madras",
          addInfo: "rice",
          label: "All dinner",
        },
        {
          id: 32,
          name: "Cheese sandwich",
          addInfo: "veg",
          label: "Kids lunch",
        },
      ],
    });
    server.create("dateRecord", {
      id: "3",
      date: "02-28-2024",
      meals: [
        {
          id: 22,
          name: "Pizza",
          addInfo: "",
          label: "Kids lunch",
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/groups", (schema, request) => {
      return schema.groups.all();
    });

    this.get("/recipes", (schema, request) => {
      return schema.recipes.all();
    });

    this.get("/labels", (schema, request) => {
      return schema.labels.all();
    });

    this.get("/dateRecords", (schema, request) => {
      return schema.dateRecords.all();
    });

    this.post("/groups", (schema, request) => {
      let attrs = JSON.parse(request.requestBody);
      console.log(attrs);
      return schema.groups.create(attrs);
    });
  },
});
