import { Component } from '@angular/core';
import { Vehicle } from '../../app.interfaces';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
})


export class SearchResultsComponent {
  
  public vehicles$: Vehicle[];

  onSubmit(vehicles$: Vehicle[]) {


  }

}
