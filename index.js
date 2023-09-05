const app =require('express')();

const PORT=8080

const Broken_relationships = [
  {
    name: "Drew Hardwick",
    date: "2006-2007",
    info: "She was inspired to write Teardrops on My Guitar about her experience with him",
    image: "https://s3.r29static.com/bin/entry/f1c/x,80/1527719/image.jpg",
  },
  {
    name: "Joe Jonas",
    date: "2008",
    info: "Broke up over the phone for 27 secs. Inspired Forever & Always & Last Kiss",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/joe-jonas-and-sophie-turner-attend-the-62nd-annual-grammy-news-photo-1693752469.jpg?crop=0.88889xw:1xh;center,top&resize=1200:*",
  },
  {
    name: "Jake Gyllenhaal",
    date: "2011",
    info: "He said he wasn't feeling it anymore and was uncomfortable with all the attention they got",
    image:
      "https://static.timesofisrael.com/www/uploads/2015/08/AP_695055392721-1024x640.jpg",
  },

  // Add more entries for other relationships
];
app.listen(
    PORT,
    ()=>console.log(`Server is running on port ${PORT}`)
);

app.get('/taylor',(req, res)=> {
    res.send(Broken_relationships)
  
    
})
