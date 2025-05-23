import React, { useState } from "react";
import Circulo from "./Amarillo";

const Semaforo = () =>{
	const[rojoActivo, setRojoActivo] = useState(false);
	const rojoClick = () =>{
		setRojoActivo(!rojoActivo);
	}
	const[amarilloActivo, setAmarilloActivo] = useState(false);
	const amarilloClick = () =>{
		setAmarilloActivo(!amarilloActivo);
	}
	
	
	const[verdeActivo, setVerdeActivo] = useState(false);
	const verdeClick = () =>{
		setVerdeActivo(!verdeActivo);
	}

	return (
		<div className="">
			<div className="caja">
				<div className="palo">
					<Circulo luz={rojoActivo?"clickRojo":"formaRoja"} onClick={rojoClick} />
					<Circulo luz={amarilloActivo?"clickAmarillo":"formaAmarilla"} onClick={amarilloClick} />
					<Circulo luz={verdeActivo?"clickVerde":"formaVerde"} onClick={verdeClick} />
				</div>
			</div>
		</div>
	);
};

export default Semaforo;