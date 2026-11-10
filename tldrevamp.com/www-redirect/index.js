// www.tldrevamp.com -> tldrevamp.com, keeping path and query
export default {
  fetch(request) {
    const url = new URL(request.url);
    url.protocol = "https:";
    url.hostname = "tldrevamp.com";
    return Response.redirect(url.toString(), 301);
  },
};
