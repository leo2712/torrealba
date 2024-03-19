async function getCirculares() {
  const res = await fetch("http://localhost:3000/api/getCirculares", {
    method: "GET",
  });
  return res.json();
}
import Button from "./components/Button";
export default async function Home() {
  const circulares = await getCirculares();
  console.log(circulares);
  return (
    <main className="">
      {circulares.map((circular) => {
        const { _id, title, content, fecha } = circular;
        return (
          <div key={_id}>
            <h1>{title}</h1>
            <p>{content}</p>
            <span>{fecha}</span>
          </div>
        );
      })}
      <Button />
    </main>
  );
}
