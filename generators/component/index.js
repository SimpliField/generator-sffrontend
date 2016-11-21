'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Generatin a brand new component.'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'componentName',
        message: 'Give the name of the component you want to create! (kebab-case)',
      },
      {
        type: 'input',
        name: 'pathName',
        message: 'Where to ?',
        default: 'src/app/components',
      },
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    ['controller.js', 'controller.spec.js', 'component.js', 'module.js']
      .forEach((extName) => {
        this.fs.copyTpl(
          this.templatePath(extName),
          this.destinationPath(`${this.props.pathName}/${this.props.componentName}/${this.props.componentName}.${extName}`),
          {
            fileName: `${this.props.componentName}`,
            fileNameCamel: `${this.props.componentName}`
              .replace(/(\-(.))/, ($1, $2) => $2.toUpperCase()),
            fileNamePascal: `${this.props.componentName}`
              .replace(/(\-(.))/, ($1, $2) => $2.toUpperCase())
              .replace(/^(.)/, $1 => $1.toUpperCase()),
          }
        );
      });
    this.fs.copyTpl(
      this.templatePath('template.html'),
      this.destinationPath(`${this.props.pathName}/${this.props.componentName}/${this.props.componentName}.html`),
      {
        fileNameCamel: `${this.props.componentName}`
          .replace(/(\-(.))/, ($1, $2) => $2.toUpperCase()),
      }
    );
  }
});
