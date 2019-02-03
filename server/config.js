if (process.argv.includes("test"))
{
  var CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wx13a399684987dfa0',

    // 微信小程序 App Secret
    appSecret: 'be10505fca52d7b8a90067a810202064',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: false,
    qcloudAppId: '您的腾讯云 AppID',
    qcloudSecretId: '您的腾讯云 SecretId',
    qcloudSecretKey: '您的腾讯云 SecretKey',
    tunnelServerUrl: '',
    tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
    serverHost: "localhost",

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      db: 'cAuth',
      pass: '',
      char: 'utf8mb4'
    },

    cos: {
      /**
       * 地区简称
       * @查看 https://cloud.tencent.com/document/product/436/6224
       */
      region: 'ap-guangzhou',
      // Bucket 名称
      fileBucket: 'qcloudtest',
      // 文件夹
      uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
  };
} else {
  var CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wx13a399684987dfa0',

    // 微信小程序 App Secret
    appSecret: 'be10505fca52d7b8a90067a810202064',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: false,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      db: 'cAuth',
      pass: 'wx13a399684987dfa0',
      char: 'utf8mb4'
    },

    cos: {
      /**
       * 地区简称
       * @查看 https://cloud.tencent.com/document/product/436/6224
       */
      region: 'ap-guangzhou',
      // Bucket 名称
      fileBucket: 'qcloudtest',
      // 文件夹
      uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh'
  };
}

module.exports = CONF
