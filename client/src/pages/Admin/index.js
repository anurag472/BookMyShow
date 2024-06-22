import { Tabs } from "antd";
import MovieList from "./MovieList";

function Admin() {
  const tabItems = [
    {
      key: "1",
      label: "Movies",
      children: (
        <div>
          <MovieList />
        </div>
      ),
    },
    {
      key: "2",
      label: "Theaters",
      children: <div>Theaters</div>,
    },
  ];
  return (
    <div>
      <h1>Admin Page</h1>
      <Tabs defaultActiveKey="1" items={tabItems} />
    </div>
  );
}

export default Admin;
