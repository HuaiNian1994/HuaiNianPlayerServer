const http = require("http")
const path = require("path")
const fs = require("fs")
var fileReader = (str) => {
	return new Promise((resolve) => {
		fs.readFile(str, (err, data) => {
			resolve(data)
		})
	});
}
var dirReader = (str) => {
	return new Promise((resolve) => {
		fs.readdir(str, (err, data) => {
			resolve(data)
		})
	});
}


// const server = http.createServer()
// const DIR="F:/media/NETEASE MUSIC"
// server.on("request", async (req, res) => {
// 	let url=decodeURI(req.url)//decodeURI是一个JS原生对象
// 	console.log(url);
// 	if(url=="/getMixes"){
// 		var data=await fileReader("./fileTree.json")
// 	}else{
// 		var data=await fileReader(path.join(DIR,url))
// 	}
// 	res.end(data)
// })
// server.listen(3000, "192.168.43.202", () => {
// 	console.log("running at http://192.168.43.202:3000");

// })




// (async () => {//mixes列表生成
// 	var folders = await dirReader("F:/media/NETEASE MUSIC/")
// 	var trackLists = []
// 	var trackUID=0;
// 	for (let j = 0; j < folders.length; j++) {
// 		var arr = await dirReader("F:/media/NETEASE MUSIC/" + folders[j])
// 		var trackList = []
// 		var obj={}
// 		for (let i = 0; i < arr.length; i++) {
// 			var reg = /\.\w+/ig;//去除后缀名
// 			var name = arr[i].replace(reg, "");
// 			var allname = name.split(/\s*-\s*/);

// 			if (allname[1]) {
// 				var trackTitle = allname[1];
// 				var artist = allname[0];
// 			} else {
// 				var trackTitle = allname[0];
// 				var artist = "UNKNOWN";
// 			}
// 			var url = folders[j]+"/"+ arr[i];
// 			var trackSubTitle = name;
// 			var trackTitleDisc = "";

// 			var trackId = trackUID++;
// 			var track = { trackTitle, trackSubTitle, url, trackTitleDisc, artist, trackId }
// 			trackList.push(track)
// 		}
// 		obj["mixtitle"] =folders[j];
// 		obj["mixsubtitle"] =arr.length+" songs";
// 		obj["id"]=j;
// 		obj["tracks"]= trackList;
// 		obj["cover"]=""
// 		trackLists.push(obj)
// 	}
// 	fs.writeFile("fileTree.json", JSON.stringify(trackLists), () => { });
// })()



