import { Link, useParams } from "react-router-dom";
import { users } from "./constants";

const RepositoriesPage = () => {
  const params = useParams();

  const repositoriesList = users.find(
    (user) => user.userName === params.userName
  ).repositories;

  return (
    <div>
      <h1>{params.userName}'s repositories List Page</h1>
      <ul>
        {repositoriesList.map((repo) => (
          <li key={repo}>
            <Link to={"/repositories/" + params.userName + "/" + repo}>
              {repo}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoriesPage;
