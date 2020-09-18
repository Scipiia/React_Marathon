import React from "react";
import s from "./content.module.css"

const Content = ({title}) => {
	const items = ["Причина 1", "Причина 2", "Причина 3"];
	
	return (
	<div className={s.cover}>
			<h1 className={s.header}>{title}</h1>
			<ul className={s.ulul}>
				{items.map(item=> <li className={s.list}>{item}</li>)}
			</ul>
	</div>
	);
}
export default Content;