const alumnos = [
    {nombre : "Victoria", cedula:"30393006", notam: 19, notaf: 19, notap:08 },
    {nombre : "Maria", cedula:"2897542", notam: 19, notaf: 14, notap:12 },
    {nombre : "Luis", cedula:"30589764", notam: 10, notaf: 08, notap:20 },
    {nombre : "Daniel", cedula:"2898745", notam: 08, notaf: 10, notap:02 },
    {nombre : "Andrea", cedula:"30584975", notam: 10, notaf: 01, notap:02 },
    {nombre : "Carlos", cedula:"30457895", notam: 19, notaf: 10, notap:11 },
    {nombre : "Lucrecia", cedula:"2974568", notam: 18, notaf: 15, notap:20 },
    {nombre : "Andres", cedula:"3054786", notam: 17, notaf: 20, notap:20 },
]

function ejemplo(){
    var foo = alumnos.map(function(alumno){
        return '<li>'+alumno.nombre+' '+alumno.cedula+' '+alumno.notam+' '+alumno.notaf+' '+alumno.notap+'</li>'
      })
      document.getElementById("foo").innerHTML = foo;
};
function calcular(){

    //PROMEDIO
    totaldealumnos = alumnos.length;

    //PROMEDIO MATEMATICA
    let sumamat = 0;
     notamat = alumnos.forEach(alumnos => {
        sumamat += alumnos.notam;
       
    })
 
    promediomat = (sumamat/totaldealumnos);
    console.log(promediomat);

    //PROMEDIO FISICA
    let sumafis = 0;
    notafis = alumnos.forEach(alumnos => {
        sumafis += alumnos.notaf;
          
       })
    promediofis = (sumafis/totaldealumnos);
    console.log(promediofis);

    //PROMEDIO PROGRAMACION
    let sumaprog = 0;
    notaprog = alumnos.forEach(alumnos => {
        sumaprog += alumnos.notap;
          
       })
    promedioprog = (sumaprog/totaldealumnos);
    console.log(promedioprog);

    //NOTA MAXIMA

    //NOTA MAXIMA MATEMATICA
    let notamaximam=0;
    notamat = alumnos.forEach(alumnos => {
        if (notamaximam < alumnos.notam){
            notamaximam = alumnos.notam;
            }
    })
    console.log(notamaximam);

    //NOTA MAXIMA FISICA
    let notamaximaf=0;
    notafis = alumnos.forEach(alumnos => {
        if (notamaximaf < alumnos.notaf){
            notamaximaf = alumnos.notaf;
            }
    })
    console.log(notamaximaf);    

    //NOTA MAXIMA PROGRAMACION
    let notamaximap=0;
    notaprogr = alumnos.forEach(alumnos => {
        if (notamaximap < alumnos.notap){
            notamaximap = alumnos.notap;
            }
    })
    console.log(notamaximap);


    //ALUMNOS APROBADOS 
    let aprobados = alumnos.filter(alumno => alumno.notaf && alumno.notam && alumno.notap >= 10);
    cantaprob = aprobados.length;
    console.log(cantaprob);

    //ALUMNOS DESAPROBADOS
    let desaprobados = alumnos.filter(alumno => alumno.notaf && alumno.notam && alumno.notap < 10);
    cantdesaprob = desaprobados.length;
    console.log(cantdesaprob);       

    //ALUMNOS QUE APROBARON TODAS LAS MATERIAS
    let aprobtodas = alumnos.filter(alumno => alumno.notaf && alumno.notam && alumno.notap > 10);
    cantaprobtodas = aprobtodas.length;
    console.log(cantaprobtodas);

    //AlUMNOS QUE APROBARON UNA SOLA MATERIA
    let aprobsolof = alumnos.filter(alumno => alumno.notaf >= 10 && alumno.notam < 10 && alumno.notap < 10);
    cantaprobosolof = aprobsolof.length;
    let aprobosolom = alumnos.filter(alumno => alumno.notaf < 10 && alumno.notam >= 10 && alumno.notap < 10); 
    cantaprobosolom = aprobosolom.length;  
    let aprobosolop = alumnos.filter(alumno => alumno.notaf < 10 && alumno.notam < 10 && alumno.notap >= 10); 
    cantaprobosolop = aprobosolop.length;  
    
    cantaprob1 = cantaprobosolof + cantaprobosolom + cantaprobosolop;
    
    console.log(cantaprob1);

    //ALUMNOS QUE APROBARON SOLO DOS MATERIAS
    let aprobmyf = alumnos.filter(alumno => alumno.notaf > 10 && alumno.notam > 10 && alumno.notap < 10);
    cantaprobmyf = aprobmyf.length;

    let aprobmyp = alumnos.filter(alumno => alumno.notaf < 10 && alumno.notam > 10 && alumno.notap > 10);
    cantaprobmyp = aprobmyp.length;

    let aprobfyp = alumnos.filter(alumno => alumno.notaf > 10 && alumno.notam < 10 && alumno.notap > 10);
    cantaprobfyp = aprobfyp.length;
   
    cantaprob2 = cantaprobmyf + cantaprobmyp + cantaprobfyp
    console.log(cantaprob2);

    //IMPRIMIR RESULTADOS

    //RESULTADOS PROMEDIO
    document.getElementById("promedio").innerHTML="Nota Promedio de Fisica: "+promediofis+"<br>"+"Nota Promedio de Matematica: "+promediomat+""+"<br>"+"Nota Promedio de Programación: "+promedioprog+""+"<br><br>";

    //RESULTADOS NOTAS MAXIMA
    document.getElementById("maximas").innerHTML="Nota Máxima de Fisica: "+notamaximaf+"<br>"+"Nota Máxima de Matematica: "+notamaximam+""+"<br>"+"Nota Máxima de Programación: "+notamaximap+""+"<br><br>";

    //RESULTADOS ALUMNOS QUE APROBARON TODAS LAS MATERIAS
    document.getElementById("aprobados").innerHTML="Cantidad de alumnos que aprobaron todas las materias: "+cantaprob;

    //RESULTADOS ALUMNOS QUE DESAPROBARON TODAS LAS MATERIAS
    document.getElementById("desaprobados").innerHTML="Cantidad de alumnos que aplazaron todas las materias: "+cantdesaprob;    

    //RESULTADOS ALUMNOS QUE APROBARON SOLO UNA MATERIA
    document.getElementById("aprobaron1").innerHTML="Cantidad de alumnos que aprobaron una materia: "+cantaprob1;  
    
    //RESULTADOS ALUMNOS QUE APROBARON DOS MATERIAS
    document.getElementById("aprobaron2").innerHTML="Cantidad de alumnos que aprobaron dos materias: "+cantaprob2;  
}