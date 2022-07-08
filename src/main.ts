import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));

const appDiv = document.getElementById('app');

const edu = document.getElementById('');
const deon = document.getElementById('');
const sunningH = document.getElementById('');
const maluti = document.getElementById('');
const hqDigital = document.getElementById('');
const hq05 = document.getElementById('');
const innov8 = document.getElementById('');

const alerts = document.getElementById('alerts');
const currentDate = new Date();
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
//let seconds = currentDate.getSeconds();
const timeStr = hours + 'H00 Stats';

function renderAlert () {
  if (minutes == 40) {
    alert(
     ` ${timeStr}
        EDU : ${edu} 
        Deon: ${deon} 
        SunningHill: ${sunningH}
        Maluti: ${maluti}
        HQ Digital: ${hqDigital }
        HQ O5: ${hq05}
        Innov8: ${innov8}`
    );
  }
};
renderAlert();

//setInterval(renderAlert, 1000);

function download(link, fileName) {
  const fileLink = document.createElement("a");
  fileLink.href = link;
  fileLink.download = fileName;
  console.log( `file downloaded`)
}


 download('http://192.168.1.6:70/c_download', "testFile.csv")