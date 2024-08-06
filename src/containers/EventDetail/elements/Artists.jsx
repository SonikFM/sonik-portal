import Artist from "./Artist";

const Artists = () => {
  return (
    <div className="grid gap-4 overflow-auto sm:grid-cols-2 md:grid-cols-3 h-72 hide-scroll">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(i => {
        return <Artist key={i} />;
      })}
    </div>
  );
};

export default Artists;
