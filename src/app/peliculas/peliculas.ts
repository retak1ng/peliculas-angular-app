import { GeneroDTO } from "../generos/generos";

export interface PeliculaDTO {
    id: number;
    titulo: string;
    fechaLanzamiento: Date;
    trailer: string;
    poster?: string;
}

export interface PeliculaCreacionDTO {
    titulo: string;
    fechaLanzamiento: Date;
    trailer: string;
    poster?: File;
    generosIds: number[];
    //cinesIds: number[];
}

export interface PeliculasPostGetDTO {
    generos: GeneroDTO[];
}

export interface LandingPageDTO {
    todasLasPeliculas: PeliculaDTO[];
}

export interface PeliculaPutGetDTO {
    pelicula: PeliculaDTO;
    generosSeleccionados: GeneroDTO[];
    generosNoSeleccionados: GeneroDTO[];
    //cinesSeleccionados: number[];
    //cinesNoSeleccionados: CineDTO[];
}