import { PaginationService } from "./pagination.service";
import * as ɵngcc0 from '@angular/core';
export declare type Collection<T> = T[] | ReadonlyArray<T>;
export interface PaginatePipeArgs {
    id?: string;
    itemsPerPage?: string | number;
    currentPage?: string | number;
    totalItems?: string | number;
}
export interface PipeState {
    collection: any[];
    size: number;
    start: number;
    end: number;
    slice: any[];
}
export declare class PaginatePipe {
    private service;
    private state;
    constructor(service: PaginationService);
    transform<T, U extends Collection<T>>(collection: U, args: PaginatePipeArgs): U;
    /**
     * Create an PaginationInstance object, using defaults for any optional properties not supplied.
     */
    private createInstance;
    /**
     * Ensure the argument passed to the filter contains the required properties.
     */
    private checkConfig;
    /**
     * To avoid returning a brand new array each time the pipe is run, we store the state of the sliced
     * array for a given id. This means that the next time the pipe is run on this collection & id, we just
     * need to check that the collection, start and end points are all identical, and if so, return the
     * last sliced array.
     */
    private saveState;
    /**
     * For a given id, returns true if the collection, size, start and end values are identical.
     */
    private stateIsIdentical;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<PaginatePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDeclaration<PaginatePipe, "paginate", false>;
}

//# sourceMappingURL=paginate.pipe.d.ts.map