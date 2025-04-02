const str = `<ul>
  <li data-time="5:17">Flexbox Video</li>
  <li data-time="8:22">Flexbox Video</li>
  <li data-time="3:34">Redux Video</li>
  <li data-time="5:23">Flexbox Video</li>
  <li data-time="7:12">Flexbox Video</li>
  <li data-time="7:24">Redux Video</li>
  <li data-time="6:46">Flexbox Video</li>
  <li data-time="4:45">Flexbox Video</li>
  <li data-time="4:40">Flexbox Video</li>
  <li data-time="7:58">Redux Video</li>
  <li data-time="11:51">Flexbox Video</li>
  <li data-time="9:13">Flexbox Video</li>
  <li data-time="5:50">Flexbox Video</li>
  <li data-time="5:52">Redux Video</li>
  <li data-time="5:49">Flexbox Video</li>
  <li data-time="8:57">Flexbox Video</li>
  <li data-time="11:29">Flexbox Video</li>
  <li data-time="3:07">Flexbox Video</li>
  <li data-time="5:59">Redux Video</li>
  <li data-time="3:31">Flexbox Video</li>
</ul>`;
// Parsear datos
// Obtener el total de segundos de los videos de tipo Redux
// Tip: Obtener un array de objetos, donde cada objeto sea un video
// {min:5, seg: 59, tipo: 'Redux Video'}


const videos = [];
const lineas = str.split('</li>');

for (let linea of lineas) {
  // Extraigo el tiempo 
  const inicioTiempo = linea.indexOf('data-time="') + 11; 
  const finTiempo = linea.indexOf('"', inicioTiempo);
  const tiempo = linea.slice(inicioTiempo, finTiempo);
  
  // Extraigo el tipo
  const inicioTexto = linea.indexOf('>') + 1;
  const tipo = linea.slice(inicioTexto).trim();

  if (tiempo && tipo) {
    const [min, seg] = tiempo.split(':').map(Number);
    videos.push({ min, seg, tipo });
  }
}

// Calculo total Redux
let totalRedux = 0;
for (let video of videos) {
  if (video.tipo === 'Redux Video') {
    totalRedux += video.min * 60 + video.seg;
  }
}

console.log('Total segundos Redux:', totalRedux);