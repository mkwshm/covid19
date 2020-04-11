export default {
  strategy: 'prefix_except_default',
  detectBrowserLanguage: {
<<<<<<< HEAD
    // useCookie: true,
    // cookieKey: 'i18n_redirected'
=======
    /*
    useCookie: true,
    cookieKey: 'i18n_redirected'
    */
>>>>>>> 5d18f7c47574b6b34b7f14a284d53b7575c3120b
  },
  defaultLocale: 'ja',
  vueI18n: {
    fallbackLocale: 'ja',
    formatFallbackMessages: true
  },
  // vueI18nLoader: true,
  lazy: true,
  langDir: 'assets/locales/',
  locales: [
    {
      code: 'ja',
      name: '日本語',
      iso: 'ja-JP',
      file: 'ja.json',
      description: 'Japanese'
    }
    /*
    {
<<<<<<< HEAD
       code: 'en',
=======
      code: 'en',
>>>>>>> 5d18f7c47574b6b34b7f14a284d53b7575c3120b
      name: 'English',
      iso: 'en-US',
      file: 'en.json',
      description: 'English'
    },
    {
      code: 'zh-cn',
      name: '简体中文',
      iso: 'zh-CN',
      file: 'zh_CN.json',
      description: 'Simplified Chinese'
    },
    {
      code: 'zh-tw',
      name: '繁體中文',
      iso: 'zh-TW',
      file: 'zh_TW.json',
      description: 'Traditional Chinese'
    },
    {
      code: 'ko',
      name: '한국어',
      iso: 'ko-KR',
      file: 'ko.json',
      description: 'Korean'
    }, */
    // #1126, #872 (comment)
    // ポルトガル語は訳が揃っていないため非表示
    // {
    //   code: 'pt-BR',
    //   name: 'Portuguese',
    //   iso: 'pt-BR',
    //   file: 'pt_BR.json',
    //   description: 'Portuguese'
    // },
    /* {
      code: 'ja-basic',
      name: 'やさしい にほんご',
      iso: 'ja-JP',
      file: 'ja-Hira.json',
      description: 'Easy Japanese'
<<<<<<< HEAD
    } */
=======
    }
    */
>>>>>>> 5d18f7c47574b6b34b7f14a284d53b7575c3120b
  ]
}
