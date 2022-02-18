const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const deps = require('./package.json').dependencies

const mfa = {
  development: {
    publicPath: '/',
    remotes: {
      userProfile: 'userProfile@http://localhost:9903/remoteEntry.js'
    }
  }
}

module.exports = {
  devServer: {
    port: 9900
  },
  publicPath: mfa[process.env.NODE_ENV].publicPath,
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'host',
        filename: 'remoteEntry.js',
        remotes: mfa[process.env.NODE_ENV].remotes,
        exposes: {},
        shared: {
          vue: {
            requiredVersion: deps.vue,
            eager: true,
            singleton: true
          },
          'vue-class-component': {
            requiredVersion: deps['vue-class-component'],
            eager: true,
            singleton: true
          },
          'vue-router': {
            requiredVersion: deps['vue-router'],
            eager: true,
            singleton: true
          },
          'vuex': {
            requiredVersion: deps.vuex,
            eager: true,
            singleton: true
          },
          'element-ui': {
            requiredVersion: deps['element-ui'],
            eager: true,
            singleton: true
          },
          'vuetify': {
            requiredVersion: deps.vuetify,
            eager: true,
            singleton: false
          },
          'axios': {
            requiredVersion: deps.axios,
            eager: true,
            singleton: true
          },
          'moment': {
            requiredVersion: deps.moment,
            eager: true,
            singleton: true
          },
          'moment-timezone': {
            requiredVersion: deps['moment-timezone'],
            eager: true,
            singleton: true
          },
          'vuelidate': {
            requiredVersion: deps.vuelidate,
            eager: true,
            singleton: true
          },
        },
      })]
  }
}
