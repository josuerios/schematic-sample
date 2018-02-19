import * as path from 'path';
import { Rule, Tree } from '@angular-devkit/schematics';


export function modifyPackageRule(dir: string): Rule {
  return (tree: Tree) => {
    const packagePath = path.normalize(dir + '/package.json');
    const buffer = tree.read(packagePath);

    if (buffer) {
      const content = buffer.toString('utf8');
      const contentJSON = JSON.parse(content);
      contentJSON.scripts['precommit'] = 'lint-staged';


      // devDependencies
      contentJSON.devDependencies['husky'] = '^0.14.3';
      contentJSON.devDependencies['lint-staged'] = '^6.0.1';


      tree.overwrite(packagePath, JSON.stringify(contentJSON, null, 2));
    }

    return tree;
  };
}
