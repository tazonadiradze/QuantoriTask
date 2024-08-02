export default function Home() {
  return (
    <div className="grid grid-rows-[2fr_2fr_2fr_2fr] grid-cols-[2fr_2fr_2fr] h-[100%]">
      <div className="col-start-1 col-end-2 row-start-1 row-end-4 bg-green-500">
        green
      </div>
      <div className="col-start-2 col-end-4 row-start-1 row-end-1 bg-red-500">
        brown
      </div>
      <div className="col-start-2 col-end-3 row-start-2 row-end-4 bg-black">
        dark green
      </div>
      <div className="col-start-3 col-end-3 row-start-2 row-end-5 bg-orange-500">
        orange
      </div>
      <div className="col-start-1 col-end-3 row-start-4 row-end-4 bg-blue-500">
        bliue
      </div>
    </div>
  );
}
