import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';


@Injectable({
    providedIn: 'root'
})
export class IdolService {

    private itemsCollection: AngularFirestoreCollection<any>;

    constructor(
        private afs: AngularFirestore,
        private snackBar: MatSnackBar,
    ) {
        this.itemsCollection = this.afs.collection<any>('idol', (idol) => {
            return idol.orderBy('name', 'desc');
            // return idol.orderBy('name', 'desc').orderBy('likes', 'desc');
        });

    }

    private static handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            console.log(`${operation} failed: ${error.message}`);

            if (error.status >= 500) {
                throw error;
            }

            return of(result);
        };
    }

    getIdols(): Observable<any[]> {
        return this.itemsCollection.snapshotChanges()
            .pipe(
                map((actions) => {
                    return actions.map((action) => {
                        const data = action.payload.doc.data();
                        return ({ id: action.payload.doc.id, ...data });
                    });
                }),
                tap(() => console.log(`fetched idols`)),
                catchError(IdolService.handleError('getIdols', []))
            );
    }

}