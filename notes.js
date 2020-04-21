
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Making An IndexedDB Connection</title>
</head>

<body>
  <h1>Open Your Developer Tools > Application > IndexedDB</h1>
</body>
</html>
<script>

let request = indexedDB.open("somedb",1);

request.onsuccess = event =>{
  
    console.log("event.target", event.target);
    console.log(request);
  }

  //event.target seems to be the same as request
// CODE HERE
</script>


