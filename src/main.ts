import {reorganizeStructure} from './reorganize-structure'

module.exports = {
  all: reorganizeStructure('controllers', 'services', 'repositories', 'entities')
}