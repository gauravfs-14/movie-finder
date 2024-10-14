import MovieCard from "./components/MovieCard";
import { MovieCardProps } from "./types/MovieCardTypes";

// TODO:
// 1. Implement OMDB API to fetch data dynamically
// 2. Implement Search Functionality
// 3. Implement movie details page

export default function App() {
  const MovieCardData: MovieCardProps[] = [
    {
      id: 1,
      title: "Gravity",
      yearReleased: 2013,
      genre: ["Drama, Sci-Fi", "Thriller"],
      runTime: 91,
      plot: "Dr Ryan Stone, an engineer on her first time on a space mission, and Matt Kowalski, an astronaut on his final expedition, have to survive in space after they are hit by debris while spacewalking.",
      language: ["English", "Greenlandic"],
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_SX300.jpg"
    },
    {
      id: 2,
      title: "Gravity",
      yearReleased: 2013,
      genre: ["Drama, Sci-Fi", "Thriller"],
      runTime: 91,
      plot: "Dr Ryan Stone, an engineer on her first time on a space mission, and Matt Kowalski, an astronaut on his final expedition, have to survive in space after they are hit by debris while spacewalking.",
      language: ["English", "Greenlandic"],
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_SX300.jpg"
    },
    {
      id: 3,
      title: "Gravity",
      yearReleased: 2013,
      genre: ["Drama, Sci-Fi", "Thriller"],
      runTime: 91,
      plot: "Dr Ryan Stone, an engineer on her first time on a space mission, and Matt Kowalski, an astronaut on his final expedition, have to survive in space after they are hit by debris while spacewalking.",
      language: ["English", "Greenlandic"],
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_SX300.jpg"
    },
    {
      id: 4,
      title: "Gravity",
      yearReleased: 2013,
      genre: ["Drama, Sci-Fi", "Thriller"],
      runTime: 91,
      plot: "Dr Ryan Stone, an engineer on her first time on a space mission, and Matt Kowalski, an astronaut on his final expedition, have to survive in space after they are hit by debris while spacewalking.",
      language: ["English", "Greenlandic"],
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_SX300.jpg"
    },
  ]
  return (
    <>
      <main>
        <div className="flex flex-wrap p-6 justify-center">
          {
            MovieCardData.map((item) => <MovieCard {...item} key={item.id} />)
          }
        </div>
      </main>
    </>
  )
}