export default () => ({ // eslint-disable-line

  // link file UUID
  id: '2225074e-e096-11e5-96b7-9f778349aba2',

  // canonical URL of the published page
  // https://ig.ft.com/sites/isa-calculator/ get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/isa-calculator/',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date('2016-03-02'),

  headline: 'Calculate the hidden cost of fund fees',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'Fund managers’ fees can make a huge difference to wealth over the long term. Our calculator helps you work out just how much.',

  topic: {
    name: 'Personal Finance',
    url: 'https://www.ft.com/personal-finance',
  },

  relatedArticle: {
    text: '',
    url: '',
  },

  mainImage: {
    title: '',
    description: '',
    url: '',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Naomi Rovnick', url: 'https://www.ft.com/stream/authorsId/Q0ItMDMzNDMwNg==-QXV0aG9ycw==' },
    { name: 'Bob Haslett', url: 'https://www.ft.com/stream/authorsId/Q0ItQkg1NDMyMQ==-QXV0aG9ycw==' },
    { name: 'Gavin Jackson', url: 'https://www.ft.com/stream/authorsId/Q0ItMDQ0MTYwMw==-QXV0aG9ycw=='},
    { name: 'Martin Stabe', url: 'https://www.ft.com/stream/authorsId/Q0ItTVM1NDMyMQ==-QXV0aG9ycw==' },
  ],

  // Appears in the HTML <title>
  title: 'Calculate the hidden cost of fund fees',

  // meta data
  description: 'Calculate the hidden cost of fund fees',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  // socialImage: '',
  // socialHeadline: '',
  // socialSummary:  '',

  // TWITTER
  // twitterImage: '',
  // twitterCreator: '@individual's_account',
  // tweetText:  '',
  // twitterHeadline:  '',

  // FACEBOOK
  // facebookImage: '',
  // facebookHeadline: '',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
