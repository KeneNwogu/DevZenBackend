const HttpStatus = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  NOT_WHITELISTED: 409,
  UNPROCESSABLE: 422,
  INTERNAL_SERVER_ERROR: 500,
} as const;

const HttpHeadersContentType = {
  OCTECT_STREAM: "application/octet-stream",
} as const;

export { HttpStatus, HttpHeadersContentType };