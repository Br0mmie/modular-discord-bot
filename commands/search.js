module.exports.google = function(message,args){
  let searchTerms = "";

  for (let i = 1; i < args.length; i++){
    searchTerms = searchTerms + args[i] + "%20";
  }

  message.channel.send("https://www.google.com/search?q=" + searchTerms);
}

module.exports.youtube = function(message,args){
  let searchTerms = "";

  for (let i = 1; i < args.length; i++){
    searchTerms = searchTerms + args[i] + "+";
  }

  message.channel.send("https://www.youtube.com/results?search_query=" + searchTerms);
}
