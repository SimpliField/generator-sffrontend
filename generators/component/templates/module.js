import angular from 'angular';
import <%= fileNameCamel %>Component from './<%= fileName %>.component';

export default angular
  .module('simplifield.components.<%= fileName %>', [])
  .component('sf<%= fileNamePascal %>', <%= fileNameCamel %>Component)
  .name;
