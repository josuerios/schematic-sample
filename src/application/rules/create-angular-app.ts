import { strings } from '@angular-devkit/core';
import { externalSchematic, Rule } from '@angular-devkit/schematics';

import { AppSchemaOptions } from '../schema';

export function createAngularAppRule(options: AppSchemaOptions): Rule {
  return externalSchematic('@schematics/angular', 'application', {
    name: options.name,
    directory: options.directory || '',
    prefix: 'app',
    style: 'scss',
    inlineStyle: false,
    inlineTemplate: false,
    routing: false,
    skipTests: false,
    skipGit: false,
    minimal: false,
    serviceWorker: true,
    version: '1.6.5',
    utils: strings,
  });
}
