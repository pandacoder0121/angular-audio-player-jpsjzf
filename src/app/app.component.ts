import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';

  data = 67;
  ngOnInit() {
    if (this.data >= 50) {
      timer(1000, 10000).subscribe(() => {
        this.playWithAudio();
      });
    }
  }

  playWithAudio() {
        // const AUDIO = <HTMLMediaElement>document.getElementById('audio');
    const AUDIO = document.querySelector('audio');

    if (AUDIO) {
      AUDIO.muted = false;
      const playPromise = AUDIO.play();

      if (playPromise !== null) {
        playPromise.then(() => { // Here you manage your first promise  
          AUDIO.play() //Here you create another promise with AUDIO.play
            .then(console.log) // Here you can see the response of the second promise. 
            .catch(console.log); // Here you can see the error. If you see your playPromise is the same as AUDIO.play(). 
        });
      }
    }
    
  }
  
}
