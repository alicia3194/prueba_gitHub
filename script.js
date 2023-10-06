window.onload = () =>{
    let main = document.querySelector("main")

    let h1 = document.createElement("h1")
    let textNode = document.createTextNode("hola desde JS")

    h1.appendChild(textNode)
    main.appendChild(h1)
}