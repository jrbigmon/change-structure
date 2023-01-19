import { getFileNameToCreateFolderAndMove } from "./methods-file/get-filename-to-use-in-folder-and-file";
import { moveFileToNewFolder } from "./methods-file/move-file-to-new-folder";
import { createFolders } from "./methods-folder/create-folder";
import { moveFoldersIn } from "./methods-folder/move-folders-in";
import { removeFolders } from "./methods-folder/remove-folders";
import { installDependencies } from "./resolve-dependecies/install-dependencies";
import { uninstallDepedencies } from "./resolve-dependecies/unistall-dependencies";
import { moveControllersAndRename } from "./methods-file/move-controllers-and-rename"
import { createModuleInFolderRoutes } from "./methods-file/create-module-in-folders-routes";

export function reorganizeStructure() {
  installDependencies();
  createFolders('routes', 'src');
  getFileNameToCreateFolderAndMove('src/repositories/entities');
  getFileNameToCreateFolderAndMove('src/services/bo', 'service');
  moveFoldersIn('src/services/bo/', 'src/routes/');
  moveFoldersIn('src/repositories/entities', 'src/repositories');
  moveFileToNewFolder(
    'src/services/abstract.service.ts',
    'src/routes/abstract.service.ts',
  );
  moveFileToNewFolder(
    'src/services/service.module.ts',
    'src/routes/routes.module.ts',
  );
  removeFolders('src/repositories/entities');
  removeFolders('src/services');
  moveControllersAndRename('src/controller', 'src/routes');
  removeFolders('src/controller');
  createModuleInFolderRoutes('src/routes');
  uninstallDepedencies();
}
