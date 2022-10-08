import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList } from '../feature/DataSlice';

const List = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchList());
	}, [dispatch])

	const state = useSelector((state) => state.dataReducer.data);

	return (
		<div className="bg-slate-800">
			<h2 className="text-2xl text-slate-500 font-bold mt-12">Heading</h2>
			{(state !== undefined)? (
				<div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center my-10">
					{state.map((item) => (
						<div key={item.id} className="w-64 h-64 md:w-72 md:h-72 md:bg-slate-700 rounded shadow-2xl md:mx-10 my-6">
							<div className="w-48 h-36 bg-slate-700 mx-auto border m-2 md:mt-4">
							  <img src={item.image} alt={item.neme} className="w-full h-full" />
							</div>
							<p className="text-xl font-semibold text-slate-400">{item.name}</p>
							<p className="mx-8 text-xs text-slate-200 my-2 text-left mx-2
							truncate ...">{item.description}</p>
						</div>
					))}
				</div>
			) : <p className="text-red-500 flex justify-center items-center w-screen h-screen text-xl">Something went wrong try again :(</p>}
		</div>
	);
};

export default List;
