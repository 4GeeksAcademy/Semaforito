import React, { useState } from "react";
import Circulo from "./Amarillo";

const Semaforo = () =>{
	const[activo, setActivo] = useState(false);
	const luzClick = (color) =>{
		setActivo(color);
	}


	return (
		<div className="">
			<div className="caja">
				<div className="palo">
					<Circulo luz={activo=="rojo" ?"clickRojo":"formaRoja"} onClick={()=>luzClick("rojo")} />
					<Circulo luz={activo=="amarillo"?"clickAmarillo":"formaAmarilla"} onClick={()=>luzClick("amarillo")} />
					<Circulo luz={activo=="verde"?"clickVerde":"formaVerde"} onClick={()=>luzClick("verde")} />
				</div>
			</div>
		</div>
	);
};

export default Semaforo;