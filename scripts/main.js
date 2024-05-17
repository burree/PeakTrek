mapboxgl.accessToken =
        "pk.eyJ1IjoiYnVycmUxIiwiYSI6ImNsdzdzOWZsOTI2cW4yanBoc3JhdWEzN2QifQ.5zMZlG8-PrUrJ97sYgyX0A";
      const monument = [18.062978, 59.439965];
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/light-v11",
        center: monument,
        zoom: 15,
      });

      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        "Åva gymnasium"
      );

      const el = document.createElement("div");
      el.id = "marker";

      
      new mapboxgl.Marker(el)
        .setLngLat(monument)
        .setPopup(popup) 
        .addTo(map);