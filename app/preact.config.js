import preactCozy from 'preact-cli-cozy';

export default (config, env, helpers) => {
  config = preactCozy(config, helpers);
  return config;
};