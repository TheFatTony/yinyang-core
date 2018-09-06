import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class YinyangService {
    constructor() { }
    /**
     * @return {?}
     */
    test() {
        console.info('YinYang core avalible');
    }
}
YinyangService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
YinyangService.ctorParameters = () => [];
/** @nocollapse */ YinyangService.ngInjectableDef = defineInjectable({ factory: function YinyangService_Factory() { return new YinyangService(); }, token: YinyangService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class YinyangComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
YinyangComponent.decorators = [
    { type: Component, args: [{
                selector: 'yy-yinyang',
                template: `
    <p>
      yinyang works!
    </p>
  `,
                styles: []
            },] },
];
/** @nocollapse */
YinyangComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class YinyangModule {
}
YinyangModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [YinyangComponent],
                exports: [YinyangComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AuthGuard {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AuthGuard.ctorParameters = () => [
    { type: Router }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class AdminGuard {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        /** @type {?} */
        const usr = JSON.parse(localStorage.getItem('user'));
        if (usr) {
            if (usr.roles.find(x => x === 'ROLE_ADMIN'))
                return true;
        }
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AdminGuard.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AdminGuard.ctorParameters = () => [
    { type: Router }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ErrorInterceptor {
    constructor() {
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        return next.handle(request).pipe(catchError(err => {
            /** @type {?} */
            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
ErrorInterceptor.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ErrorInterceptor.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class JwtInterceptor {
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        console.info('JwtInterceptor');
        /** @type {?} */
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class User {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class File {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { YinyangService, YinyangComponent, YinyangModule, AuthGuard, AdminGuard, ErrorInterceptor, JwtInterceptor, User, File };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWlueWFuZy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8veWlueWFuZy9saWIveWlueWFuZy5zZXJ2aWNlLnRzIiwibmc6Ly95aW55YW5nL2xpYi95aW55YW5nLmNvbXBvbmVudC50cyIsIm5nOi8veWlueWFuZy9saWIveWlueWFuZy5tb2R1bGUudHMiLCJuZzovL3lpbnlhbmcvbGliL19ndWFyZHMvYXV0aC5ndWFyZC50cyIsIm5nOi8veWlueWFuZy9saWIvX2d1YXJkcy9hZG1pbi5ndWFyZC50cyIsIm5nOi8veWlueWFuZy9saWIvX2hlbHBlcnMvZXJyb3IuaW50ZXJjZXB0b3IudHMiLCJuZzovL3lpbnlhbmcvbGliL19oZWxwZXJzL2p3dC5pbnRlcmNlcHRvci50cyIsIm5nOi8veWlueWFuZy9saWIvX3RyYW5zZmVyL3VzZXIudHMiLCJuZzovL3lpbnlhbmcvbGliL190cmFuc2Zlci9maWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgWWlueWFuZ1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgdGVzdCgpIHtcbiAgICBjb25zb2xlLmluZm8oJ1lpbllhbmcgY29yZSBhdmFsaWJsZScpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd5eS15aW55YW5nJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHlpbnlhbmcgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFlpbnlhbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFlpbnlhbmdDb21wb25lbnQgfSBmcm9tICcuL3lpbnlhbmcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtZaW55YW5nQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1lpbnlhbmdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFlpbnlhbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgUm91dGVyLCBSb3V0ZXJTdGF0ZVNuYXBzaG90fSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9sb2dpbiddLCB7cXVlcnlQYXJhbXM6IHtyZXR1cm5Vcmw6IHN0YXRlLnVybH19KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3R9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL190cmFuc2Zlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZG1pbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIGNvbnN0IHVzcjogVXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgaWYgKHVzcikge1xuICAgICAgaWYgKHVzci5yb2xlcy5maW5kKHggPT4geCA9PT0gJ1JPTEVfQURNSU4nKSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9sb2dpbiddLCB7cXVlcnlQYXJhbXM6IHtyZXR1cm5Vcmw6IHN0YXRlLnVybH19KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3R9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgdGhyb3dFcnJvcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3J9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAvLyBpZiAoZXJyLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAvLyAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAvLyAgICAgbG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgLy8gfVxuXG4gICAgICBjb25zdCBlcnJvciA9IGVyci5lcnJvci5tZXNzYWdlIHx8IGVyci5zdGF0dXNUZXh0O1xuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgIH0pKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEp3dEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGNvbnNvbGUuaW5mbygnSnd0SW50ZXJjZXB0b3InKTtcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJykpO1xuICAgIGlmIChjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci50b2tlbikge1xuICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2N1cnJlbnRVc2VyLnRva2VufWBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVXNlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgcm9sZXM6IHN0cmluZ1tdO1xufVxuIiwiZXhwb3J0IGNsYXNzIEZpbGUge1xuICBpZDogbnVtYmVyO1xuICBmaWxlTmFtZTogc3RyaW5nO1xuICBtaW1lVHlwZTogc3RyaW5nO1xuICBmaWxlU2l6ZTogbnVtYmVyO1xuICB1cmw6IHN0cmluZztcbiAgYWx0OiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFPRSxpQkFBaUI7Ozs7SUFFakIsSUFBSTtRQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUN2Qzs7O1lBVEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0FDSkQ7SUFhRSxpQkFBaUI7Ozs7SUFFakIsUUFBUTtLQUNQOzs7WUFkRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2FBQ1g7Ozs7Ozs7OztBQ1ZEOzs7WUFHQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLEVBQ1I7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2FBQzVCOzs7Ozs7O0FDUkQ7Ozs7SUFNRSxZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtLQUNqQzs7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQTZCLEVBQUUsS0FBMEI7UUFDbkUsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFFLEVBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUMsRUFBQyxDQUFDLENBQUM7UUFDN0UsT0FBTyxLQUFLLENBQUM7S0FDZDs7O1lBYkYsVUFBVTs7OztZQUZrQyxNQUFNOzs7Ozs7O0FDRG5EOzs7O0lBT0UsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7S0FDakM7Ozs7OztJQUVELFdBQVcsQ0FBQyxLQUE2QixFQUFFLEtBQTBCOztRQUNuRSxNQUFNLEdBQUcsR0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLEdBQUcsRUFBRTtZQUNQLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxZQUFZLENBQUM7Z0JBQ3pDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUMsV0FBVyxFQUFFLEVBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUMsRUFBQyxDQUFDLENBQUM7UUFDN0UsT0FBTyxLQUFLLENBQUM7S0FDZDs7O1lBZkYsVUFBVTs7OztZQUhrQyxNQUFNOzs7Ozs7O0FDRG5EO0lBT0U7S0FDQzs7Ozs7O0lBRUQsU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7UUFDcEQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRzs7WUFNN0MsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQztZQUNsRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQixDQUFDLENBQUMsQ0FBQztLQUNMOzs7WUFmRixVQUFVOzs7Ozs7Ozs7QUNMWDs7Ozs7O0lBTUUsU0FBUyxDQUFDLE9BQXlCLEVBQUUsSUFBaUI7UUFDcEQsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztRQUMvQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLFdBQVcsSUFBSSxXQUFXLENBQUMsS0FBSyxFQUFFO1lBQ3BDLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUN0QixVQUFVLEVBQUU7b0JBQ1YsYUFBYSxFQUFFLFVBQVUsV0FBVyxDQUFDLEtBQUssRUFBRTtpQkFDN0M7YUFDRixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM3Qjs7O1lBZEYsVUFBVTs7Ozs7OztBQ0pYO0NBSUM7Ozs7OztBQ0pEO0NBT0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=