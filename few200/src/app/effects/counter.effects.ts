import { Actions, createEffect } from "@ngrx/effects";
import * as actions from '../actions/counter.actions';
import { tap } from 'rxjs/operators';

export class CounterEffects {

  // TODO: anytime counterCountBySet -> write to local storage.




  logEverything$ = createEffect(() =>
    this.actions$.pipe(
      tap((action) => console.log(`Got an action of type ${action.type}`))
    ), { dispatch: false }
  )

  constructor(private actions$: Actions) { }
}
