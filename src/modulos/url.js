function parsearUrl(urlString) {
  try {
    const url = new URL(urlString);

    return {
      host: url.origin,
      pathname: url.pathname,
      parametros: Object.fromEntries(url.searchParams)
    };

  } catch (error) {
    console.error("Error al parsear la URL:", error.message);
    return null; // importante para que no rompa
  }
}

export default parsearUrl;