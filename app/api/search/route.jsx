import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function getOptions(currentQuery) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?query=${currentQuery}&include_adult=true&language=en-US`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  return options;
}

export async function GET(req, res) {
  try {
    const currentQuery = req.nextUrl.searchParams.get("query");
    console.log("currentQuery");
    console.log(currentQuery);
    const options = getOptions(currentQuery);
    const response = await axios.request(options);

    return NextResponse.json(response.data, {
      status: 200,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      {
        status: 404,
      }
    );
  }
}
