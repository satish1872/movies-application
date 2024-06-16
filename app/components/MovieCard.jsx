import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

function MovieCard({ movie }) {
  return (
    <>
      <Card sx={{ maxWidth: 650, maxHeight: "100%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            sx={{
              width: "100%",
              height: 150,
              objectFit: "cover",
            }}
          ></CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movie?.overview?.slice(0, 50)}
            </Typography>
            <Typography variant="body2" color={"text.primary"}>
              Released Date : {movie?.release_date}
            </Typography>
            <Typography variant="body2" color={"text.primary"}>
              Rating: {movie?.vote_average} (Votes: {movie?.vote_count})
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default MovieCard;
