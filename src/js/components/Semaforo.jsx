import React from "react";


import Circulo from "./Amarillo";

//create your first component
const Semaforo = () => {
	return (
		<div className="">
			<div className="caja">
				<Circulo luz="formaRoja" />
				<Circulo luz="formaAmarilla" />
				<Circulo luz="formaVerde" />
			</div>
		</div>
	);
};

export default Semaforo;