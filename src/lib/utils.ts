// const base = "https://pragnomos-club.github.io";
const base = "#";

export function route(_path: string) {
	const path = _path.startsWith("/") ? _path.substring(1) : _path;
	return `${base}/${path}`;
}
