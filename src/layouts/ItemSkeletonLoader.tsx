const ItemSkeletonLoader = () => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-3 animate-pulse gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className=" bg-gray-400 w-96 h-72 rounded-md "></div>
        ))}
      </div>
    </>
  );
};

export default ItemSkeletonLoader;
