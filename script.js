const loadVideo = iframe => {
	const cid = 'UCgR9M8bAPcrmOk_K8kjH-tQ'
	const channelURL = encodeURIComponent(
		`https://www.youtube.com/feeds/videos.xml?channel_id=${cid}`
	)
	const reqURL = `https://api.rss2json.com/v1/api.json?rss_url=${channelURL}`

	fetch(reqURL)
		.then(response => response.json())
		.then(result => {
			console.log(result)
			const videoNumber = iframe.getAttribute('vnum')
			const link = result.items[videoNumber].link
			const id = link.substr(link.indexOf('=') + 1)
			iframe.setAttribute(
				'src',
				`https://youtube.com/embed/${id}?controls=0&autoplay=1`
			)
		})
		.catch(error => console.log('error', error))
}

const iframes = document.getElementsByClassName('latestVideoEmbed')
for (let i = 0, len = iframes.length; i < len; i++) {
	loadVideo(iframes[i])
}

let vid = document.querySelector('.latestVideoEmbed')
let width = vid.clientWidth;
let height = vid.clientHeight;


vid.onmouseover = function () {
	width += 5;
	vid.style.width = width + "px"
	height += 5;
	vid.style.height = height + "px"
}

vid.onmouseleave = function () {
	width -= 5;
	vid.style.width = width + "px"
	height -= 5;
	vid.style.height = height + "px"
}
