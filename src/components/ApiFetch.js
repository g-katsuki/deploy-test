import React, { useState, useEffect } from "react";

export const ApiFetch = () => {
	const [data, setData] = useState({message:'', data:[]})

	useEffect(() => {
		// APIをfetchする(呼び出す)
		fetch("./data.json")
			 //レスポンスのデータ形式をjsonに設定
			 .then((res) => res.json())
			 //APIから渡されるレスポンスデータ(data)をstateにセットする
			.then((data) => {
				setData(data);
			});
	}, []);

	return (
		<div className="alert alert-primary text-center">
        <h5 className="mb-4">{data.message}</h5>
        <table className="table bg-white">
          <thead className="table-dark">
            <tr><th>Name</th><th>Mail</th><th>Age</th></tr>
          </thead>
          <tbody>
            {data.data.map((value, key)=> (
              <tr key={key}>
                <th>{value.name}</th>
                <td>{value.mail}</td>
                <td>{value.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
	);
};