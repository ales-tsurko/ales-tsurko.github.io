const htmlmin = require('html-minifier')
const yaml = require("js-yaml");

const now = String(Date.now())

module.exports = function (eleventyConfig) {
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents))

    eleventyConfig.setUseGitIgnore(false)

    eleventyConfig.addWatchTarget('./_tmp/style.css')

    eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })

    eleventyConfig.addPassthroughCopy({
        './node_modules/alpinejs/dist/alpine.js': './js/alpine.js',
    })

    eleventyConfig.addShortcode('version', function () {
        return now
    })

    eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
        if (
            process.env.ELEVENTY_PRODUCTION &&
            outputPath &&
            outputPath.endsWith('.html')
        ) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true,
            })
            return minified
        }

        return content
    })
}
