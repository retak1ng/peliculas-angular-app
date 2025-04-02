import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private peliculasOriginales: any[] = [
    {
      title: 'Inception',
      releaseDate: '2010-07-16',
      genre: 'Science Fiction',
      genreId: [2, 4],
      director: 'Christopher Nolan',
      description: 'A skilled thief is given a chance to have his criminal history erased if he can successfully perform an inception.',
      rating: 8.8,
      imageUrl: 'https://image.tmdb.org/t/p/original/xymM5aW6MDcH5AR9I3CamSegJd6.jpg',
      inCinema: true,
      nextRealease: false
    },
    {
      title: 'The Matrix',
      releaseDate: '1999-03-31',
      genre: 'Action, Science Fiction',
      genreId: [2, 4],
      director: 'Lana Wachowski, Lilly Wachowski',
      description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      rating: 8.7,
      imageUrl: 'https://th.bing.com/th/id/R.2fe0652cfbe363a55494ac1639af9ce2?rik=RNn4z7FFbAPhfw&pid=ImgRaw&r=0',
      inCinema: false,
      nextRealease: false
    },
    {
      title: 'The Dark Knight',
      releaseDate: '2008-07-18',
      genre: 'Action, Crime, Drama',
      genreId: [2, 4],
      director: 'Christopher Nolan',
      description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      rating: 9.0,
      imageUrl: 'https://www.themoviedb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      inCinema: false,
      nextRealease: false
    },
    {
      title: 'Pulp Fiction',
      releaseDate: '1994-09-23',
      genre: 'Crime, Drama',
      genreId: [2, 4],
      director: 'Quentin Tarantino',
      description: 'The lives of two mob hitmen, a boxer, a gangster’s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
      rating: 8.9,
      imageUrl: 'https://www.themoviedb.org/t/p/w1280/jYqKxBbAUdfKq3BfHKivJytFiPL.jpg',
      inCinema: false,
      nextRealease: false
    },
    {
      title: 'The Godfather',
      releaseDate: '1972-03-24',
      genre: 'Crime, Drama',
      genreId: [2, 4],
      director: 'Francis Ford Coppola',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      rating: 9.2,
      imageUrl: 'https://www.themoviedb.org/t/p/w1280/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      inCinema: false,
      nextRealease: false
    },
    {
      title: 'Forrest Gump',
      releaseDate: '1994-07-06',
      genre: 'Drama, Romance',
      genreId: [2, 4],
      director: 'Robert Zemeckis',
      description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an extraordinary quality.',
      rating: 8.8,
      imageUrl: 'https://www.themoviedb.org/t/p/w1280/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
      inCinema: false,
      nextRealease: false
    },
    {
      title: 'Fight Club',
      releaseDate: '1999-10-15',
      genre: 'Drama',
      genreId: [1, 4],
      director: 'David Fincher',
      description: 'An insomniac office worker and a soap salesman form an underground fight club that evolves into much more.',
      rating: 8.8,
      imageUrl: 'https://www.themoviedb.org/t/p/w1280/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
      inCinema: false,
      nextRealease: false
    },
    {
      title: 'The Lord of the Rings: The Return of the King',
      releaseDate: '2003-12-17',
      genre: 'Action, Adventure, Drama',
      genreId: [2, 4],
      director: 'Peter Jackson',
      description: 'Gandalf and Aragorn lead the World of Men against Sauron to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
      rating: 8.9,
      imageUrl: 'https://www.themoviedb.org/t/p/w1280/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
      inCinema: false,
      nextRealease: false
    },
    {
      title: 'Interstellar',
      releaseDate: '2014-11-07',
      genre: 'Adventure, Drama, Science Fiction',
      genreId: [2, 4],
      director: 'Christopher Nolan',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
      rating: 8.6,
      imageUrl: 'https://www.themoviedb.org/t/p/w1280/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      inCinema: false,
      nextRealease: false
    },
    {
      title: 'The Dark Knight Rises',
      releaseDate: '2012-07-20',
      genre: 'Action, Drama',
      genreId: [2, 1],
      director: 'Christopher Nolan',
      description: 'Eight years after the events of The Dark Knight, Batman is forced out of exile to save Gotham City from the brutal terrorist Bane.',
      rating: 8.4,
      imageUrl: 'https://www.themoviedb.org/t/p/w1280/hr0L2aueqlP2BYUblTTjmtn0hw4.jpg',
      inCinema: false,
      nextRealease: false
    },
    {
      title: 'Goodfellas',
      releaseDate: '1990-09-19',
      genre: 'Crime, Drama',
      genreId: [2, 1],
      director: 'Martin Scorsese',
      description: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife, Karen, and his mob partners.',
      rating: 8.7,
      imageUrl: 'https://www.themoviedb.org/t/p/w1280/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
      inCinema: false,
      nextRealease: false
    },
    {
      title: 'Gladiator',
      releaseDate: '2000-05-05',
      genre: 'Action, Adventure, Drama',
      genreId: [2, 4, 1],
      director: 'Ridley Scott',
      description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
      rating: 8.5,
      imageUrl: 'https://www.themoviedb.org/t/p/w1280/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
      inCinema: false,
      nextRealease: false
    },
    {
      title: 'The Lion King',
      releaseDate: '1994-06-24',
      genre: 'Animation, Adventure, Drama',
      genreId: [2, 4, 1],
      director: 'Roger Allers, Rob Minkoff',
      description: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
      rating: 8.5,
      imageUrl: 'https://www.themoviedb.org/t/p/w1280/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg',
      inCinema: false,
      nextRealease: false
    }
  ];

  private peliculasSubject = new BehaviorSubject<any[]>(this.peliculasOriginales);
  peliculas$ = this.peliculasSubject.asObservable();

  filtrarPorEstrenos() {
    const anio = "2025-01-01";
    const anioEstreno = new Date(anio);
    const filtradas = this.peliculasOriginales.filter(pelicula => {
      const peliculaDate = new Date(pelicula.releaseDate);
      return peliculaDate >= anioEstreno;
    });

    this.peliculasSubject.next(filtradas);
  }

  filtrarPorMasVistas() {
    const filtradas = this.peliculasOriginales.filter(pelicula => pelicula.rating >= 9.5);
    this.peliculasSubject.next(filtradas);
  }

  filtrarPorTendencias() {
    const filtradas = this.peliculasOriginales.filter(pelicula => pelicula.rating > 8.9)
    this.peliculasSubject.next(filtradas);
  }

  resetearFiltro() {
    this.peliculasSubject.next(this.peliculasOriginales);
  }
}
