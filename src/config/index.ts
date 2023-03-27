const { NODE_ENV, MOCKED_SERVER } = process.env;
export const IS_DEV = !NODE_ENV || NODE_ENV === "development";
export const IS_PROD = NODE_ENV && NODE_ENV === "production";
export const ENABLE_MOCKED_SERVER = MOCKED_SERVER;
