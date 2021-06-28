const torrentLink = "https://ddl.erai-raws.info/Torrent/2020/Fall/100-man/%5BErai-raws%5D%20100-man%20no%20Inochi%20no%20Ue%20ni%20Ore%20wa%20Tatte%20Iru%20-%2011%20%5B720p%5D%5BMultiple%20Subtitle%5D.mkv.torrent"

import {remote,toTorrentFile} from "parse-torrent"
import fs from 'fs';

  try {
      const dest = "./torrent.torrent"
      remote(torrentLink, (err, parsedTorrent) => {
        if (err) throw err
        const buf = toTorrentFile(parsedTorrent)
        fs.writeFile(dest, buf, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
      })
  } catch (error) {
    console.log(error);
  }

