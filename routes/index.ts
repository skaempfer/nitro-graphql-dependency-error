import { version } from "graphql";

export default eventHandler(() => {
  return {
    nitro: 'Is Awesome!',
    graphql_version: version,
  };
})
