import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <>
      <h1>ページ</h1>
        <Link to={`/`}>ホームに戻る</Link>
    </>
  );
};

export default Page1;