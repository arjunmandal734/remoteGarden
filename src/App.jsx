import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopNavbar from "./components/navBar/TopNavbar";
import Footer from "./components/footer/Footer";
import PricingPage from "./Pages/PricingPage";
import DashboardPage from "./Pages/DashboardPage";
import MyGardenPage from "./Pages/MyGardenPage";
import NotFound from "./Pages/NotFoundPage";
import PlantStore from "./UI/PlantStore";
//import CheckoutSection from "./components/ProductDetailsAndCkeckout/CheckoutSection"
import ProductDetails from "./PageParts/ProductDetails";
import GardenPlantDashboard from "./PageParts/GardenPlantDashboard";
import GardenPlantDashboardPage from "./Pages/GardenPlantDashboardPage";




function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopNavbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/garden" element={<MyGardenPage />} />
            <Route path="/plantstore" element={<PlantStore />} />
            <Route
              path="/gardenplantdashboard"
              element={<GardenPlantDashboardPage />}
            />
            <Route
              path="/Checkout"
              element={
                <ProductDetails
                  plant={{
                    imageUrl: "/plantInages/plant4.png",
                    name: "Aloe Vera",
                    scientificName: "Aloe barbadensis miller",
                    price: 120,
                    tags: ["Medicinal", "Indoor"],
                    available: true,
                    growthType: "Easy",
                    growthDuration: "2–3 months",
                  }}
                />
              }
            />
            <Route path="/error" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
