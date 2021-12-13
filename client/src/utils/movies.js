export const initialMovies = [
  {
    id: 0,
    title: "Home Alone",
    desc: "An eight-year-old troublemaker must protect his house from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation.",
    runtime: 103,
  },
  {
    id: 1,
    title: "Jaws",
    desc: "When a killer shark unleashes chaos on beach community off Long Island, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.",
    runtime: 124,
  },
  {
    id: 2,
    title: "Hook",
    desc: "When Captain James Hook kidnaps his children, an adult Peter Pan must return to Neverland and reclaim his youthful spirit in order to challenge his old enemy.",
    runtime: 142,
  },
];

export const getMovies = (movies) => {
  return movies;
};

export const getMovie = (id) => {
  const movies = getMovies(initialMovies);

  return movies.find((movie) => movie.id === id);
};
