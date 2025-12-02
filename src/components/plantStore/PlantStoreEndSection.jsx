export const PlantStoreEndSection = ({hasMore, length}) => {
  return (
    <>
      {!hasMore && length > 0 && (
        <p className="text-center text-gray-500 mt-4">
          🌱 You've reached the end!
        </p>
      )}
    </>
  );
};
