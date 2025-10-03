import ProductDetails from "../../PageParts/ProductDetails";

const samplePlant = {
  imageUrl: "/plantImages/aloe-vera.png",
  name: "Aloe Vera",
  scientificName: "Aloe barbadensis miller",
  price: 120,
  tags: ["Medicinal", "Indoor"],
  available: true,
  growthType: "Easy",
  growthDuration: "2–3 months",
};

export default function CheckoutSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 px-6 py-10">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-6">🧾 Checkout</h1>
      <ProductDetails plant={samplePlant} />
    </div>
  );
}