import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import { getMovieCategory } from "../../redux/features/movieCategoriesSlice";
import { setMovieSelectedData } from "../../redux/features/selectedMovieSlice";
import { Link } from "react-router-dom";
import "../root/app.css";

function RomanceCategoryPage() {
  const { movieCategoryPost, loading } = useSelector(
    (state) => state.movieCategory
  );

  const selectedMovieCategoryData = useSelector(
    (state) => state.selectedCategoryData.data.name
  );

  const handleDataClick = (movieDataId) => {
    dispatch(setMovieSelectedData(movieDataId));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieCategory(selectedMovieCategoryData));
  }, []);

  if (loading === true) {
    return (
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border"
          role="status"
          style={styles.spinnerBorder}
        >
          <span className="sr-only"></span>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/movie_details" style={styles.link}>
          <Row>
            {movieCategoryPost.map((item) => (
              <Col
                xs="3"
                key={item.rank}
                onClick={() =>
                  handleDataClick({ id: item.rank, name: item.rank })
                }
              >
                <div
                  style={{
                    borderStyle: "double",
                    margingLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <div style={styles.movieNameSize} className="movieTitleHover">
                    {item.title}
                  </div>
                  <div>
                    <img src={item.image} style={styles.img} />
                  </div>
                  <div style={{ marginTop: 5, paddingLeft: 8,fontFamily:"fantasy" }}>
                    {"Tür : " + item.genre}
                  </div>
                  <div style={{ marginTop: 5, paddingLeft: 8 ,fontFamily:"cursive"}}>
                    {"Imbd Puanı : " + item.rating}
                  </div>
                  <div style={{ marginTop: 5, paddingLeft: 8 ,fontFamily:"sans-serif",color:"red"}}>
                    {"Vizyon Tarihi : " + item.year}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Link>
      </div>
    );
  }
}

const styles = {
  spinnerBorder: {
    width: 300,
    minWidth: 300,
    height: 300,
  },
  link: { color: "black", textDecoration: "none" },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  movieNameSize: {
    marginTop: 25,
    maxHeight: 50,
    minHeight: 50,
    width: "100%",
    textAlign: "center",
    fontSize: "1em",
    layoutGravity: "center",
  },
};

export default RomanceCategoryPage;
