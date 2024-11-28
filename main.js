var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Licenciada en Informartica')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Si lo puedes imaginar lo puedes crear')
    .pauseFor(2500)
    //Caracteres que se borraran//
    .deleteChars(14)
    .typeString('<strong>Crear</strong>')
    .pauseFor(2500)
    .start();