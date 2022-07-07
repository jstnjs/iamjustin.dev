const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
	try {
    let url = "https://dev.to/api/articles/me/unpublished";

		let posts = await EleventyFetch(url, {
			duration: "1d",
			type: "json",
            fetchOptions: {
                headers: {
                    "api-key": process.env.DEVTO_API_KEY
                }
            }
		});

        return posts;
	} catch(e) {
		console.log(e);
        console.log('Failed to fetch articles. Return empty array.');

		return [];
	}
};
