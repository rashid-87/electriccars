import "./map.scss";

const Map = () => {
  return (
    <div className="map">
      <div className="container">
        <h3 className="map__title">Карта электрозаправок</h3>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155084.33464514!2d39.46085165742582!3d52.60228711494507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x413a148c254aa519%3A0x59f5f4f6bdea4dca!2z0JvQuNC_0LXRhtC6LCDQm9C40L_QtdGG0LrQsNGPINC-0LHQuy4sINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2skg!4v1705826860224!5m2!1sru!2skg"
        width="100%"
        height="480"
        style={{border: "0"}}
        allowfullscreen=""
        title="Карта электрозаправок"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
