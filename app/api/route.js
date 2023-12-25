export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city") || "Houston";
  const key = process.env.API_KEY;
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return Response.json(data);
}
