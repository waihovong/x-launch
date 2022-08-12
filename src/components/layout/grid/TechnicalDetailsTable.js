export default function TechnicalDetailsTable({height, diameter, mass, leo, gto, mars, stages, image}) {
	return (
		<div className="grid -slate-400 grid-cols-2 grid-flow-row  max-w-xl border-none">
			<div className=" p-9">
				<p className="uppercase text-sm font-bold pb-2">Stages</p>
				<span className="font-semibold text-xl">{stages}</span>
			</div>
			<div className=" p-9">
				<p className="uppercase text-sm font-bold pb-2">Height</p>
				<span className="font-semibold text-xl">{height}</span>
			</div>
			<div className=" p-9">
				<p className="uppercase text-sm font-bold pb-2">Diameter</p>
				<span className="font-semibold text-xl">{diameter}</span>
			</div>
			<div className=" p-9">
				<p className="uppercase text-sm font-bold pb-2">Mass</p>
				<span className="font-semibold text-xl">{mass}</span>
			</div>
			<div className=" p-9">
				<p className="uppercase text-sm font-bold pb-2">Payload to LEO </p>
				<span className="font-semibold text-xl">{leo}</span>
			</div>
			<div className=" p-9">
				<p className="uppercase text-sm font-bold pb-2">Payload to GTO</p>
				<span className="font-semibold text-xl">{gto}</span>
			</div>
			<div className=" p-9 h-48">
				<p className="uppercase text-sm font-bold pb-2">Payload to Mars</p>
				<span className="font-semibold text-xl">{mars}</span>
			</div>
			<div className="">
				<img className="object-cover h-48 w-96 rounded-br-3xl" src={image}/>
			</div>
		</div>
	)
}
