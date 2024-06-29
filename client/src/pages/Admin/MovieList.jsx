import React, { useEffect, useState } from "react";
import { getAllMovies } from "../../api/movies";
import { Button, Table } from "antd";
import MovieForm from "./MovieForm";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [isMOdalOpen, setIsModalOpen] = useState(false);
  const getData = async () => {
    const response = await getAllMovies();
    setMovies(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const tableHeadings = [
    {
      title: "Poster",
      dataIndex: "poster",
      render: (text, data) => (
        <img src={data.poster} alt={data.title} width="75" height="115" />
      ),
      key: "poster",
    },
    {
      title: "Movie Name",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
      render: (text) => new Date(text).toDateString(),
      key: "releaseDate",
    },
    {
      title: "Language",
      dataIndex: "language",
      key: "language",
    },
  ];
  return (
    <>
      <div className="d-flex justify-content-end">
        <Button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Add Movie
        </Button>
      </div>
      {isMOdalOpen && <MovieForm isModalOpen={isMOdalOpen} setIsModalOpen={setIsModalOpen} />}
      <Table dataSource={movies} columns={tableHeadings} rowKey="_id" />
    </>
  );
}
