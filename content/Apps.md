---
title: Apps
date: 10 may 2023
---
<script>
const directory = "/usr/share/applications";
  
getFiles(directory).then(results => {
  const html = `<ul>` +
  results.map(fileOrDirectory => `<li>${fileOrDirectory}</li>`).join('\n') +
  `</ul>`;

  process.stdout.write(html);
  // or you could use something like fs.writeFile to write the file directly
});
</script>
