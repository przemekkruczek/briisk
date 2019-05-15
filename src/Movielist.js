import React from "react";
import movies from "./movies";

export class Movielist extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {movies.map((movie, id) => {
            return <li key={id}>{movie.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
