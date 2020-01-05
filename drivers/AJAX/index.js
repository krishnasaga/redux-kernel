import { ajax } from "rxjs/ajax";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";

const acton$ => actoin$ = ajax.getJSON('https://api.github.com/users?per_page=5')
 .pipe(
  map(userResponse => console.log("users: ", userResponse)),
  catchError(error => {
    console.log("error: ", error);
    return of(error);
  })
);
 