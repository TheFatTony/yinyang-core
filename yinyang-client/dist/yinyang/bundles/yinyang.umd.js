(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('yinyang', ['exports', '@angular/core', '@angular/router', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global.yinyang = {}),global.ng.core,global.ng.router,global.rxjs,global.rxjs.operators));
}(this, (function (exports,i0,router,rxjs,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var YinyangService = (function () {
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
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        YinyangService.ctorParameters = function () { return []; };
        /** @nocollapse */ YinyangService.ngInjectableDef = i0.defineInjectable({ factory: function YinyangService_Factory() { return new YinyangService(); }, token: YinyangService, providedIn: "root" });
        return YinyangService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var YinyangComponent = (function () {
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
            { type: i0.Component, args: [{
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
    var YinyangModule = (function () {
        function YinyangModule() {
        }
        YinyangModule.decorators = [
            { type: i0.NgModule, args: [{
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
    var AuthGuard = (function () {
        function AuthGuard(router$$1) {
            this.router = router$$1;
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
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        AuthGuard.ctorParameters = function () {
            return [
                { type: router.Router }
            ];
        };
        return AuthGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var AdminGuard = (function () {
        function AdminGuard(router$$1) {
            this.router = router$$1;
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
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        AdminGuard.ctorParameters = function () {
            return [
                { type: router.Router }
            ];
        };
        return AdminGuard;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ErrorInterceptor = (function () {
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
                return next.handle(request).pipe(operators.catchError(function (err) {
                    /** @type {?} */
                    var error = err.error.message || err.statusText;
                    return rxjs.throwError(error);
                }));
            };
        ErrorInterceptor.decorators = [
            { type: i0.Injectable },
        ];
        /** @nocollapse */
        ErrorInterceptor.ctorParameters = function () { return []; };
        return ErrorInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var JwtInterceptor = (function () {
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
            { type: i0.Injectable },
        ];
        return JwtInterceptor;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var User = (function () {
        function User() {
        }
        return User;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var File = (function () {
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

    exports.YinyangService = YinyangService;
    exports.YinyangComponent = YinyangComponent;
    exports.YinyangModule = YinyangModule;
    exports.AuthGuard = AuthGuard;
    exports.AdminGuard = AdminGuard;
    exports.ErrorInterceptor = ErrorInterceptor;
    exports.JwtInterceptor = JwtInterceptor;
    exports.User = User;
    exports.File = File;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWlueWFuZy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL3lpbnlhbmcvbGliL3lpbnlhbmcuc2VydmljZS50cyIsIm5nOi8veWlueWFuZy9saWIveWlueWFuZy5jb21wb25lbnQudHMiLCJuZzovL3lpbnlhbmcvbGliL3lpbnlhbmcubW9kdWxlLnRzIiwibmc6Ly95aW55YW5nL2xpYi9fZ3VhcmRzL2F1dGguZ3VhcmQudHMiLCJuZzovL3lpbnlhbmcvbGliL19ndWFyZHMvYWRtaW4uZ3VhcmQudHMiLCJuZzovL3lpbnlhbmcvbGliL19oZWxwZXJzL2Vycm9yLmludGVyY2VwdG9yLnRzIiwibmc6Ly95aW55YW5nL2xpYi9faGVscGVycy9qd3QuaW50ZXJjZXB0b3IudHMiLCJuZzovL3lpbnlhbmcvbGliL190cmFuc2Zlci91c2VyLnRzIiwibmc6Ly95aW55YW5nL2xpYi9fdHJhbnNmZXIvZmlsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFlpbnlhbmdTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHRlc3QoKSB7XG4gICAgY29uc29sZS5pbmZvKCdZaW5ZYW5nIGNvcmUgYXZhbGlibGUnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneXkteWlueWFuZycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICB5aW55YW5nIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBZaW55YW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBZaW55YW5nQ29tcG9uZW50IH0gZnJvbSAnLi95aW55YW5nLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbWWlueWFuZ0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtZaW55YW5nQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBZaW55YW5nTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gIH1cblxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRVc2VyJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgvbG9naW4nXSwge3F1ZXJ5UGFyYW1zOiB7cmV0dXJuVXJsOiBzdGF0ZS51cmx9fSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBDYW5BY3RpdmF0ZSwgUm91dGVyLCBSb3V0ZXJTdGF0ZVNuYXBzaG90fSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi9fdHJhbnNmZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWRtaW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gIH1cblxuICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICBjb25zdCB1c3I6IFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xuICAgIGlmICh1c3IpIHtcbiAgICAgIGlmICh1c3Iucm9sZXMuZmluZCh4ID0+IHggPT09ICdST0xFX0FETUlOJykpXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2F1dGgvbG9naW4nXSwge3F1ZXJ5UGFyYW1zOiB7cmV0dXJuVXJsOiBzdGF0ZS51cmx9fSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwRXZlbnQsIEh0dHBIYW5kbGVyLCBIdHRwSW50ZXJjZXB0b3IsIEh0dHBSZXF1ZXN0fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge09ic2VydmFibGUsIHRocm93RXJyb3J9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtjYXRjaEVycm9yfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFcnJvckludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoY2F0Y2hFcnJvcihlcnIgPT4ge1xuICAgICAgLy8gaWYgKGVyci5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgLy8gICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgLy8gICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICAgIC8vIH1cblxuICAgICAgY29uc3QgZXJyb3IgPSBlcnIuZXJyb3IubWVzc2FnZSB8fCBlcnIuc3RhdHVzVGV4dDtcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICB9KSk7XG4gIH1cbn1cbiIsImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBFdmVudCwgSHR0cEhhbmRsZXIsIEh0dHBJbnRlcmNlcHRvciwgSHR0cFJlcXVlc3R9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBKd3RJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGludGVyY2VwdChyZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBjb25zb2xlLmluZm8oJ0p3dEludGVyY2VwdG9yJyk7XG4gICAgY29uc3QgY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VXNlcicpKTtcbiAgICBpZiAoY3VycmVudFVzZXIgJiYgY3VycmVudFVzZXIudG9rZW4pIHtcbiAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgc2V0SGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjdXJyZW50VXNlci50b2tlbn1gXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVzZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIHJvbGVzOiBzdHJpbmdbXTtcbn1cbiIsImV4cG9ydCBjbGFzcyBGaWxlIHtcbiAgaWQ6IG51bWJlcjtcbiAgZmlsZU5hbWU6IHN0cmluZztcbiAgbWltZVR5cGU6IHN0cmluZztcbiAgZmlsZVNpemU6IG51bWJlcjtcbiAgdXJsOiBzdHJpbmc7XG4gIGFsdDogc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSIsInJvdXRlciIsIlJvdXRlciIsImNhdGNoRXJyb3IiLCJ0aHJvd0Vycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7OztRQUVqQiw2QkFBSTs7O1lBQUo7Z0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2FBQ3ZDOztvQkFURkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7NkJBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLG1DQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxZQUFZO3dCQUN0QixRQUFRLEVBQUUsK0NBSVQ7d0JBQ0QsTUFBTSxFQUFFLEVBQUU7cUJBQ1g7Ozs7K0JBVkQ7Ozs7Ozs7QUNBQTs7OztvQkFHQ0MsV0FBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxFQUNSO3dCQUNELFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO3dCQUNoQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDNUI7OzRCQVJEOzs7Ozs7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