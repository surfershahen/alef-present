export async function POST(req: Request) {
  const data = await req.json();
  const scriptUrl = "https://script.google.com/macros/s/AKfycbxq8Ws4hAocxn2mWyxd6tV-MSrPnYxemBHxgIqUmLfpfPA8Y-3Dl0YO0ku_Eccof_Lwdw/exec"; // TODO: Replace with your actual URL

  const res = await fetch(scriptUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    return new Response("Failed to send to Google Sheets", { status: 500 });
  }

  return new Response("OK");
} 