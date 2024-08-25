import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser } from "../api/users";
import { message, Menu, Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import { useDispatch } from "react-redux";
import { HomeOutlined, UserOutlined, ProfileOutlined } from "@ant-design/icons";
import { setUser as setUser2 } from "../redux/userSlice";

function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const navItems = [
    {
      key: "1",
      label: <Link to="/">Home</Link>,
      icon: <HomeOutlined />,
    },
    {
      key: "2",
      label: `${user ? user.name : ""}`,
      icon: <UserOutlined />,
      children: [
        {
          label: <Link to={user.isAdmin ? "/admin" : "/profile"}>profile</Link>,
          icon: <ProfileOutlined />,
        },
        {
          label: (
            <Link
              to="/login"
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              Logout
            </Link>
          ),
        },
      ],
    },
  ];

  const getValidUser = async () => {
    try {
      const response = await getCurrentUser();
      setUser(response?.data);
      dispatch(setUser2(response?.data));
      message.success(`Welcome ${response.data.name}`);
    } catch (error) {
      message.error(error.message);
      console.log(error);
      navigate("/login");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getValidUser();
    } else {
      navigate("/login");
    }
  }, []);
  return (
      <Layout>
        <Header
          className="d-flex justify-content-between"
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h3 className="demo-logo text-white m-0" style={{ color: "white" }}>
            Book My Show
          </h3>
          <Menu theme="dark" mode="horizontal" items={navItems} />
        </Header>
        <div className="home">{children}</div>
      </Layout>
  );
}

export default ProtectedRoute;
