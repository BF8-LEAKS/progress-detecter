const fs = require('fs');
const axios = require('axios').default;
const clock = require('date-events')();

async function updateTest() {
    clock.on('minute', async () => {
        const db = fs.readFileSync('db.json');
        const dbJson = JSON.parse(db);
        let res = await axios.get('https://bf8-leaks.github.io/BFN-API/SeasonProgress.json');
        let progress = res.data.SeasonProgress;
        if(dbJson.find(x => x.name === SeasonProgress.dayleft)) return
        let newd = {
            name:  SeasonProgress.dayleft, 
            image : SeasonProgress.image,
        }
        dbJson.push(newd);
        fs.writeFileSync('progress.json', JSON.stringify(dbJson, null, 2));
        console.log(newd);
    })
}

updateTest()