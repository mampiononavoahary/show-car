export function UrlSite(lien:string = "") {
  if (lien=="") {
    
    return process.env.NEXT_PUBLIC_API_URL ;
  }
    return process.env.NEXT_PUBLIC_API_URL + "/" + lien;
  }
  