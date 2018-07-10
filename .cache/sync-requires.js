// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("C:/Users/webdev2/Documents/travlplacs/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-post-js": preferDefault(require("C:\\Users\\webdev2\\Documents\\travlplacs\\src\\templates\\post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("C:\\Users\\webdev2\\Documents\\travlplacs\\.cache\\dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\webdev2\\Documents\\travlplacs\\src\\pages\\404.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\webdev2\\Documents\\travlplacs\\src\\pages\\index.js")),
  "component---src-pages-page-2-js": preferDefault(require("C:\\Users\\webdev2\\Documents\\travlplacs\\src\\pages\\page-2.js")),
  "component---src-pages-page-3-js": preferDefault(require("C:\\Users\\webdev2\\Documents\\travlplacs\\src\\pages\\page-3.js"))
}

exports.json = {
  "layout-index.json": require("C:\\Users\\webdev2\\Documents\\travlplacs\\.cache\\json\\layout-index.json"),
  "first-post.json": require("C:\\Users\\webdev2\\Documents\\travlplacs\\.cache\\json\\first-post.json"),
  "2nd-post.json": require("C:\\Users\\webdev2\\Documents\\travlplacs\\.cache\\json\\2nd-post.json"),
  "dev-404-page.json": require("C:\\Users\\webdev2\\Documents\\travlplacs\\.cache\\json\\dev-404-page.json"),
  "404.json": require("C:\\Users\\webdev2\\Documents\\travlplacs\\.cache\\json\\404.json"),
  "index.json": require("C:\\Users\\webdev2\\Documents\\travlplacs\\.cache\\json\\index.json"),
  "page-2.json": require("C:\\Users\\webdev2\\Documents\\travlplacs\\.cache\\json\\page-2.json"),
  "page-3.json": require("C:\\Users\\webdev2\\Documents\\travlplacs\\.cache\\json\\page-3.json"),
  "404-html.json": require("C:\\Users\\webdev2\\Documents\\travlplacs\\.cache\\json\\404-html.json")
}