export default function Home() {
  return (
    <div className="grid grid-rows-[2fr_2fr_2fr_2fr] grid-cols-[2fr_2fr_2fr] h-[100%] relative ">
      <div className="col-start-1 col-end-2 row-start-1 row-end-4 bg-emerald-700"></div>
      <div className="col-start-2 col-end-4 row-start-1 row-end-1 bg-orange-700"></div>
      <div className="col-start-2 col-end-3 row-start-2 row-end-4 bg-green-950"></div>
      <div className="col-start-3 col-end-3 row-start-2 row-end-5 bg-orange-500"></div>
      <div className="col-start-1 col-end-3 row-start-4 row-end-4 bg-violet-300"></div>
    </div>
  );
}
