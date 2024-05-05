const { ModuleFederationPlugin } = require('webpack').container;

const pkg = require('../../package.json');
const commonPaths = require('../config/commonPaths');
const moduleEntry = require('../config/modulesEntry');

const deps = pkg.dependencies;
const REMOTE_HOST = moduleEntry(process.env.NODE_ENV);

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: `${pkg.name}`,
      filename: `remoteEntry.js`,
      exposes: {
        './App': `${commonPaths.entryPath}`,
      },
      remotes: {
        // example: `example@${REMOTE_HOST.EXAMPLE}remoteEntry.js`,
        proj: `proj@${REMOTE_HOST.PROJ}remoteEntry.js`,
      },
      shared: [
        {
          react: {
            singleton: true,
            requiredVersion: deps.react,
            eager: true,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
            eager: true,
          },
          // 'lottie-react': {
          //   singleton: true,
          //   requiredVersion: deps['lottie-react'],
          //   eager: true,
          // },
          // 'react-router-dom': {
          //   singleton: true,
          //   requiredVersion: deps['react-router-dom'],
          //   eager: true,
          // },
          // moment: {
          //   singleton: true,
          //   requiredVersion: deps.moment,
          //   eager: true,
          // },
          // rxjs: {
          //   singleton: true,
          //   requiredVersion: deps.rxjs,
          //   eager: true,
          // },
          // uuid: {
          //   singleton: true,
          //   requiredVersion: deps.uuid,
          //   eager: true,
          // },
          // '@tanstack/react-query': {
          //   singleton: true,
          // },
        },
      ],
    }),
  ],
};
