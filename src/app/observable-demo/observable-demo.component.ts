import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { from, Observable, of, Observer, interval, fromEvent, map, filter, pipe, catchError, retry } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // rxJS
    // observer and observable
    const team = new Observable(observer => {
      observer.next("First observerable"),
        observer.next("2"),
        observer.next("3")
      observer.complete();
    })
    team.subscribe(console.log)


    console.log("baseURL : ", environment.apiURL);


    // Create an Observable out of a promise
    const data = from(fetch('/api/endpoint'));
    // Subscribe to begin listening for async result
    data.subscribe({
      next(response) { console.log(response); },
      error(err) { console.error('--Error: ' + err); },
      complete() { console.log('--Completed'); }
    });


    // // infinite calls
    // // Create an Observable that will publish a value on an interval
    // const secondsCounter = interval(1000);
    // // Subscribe to begin publishing values
    // const subscription = secondsCounter.subscribe(n =>
    //   console.log(`It's been ${n + 1} seconds since subscribing!`));


    const el = document.getElementById('my-element')!;
    // Create an Observable that will publish mouse movements
    const mouseMoves = fromEvent<MouseEvent>(el, 'mousemove');

    // Subscribe to start listening for mouse-move events
    const subscription = mouseMoves.subscribe(evt => {
      // Log coords of mouse movements
      console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

      // When the mouse is over the upper-left of the screen,
      // unsubscribe to stop listening for mouse movements
      if (evt.clientX < 40 && evt.clientY < 40) {
        subscription.unsubscribe();
      }
    });

    // Create an Observable that will create an AJAX request
    const apiData = ajax('/api/data');
    // Subscribe to create the request
    // apiData.subscribe(res => console.log(res.status, res.response));


    // const nums = of(1, 2, 3);
    const nums = of(1, 2, 3, 4, 5);
    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);
    squaredNums.subscribe(x => console.log("squaredNums", x));



    // Create a function that accepts an Observable.
    const squareOddVals = pipe(
      filter((n: number) => n % 2 !== 0),
      map(n => n * n)
    );

    // Create an Observable that will run the filter and map functions
    const squareOdd = squareOddVals(nums);

    // Subscribe to run the combined functions
    squareOdd.subscribe(x => console.log("squareOdd", x));


    // Return "response" from the API. If an error happens,
    // return an empty array.
    const apiDataa = ajax('/api/data').pipe(
      map((res: any) => {
        if (!res.response) {
          throw new Error('Value expected!');
        }
        return res.response;
      }),
      retry(3), // Retry up to 3 times before failing
      catchError(() => of([]))
    );

    apiDataa.subscribe({
      next(x: any) { console.log('data: ', x); },
      error() { console.log('errors already caught... will not run'); }
    });
  }
  stopwatchValue = 0;
  stopwatchValue$!: Observable<number>;

  start() {
    this.stopwatchValue$.subscribe(num =>
      this.stopwatchValue = num
    );
  }
}
