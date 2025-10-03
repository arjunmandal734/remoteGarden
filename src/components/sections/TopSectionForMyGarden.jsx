

export default function TopSectionForMyGarden({title = "My Garden Plants", titleSub = "Manage and monitor your planted beauties" }) {
  return (
    <div className="pt-10 px-6">
       <div className="text-center mt-10 mb-6">
        <h2 className="text-2xl font-bold text-green-800 mb-3">🌿 Garden Health Overview</h2>
        <p className="text-sm text-gray-600">
          {titleSub}
        </p>
      </div>
    </div>
  );
}

