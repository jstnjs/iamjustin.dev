const EleventyFetch = require("@11ty/eleventy-fetch");

// module.exports = async function() {
// 	try {
//     let url = "https://dev.to/api/articles/me/unpublished";

// 		let posts = await EleventyFetch(url, {
// 			duration: "1d",
// 			type: "json",
//             fetchOptions: {
//                 headers: {
//                     "api-key": process.env.DEVTO_API_KEY
//                 }
//             }
// 		});

//         return posts;
// 	} catch(e) {
//         console.log('Failed to fetch articles. Return empty array.');

// 		return [];
// 	}
// };

module.exports = function() {
	return [
		{
			title: "A blog to test 123",
			description: 'Pretty short descriptiion',
			published_at: '2021-10-16T23:32:59Z',
			slug: "post-1"
		},
		{
			title: "A blog to test",
			description: 'Pretty short descriptiion. This is a longer description that eventually need to be a excerpt. For now Ill use it like this..',
			published_at: '',
			slug: "post-2"
		},
		{
			title: "A blog to test",
			description: 'Pretty short descriptiion',
			published_at: '2020-07-04T22:51:43Z',
			slug: "post-3"
		},
		{
			title: "A blog to test",
			description: 'Pretty short descriptiion',
			published_at: '2020-07-04T22:51:43Z',
			slug: "post-4"
		}
	]
}