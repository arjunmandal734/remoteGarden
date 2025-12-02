export const LoadingPlantProfilesSection = ({ loading, length }) => {
  return (
    <>
      {loading && length> 0 && (
        <p className="text-center text-green-700 mt-4">
          Loading more plants...
        </p>
      )}
    </>
  );
};
