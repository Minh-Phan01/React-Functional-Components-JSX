import totodileImage from "./images/Tododile.jpg";

function Showcase() {
  const favPokemon = "Tododile";
  const pokeCharacteristics = {
    type: "Water",
    move: "Watergun"
  };
  const style1 = {
    backgroundColor: "green",
    color: "white"
  };

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={totodileImage} alt="favPokemon" />
      <h2 style={style1}>
        {favPokemon}'s type is {pokeCharacteristics.type} and one of their moves
        is {pokeCharacteristics.move}{" "}
      </h2>
    </div>
  );
}

export default Showcase;
