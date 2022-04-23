//!not wrt


function onFeedAdded(call,f$) {
  var feeds = getRemoteFeeds(call);
  call.on('feeds_changed', function (e) {
    var newfeeds=getRemoteFeeds(call);
    for(var i=0;i<newfeeds.length;i++) {
      if(feeds.indexOf(newfeeds[i])<0) {
        f$(newfeeds[i])
      }
    }
    feeds=newfeeds;
  });
}

function logStateChanges(call) {
  console.log(call.state);
  call.on('state', function () {
    console.log(call.state)
  });
}

function onFeedRemoved(call,f$) {
  var feeds = getRemoteFeeds(call);
  call.on('feeds_changed', function (e) {
    var newfeeds=getRemoteFeeds(call);
    for(var i=0;i<feeds.length;i++) {
      if(newfeeds.indexOf(feeds[i])<0) {
        f$(feeds[i])
      }
    }
    feeds=newfeeds;
  });
}

function getRemoteFeeds(call) {
  var feeds=[];
  var f$=call.getFeeds();
  for(var i=0;i<f$.length;i++){
    feeds.push(f$[i])
  }
  return feeds
}
