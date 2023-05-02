import genre from '../data/genre'
export interface Genre {
    id: number;
    name: string;
    image_backgournd: string;
}

const useGenres = () => ({ data:genre, isLoading: false, error: null })

export default useGenres;