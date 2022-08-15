import React, { useState, useEffect } from "react";

export const ApiFetch = () => {
	const [str, setStr] = useState([]);

	useEffect(() => {
		// APIをfetchする(呼び出す)
		fetch("./data.json")
			 //レスポンスのデータ形式をjsonに設定
			 .then((res) => res.json())
			 //APIから渡されるレスポンスデータ(data)をstateにセットする
			.then((data) => {
				setStr(data);
			});
	}, []);

	return (
		<div>
		    {}
			<ul>{str.message}</ul>
		</div>
	);
};