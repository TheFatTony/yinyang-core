import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var YinyangService = /** @class */ (function () {
    function YinyangService() {
    }
    /**
     * @return {?}
     */
    YinyangService.prototype.test = /**
     * @return {?}
     */
    function () {
        console.info('YinYang core avalible');
    };
    YinyangService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    YinyangService.ctorParameters = function () { return []; };
    /** @nocollapse */ YinyangService.ngInjectableDef = defineInjectable({ factory: function YinyangService_Factory() { return new YinyangService(); }, token: YinyangService, providedIn: "root" });
    return YinyangService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var YinyangComponent = /** @class */ (function () {
    function YinyangComponent() {
    }
    /**
     * @return {?}
     */
    YinyangComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    YinyangComponent.decorators = [
        { type: Component, args: [{
                    selector: 'yy-yinyang',
                    template: "\n    <p>\n      yinyang works!\n    </p>\n  ",
                    styles: []
                },] },
    ];
    /** @nocollapse */
    YinyangComponent.ctorParameters = function () { return []; };
    return YinyangComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var YinyangModule = /** @class */ (function () {
    function YinyangModule() {
    }
    YinyangModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [YinyangComponent],
                    exports: [YinyangComponent]
                },] },
    ];
    return YinyangModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    AuthGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthGuard.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return AuthGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var AdminGuard = /** @class */ (function () {
    function AdminGuard(router) {
        this.router = router;
    }
    /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    AdminGuard.prototype.canActivate = /**
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    function (route, state) {
        /** @type {?} */
        var usr = JSON.parse(localStorage.getItem('user'));
        if (usr) {
            if (usr.roles.find(function (x) { return x === 'ROLE_ADMIN'; }))
                return true;
        }
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AdminGuard.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AdminGuard.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return AdminGuard;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    ErrorInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        return next.handle(request).pipe(catchError(function (err) {
            /** @type {?} */
            var error = err.error.message || err.statusText;
            return throwError(error);
        }));
    };
    ErrorInterceptor.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ErrorInterceptor.ctorParameters = function () { return []; };
    return ErrorInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    JwtInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        console.info('JwtInterceptor');
        /** @type {?} */
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor.decorators = [
        { type: Injectable },
    ];
    return JwtInterceptor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var File = /** @class */ (function () {
    function File() {
    }
    return File;
}());

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWlueWFuZy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8veWlueWFuZy9saWIveWlueWFuZy5zZXJ2aWNlLnRzIiwibmc6Ly95aW55YW5nL2xpYi95aW55YW5nLmNvbXBvbmVudC50cyIsIm5nOi8veWlueWFuZy9saWIveWlueWFuZy5tb2R1bGUudHMiLCJuZzovL3lpbnlhbmcvbGliL19ndWFyZHMvYXV0aC5ndWFyZC50cyIsIm5nOi8veWlueWFuZy9saWIvX2d1YXJkcy9hZG1pbi5ndWFyZC50cyIsIm5nOi8veWlueWFuZy9saWIvX2hlbHBlcnMvZXJyb3IuaW50ZXJjZXB0b3IudHMiLCJuZzovL3lpbnlhbmcvbGliL19oZWxwZXJzL2p3dC5pbnRlcmNlcHRvci50cyIsIm5nOi8veWlueWFuZy9saWIvX3RyYW5zZmVyL3VzZXIudHMiLCJuZzovL3lpbnlhbmcvbGliL190cmFuc2Zlci9maWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgWWlueWFuZ1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgdGVzdCgpIHtcbiAgICBjb25zb2xlLmluZm8oJ1lpbllhbmcgY29yZSBhdmFsaWJsZScpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd5eS15aW55YW5nJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHlpbnlhbmcgd29ya3MhXG4gICAgPC9wPlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFlpbnlhbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFlpbnlhbmdDb21wb25lbnQgfSBmcm9tICcuL3lpbnlhbmcuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtZaW55YW5nQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1lpbnlhbmdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFlpbnlhbmdNb2R1bGUgeyB9XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgUm91dGVyLCBSb3V0ZXJTdGF0ZVNuYXBzaG90fSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFVzZXInKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9sb2dpbiddLCB7cXVlcnlQYXJhbXM6IHtyZXR1cm5Vcmw6IHN0YXRlLnVybH19KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXIsIFJvdXRlclN0YXRlU25hcHNob3R9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL190cmFuc2Zlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZG1pbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgfVxuXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIGNvbnN0IHVzcjogVXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKSk7XG4gICAgaWYgKHVzcikge1xuICAgICAgaWYgKHVzci5yb2xlcy5maW5kKHggPT4geCA9PT0gJ1JPTEVfQURNSU4nKSlcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXV0aC9sb2dpbiddLCB7cXVlcnlQYXJhbXM6IHtyZXR1cm5Vcmw6IHN0YXRlLnVybH19KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3R9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZSwgdGhyb3dFcnJvcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2NhdGNoRXJyb3J9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShjYXRjaEVycm9yKGVyciA9PiB7XG4gICAgICAvLyBpZiAoZXJyLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAvLyAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9nb3V0KCk7XG4gICAgICAvLyAgICAgbG9jYXRpb24ucmVsb2FkKHRydWUpO1xuICAgICAgLy8gfVxuXG4gICAgICBjb25zdCBlcnJvciA9IGVyci5lcnJvci5tZXNzYWdlIHx8IGVyci5zdGF0dXNUZXh0O1xuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IpO1xuICAgIH0pKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEp3dEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgaW50ZXJjZXB0KHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sIG5leHQ6IEh0dHBIYW5kbGVyKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGNvbnNvbGUuaW5mbygnSnd0SW50ZXJjZXB0b3InKTtcbiAgICBjb25zdCBjdXJyZW50VXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJykpO1xuICAgIGlmIChjdXJyZW50VXNlciAmJiBjdXJyZW50VXNlci50b2tlbikge1xuICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2N1cnJlbnRVc2VyLnRva2VufWBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVXNlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgcm9sZXM6IHN0cmluZ1tdO1xufVxuIiwiZXhwb3J0IGNsYXNzIEZpbGUge1xuICBpZDogbnVtYmVyO1xuICBmaWxlTmFtZTogc3RyaW5nO1xuICBtaW1lVHlwZTogc3RyaW5nO1xuICBmaWxlU2l6ZTogbnVtYmVyO1xuICB1cmw6IHN0cmluZztcbiAgYWx0OiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFPRTtLQUFpQjs7OztJQUVqQiw2QkFBSTs7O0lBQUo7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7S0FDdkM7O2dCQVRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3lCQUpEOzs7Ozs7O0FDQUE7SUFhRTtLQUFpQjs7OztJQUVqQixtQ0FBUTs7O0lBQVI7S0FDQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsK0NBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7MkJBVkQ7Ozs7Ozs7QUNBQTs7OztnQkFHQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM1Qjs7d0JBUkQ7Ozs7Ozs7QUNBQTtJQU1FLG1CQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtLQUNqQzs7Ozs7O0lBRUQsK0JBQVc7Ozs7O0lBQVgsVUFBWSxLQUE2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