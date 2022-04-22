function getMime(ext) {
  var mimes = {
    'mp3':'audio/mpeg',
    'webm': 'video/webm',
    'ogg': 'video/ogg',
    'mp4': 'video/mp4',
    'wav': 'audio/wav',
    'pdf': 'application/pdf',
    'swf': 'application/x-shockwave-flash',
    'txt': 'text/plain',
    'html': 'text/html',
    'js': 'text/javascript',
    'css': 'text/css',
    'png': 'image/png',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpeg',
    'gif': 'image/gif',
    'webp': 'image/webp',
    'bmp': 'image/bmp',
    'svg': 'image/svg+xml',
    'json': 'application/json',
    'xml': 'application/xml',
    'mid': 'audio/midi',
    'ico': 'image/vnd.microsoft.icon',
    'm4a': 'audio/m4a',
    'm4v': 'video/mp4',
    'jfif': 'image/jpeg'
  };
  return mimes[text]||"application/octet-steam";
}
