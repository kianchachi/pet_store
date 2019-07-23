import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})


export class showComponent implements OnInit {
showProd:any;
  err:any;
  constructor(private _httpService: HttpService, private _route:Router, private _router:ActivatedRoute) { }

  ngOnInit() {
    this._router.params.subscribe(params => {
      console.log(params)
    this._httpService.getOne(params['id']).subscribe(data => {
      console.log(data)
    this.showProd = data['pets'];
        
      }) 
    })
  }

  onDelete(id) {
    this._httpService.delete(id).subscribe(data =>{
      this.ngOnInit();
      this._route.navigate(['/'])

    })
  }
}



