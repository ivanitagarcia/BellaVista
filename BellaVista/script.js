// Función para mostrar el contenido completo del primer blog
function showBlogContent1() {
    // Selecciona el elemento que contiene el contenido completo del primer blog
    var blogContent1 = document.getElementById("blog-content-1");
    
    // Muestra el contenido completo del primer blog cambiando su estilo de display a "block"
    if(blogContent1.style.display=="block"){
        blogContent1.style.display = "none";

} else{
    blogContent1.style.display="block"
}
}

// Función para mostrar el contenido completo del segundo blog
function showBlogContent2() {
    // Selecciona el elemento que contiene el contenido completo del segundo blog
    var blogContent2 = document.getElementById("blog-content-2");
    
    // Muestra el contenido completo del segundo blog cambiando su estilo de display a "block"
    if(blogContent2.style.display=="block"){
            blogContent2.style.display = "none";

    } else{
        blogContent2.style.display="block"
    }
}

// Función para mostrar el contenido completo del tercer blog
function showBlogContent3() {
    // Selecciona el elemento que contiene el contenido completo del tercer blog
    var blogContent3 = document.getElementById("blog-content-3");
    
    
    // Muestra el contenido completo del tercer blog cambiando su estilo de display a "block"
    if(blogContent3.style.display=="block"){
        blogContent3.style.display = "none";

} else{
    blogContent3.style.display="block"
}
    
}

// Obtén los botones "Ver más" por su identificador
var btn1 = document.getElementById("btn-read-more-1");
var btn2 = document.getElementById("btn-read-more-2");
var btn3 = document.getElementById("btn-read-more-3");

// Agrega un event listener a cada botón para escuchar el evento de clic y ejecutar la función correspondiente
btn1.addEventListener("click", showBlogContent1);
btn2.addEventListener("click", showBlogContent2);
btn3.addEventListener("click", showBlogContent3);
