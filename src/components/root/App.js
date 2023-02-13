import HomePage from "../homePage/HomePage";
import MovieDetails from "../movieDetails/MoviDetails";
import Navi from "../navi/Navi";
import { Route, Routes } from "react-router-dom";
import { Container } from "reactstrap";
import DramaCategoryPage from "../category/DramaCategoryPage";
import ActionCategoryPage from "../category/ActionCategoryPage";
import SciFiCategoryPage from "../category/SciFiCategoryPage";
import CrimeCategoryPage from "../category/CrimeCategoryPage";
import FantsyCategoryPage from "../category/FantsyCategoryPage";
import AdventureCategoryPage from "../category/AdventureCategoryPage";
import RomanceCategoryPage from "../category/RomanceCategoryPage";
import HistoryCategoryPage from "../category/HistoryCategoryPage";
import BiographyCategoryPage from "../category/BiographyCategoryPage";

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/movie_details" element={<MovieDetails />} />
          <Route path="/aksiyon_filmleri" element={<ActionCategoryPage />} />
          <Route path="/bilim_kurgu_filmleri" element={<SciFiCategoryPage />} />
          <Route path="/drama_filmleri" element={<DramaCategoryPage />} />
          <Route path="/fantastik_filmleri" element={<FantsyCategoryPage />} />
          <Route path="/macera_filmleri" element={<AdventureCategoryPage />} />
          <Route path="/suc_filmleri" element={<CrimeCategoryPage />} />
          <Route path="/romantik_filmler" element={<RomanceCategoryPage />} />
          <Route
            path="/biyografi_filmleri"
            element={<BiographyCategoryPage />}
          />
          <Route path="/tarih_filmleri" element={<HistoryCategoryPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
