async function handle({ event, resolve }) {
  if (event.request.method === "OPTIONS") {
    return new Response(null, {
      headers: {
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
  const response = await resolve(event);
  response.headers.append("Access-Control-Allow-Origin", `*`);
  return response;
}

export { handle };
//# sourceMappingURL=hooks.server-80b7b667.js.map
