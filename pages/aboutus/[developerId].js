import { useRouter } from "next/router";

function DeveloperId() {
  const router = useRouter();

  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const devId = router.query.developerId;
  console.log(devId);

  let dev = {};
  for (let i = 0; i < details.length; i++) {
    if (details[i].id === devId) {
      dev = details[i];
    }
  }
  console.log(details);
  console.log(dev);

  return <h1>Hi</h1>;
}
export default DeveloperId;
