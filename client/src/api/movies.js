const { axiosInstance } = require("./index");

export const getAllMovies = async () => {
  try {
    const response = await axiosInstance.get("/api/movies/get-all-movies");
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export const addMovie = async (movie) => {
  try {
    const response = await axiosInstance.post("/api/movies/add-movie", movie);
    return response.data;
  } catch (error) {
    return error.response;
  }
}
