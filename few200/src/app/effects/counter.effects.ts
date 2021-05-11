import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as actions from '../actions/counter.actions';
import { tap } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()
export class CounterEffects {

  // TODO: when the application starts -< read the value ->
  // if it is there, dispatch a actions.counterCountBySet()
  // if it is not there, we could dispatch counterCountBySet({by: 1})
  // or we could do nothing


  // TODO: any time counterCountBySet -> write it to local storage.
  saveCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.counterCountBySet),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }
  )




  // logEverything$ = createEffect(() =>
  //   this.actions$.pipe(
  //     tap((action) => console.log(`Got an action of type ${action.type}`))
  //   ), { dispatch: false }
  // )



  constructor(private actions$: Actions) { }
}
