module.exports = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		process.env.NODE_ENV === 'production' && require('@fullhuman/postcss-purgecss')({
			content: [
				'./public/index.html',
				'./src/pages/partials/Headbar.js'
			],
			defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
		})
	]
}