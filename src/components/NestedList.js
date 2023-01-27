import { Virtuoso, VirtuosoGrid } from "react-virtuoso";
import React from 'react';


export default function App() {
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
    <div className="App">
      <h1>React virtuoso: Nested</h1>
      <Virtuoso
        style={{
          height: "400px",
          maxWidth: "500px",
          border: "solid 1px red",
          margin: "1rem"
        }}
        totalCount={1000}
        itemContent={(index) => (
          <VirtuosoGrid
            style={{
              height: "100px",
              maxWidth: "500px",
              border: "solid 1px blue",
              margin: "1rem"
            }}
            totalCount={200}
            itemContent={(index) => (
              <div className="internal-item">Item {index}</div>
            )}
            listClassName="horizontal-list"
          />
        )}
      />
    </div>
  );
}