import React from 'react';
import { Link } from 'react-router-dom';
import svg1 from '../assets/4.svg';
import svg2 from '../assets/10.svg';

const Home = () => {
	return (
		<div className="text-slate-100">
			<h2 className="text-3xl py-10 text-bold">Lorem ipsum</h2>
			<div className="flex flex-col-reverse justify-center items-center">
				<div className="text-lg text-slate-300">
					<p className="px-2 my-4">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam minus, aut est, facere ipsa veritatis tempora impedit reiciendis id provident nobis praesentium asperiores a. Architecto perspiciatis at impedit recusandae?
					</p>
				<button type="button" className="my-4 border py-2 px-4 rounded text-1xl bg-slate-200 text-slate-900 font-bold">
					<Link to="/list">Explore</Link>
				</button>
				</div>
				<div className="w-80 h-auto">
					<img src={svg1} alt="svg" className="w-full h-full" />
				</div>
			</div>
			<hr className="border-b border-slate-500 mx-6 my-10" />
			<h3 className="text-slate-400 text-2xl">About</h3>
			<div className="flex flex-col justify-center items-center">
				<div className="w-80 h-auto">
					<img src={svg2} alt="svg" className="w-full" />
				</div>
				<p className="text-slate-300 mx-2">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi non exercitationem aliquam sequi assumenda dolorum aut eaque veritatis, quos id tempore adipisci iusto maiores eveniet consequuntur doloremque? Magnam, quisquam obcaecati.
				</p>
			</div>
		</div>
	);
};

export default Home;
