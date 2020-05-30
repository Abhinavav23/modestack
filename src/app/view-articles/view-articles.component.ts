import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { PagerService } from '../services';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './view-articles.component.html',
  styleUrls: ['./view-articles.component.css']
})

export class ViewArticlesComponent implements OnInit {
    constructor(private http: HttpClient, private pagerService: PagerService) { }

    private allItems: any;

    pager: any = {};

    pagedItems: any[];

    ngOnInit() {

        this.http.get('https://modestack-api.herokuapp.com/articles')
            .subscribe(data => {
            this.allItems = data
            this.setPage(1);
        })
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        this.pager = this.pagerService.getPager(this.allItems.length, page);

        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}