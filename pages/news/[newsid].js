import { useRouter } from "next/router";

function NewsList() {
  const router = useRouter();
  const newsId = router.query.newsid; //it will get the dynamic url value, just like useParams;
  //send a request to the backend to get the data for that particular newsId

  return <h1>This is the dynamic news page...</h1>;
}
export default NewsList;
