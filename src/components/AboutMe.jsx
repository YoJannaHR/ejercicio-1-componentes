import React from "react";

const AboutMe = () => {
      const me = {
    name: "Daniela Hernandez",
    movie: "La  Decisión de Anne",
    music: "Música Favorita:latina,clásico, Pop, romántica",
  };
  return (
    <div className="card bg_verde">
      <h1>Sobre Mi</h1>
      <ul>
        <li>Nombre: {me.name}</li>
        <li>Película Favorita: {me.movie}</li>
        <li>Música Favorita: {me.music}</li>
      </ul>
    </div>
  );
};

export default AboutMe;
