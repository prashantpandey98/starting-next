import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>This is the news page</h1>;
      <ul>
        <li>
          <Link href="/news/next-js-is-a-great-framework">
            NEXT JS is a Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  );
}
export default NewsPage;
