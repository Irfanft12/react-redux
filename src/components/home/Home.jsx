import React, { useEffect } from "react";
import MovieListing from "../movieListing/MovieListing";
import { ApiKey } from "../../common/api/movieApiKey";
import movieApi from "../../common/api/movieApi";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/moviesSlice";

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${ApiKey}&s=${movieText}&type=movie`)
        .catch((err) => console.log(err));
      dispatch(addMovies(response.data))
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
