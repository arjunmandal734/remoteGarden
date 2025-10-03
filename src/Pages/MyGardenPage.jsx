import MyGarden from "../PageParts/MyGarden";
import { GardenProvider } from "../context/GardenContext";

export default function MyGardenPage() {
  return (
    <GardenProvider>
      <MyGarden />
    </GardenProvider>
  );
}
