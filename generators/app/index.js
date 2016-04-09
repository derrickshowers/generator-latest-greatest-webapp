'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  prompting: function() {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the tiptop ' + chalk.red('EsnextScssWebpack') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'packageName',
        message: 'What\'s the name of your app/package?',
        default: process.cwd().split(path.sep).pop()
      },
      {
        type: 'input',
        name: 'authorName',
        message: 'What\'s your name (author)?'
      },
      {
        type: 'confirm',
        name: 'includeHtmlCss',
        message: 'Should HTML and CSS be included (choose Y, \'no\' doesn\'t work quite yet)?',
        default: true
      }
    ];

    this.prompt(prompts, function(props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    projectStructure: function() {
      this.mkdir('app');
      if (this.props.includeHtmlCss) {
        this.mkdir('app/scripts');
        this.mkdir('app/scss');
        this.mkdir('app/images');
      }
    },

    projectfiles: function() {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('_webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'), {
          name: this.props.packageName,
          author: this.props.authorName
        }
      );
    },

    appFiles: function() {
      var jsDestPath = (this.props.includeHtmlCss) ? 'app/scripts/main.js' : 'app/main.js';
      this.fs.copy(
        this.templatePath('_main.js'),
        this.destinationPath(jsDestPath)
      );
      if (this.props.includeHtmlCss) {
        this.mkdir('app/scss');
        this.mkdir('app/images');
        this.fs.copy(
          this.templatePath('_app.scss'),
          this.destinationPath('app/scss/app.scss')
        );
        this.fs.copyTpl(
          this.templatePath('_index.html'),
          this.destinationPath('app/index.html'), {
            name: this.props.packageName,
            author: this.props.authorName
          }
        );
      }
    }
  },

  install: function() {
    this.npmInstall();
  }
});
