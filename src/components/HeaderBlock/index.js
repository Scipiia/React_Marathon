import React from "react";
import s from "./HeaderBlock.module.css";
import KillComp from "./img/Ff.jpg";



const HeaderBlock = ({title, hideBackground = false}) => {
	const styleCover = hideBackground ? {backgroundImage: `url(${KillComp})`} : {};
	

	const items = ["Причина 1", "Причина 2", "Причина 3"];
	return (
	<div className={s.cover} style={styleCover}>
			<h1 className={s.header}>{title}</h1>
			<ul className={s.ulul}>
				{items.map(item=> <li className={s.list}>{item}</li>)}
			</ul>
	</div>
	);
}

export default HeaderBlock;

