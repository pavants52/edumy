import { Component,OnInit} from '@angular/core';
import { RankingService } from './ranking.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router }            from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Ranking } from "./ranking";

@Component({
  selector: 'rankinglevel',
  templateUrl: './rankinglevel.component.html'
})
export class RankingLevelComponent {

  ranking:Ranking = new Ranking();

  rankings:Ranking[];


  constructor( private route: ActivatedRoute,
               private location: Location,
               private rankingService:RankingService,
               private router: Router){ }

  ngOnInit():void {
    //get the list of student setting and populate the array
    this.getRankings();
  }
  getRankings(): void {
    this.rankingService.getRankings().then(values => this.rankings = values)
  }

  save():void {
    debugger;
    console.log("ranking" +this.ranking);
    if(!this.ranking.id ){
      this.rankingService.create(this.ranking)
        .then(res => {
          console.log("created" + res);
          this.rankings.push(res);
          this.ranking = new Ranking();

        });
    } else  {
      this.rankingService.update(this.ranking)
        .then(res => {
          console.log("created" + res);

          this.getRankings();
          this.ranking = new Ranking();

        });
    }
  }
  update(id:number) {
    this.rankingService.getRanking(id)
      .then(res => {
        this.ranking = res;
      })
  }

  delete(id:number):void {
    this.rankingService.delete(id)
      .then(() => {
        console.log("deleted" + id);
        this.getRankings();
        this.ranking = new Ranking();
      })
  }

  cancel():void {
    this.goToRankings();
  }
  goToRankings():void {
    this.router.navigate(['/rankinggroup']);
  }

}
