import { Component, OnInit } from '@angular/core';
import { SteamService } from '../../core/steam/steam.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private steamService: SteamService) { }

  ownedGames:any;

  ngOnInit() {

    this.steamService.getOwnedGames().subscribe(data=>{
      this.ownedGames = data;
      console.log(data);
    })

  }

}
