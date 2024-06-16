"use client";
import React, { useEffect, useState } from "react";
import {
  Stack,
  Pagination,
  TextField,
  IconButton,
  SearchIcon,
  Grid,
} from "@mui/material";
import Movies from "./Movies";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import MovieCard from "./MovieCard";

function MoviesWrapper() {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [count] = useState(44674);
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = async (e, p) => {
    setCurrentPageNumber(p);
  };

  useEffect(() => {
    const onSearch = async () => {
      const response = await axios.get(`/api/search?query=${searchQuery}`);
      setMovies(response.data.results);
    };
    if (searchQuery != "") onSearch();
  }, [searchQuery]);

  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {searchQuery === "" ? (
        <Movies
          currentPageNumber={currentPageNumber}
          movies={movies}
          setMovies={setMovies}
        />
      ) : (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Grid container spacing={3}>
            {movies.map((movie, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <MovieCard movie={movie} key={index} />
              </Grid>
            ))}
          </Grid>
        </main>
      )}
      {!searchQuery && (
        <Stack spacing={2}>
          <Pagination
            count={count}
            size="large"
            page={currentPageNumber}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
            color="primary"
          />
        </Stack>
      )}
    </>
  );
}

export default MoviesWrapper;
