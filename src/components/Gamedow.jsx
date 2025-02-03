import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Gamedow() {
  const games = useSelector((state) => state.game.gamelist);
  const params = useParams();
  const game = games.filter((el) => el.name == params.name)[0];

  return (
    <div className="flex justify-center mt-16">
      <div className="flex flex-col w-1/4 text-center  items-center">
        <img src={game.posterurl} />
        <p className="text-white mt-24">{game.description}</p>
        <a href={game.link}>{game.links}</a>
        <a href={game.link2}>{game.link2}</a>
        <a href={game.fix}>{game.fixs}</a>

      </div>
    </div>
  );
}

export default Gamedow;
