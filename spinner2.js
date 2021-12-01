const spin = ["|", "/", "-", "\\", "|"];
let timeout = 0;
for (let i = 0; i < spin.length; i++){
  setTimeout(() => {
    process.stdout.write(`\r${spin[i]}   `);
  }, timeout);
  timeout += 200;
}



