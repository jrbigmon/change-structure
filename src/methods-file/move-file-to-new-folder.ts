import * as path from 'path';
import * as fsx from 'fs-extra';

export function moveFileToNewFolder(
  oldPath: string,
  newPath: string,
  forceError = true,
) {
  try {
    fsx.moveSync(path.resolve(oldPath), path.resolve(newPath));
  } catch (error) {
    console.log(`File not moved to new path: ${newPath}`);
    
    if (forceError) {
      console.log(error);
      throw new Error(error.message);
    }
  }
}