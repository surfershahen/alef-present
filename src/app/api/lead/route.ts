export async function POST(req: Request) {
  const data = await req.json();
  console.log("Sending lead data to Google Sheets:", data);
  
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzzcrdNrwqgCZBhmWZ2vWvMgzHNAU3npxsyX5XpiS7YeYwiGWK4-c306bDtseN2EG64/exec"; // TODO: Replace with your actual URL

  const res = await fetch(scriptUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    console.error("Failed to send to Google Sheets:", res.status, res.statusText);
    return new Response("Failed to send to Google Sheets", { status: 500 });
  }

  console.log("Successfully sent lead data to Google Sheets");
  return new Response("OK");
} 