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
            return idol.orderBy('likes', 'desc');
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

    updateIdol(idol: any): Promise<void> {
        return this.afs.doc(`/idol/${idol.id}`).update(JSON.parse(JSON.stringify(idol))).then(() => {
            console.log(`updated idol w/ id=${idol.id}`);
            this.showSnackBar('Saved');
        });
    }

    showSnackBar(name): void {
        const config: any = new MatSnackBarConfig();
        config.duration = 3000;
        this.snackBar.open(name, 'OK', config);
    }

}