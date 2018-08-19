const configFull: ConfigFull = {
  prod: {
    name: 'prod',
    MONGO_URI: 'mongodb://user:user1234@ds123372.mlab.com:23372/movies-test-app',
  },

  test: {
    name: 'test',
    MONGO_URI: 'mongodb://user:user1234@ds123372.mlab.com:23372/movies-test-app',
  },
  dev: {
    name: 'dev',
    MONGO_URI: 'mongodb://user:user1234@ds123372.mlab.com:23372/movies-test-app',
  },
  undefined: {
    name: 'dev',
    MONGO_URI: 'mongodb://user:user1234@ds123372.mlab.com:23372/movies-test-app',
  },
};

const Environment = configFull[process.env.environment];
export { Environment };

declare interface ConfigFull {
  prod: Config;
  dev: Config;
  test: Config;
  undefined: Config;
}

declare interface Config {
  name: string;
  MONGO_URI: string;
}
