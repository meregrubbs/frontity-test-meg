const settings = {
  name: "frontity-test-meg",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development"
    }
  },
  packages: [
    {
      name: "meg-frontity-test"
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://test.frontity.org/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
