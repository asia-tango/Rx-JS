import { of, from, fromEvent } from 'rxjs'; 
import { map, filter, reduce, delay } from 'rxjs/operators';
import { Observable, combineLatest } from 'rxjs';


// ******* exercise 1 *******

  console.clear();
// {
//   const data = ['a', 'g', 'o', 'f', '3', '5', 'r', 'D', 'n', 'b', 's', 'c'];
//   const source$ = from(data);

//   const reg = new RegExp("[a-gA-G]");
//   source$.pipe(filter(val => reg.test(val)))
//   .subscribe(result => console.log(result))
// }

// ******* exercise 2 *******

//  console.clear();
// {
//   const data = ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'];
//   const source$ = from(data);

//   const reg = new RegExp("[0-9]");
//   source$.pipe(
//     filter(val => reg.test(val)),
//     reduce((x,y) => +x + +y)
//     )
//   .subscribe(result => console.log(result))
// }

// ******* exercise 3 *******

//  console.clear();
// {
//   const observable$ = new Observable(subscriber => {
  
//   delay(1000);
//   subscriber.next(123);
//   subscriber.complete();
// });
 
//   observable$.subscribe({
//     next(x) { console.log('next: ' + x); },
//     error(err) { console.error('something wrong occurred: ' + err); },
//     complete() { console.log('done'); }
//   });
// }

// ******* exercise 4 *******

//  console.clear();
// {
//   const heightEl = document.getElementById('height')
//   const widthEl = document.getElementById('width')

//   const h$ = fromEvent(heightEl, 'input');
//   const w$ = fromEvent(widthEl, 'input');

//   const area$ = combineLatest(h$, w$).pipe(
//     map(event => event[0].target.value * event[1].target.value)
//   );

//   area$.subscribe(
//     res => console.log('area: ', res)
//   );
// }