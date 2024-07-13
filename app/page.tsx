import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1 className="text-7xl font-bold ">Home Page</h1>
      <Link href="/about" className="text-xl text-blue-500 inline-block">
        About page link
      </Link>
    </div>
  );
}

export default HomePage;
