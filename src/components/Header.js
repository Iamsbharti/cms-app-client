import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "../css/index.css";
import "../css/header.css";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useHistory } from "react-router-dom";
const Header = () => {
  let history = useHistory();
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <React.Fragment>
      <div className="non__mobile__nav" style={{ margin: "-16px" }}>
        <nav className="navbar-static-top nav__bar navbar-expand ">
          <ul
            className="collapse navbar-collapse nav__links"
            style={{ paddingTop: "20px" }}
          >
            <li
              className="nav-item nav-link text-white mt-3"
              onClick={() => history.push("/")}
            >
              CMS Articles
            </li>
            <li
              className="nav-item nav-link text-white mt-3"
              onClick={() => history.push("/login")}
            >
              Login
            </li>
            <li
              className="nav-item nav-link text-white mt-3"
              onClick={() => this.handleNavigation("/contact")}
            >
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};
export default Header;
