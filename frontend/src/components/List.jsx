import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList } from '../feature/DataSlice';

const List = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchList());
	}, [dispatch])

	// const state = useSelector((state) => state.dataReducer.data);
  // console.log(state);

	const state = 
	[
			{
					"id": 1,
					"name": "Mount Everest",
					"description": "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas.",
					"height": "29,031.7",
					"image": "https://th.bing.com/th/id/OIP.aBpqe2l_nTMLb0-0648k1gHaE7?w=244&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"created_at": "2022-10-06T06:10:51.059841Z"
			},
			{
					"id": 2,
					"name": "Aoraki Mt. Cook",
					"description": "The tallest mountain in New Zealand. Located in the middle of the Southern Alps mountain chain in western Canterbury, the peak itself sits within a national park of the same name.",
					"height": "12,217",
					"image": "https://th.bing.com/th/id/OIP.m13pKgV9Ebt2x_uwD3_0kgHaE-?w=282&h=189&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"created_at": "2022-10-06T06:15:43.925210Z"
			},
			{
					"id": 3,
					"name": "Matterhorn",
					"description": "French Mont Cervin, one of the best-known mountains in the Alps, straddling the frontier between Switzerland and Italy, 10 km southwest of the village of Zermatt, Switzerland.",
					"height": "14,692",
					"image": "https://th.bing.com/th/id/OIP.-C2mWzjUA2aPHm5iPJvycAHaE6?w=280&h=186&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"created_at": "2022-10-06T06:18:27.631952Z"
			},
			{
					"id": 4,
					"name": "K2",
					"description": "Also called Mount Chogori, located on the border between China and Pakistan, is second only to Mount Everest in the world in terms of height above sea level.",
					"height": "28,253",
					"image": "https://th.bing.com/th/id/OIP.FDVNalRogv-JhgjQzJXB0wHaEo?w=305&h=190&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"created_at": "2022-10-06T06:23:14.211385Z"
			},
			{
					"id": 5,
					"name": "Annapurna",
					"description": "Annapurna I Main is the tenth tallest mountain peak in the world. Located in Nepal, Annapurna I lies on the Annapurna mountain range in the Himalayas",
					"height": "26,545",
					"image": "https://th.bing.com/th/id/OIP.5n-h6sV_X9qTaElWdJeUlQHaE8?w=274&h=183&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"created_at": "2022-10-06T06:24:31.909398Z"
			},
			{
					"id": 6,
					"name": "Mount Olympus",
					"description": "Mount Olympus is the most prominent mountain in the Olympic Mountains of western Washington state.it is located on the Olympic Peninsula",
					"height": "9,800",
					"image": "https://th.bing.com/th/id/OIP.pZAEHwHwL8ZFuTjyOJIYYQHaFb?w=252&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"created_at": "2022-10-06T06:26:42.118095Z"
			},
			{
					"id": 7,
					"name": "Mount El'brus",
					"description": "Located in southwest Russia and is part of the Caucasus Mountains. It is the highest point in Russia as well as the highest point in all of Europe",
					"height": "18510",
					"image": "https://th.bing.com/th/id/OIP.xkf0OYZszra-l_VRV_4XBQHaE8?w=233&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"created_at": "2022-10-06T06:29:46.983580Z"
			},
			{
					"id": 8,
					"name": "Ben Nevis",
					"description": "Ben Nevis is the highest mountain in Scotland, the United Kingdom and the British Isles",
					"height": "4,411",
					"image": "https://th.bing.com/th/id/OIP.kBkzbWxp2Qnke61pjdpYCQHaFj?w=231&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"created_at": "2022-10-06T06:31:02.534903Z"
			},
			{
					"id": 9,
					"name": "Table Mountain",
					"description": "The most incredible of the table top mountains in the world. Located beside the Cape Town, South Africa. Its primary feature is a level plateau approximately 3 km from side to side, surrounded by steep cliffs",
					"height": "2,000",
					"image": "https://th.bing.com/th/id/OIP.tdmbRaAN_WSuRMQ0LJhjdAHaE2?w=235&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"created_at": "2022-10-06T06:34:53.264132Z"
			},
			{
					"id": 10,
					"name": "Mount Kailash",
					"description": "Mount Kailash - Center of the World As the main peak of the Gandise Mountains, is the most famous holy mountain in Asian history. With 4 distinct sides, the gigantic pyramid has a round cap covered in eternal snow and ice.",
					"height": "22,028",
					"image": "https://th.bing.com/th/id/OIP.wqXX9wuYZzbgLm22jQmWrgHaE9?w=263&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"created_at": "2022-10-06T06:37:18.788488Z"
			},
			{
					"id": 11,
					"name": "Fitz Roy",
					"description": "Also known as Cerro Chaltén, Cerro Fitz Roy, or simply Mount Fitz Roy is a mountain in Patagonia, on the border between Argentina and Chile. It is located in the Southern Patagonian Ice Field, near El Chaltén village and Viedma Lake.",
					"height": "11,171",
					"image": "https://www.bing.com/th?id=OIP.zzxrbGw4A5JFop3G06xKRgHaE8&w=156&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
					"created_at": "2022-10-06T06:39:15.761257Z"
			},
			{
					"id": 12,
					"name": "Mount Kilimanjaro",
					"description": "As the tallest freestanding mountain in the world. Freestanding means Kilimanjaro is a standalone mountain and not part of a mountain range like the Himalayas or the Alps. the summit of Mount Kilimanjaro is called Uhuru Peak.",
					"height": "19,341",
					"image": "https://th.bing.com/th/id/OIP.gIK5v3pvD46-kzWDeMYovAHaE8?w=270&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"created_at": "2022-10-06T06:41:52.943672Z"
			},
			{
					"id": 13,
					"name": "Mont Blanc",
					"description": "The highest mountain in Western Europe, is without a doubt one of the most famous mountains in the world, the cradle of Mountaineering.",
					"height": "15,774",
					"image": "https://th.bing.com/th/id/OIP.UBYH3oKoQDSMVdN2pAVyUAHaE8?w=291&h=194&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"created_at": "2022-10-06T06:43:25.952654Z"
			},
			{
					"id": 14,
					"name": "Mount Hua",
					"description": "Mount Hua or Huashan is a mountain located near the city of Huayin in Shaanxi province, about 120 kilometres east of Xi'an. It is the western mountain of the Five Great Mountains of China, and has a long history of religious significance",
					"height": "7,067",
					"image": "https://www.bing.com/th?id=ODL.ff0bfc368dbd664ff26ad87f6bc5044b&w=143&h=198&c=12&rs=1&qlt=99&pcl=faf9f7&o=6&dpr=1.25&pid=13.1",
					"created_at": "2022-10-06T06:45:22.189256Z"
			},
			{
					"id": 15,
					"name": "Licancabur",
					"description": "Licancabur is one of the most sacred of all mountains in the region. The mountain was particularly attractive to the Incas because of its almost-perfect symmetrical cone shape. The Incas used the sacred mountain to perform sacrifices and ruins can still be found near the summit",
					"height": "19,409",
					"image": "https://www.bing.com/th?id=OIP.N-LAP1S5oiCXlSzm3NLqnQHaE8&w=200&h=133&rs=1&qlt=80&o=6&dpr=1.25&pid=3.1",
					"created_at": "2022-10-06T06:46:28.289956Z"
			},
			{
					"id": 16,
					"name": "Mount Kinabalu",
					"description": "Mount Kinabalu along with other upland areas of the Crocker Range is known worldwide for its biodiversity with plants of Himalayan, Australasian, and Indomalayan origin. A recent botanical survey of the mountain estimated a staggering 5,000 to 6,000 plant species",
					"height": "13,435",
					"image": "https://www.bing.com/th?id=OIP.SR-aJWyoQS9pTnm-LecyZwHaDi&w=192&h=100&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2",
					"created_at": "2022-10-06T06:52:23.805965Z"
			},
			{
					"id": 17,
					"name": "Mount Fuji",
					"description": "Mount Fuji or Fugaku, located on the island of Honshū, is the highest mountain in Japan. It is the second-highest volcano located on an island in Asia (after Mount Kerinci on the island of Sumatra), and seventh-highest peak of an island on Earth",
					"height": "12,389",
					"image": "https://th.bing.com/th/id/OIP.dh9iRKROsIWuXqzrsKzqigHaEK?w=322&h=181&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"created_at": "2022-10-06T06:54:51.700877Z"
			},
			{
					"id": 18,
					"name": "Mount Kenya",
					"description": "Mount Kenya is the highest mountain within Kenya and the second highest in Africa, just marginally eclipsed by Kilimanjaro in Tanzania. The highest peaks are Batian, Nelion and the most popular Point Lenana",
					"height": "17,057",
					"image": "https://th.bing.com/th/id/OIP.Q1X-7vzADIgyP0MNOET2bwHaE8?w=247&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
					"created_at": "2022-10-06T06:56:34.694040Z"
			},
			{
					"id": 19,
					"name": "Mount Huangshan",
					"description": "Yellow Mountain or Mt. Huangshan in east China's Anhui province is one of China's ten best-known scenic spots. It is characterized by the four wonders, namely, odd-shaped pines, grotesque rock formation, seas of clouds and crystal-clear hot springs. It is celebrated for having all the features of mountain scenery.",
					"height": "3250",
					"image": "https://www.bing.com/th?id=OIP.iU4yERAo7lfJW8gH1r0epgHaEw&w=200&h=128&rs=1&qlt=80&o=6&dpr=1.25&pid=3.1",
					"created_at": "2022-10-06T07:01:09.237814Z"
			},
			{
					"id": 20,
					"name": "Tre Cime di Lavaredo",
					"description": "The Tre Cime di Lavaredo are the most famous and symbolic mountain group in the Dolomites. Photographed, admired and known all over the world for their unique formation and the panorama they offer, they have also been a UNESCO World Heriatage Site since 2009",
					"height": "9,839",
					"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/2019_Tre_Cime.jpg/408px-2019_Tre_Cime.jpg",
					"created_at": "2022-10-06T07:02:14.496699Z"
			}
	]

	return (
		<div className="bg-slate-800">
			<h2 className="text-2xl text-slate-500 font-bold mt-12">Heading...</h2>
			{(state !== undefined)? (
				<div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center my-10">
					{state.map((item) => (
						<div key={item.id} className="w-64 h-64 rounded shadow-2xl my-6">
							<div className="w-48 h-36 bg-slate-700 mx-auto border m-2">
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
