export interface PokemonsListStructure {
  count: number;
  next: string;
  previous: undefined;
  results: ResultsStructure[];
}

export interface ResultsStructure {
  name: string;
  url: string;
}

export interface PokemonDataStructure {
  name: string;
  weight: number;
  sprites: { other: { dream_world: { front_default: string } } };
  base_experience: number;
  height: number;
  id: number;
}

export interface ComponentStructure {
  domElement: Element;
  render: () => void;
  addListeners?: () => void;
}

export interface PokemonInfoStructure {
  name: string;
  weight: number;
  image: string;
  height: number;
  baseExperience: number;
  id: number;
}
