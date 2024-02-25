import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { TabPanel } from "@mui/lab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

import {
  Button,
  Card,
  Drawer,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  Skeleton,
  Tab,
  TextField,
} from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { MovieCA } from "../model/MoiveCardModel";
import { MovieModel } from "../model/MovieModel";
import "../style/main.css";
import Moviedetail from "./Moviedetail";
export default function MainPage() {
  const [value, setValue] = React.useState("1");
  const [Plot, setPlot] = React.useState("");
  const [Response, setResponse] = React.useState("");
  const TitleRef = useRef<HTMLInputElement>();
  const IDRef = useRef<HTMLInputElement>();
  const YearRef = useRef<HTMLInputElement>();
  const [movie, setMovie] = useState<MovieModel | null>(null);
  const [movieCard, setMovieCard] = useState<MovieCA | null>(null);
  const [isshowNLLfetchData, setisshowNLLfetchData] = useState(false);
  const [isbttclear, setisbttclear] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = React.useState<MovieModel | null>(
    null
  );

  useEffect(() => {
    fetchDataALL(currentPage);
  }, [currentPage]);

  const handleChangeNumberPage = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    fetchDataALL(page);
  };

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    if (newValue === "1") {
      // If the "Movie" tab is clicked, reset to the first page
      setCurrentPage(1);
    }
  };

  const handleChangePlot = (event: SelectChangeEvent) => {
    setPlot(event.target.value as string);
  };

  const handleChangeResponse = (event: SelectChangeEvent) => {
    setResponse(event.target.value as string);
  };

  const handleButtonClick = () => {
    fetchData();

    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 50);
  };

  const handleButtonClickback = () => {
    clearData();
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollTop);
    }, 50);
  };

  const handleButtonClickbyID = () => {
    fetchDatabyid();

    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 50);
  };

  const handleButtonClickbackbyID = () => {
    clearData();
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollTop);
    }, 50);
  };

  const byTitle = () => (
    <Grid
      container
      spacing={2}
      sx={{
        width: "100%",
        padding: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} sm={8} md={4} lg={4}>
        {/* Adjusting the grid size based on screen width */}
        <TextField
          inputRef={TitleRef}
          id="outlined-basic"
          label="Title"
          variant="outlined"
          fullWidth
          InputProps={{
            style: { fontFamily: "Mitr" },
          }}
          InputLabelProps={{
            style: { fontFamily: "Mitr" },
          }}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={2} lg={2}>
        <TextField
          inputRef={YearRef}
          id="outlined-basic"
          label="Year"
          variant="outlined"
          fullWidth
          InputProps={{
            style: { fontFamily: "Mitr" },
          }}
          InputLabelProps={{
            style: { fontFamily: "Mitr" },
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={2} lg={2}>
        <FormControl fullWidth>
          <InputLabel style={{ fontFamily: "Mitr" }}>Plot</InputLabel>
          <Select
            value={Plot}
            label="Plot"
            onChange={handleChangePlot}
            inputProps={{
              style: { fontFamily: "Mitr" },
            }}
            style={{ fontFamily: "Mitr" }}
          >
            <MenuItem value={10}>Short</MenuItem>
            <MenuItem value={20}>Full</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={2} lg={2}>
        <FormControl fullWidth>
          <InputLabel style={{ fontFamily: "Mitr" }}>Response</InputLabel>
          <Select
            value={Response}
            label="Response"
            onChange={handleChangeResponse}
            inputProps={{
              style: { fontFamily: "Mitr" },
            }}
            style={{ fontFamily: "Mitr" }}
          >
            <MenuItem value={10}>JSON</MenuItem>
            <MenuItem value={20}>XML</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {/* Add a search button */}

      <Grid item xs={12} sm={3} md={2} lg={2}>
        {isbttclear == true && (
          <Button
            style={{ backgroundColor: "#5F6A6A", padding: 15 }}
            variant="contained"
            fullWidth
            endIcon={<SearchIcon />}
            onClick={handleButtonClick}
            sx={{ fontFamily: "Mitr" }}
          >
            Search
          </Button>
        )}

        {isbttclear == false && (
          <Button
            style={{ backgroundColor: "#FF5733", padding: 15 }}
            variant="contained"
            fullWidth
            endIcon={<ClearIcon />}
            onClick={handleButtonClickback}
            sx={{ fontFamily: "Mitr" }}
          >
            Clear
          </Button>
        )}
      </Grid>
    </Grid>
  );

  const byid = () => (
    <Grid
      container
      spacing={2}
      sx={{
        width: "100%",
        padding: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} sm={8} md={4} lg={4}>
        {/* Adjusting the grid size based on screen width */}
        <TextField
          inputRef={IDRef}
          id="outlined-basic"
          label="ID"
          variant="outlined"
          fullWidth
          InputProps={{
            style: { fontFamily: "Mitr" },
          }}
          InputLabelProps={{
            style: { fontFamily: "Mitr" },
          }}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={2} lg={2}>
        <FormControl fullWidth>
          <InputLabel style={{ fontFamily: "Mitr" }}>Plot</InputLabel>
          <Select
            value={Plot}
            label="Plot"
            onChange={handleChangePlot}
            inputProps={{
              style: { fontFamily: "Mitr" },
            }}
            style={{ fontFamily: "Mitr" }}
          >
            <MenuItem value={"Short"}>Short</MenuItem>
            <MenuItem value={"Full"}>Full</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6} md={2} lg={2}>
        <FormControl fullWidth>
          <InputLabel style={{ fontFamily: "Mitr" }}>Response</InputLabel>
          <Select
            value={Response}
            label="Response"
            onChange={handleChangeResponse}
            inputProps={{
              style: { fontFamily: "Mitr" },
            }}
            style={{ fontFamily: "Mitr" }}
          >
            <MenuItem value={"JSON"}>JSON</MenuItem>
            <MenuItem value={"XML"}>XML</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={3} md={2} lg={2}>
        {isbttclear == true && (
          <Button
            style={{ backgroundColor: "#5F6A6A", padding: 15 }}
            variant="contained"
            fullWidth
            endIcon={<SearchIcon />}
            onClick={handleButtonClickbyID}
            sx={{ fontFamily: "Mitr" }}
          >
            Search
          </Button>
        )}

        {isbttclear == false && (
          <Button
            style={{ backgroundColor: "#FF5733", padding: 15 }}
            variant="contained"
            fullWidth
            endIcon={<ClearIcon />}
            onClick={handleButtonClickbackbyID}
            sx={{ fontFamily: "Mitr" }}
          >
            Clear
          </Button>
        )}
      </Grid>
    </Grid>
  );

  const fetchDatabyid = async () => {
    try {
      setLoading(true);
      const url = `https://www.omdbapi.com/?apikey=b70cd313&t=${TitleRef.current?.value}&plot=${Plot}&r=${Response}`;
      const response = await axios.get<MovieModel>(url);
      if (response.data && response.data.Response === "True") {
        setLoading(false);
        setMovie(response.data);
        setisbttclear(false);
        setisshowNLLfetchData(false);
      } else {
        setMovie(null);
        setisshowNLLfetchData(true);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
      setMovie(null);
      setisshowNLLfetchData(true);
    }
  };

  const clearData = () => {
    
    setisbttclear(true);
    setMovie(null);
    setPlot("");
    setResponse("");
    if (TitleRef.current) TitleRef.current.value = "";
    if (IDRef.current) IDRef.current.value = "";
    if (YearRef.current) YearRef.current.value = "";
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const url = `https://www.omdbapi.com/?apikey=b70cd313&t=${TitleRef.current?.value}&y=${YearRef.current?.value}&plot=${Plot}&r=${Response}`;
      const response = await axios.get<MovieModel>(url);
      console.log(response.data);
      
      if (response.data && response.data.Response === "True") {
        setLoading(false);
        setMovie(response.data);
        setisbttclear(false);
        setisshowNLLfetchData(false);
      } else {
        setLoading(false);
        setMovie(null);
        setisshowNLLfetchData(true);
      }
    } catch (error) {
      // If API call encounters an error
      console.error("Error fetching data:", error);
      setMovie(null);
      setisshowNLLfetchData(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchDataALL = async (numberpage: number) => {
    try {
      setLoading(true);
      // const url = `https://www.omdbapi.com/?apikey=b70cd313&s=all`;
      const url = `https://www.omdbapi.com/?apikey=b70cd313&s=all&page=${numberpage}`;
      const response = await axios.get<MovieCA>(url);

      if (response.data && response.data.Response === "True") {
        setLoading(false);
        setMovieCard(response.data);
        // setisbttclear(false);
        // setisshowNLLfetchData(false);
      } else {
        setLoading(false);
        setMovieCard(null);
        // setisshowNLLfetchData(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);

      // setisshowNLLfetchData(true);
    } finally {
      setLoading(false);
    }
  };

  const getFullModelbyTitle = async (Title: string) => {
    try {
      setLoading(true);
      // const url = `https://www.omdbapi.com/?apikey=b70cd313&s=all`;
      const url = `https://www.omdbapi.com/?apikey=b70cd313&t=${Title}`;
      const response = await axios.get<MovieModel>(url);
      console.log(response.data);
      
      if (response.data && response.data.Response === "True") {
        setLoading(false);
        setSelectedMovie(response.data);
        // setisbttclear(false);
        // setisshowNLLfetchData(false);
      } else {
        setLoading(false);
        setMovieCard(null);
        // setisshowNLLfetchData(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);

      // setisshowNLLfetchData(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container fixed className="Container_head">
        <p>
          <span className="text_head1">ค้นหาภาพยนตร์</span>
          {""}
          <span className="text_head2">ได้ทุกเรื่อง</span>
          <span>
            <SearchIcon sx={{ fontSize: 50, color: "rgb(110, 110, 115);" }} />
          </span>
        </p>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  className="labelby"
                  label="By Title"
                  value="3"
                  onClick={() => setisbttclear(true)}
                />
                <Tab
                  className="labelby"
                  label="By ID"
                  value="2"
                  onClick={() => setisbttclear(true)}
                />
                <Tab
                  className="Movie"
                  label="Movie"
                  value="1"
                  onClick={() => fetchDataALL(1)}
                />
              </TabList>
            </Box>
            <TabPanel value="3">
              {/* By Title */}
              <Box>{byTitle()}</Box>

              {/* <div>{movie && <MovieCard movie={movie} />}</div> */}
              <div>{movie && <Moviedetail movie={movie} />}</div>
              <p className="textnotfound">
                {loading && <p>Loading...</p>}
                {isshowNLLfetchData ? "ไม่พบข้อมูลที่ค้นหา" : ""}
              </p>
            </TabPanel>
            <TabPanel value="2">
              <Box>{byid()}</Box>
              <div>{movie && <Moviedetail movie={movie} />}</div>
              <p className="textnotfound">
                {loading && <p>Loading...</p>}
                {isshowNLLfetchData ? "ไม่พบข้อมูลที่ค้นหา" : ""}
              </p>
            </TabPanel>
            <TabPanel value="1">
              <Drawer
                anchor="bottom"
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
              >
                {selectedMovie ? (
                  <Moviedetail movie={selectedMovie} />
                ) : (
                  <Skeleton variant="rectangular" width={210} height={118} />
                )}
              </Drawer>
              <Box sx={{ margin: 0 }}>
                <Grid
                  container
                  spacing={2}
                  sx={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  {movieCard?.Search.sort(
                    (a, b) => parseInt(b.Year) - parseInt(a.Year)
                  ).map((data) => (
                    <Link
                      component="button"
                      variant="body2"
                      onClick={() => {
                        getFullModelbyTitle(data.Title);
                        setDialogOpen(true);
                      }}
                    >
                      <Card
                        key={data.imdbID}
                        sx={{
                          maxWidth: 240,
                          maxHeight: 550,
                          padding: 0,
                          backgroundColor: "rgba(255, 255, 255, 0.5)",
                          display: "flex",
                          justifyContent: "space-between",
                          margin: 1,
                        }}
                      >
                        <img
                          src={data.Poster}
                          alt={data.Title}
                          style={{ maxWidth: "100%", height: "auto" }}
                        />
                        {/* <div>
                        <h2 style={{ margin: 10 }}>{data.Title}</h2>
                        <p style={{ margin: 5 }}>{data.Year}</p>
                      </div> */}
                      </Card>
                    </Link>
                  ))}
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: 2,
                  }}
                >
                  <Stack spacing={2}>
                    <Pagination
                      count={100}
                      variant="outlined"
                      onChange={handleChangeNumberPage}
                    />
                  </Stack>
                </Box>
              </Box>
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </>
  );
}
