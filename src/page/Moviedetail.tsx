import { Chip, Divider, Grid, List, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import React from "react";
import { MovieModel } from "../model/MovieModel";

const Moviedetail = ({ movie }: { movie: MovieModel }) => {
  const about = () => {
    if (movie && movie.Genre) {
      const genres = movie.Genre.split(",").map((genre) => genre.trim());

      return (
        <>
          {genres.map((genre, index) => (
            <Stack
              direction="row"
              spacing={1}
              key={index}
              margin={"0px 10px 0px 0px"}
            >
              <Chip
                label={genre}
                size="medium"
                variant="outlined"
                sx={{
                  fontSize: "18px",
                  //   color: "#ffffff",
                  border: "1px solid",
                }}
              />
            </Stack>
          ))}
        </>
      );
    }
  };

  const DirectorList = ({ title, data }: { title: string; data: string }) => {
    const directors = data.split(",").map((name) => name.trim());

    return (
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          fontSize: "18px",
        }}
      >
        <Grid
          xs={12}
          sm={5}
          md={2}
          lg={2}
          sx={{ textAlign: "start", margin: 0 }}
        >
          <p
            style={{
              fontWeight: "bold",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </p>
        </Grid>
        <Grid xs={12} sm={7} md={10} lg={10}>
          {" "}
          <p>
            {directors.map((director, index) => (
              <React.Fragment key={director}>
                {index > 0 && ", "}
                {director}
              </React.Fragment>
            ))}
          </p>
        </Grid>
      </Grid>
    );
  };

  const WritersList = ({ title, data }: { title: string; data: string }) => {
    const writers = data.split(",").map((name) => name.trim());

    return (
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          fontSize: "18px",
        }}
      >
        <Grid
          xs={12}
          sm={5}
          md={2}
          lg={2}
          sx={{ textAlign: "start", margin: 0, width: "100%" }}
        >
          <p
            style={{
              fontWeight: "bold",
              width: "100%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </p>
        </Grid>
        <Grid xs={12} sm={7} md={10} lg={10} sx={{ width: "100%" }}>
          <p style={{ width: "100%" }}>
            {" "}
            {writers.map((writer, index) => (
              <React.Fragment key={writer}>
                {index > 0 && " • "}
                {writer.replace("•", "")}
              </React.Fragment>
            ))}
          </p>
        </Grid>
      </Grid>
    );
  };

  const StarsList = ({ title, data }: { title: string; data: string }) => {
    const stars = data.split(",").map((name) => name.trim());

    return (
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          fontSize: "18px",
          marginTop:10
        }}
      >
        <Grid
          xs={12}
          sm={5}
          md={2}
          lg={2}
          sx={{ textAlign: "start", margin: 0 }}
        >
          <p
            style={{
              fontWeight: "bold",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </p>
        </Grid>
        <Grid xs={12} sm={7} md={10} lg={10}>
          <p>
            {" "}
            {stars.map((stars, index) => (
              <React.Fragment key={stars}>
                {index > 0 && " • "}
                {stars.replace("•", "")}
              </React.Fragment>
            ))}
          </p>
        </Grid>
      </Grid>
    );
  };

  const svgstar = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      color="yellow"
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="presentation"
    >
      <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
    </svg>
  );

  const svgstarsky = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="presentation"
      color="#45A3F2"
    >
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path d="M19.65 9.04l-4.84-.42-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5 4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73 3.67-3.18c.67-.58.32-1.68-.56-1.75zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path>
    </svg>
  );

  const svgarrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="presentation"
    >
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4 0-7.4-3-8-6.9l10-.1v2c0 .5.6.7 1 .4l3-3c.2-.2.2-.5 0-.7l-3-3c-.4-.4-.9-.1-.9.3v2h-10c.4-4 3.8-7 7.9-7 4.4 0 8 3.6 8 8s-3.6 8-8 8z"></path>
    </svg>
  );

  const rowone = () => (
    <Grid container spacing={0} sx={{ height: "84px" }}>
      <Grid item xs={6}>
        <p style={{margin:0}}>{movie.imdbID}</p>
        <Typography variant="h4">{movie?.Title}</Typography>
        <Box sx={{ display: "flex" }}>
          <p style={{margin:0}}> 
            {movie?.Year} &bull; {movie?.Rated} &bull; {movie?.Runtime}
          </p>
        </Box>
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }}>
        <Grid sx={{ textAlign: "center", marginRight: 2 }}>
          IMDb RATING
          <Grid>
            <Grid>
              <button className="imdb-rating-button">
                <div className="rowA">
                  <div className="col">{svgstar()}</div>
                  <div className="col">
                    <div className="row">
                      <div className="row" style={{ display: "flex" }}>
                        <p
                          style={{
                            fontSize: "24px",
                            margin: 0,
                            color: "black",
                          }}
                        >
                          {movie?.imdbRating}
                        </p>
                        <p
                          style={{
                            margin: 0,
                            fontSize: "20px",
                            color: "#515A5A",
                          }}
                        >
                          /10
                        </p>
                      </div>

                      <p
                        style={{
                          margin: 0,
                          textAlign: "start",
                          color: "#515A5A",
                        }}
                      >
                        {movie?.imdbVotes}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: "block",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 2,
          }}
        >
          YOUR RATING
          <Box
            sx={{
              // marginLeft: 2,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>{svgstarsky()}</Box>
            <Box sx={{ fontSize: "24px" }}>{movie?.Rated}</Box>
          </Box>
        </Grid>
        <Grid
          sx={{
            display: "block",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          POPULARITY
          <Box
            sx={{
              marginLeft: 2,
              height: 50,
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <Box>{svgarrow()}</Box>
            <Box sx={{ fontSize: "24px" }}>{movie?.Metascore}</Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Container
      sx={{
        maxWidth: "80%",
        // color: "#FFFFFF",
        fontFamily: "Roboto",
        // backgroundColor:'black'
        textAlign: "start",
      }}
    >
      <Grid container spacing={1} sx={{ padding: 1 }}>
        {rowone()}
      </Grid>
      <Grid container spacing={0}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={4} maxHeight={"100vh"}>
            <img src={movie?.Poster} alt="" width={"100%"} />
          </Grid>
          <Grid item xs={8} maxHeight={"100vh"}>
            <Box
              sx={{
                marginLeft: 2,
              }}
            >
              <Grid sx={{ display: "flex" }}>{about()}</Grid>
              <Grid>
                <p style={{ maxWidth: "90%" }}>{movie?.Plot}</p>
              </Grid>
              <List
                sx={{
                  py: 0,
                  width: "100%",
                  borderColor: "black",
                  fontSize: "20px",
                }}
              >
                {/* <Divider component="li" sx={{ borderColor: "black" }} /> */}
                <DirectorList title="Director" data={movie?.Director} />
                {/* <Divider component="li" sx={{ borderColor: "black" }} /> */}
                <WritersList title="Writers" data={movie?.Writer} />
                {/* <Divider component="li" sx={{ borderColor: "black" }} /> */}
                <StarsList title="Stars" data={movie?.Actors} />

                <Divider component="li" sx={{ borderColor: "black" }} />
                <Box
                  sx={{
                    // backgroundColor: "#FDFEFE",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                  }}
                >
                  <Grid xs={12} sm={6} md={6}>
                    {movie.Ratings.map((item, index) => (
                      <Grid item key={index}>
                        <p style={{ padding: 0, fontSize: "18px" }}>
                          <strong>{item.Source}:</strong> {item.Value}
                        </p>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid xs={12} sm={6} md={6}>
                    <p style={{ padding: 0, fontSize: "18px" }}>
                      <strong>BoxOffice:</strong> {movie.BoxOffice}
                    </p>
                    <p style={{ padding: 0, fontSize: "18px" }}>
                      <strong>Language:</strong> {movie.Language}
                    </p>
                    <p style={{ padding: 0, fontSize: "18px" }}>
                      <strong>Country:</strong> {movie.Country}
                    </p>
                  </Grid>
                </Box>
                <Divider component="li" sx={{ borderColor: "black" }} />
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                  }}
                >
                  <Grid xs={12} sm={6} md={6}>
                    <p style={{ padding: 0, fontSize: "14px" }}>
                      <strong>DVD:</strong> {movie.DVD}
                    </p>
                    <p style={{ padding: 0, fontSize: "14px" }}>
                      <strong>Production:</strong> {movie.Production}
                    </p>
                  </Grid>
                  <Grid xs={12} sm={6} md={6}>
                    {" "}
                    <p style={{ padding: 0, fontSize: "14px" }}>
                      <strong>Website:</strong> {movie.Website}
                    </p>
                    <p style={{ padding: 0, fontSize: "14px" }}>
                      <strong>Response:</strong> {movie.Response}
                    </p>
                  </Grid>
                </Box>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={1} sx={{ padding: 1 }}></Grid>
    </Container>
  );
};
export default Moviedetail;
