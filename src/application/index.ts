import {chain, Rule} from '@angular-devkit/schematics';

import {AppSchemaOptions} from './schema';
import {createAngularAppRule} from './rules/create-angular-app';
import {modifyPackageRule} from './rules/modify-package';

export default function (options: AppSchemaOptions): Rule {
    const dir = options.directory || '';


    return chain([
        createAngularAppRule(options),
        modifyPackageRule(dir),

    ]);
}
