import { defineConfig } from 'vitepress'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ydhapp",
  titleTemplate: true,
  // description: "myweb",
  themeConfig: {
    
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'about', link: '/markdown-examples' }
    // ],
    siteTitle: false,
    aside: false,
     //sidebar: [
       // {
       //   text: 'Examples',
     //     items: [
     //       { text: 'Markdown Examples', link: '/markdown-examples' },
        //    { text: 'Runtime API Examples', link: '/api-examples' }
          //]
        //}
      //],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
