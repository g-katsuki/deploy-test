import { Link } from "react-router-dom";
import React from 'react'
import ReactDOM from 'react-dom'
import './../index.css'
import Tes from './../tes'

const Page1 = () => {
  return (
    <div class="container mt-3">
      <h1>ページ</h1>
        <Link to={`/`}>ホームに戻る</Link>
        <Tes />
        <a className="bg-dark text-white display-4" href="https://kumamate.net/vip/">Link</a>
    </div>
  );
};

export default Page1;