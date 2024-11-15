import { EventEmitter } from '@angular/core';
/**
 * The default pagination controls component. Actually just a default implementation of a custom template.
 */
import * as ɵngcc0 from '@angular/core';
export declare class PaginationControlsComponent {
    id: string;
    maxSize: number;
    directionLinks: boolean;
    autoHide: boolean;
    responsive: boolean;
    previousLabel: string;
    nextLabel: string;
    screenReaderPaginationLabel: string;
    screenReaderPageLabel: string;
    screenReaderCurrentLabel: string;
    pageChange: EventEmitter<number>;
    pageBoundsCorrection: EventEmitter<number>;
    private _directionLinks;
    private _autoHide;
    private _responsive;
    trackByIndex(index: number): number;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<PaginationControlsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<PaginationControlsComponent, "pagination-controls", never, { "maxSize": "maxSize"; "previousLabel": "previousLabel"; "nextLabel": "nextLabel"; "screenReaderPaginationLabel": "screenReaderPaginationLabel"; "screenReaderPageLabel": "screenReaderPageLabel"; "screenReaderCurrentLabel": "screenReaderCurrentLabel"; "directionLinks": "directionLinks"; "autoHide": "autoHide"; "responsive": "responsive"; "id": "id"; }, { "pageChange": "pageChange"; "pageBoundsCorrection": "pageBoundsCorrection"; }, never, never, false, never>;
}

//# sourceMappingURL=pagination-controls.component.d.ts.map