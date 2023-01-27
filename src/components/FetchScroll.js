import React from "react";
import { Virtuoso } from "react-virtuoso";
import { FaStar } from "react-icons/fa";
import{AcademicCapIcon} from '@heroicons/react/24/solid';


export default function FetchScroll() {
  const [repos, setRepos] = React.useState([]);
  const Endpoint = "https://api.github.com/orgs/Netflix/repos?sort=stargazers_count&direction=asc";
  const fetchRepos = () => {
    fetch(Endpoint)
      .then((res) => res.json())
      .then((res) => {
        setRepos(res);
      });
  };
  React.useEffect(() => {
    fetchRepos();
  }, [repos]);
  return (

    <div className= "py-20 pt-20">
      <h2 className="font-Nunito title-font text-black mb-4">Netflix Repository</h2>
      <Virtuoso
        style={{ height: "1000px" }}
        totalCount={100}
        itemContent={(index) => (
          <div>
            {repos.map((res, i) => {
              return (
                <div className="card p-8 mb-2 bg-white border border-gray-200 rounded-lg
                shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" key={i}>
                <a className="no-underline" href={res.html_url} target="_blank" >
                <span className="card-title">

                    <h5 className="font-semibold text-2xl text-black">{res.name}</h5>
                    <p className="text-base text-black">{res.description}</p>
                    <ul className="list-none">
                    <li className="font-semibold text-lg font-bold text-indigo-600">{res.language}</li>
                    <li className="font-semibold text-sm text-black">Stars: {res.stargazers_count}</li>
                    <li className="font-semibold text-sm text-black">Forks: {res.forks_count}</li>
                    <li className="font-semibold text-sm text-black">Date Created: {res.created_at}</li>
                    </ul>

                </span>
                </a>
                </div>
              );
            })}
          </div>
        )}
      />
    </div>
  );
}