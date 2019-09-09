import React, { Component } from "react";
import MarvelCards from "./components/MarvelCards";
import Wrapper from "./components/Wrapper";
import ScoreHeader from "./components/ScoreHeader";
import Title from "./components/Title";
import characters from "./characters.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters
  };

  // Renders the main template in our app
  render() {
    return (
      <Wrapper>
        <ScoreHeader></ScoreHeader>
        <Title></Title>
        {this.state.characters.map(character => (
          <MarvelCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
