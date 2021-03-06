import { StateContext } from '@ngxs/store';
import { StateClass } from '@ngxs/store/internals';
import { MappedStore } from '@ngxs/store/src/internal/internals';

import { NgxsRepositoryMeta } from '../../../../common/src/types/repository.types';
import { Any } from '../../../../internals/src/types/symbols';
import { getRepository } from '../../../../internals/src/utils/ensure-repository';
import { NgxsDataAccessor } from '../../../services/ngxs-data-accessor';

export function createContext<T>(stateClass: StateClass): PropertyDescriptor {
    return {
        enumerable: true,
        configurable: true,
        get(): StateContext<Any> {
            const meta: NgxsRepositoryMeta = getRepository(stateClass);
            const mappedMeta: MappedStore | null | undefined = NgxsDataAccessor.ensureMappedState(meta.stateMeta);

            if (!mappedMeta) {
                throw new Error('Cannot create state context, because not found meta information');
            }

            return NgxsDataAccessor.createStateContext(mappedMeta);
        }
    };
}
