import { Pipe, PipeTransform } from '@angular/core';
import { Immutable, Mutable } from '@ngxs-labs/data/common';

@Pipe({ name: 'mutable' })
export class NgxsDataMutablePipe implements PipeTransform {
    transform<T>(value: Immutable<T> | null): Mutable<T>;
    transform<T>(value: T | null): T;
    public transform<T>(value: Immutable<T> | T | null): T {
        return (value as Mutable<T>) as T;
    }
}
