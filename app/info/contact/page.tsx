import Link from "next/link";

function ContactPage() {
  return (
    <div>
      <h1 className="text-7xl font-bold underline">Contact Page</h1>
      <Link href="/" className="text-xl text-blue-500 inline-block">
        back Home
      </Link>
    </div>
  );
}

export default ContactPage;
