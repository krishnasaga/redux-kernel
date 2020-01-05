import { ajax } from "rxjs/ajax";
import { map, catchError, filter } from "rxjs/operators";
import { of } from "rxjs";

export const ajaxDriver = actions$ =>
  actions$.pipe(
    filter(actoin => {
      return actoin.type === "";
    }),
    map(userResponse => console.log("users: ", userResponse)),
    catchError(error => {
      console.log("error: ", error);
      return of(error);
    })
  );
