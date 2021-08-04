import { Component } from "@angular/core";

type Movie = {
  name: String;
  aviable: Number;
  quantity: Number;
};

type Movies = Array<Movie>;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title: String = "Peliculas";
  movies: Movies = [
    {
      name: "Avengers",
      aviable: 3,
      quantity: 0
    },
    {
      name: "Terminator",
      aviable: 5,
      quantity: 0
    }
  ];
  addMovieQuantity(movieName) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );

    this.movies[movieIndex].quantity += 1;
  }
  removeMovieQuantity(movieName) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );

    this.movies[movieIndex].quantity -= 1;
  }
}
