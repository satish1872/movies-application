import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function getOptions(currentPageNumber) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPageNumber}&sort_by=popularity.desc`,
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  return options;
}

export async function GET(req, res) {
  try {
    const currentPageNumber = req.nextUrl.searchParams.get("page");
    const options = getOptions(currentPageNumber);
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
