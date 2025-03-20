import { NextResponse } from "next/server";
import data from "./data.json";

export async function GET() {
	try {
		return NextResponse.json(
			{ photos: data, count: data.length },
			{
				headers: {
					"Cache-Control":
						"public, s-maxage=3600, stale-while-revalidate=86400",
				},
			},
		);
	} catch (error) {
		console.error("Error reading photos directory:", error);
		return NextResponse.json(
			{
				error: "Failed to read photos directory",
				images: [],
			},
			{ status: 500 },
		);
	}
}
