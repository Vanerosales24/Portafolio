var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Licenciada en Informatica')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Si lo puedes imaginar lo puedes')
    .pauseFor(2500)
    //Caracteres que se borraran//
    .deleteChars(5)
    .typeString('<strong>Crear</strong>')
    .pauseFor(2500)
    .start();