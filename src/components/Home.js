import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>ホーム</h1>
      <div>
        <Link to={`/page1/`}>こちら</Link>
      </div>
    </>
  );
};

export default Home;