import React from "react";
import { useDispatch } from "react-redux";
import {
  Navbar,
  NavItem,
  NavLink,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import "../navi/navbar.css";
import { Link } from "react-router-dom";
import { setMovieCategorySelectedData } from "../../redux/features/selectedMovieCategoriSlice";

function Navi() {
  const dispatch = useDispatch();
  const handleDataClick = (movieDataCategory) => {
    dispatch(setMovieCategorySelectedData(movieDataCategory));
  };

  return (
    <div>
      <Navbar className="navbarNav">
        <Row>
          <Col>
            <NavItem className="navItem">
              <NavLink href="/">ANASAYFA</NavLink>
            </NavItem>
          </Col>
          <Col>
            <NavItem className="navItem2">
              <UncontrolledDropdown>
                <DropdownToggle>KATEGORİLER</DropdownToggle>
                <DropdownMenu>
                  <Link to="/aksiyon_filmleri" className="linkTextDecortation">
                    <DropdownItem>
                      <div
                        onClick={() =>
                          handleDataClick({ id: 1, name: "Action" })
                        }
                      >
                        Aksiyon
                      </div>
                    </DropdownItem>
                  </Link>
                  <Link
                    to="/bilim_kurgu_filmleri"
                    className="linkTextDecortation"
                  >
                    <DropdownItem>
                      <div
                        onClick={() =>
                          handleDataClick({ id: 2, name: "Sci-Fi" })
                        }
                      >
                        Bilim Kurgu
                      </div>
                    </DropdownItem>
                  </Link>
                  <Link
                    to="/biyografi_filmleri"
                    className="linkTextDecortation"
                  >
                    <DropdownItem>
                      <div
                        onClick={() =>
                          handleDataClick({ id: 8, name: "Biography" })
                        }
                      >
                        Biyografi
                      </div>
                    </DropdownItem>
                  </Link>
                  <Link to="/drama_filmleri" className="linkTextDecortation">
                    <DropdownItem>
                      <div
                        onClick={() =>
                          handleDataClick({ id: 3, name: "Drama" })
                        }
                      >
                        Drama
                      </div>
                    </DropdownItem>
                  </Link>
                  <Link
                    to="/fantastik_filmleri"
                    className="linkTextDecortation"
                  >
                    <DropdownItem>
                      <div
                        onClick={() =>
                          handleDataClick({ id: 4, name: "Fantasy" })
                        }
                      >
                        Fantastik
                      </div>
                    </DropdownItem>
                  </Link>

                  <Link to="/macera_filmleri" className="linkTextDecortation">
                    <DropdownItem>
                      <div
                        onClick={() =>
                          handleDataClick({ id: 5, name: "Adventure" })
                        }
                      >
                        Macera
                      </div>
                    </DropdownItem>
                  </Link>
                  <Link to="/romantik_filmler" className="linkTextDecortation">
                    <DropdownItem>
                      <div
                        onClick={() =>
                          handleDataClick({ id: 10, name: "Romance" })
                        }
                      >
                        Romantik
                      </div>
                    </DropdownItem>
                  </Link>
                  <Link to="/suc_filmleri" className="linkTextDecortation">
                    <DropdownItem>
                      <div
                        onClick={() =>
                          handleDataClick({ id: 6, name: "Crime" })
                        }
                      >
                        Suç
                      </div>
                    </DropdownItem>
                  </Link>
                  <Link to="/tarih_filmleri" className="linkTextDecortation">
                    <DropdownItem>
                      <div
                        onClick={() =>
                          handleDataClick({ id: 11, name: "History" })
                        }
                      >
                        Tarih
                      </div>
                    </DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
}

export default Navi;
