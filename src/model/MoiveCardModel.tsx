export interface MovieCA {
    Search:       SearchCA[];
    totalResults: string;
    Response:     string;
}

export interface SearchCA {
    Title:  string;
    Year:   string;
    imdbID: string;
    Type:   string;
    Poster: string;
}
