import React from "react";
import s from"./footer.module.css";

const Footer = ({title}) => {

	return(
		<div className={s.footer}>
			<h1 className={s.header}>{title}</h1>
			<form className={s.forms}>
				<input className={s.inpuut} placeholder="Name"/>
				<input className={s.inpuut} placeholder="Family"/>
				<button className={s.inpuut}>Мы вас ждем</button>
			</form>
		</div>
	)
}

export default Footer;