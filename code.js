const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".seccion");


parrafos.forEach((parrafo) => {
  parrafo.addEventListener("dragstart", (event) => {
    parrafo.classList.add("dragging");
    event.dataTransfer.setData("id", parrafo.id);
  });
});

secciones.forEach((seccion) => {
  seccion.addEventListener("dragover", (event) => {
    event.preventDefault();
    /* console.log("Se hizo dragover") */
  });

  seccion.addEventListener("drop", (event) => {
    console.log("Se hizo drop")
    const id_parrafo = event.dataTransfer.getData("id")
    const parrafo = document.getElementById(id_parrafo);
    console.log(event)
    seccion.appendChild(parrafo); 
  });
});

const papelera = document.querySelector(".papelera");

papelera.addEventListener("dragover", event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
})

papelera.addEventListener("drop", event => {
    console.log("Me están haciendo drop")
    const id_parrafo = event.dataTransfer.getData("id");
    document.getElementById(id_parrafo).remove()
})


