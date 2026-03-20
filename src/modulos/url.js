function parsearUrl(urlString) {
  const url = new URL(urlString);

  return {
    host: url.origin,
    pathname: url.pathname,
    parametros: Object.fromEntries(url.searchParams)
  };
}
export default parsearUrl