/* GET home page */
module.exports.index = function(req,res){
  res.render('index', {
	"heading": "Solutions",
	"subheading": "Integrate video technology into your core product offering with robust APIs to build what you need.",
	"button": {
		"label": "Get Started",
		"link": "/get-started/",
		"color": "#FFFFFF"
	},
	"columnsBlock": {
		"heading": "Engage and retain viewers with three types of recommended playlists.",
		"columns": [
			{
				"heading": "Similar and Trending Playlists",
				"description": "Increase viewer retention and engagement based on viewer behavior.",
				"links-list": {
					"label": "Best for:",
					"links": [
						{
							"label": "Video Detail Pages",
							"link": "/video-detail-pages/"
						},
						{
							"label": "Verticals / Channels",
							"link": "/verticals-channels/"
						}
					]
				},
				"button": {
					"label": "Learn More",
					"link": "/trending-playlists/",
					"color": "#FF0046"
				}
			},
			{
				"heading": "Search",
				"description": "Allow users to find specific content within your siteâ€™s video experience with an end-to-end solution for video search.",

				"links-list": {
					"label": "Best for:",
					"links": [
						{
							"label": "Video Apps",
							"link": "/video-apps/"
						},
						{
							"label": "Immersive Video Experiences",
							"link": "/immersive-video-experiences/"
						}
					]
				},
				"button": {
					"label": "Learn More",
					"link": "/video-search/",
					"color": "#FF0046"
				}
			},
			{
				"heading": "Recommendations",
				"description": "Automatically surface trending content to engage new users based on real-time trends of what everyone is watching. ",
				"links-list": {
					"label": "Bestfor:",
					"links": [
						{
							"label": "Homepages",
							"link": "/homepages/"
						},
						{
							"label": "Popular Content Pairing",
							"link": "/popular-content-pairing/"
						}
					]
				},
				"button": {
					"label": "Learn More",
					"link": "/trending-playlists/",
					"color": "#FF0046"
				}
			}
		]
	},
	"sideBySide": [{
		"image": "img/monetization.svg",
		"layout-type": "image-left",
		"heading": "Monetization",
		"description": "For ad-supported video, every impression counts. With the right technology and experts to guide you with set-up, youâ€™ll get the best possible ad fill and CPMs."
	},
	{
		"image": "img/developer-tools.svg",
		"layout-type": "image-right",
		"heading": "Developer Tools",
		"description": "Flexble player and platform APIs allow for extensive integration and sophisticated workflows. Implement video into your products without learning video engineering, codecs & formats. Demo apps and sample code help you incorporate video into your native mobile apps quickly and painlessly."
	}]
}
  	);
};