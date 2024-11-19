import { Animation } from "./Animation";
import "./Animation.css";

function ContainerAnimations() {
	const Animationes = [];
	for (let i = 0; i < 200; i++) {
		Animationes.push(<Animation key={`a-${i}`} />);
	}
	return <div className="container">{Animationes}</div>;
}

export { ContainerAnimations };
