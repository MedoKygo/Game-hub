import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./component/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./component/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: String;
  searchText: string;
}

function App() {
  const [gameqQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameqQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameqQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameqQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2}>
          <Box marginRight={5}>
            <PlatformSelector
              selectedPlatform={gameqQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameqQuery, platform })
              }
            />
          </Box>
          <SortSelector
            sortOrder={gameqQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameqQuery, sortOrder })
            }
          />
        </Flex>
        <GameGrid GameQuery={gameqQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
