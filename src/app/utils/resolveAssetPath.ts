import path from "node:path";

function resolveAssetPath(relativeDirectory: string) {
	const dirRelativeToPublicFolder = relativeDirectory;
	return path.resolve("./public", dirRelativeToPublicFolder);
}

export default resolveAssetPath;
