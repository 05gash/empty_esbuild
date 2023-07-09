console.log("Hello world")
console.log("lol hello")
console.log("aaah")

if(DEV){
  new EventSource('/esbuild').addEventListener('change', () => location.reload())
}
