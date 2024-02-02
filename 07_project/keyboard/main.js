console.log("hello")
const insert = document.querySelector("#insert")
window.addEventListener("keypress",function (e) {
    insert.innerHTML = `
    <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ""? "space": e.keyCode }</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>
    
    `
    console.log("pressed")
    
})