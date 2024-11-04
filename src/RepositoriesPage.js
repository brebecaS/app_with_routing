import { Link } from "react-router-dom";

const RepositoriesPage = () => {
  const repositoriesList = [
    "shop_app",
    "useEffect_exercises",
    "useState_exercises",
  ];

  return (
    <div>
      <h1>Repositories List Page</h1>
      <ul>
        {repositoriesList.map((repo) => (
          <li>
            <Link>{repo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoriesPage;
