/* globals describe, beforeEach, it */

'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('latest-greatest-webapp generator', function() {
  beforeEach(function() {
    this.app = helpers
      .run(path.join(__dirname, '../generators/app'))
      .withOptions({
        'skip-welcome-message': true,
        'skip-message': true
      })
      .withPrompts({
        packageName: 'TPS Report Faker',
        authorName: 'Milton',
      });
  });

  describe('ES6 module', function() {
    beforeEach(function(done) {
      this.app.withPrompts({
        includeHtmlCss: false,
      }).on('end', done);
    });

    it('creates the correct files', function() {
      assert.file([
        'package.json',
        'webpack.config.js',
        '.editorconfig',
        '.jshintrc',
        '.gitignore'
      ]);
    });
  });

  describe('ES6 web app', function() {
    beforeEach(function(done) {
      this.app.withPrompts({
        includeHtmlCss: true,
      }).on('end', done);
    });

    it('creates the correct files', function() {
      assert.file([
        'app/index.html',
        'app/images',
        'app/scripts',
        'app/scripts/main.js',
        'app/scss',
        'app/scss/app.scss',
        'package.json',
        'webpack.config.js',
        '.editorconfig',
        '.jshintrc',
        '.gitignore'
      ]);
    });
  });

  describe('package.json is correct', function() {
    beforeEach(function(done) {
      this.app.on('end', done);
    });

    it('has the correct app name', function() {
      assert.fileContent('package.json', /\"name\": \"TPS Report Faker\"/);
    });

    it('has the correct author name', function() {
      assert.fileContent('package.json', /\"author\": \"Milton\"/);
    });
  });
});
