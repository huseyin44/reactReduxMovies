import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "reactstrap";
import { getDetailsMovie } from "../../redux/features/detailsMovieSlice";
import "../movieDetails/moviDetails.css";
import "../root/app.css";

function MoviDetails() {
  const { movieDetailsPost, loading } = useSelector(
    (state) => state.movieDetails
  );
  const selectedMovieData = useSelector(
    (state) => state.selectedData.data.name
  ); //detailsMovieSlicea id gönderiyor ordan
  //fetch ile o id ye göre itemleri çekiyor

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailsMovie(selectedMovieData));
  }, []);

  if (loading === true) {
    return (
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border"
          role="status"
          style={styles.spinnerBorder}
        >
          {console.log("qqq")}
          <span className="sr-only"></span>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ border: "3px solid gray" ,marginTop:15}}>
        {movieDetailsPost.map((item) => (
          <Row key={item.rank}>
            <Col >
              <div>
                <div style={styles.movieNameSize} className="movieTitleHover">
                  {item.title}
                </div>
                <div className="imgCenter">
                  <img src={item.image} />
                </div>
              </div>
            </Col>
            <Col>
              <Row style={{ marginTop: 25 }}>
                <Col className="directorText" style={{fontFamily:"cursive"}}>
                  {"Yönetmen : " + item.director}
                </Col>
                <Col className="vizyonTarihiText">
                  {"Vizyon Tarihi : " + item.year}
                </Col>
              </Row>
              <div style={{ marginTop: 8 ,fontFamily:"revert",fontSize: "1.4em",color:"brown"}}>
                {"Tür : " + item.genre}
              </div>
              <div style={{ marginTop: 8 }} className="imbdText">
                {"IMBD Puanı : " + item.rating}
              </div>
              <div style={{ marginTop: 8 ,fontFamily:"monospace"}} className="descriptionText">
                {item.description}
              </div>
            </Col>
          </Row>
        ))}
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
  movieNameSize: {
    marginTop: 25,
    maxHeight: 40,
    minHeight: 40,
    textAlign: "center",
    fontSize: "1.4em",
    fontFamily:"fantasy"
  },
};

export default MoviDetails;
