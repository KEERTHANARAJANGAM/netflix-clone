import './App.css'

function App() {
  const movies = [
    {
      title: 'Stranger Things',
      image: 'https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
    },
    {
      title: 'Money Heist',
      image: 'https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg',
    },
    {
      title: 'Wednesday',
      image: 'https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg',
    },
    {
      title: 'The Batman',
      image: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    },
    {
      title: 'Avengers',
      image: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
    },
  ]

  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="logo">NETFLIX</h1>

        <div className="nav-links">
          <span>Home</span>
          <span>Movies</span>
          <span>TV Shows</span>
          <span>My List</span>
        </div>

        <button className="search-button">Search</button>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="hero-small">NETFLIX ORIGINAL</p>
          <h2>Stranger Things</h2>

          <p className="description">
            When a young boy disappears, his friends discover mysterious
            secrets, strange experiments and a supernatural world.
          </p>

          <div className="hero-buttons">
            <button className="play-button">▶ Play</button>
            <button className="info-button">ⓘ More Info</button>
          </div>
        </div>
      </section>

      <section className="movie-section">
        <h2>Popular Movies</h2>

        <div className="movie-row">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.title}>
              <img src={movie.image} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
