function browserHistory(obj, arr) {
   for (const commandAndSite of arr) {
        if (commandAndSite === 'Clear History and Cache'){
            obj["Open Tabs"] = [];
            obj['Browser Logs'] = [];
            obj['Recently Closed'] = [];
        } else {
            let [command, ...site] = commandAndSite.split(' ');
                site = site.join(' ');
            
            if (command === 'Close' && obj["Open Tabs"].includes(site)) {
                let index = obj["Open Tabs"].indexOf(site);
                obj["Open Tabs"].splice(index, 1);
                obj['Browser Logs'].push(commandAndSite);
                obj['Recently Closed'].push(site);
            } else if (command === 'Open') {
                obj["Open Tabs"].push(site);
                obj['Browser Logs'].push(commandAndSite);
            }
        }
        
   }

   
   console.log(`${obj["Browser Name"]}`);
   for (const key in obj) {
        if (key !== "Browser Name") {
            console.log(`${key}: ${obj[key].join(', ')}`);
        }
      
   }
   
}
// browserHistory({
//     "Browser Name":"Google Chrome",
//     "Open Tabs":["Facebook","YouTube","Google Translate"],
//     "Recently Closed":["Yahoo","Gmail"],
//     "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]
// },

// ["Close Facebook", "Open StackOverFlow", "Open Google"]
// )

browserHistory({
    "Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},

    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)