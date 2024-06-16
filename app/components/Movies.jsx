"use client";
import MovieCard from "./MovieCard";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";

export default function Movies({ currentPageNumber, movies, setMovies }) {
  useEffect(() => {
    const onload = async () => {
      const response = await axios.get(
        `/api/allmovies?page=${currentPageNumber}`
      );
      setMovies(response.data.results);
    };
    onload();
  }, [currentPageNumber]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Grid container spacing={3}>
        {movies.map((movie, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <MovieCard movie={movie} key={index} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
