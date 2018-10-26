import * as path from 'path';

const SRC = path.resolve(__dirname, 'src')

export default {
    typescript: true,
    propsParser: false,
    theme: 'src/index',
    themeConfig: {
        colors: {
          primary: '#00B9E4',
          sidebarBg: '#193059',
          sidebarText: '#FFFFFF',
          footerText: '#FFFFFF'
        },
        logo: {
          src: 'https://ultimarketingweb.blob.core.windows.net/static/ultipro-connect/marketplace/cornerstone/cornerstone-logo-white-large.png',
          width: 220
        }
      },
      modifyBundlerConfig: (config) => {
        config.module.rules = [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader', options: { singleton: true } },
                    { loader: 'css-loader', options: { importLoaders: 1 } }
                ]
            },
            ...config.module.rules
        ]
        config.resolve.alias = Object.assign({}, config.resolve.alias, {
            '@ui': `${SRC}/components/ui`,
            '@shared': `${SRC}/components/shared`,
            '@styles': `${SRC}/styles`,
            '@utils': `${SRC}/utils`,
          })
        return config;
      }
}