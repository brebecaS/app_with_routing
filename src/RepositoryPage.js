import { useParams } from "react-router-dom";

const RepositoryPage = () => {
  const params = useParams();
  console.log(params);

  return (
    <h1>
      {params.userName}'s repository: {params.repository}
    </h1>
  );
};

export default RepositoryPage;
