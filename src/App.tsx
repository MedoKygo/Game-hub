import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./component/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery{
  genre:Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameqQuery, setGameQuery] = useState<GameQuery>({} as GameQuery) 
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList selectedGenre={gameqQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameqQuery, genre})}/>
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector selectedPlatform={gameqQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameqQuery, platform})}/>
        <GameGrid GameQuery={gameqQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
