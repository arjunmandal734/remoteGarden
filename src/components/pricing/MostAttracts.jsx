import PlantInsightSectionLeft from "./PlantInsightSectionLeft";
import PlantInsightSectionRight from "./PlantInsightSectionRight";

export default function MostAttracts() {
  return (
    <div className="py-20 bg-gradient-to-br from-green-50 via-green-100 to-green-200">
      <h2 className="text-3xl font-bold text-green-800 text-center ">
        Most attractive
      </h2>
      <PlantInsightSectionLeft />
      <PlantInsightSectionRight />
    </div>
  );
}
