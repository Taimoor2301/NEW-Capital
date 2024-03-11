import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { BiSolidGridAlt } from "react-icons/bi";
import { RiWallet3Fill } from "react-icons/ri";
import { FaUserAlt, FaFolderOpen } from "react-icons/fa";
import logo from "../../assests/images/logo.svg";
import { Image, Dropdown, Row, Col } from "react-bootstrap";
import "../../assests/css/horizontalnavbar.css";
import { LinkContainer } from "react-router-bootstrap";
import { IoChevronDown } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import profileIcon from "../../assests/images/profileIcon.svg";
import { IoLogOut } from "react-icons/io5";
import { AiFillQuestionCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Context/AuthContext";
import { BiSolidTrophy } from "react-icons/bi";
import { RiShoppingBasketFill } from "react-icons/ri";

const drawerWidth = 240;

function ResponsiveDrawer({ window, Page }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  // const { window } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [selectedLinkText, setSelectedLinkText] = React.useState("home");

  React.useEffect(() => {
    const storedItemText = localStorage.getItem("selectedLinkText");

    if (storedItemText) {
      setSelectedLinkText(storedItemText);
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleItemClick = (text) => {
    setSelectedLinkText(text);
    localStorage.setItem("selectedLinkText", text);
    setMobileOpen(false);
  };

  const items = [
    { id: 1, text: "Home", icon: <BiSolidGridAlt />, link: "/user/dashboard" },
    { id: 2, text: "Wallet", icon: <RiWallet3Fill />, link: "/user/wallet" },
    {
      id: 3,
      text: "Portfolio",
      icon: <FaFolderOpen />,
      link: "/user/portfolio",
    },
    // { id: 4, text: "Rewards", icon: <BiSolidTrophy />, link: "/user/reward" },
    // { id: 5, text: "Cart", icon: <RiShoppingBasketFill />, link: "/user/cart" },
    { id: 6, text: "Profile", icon: <FaUserAlt />, link: "/user/profile" },
  ];

  const drawer = (
    <div>
      <List>
        <Image src={logo} fluid className="my-4" />
        {items.map((item, index) => (
          <LinkContainer to={item.link} key={item.id}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleItemClick(item.text.toLowerCase())}
                selected={selectedLinkText === item.text.toLowerCase()}
              >
                {selectedLinkText === item.text.toLowerCase() && (
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{ backgroundColor: "#033329" }}
                    className="verticle-line-sidebar"
                  />
                )}
                <ListItemIcon
                  sx={{
                    color:
                      selectedLinkText === item.text.toLowerCase()
                        ? "#033329 "
                        : "#03332999",
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    style: {
                      color:
                        selectedLinkText === item.text.toLowerCase()
                          ? "#033329 "
                          : "#03332999",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          </LinkContainer>
        ))}
      </List>
      <div>
        <p
          className="logout text-start"
          onClick={() => {
            logout();
            navigate("/page/home");
          }}
          style={{ cursor: "pointer" }}
        >
          <IoLogOut className="fs-2" /> Logout
        </p>

        <p className="question text-start">
          <AiFillQuestionCircle className="fs-2" /> Help And Support
        </p>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="horizontalnavsbar">
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "white",
          color: "#033329",
        }}
      >
        <Row>
          <Col xl={5} lg={4} md={3} sm={3} xs={4}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                className="navbar-text"
                variant="h6"
                noWrap
                component="div"
              >
                Dashboard /
              </Typography>

              <Typography
                className="navbar-text"
                variant="h6"
                noWrap
                component="div"
              >
                {selectedLinkText}
              </Typography>
            </Toolbar>
          </Col>
          <Col xl={7} lg={8} md={9} sm={9} xs={8}>
            <div className="d-flex justify-content-end align-items-center spacings-dropdowns">
              <Row className="d-flex">
                <Col lg={4} md={4} sm={6} xs={6}>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="dropdown-butns"
                    >
                      <TbWorld className="worldicon" />
                      <span className="language-dropdown">EN</span>
                      <IoChevronDown
                        className={`icon ${isOpen ? "open" : ""}`}
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <div className="form-check">
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckEnglish"
                            style={{ fontSize: "11px" }}
                          >
                            English
                          </label>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckEnglish"
                            checked // Set this attribute if you want it checked by default
                          />
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div className="form-check">
                          <label
                            className="form-check-label"
                            // htmlFor="flexCheckArabic"
                            style={{ fontSize: "11px" }}
                          >
                            Arabic
                          </label>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            // id="flexCheckArabic"
                          />
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>{" "}
                <Col lg={3} md={3} sm={6} xs={6}>
                  <LinkContainer to="/user/account">
                    <Image src={profileIcon} alt="ProfileIcon" fluid />
                  </LinkContainer>
                </Col>
                <Col lg={5} md={5} sm={4} xs={5} className="spacing-profilefo">
                  <Row>
                    <Col className="text-start">
                      <Typography
                        className="profile-heading "
                        variant="h6"
                        noWrap
                        component="div"
                      >
                        Muhammad Wilayat
                      </Typography>
                    </Col>
                    <Col className="text-start">
                      <Typography
                        className="profile-text"
                        noWrap
                        component="div"
                      >
                        User Account
                      </Typography>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        style={{ backgroundColor: "#FBFCFD" }}
      >
        <Toolbar />
        <Page />
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
