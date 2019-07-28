function meTubeStatistic(data) {
    let clipInfo = data.shift();
    let clipList = {};
    while (clipInfo !='stats time') {
        if (clipInfo.includes('-')) {
            let [clipName, views] = clipInfo.split('-');
            views = Number(views);
            if (!clipList.hasOwnProperty(clipName)) {
                clipList[clipName] = {'views': views, 'likes': 0}
            } else {
                clipList[clipName].views += views;
            }
        } else if (clipInfo.includes(':')) {
            let [command, clipName] = clipInfo.split(':');
            if (clipList.hasOwnProperty(clipName)) {
                if (command === 'like') {
                    clipList[clipName].likes += 1;
                } else if (command === 'dislike') {
                    clipList[clipName].likes -= 1;
                }
            }
        }
        clipInfo = data.shift();
    }
    let require = data.shift();
    let sorted = [];
    
    if (require === 'by likes') {
        sorted = Object.entries(clipList).sort((a, b) => b[1].likes - a[1].likes);
    } else if (require === 'by views') {
        sorted = Object.entries(clipList).sort((a, b) => b[1].views - a[1].views);
    }
    // console.log(sorted)
    sorted.forEach(e => console.log(`${e[0]} - ${e[1].views} views - ${e[1].likes} likes`))
    
}
meTubeStatistic(["Eninem Venom-500",
    'like:Eninem Venom',
    'Funny Cats-700',
    'like:Funny Cats',
    'like:Funny Cats',
    'Eninem Venom-300',
    'stats time',
    'by likes'
    ])
meTubeStatistic(['Eminem Ringer-300',
    'Messi Top Goals-500',
    'like:Eminem Ringer',
    'like:Eminem Ringer',
    'dislike:Eminem Ringer',
    'stats time',
    'by views',
    ])