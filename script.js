const btnglasses = document.getElementById("btnglasses");
const reloj = document.getElementById("btnreloj");
const modal = document.getElementById("modal");
const leave = document.getElementById("leave");
const parrafomodal = document.getElementById("parrafomodal");
btnglasses.addEventListener("click", ()=>{
    modal.classList.toggle("activo")
    parrafomodal.innerHTML = `🕶️✨ GAFAS INTELIGENTES LUO LU-YJ004 AI ✨🕶️
🚀 ¡La tecnología del futuro, ahora en tus manos!<br>
📸 Cámara Sony de 8 MP, hasta 13 MP<br>
🎥 Sacá fotos y grabá videos fácilmente.<br>
🎧 Audio y altavoces HiFi integrados.<br>
📱 Conexión Bluetooth para llamadas y música.<br>
🤖 Asistente de voz con ChatGPT.<br>
🌎 Traducción e interpretación en tiempo real.<br>
🔄 3 lentes intercambiables.<br>
👀 Reconocimiento visual.<br>
🔋 Carga magnética en aproximadamente 1 hora.<br>
🔥 ¡Todo en un solo accesorio! Ideal para quienes buscan innovación, comodidad y tecnología sin tener que sacar el celular del bolsillo.<br>
💰 Por solo $135.000<br>
Una oportunidad para llevarte tecnología inteligente a un precio increíble. 😎`
})
reloj.addEventListener("click", ()=>{
    modal.classList.toggle("activo")
    parrafomodal.innerHTML =`Hola! 💖 Si te gustan los accesorios que quedan lindos con cualquier outfit, mirá este Smartwatch LUO LU-X34. Tiene un diseño moderno y elegante, ideal para darle un toque especial a tu look.<br>
✨ Pantalla AMOLED.<br?
🎀 Incluye 3 pulseras intercambiables.<br>
📱 Se vincula al celular mediante la app HryFine.<br>
⌚ Tamaño de 40 mm, con una pantalla cuadrada y un estilo actual.<br>
🌸 Diferentes combinaciones de colores, para elegir la que más te guste.<br?
Lo que más destaca de este modelo es que trae tres pulseras, así que podés usarlo de distintas maneras según la ocasión. Es una excelente alternativa si querés un accesorio práctico y lindo sin gastar de más.<br>
💰 Precio: $35.000<br>
🎁 También es una muy buena opción para regalar, porque viene con su caja y las pulseras para cambiar de estilo.<br>`
})
leave.addEventListener("click", ()=>{
    modal.classList.toggle("activo")
})