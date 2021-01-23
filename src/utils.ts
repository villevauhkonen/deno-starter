export const parseBearerToken = (authHeader: string): string => {
  const bearerTokenParts = authHeader.split(" ");
  if (
    bearerTokenParts[1] && bearerTokenParts.length === 2 &&
    bearerTokenParts[0].toLowerCase() === "bearer"
  ) {
    return bearerTokenParts[1];
  }
  throw new Error("Header format not valid");
};
