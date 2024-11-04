import { useParams } from "react-router-dom";

const RepositoryPage = () => {
  const params = useParams();
  console.log(params);

  return <h1>Repository: {params.repository}</h1>;
};

export default RepositoryPage;
