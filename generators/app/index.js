'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const globby = require('globby');
const yoHelper = require('@jswork/yeoman-generator-helper');
const genp = require('@jswork/generator-prompts');
const prompts = genp(['scope', 'registry', 'project_name', 'description']);

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to the stunning 'generator-gulp' generator!`));
    this.props = await this.prompt(prompts);
  }

  writing() {
    const ctx = yoHelper.ctx;
    this.fs.copyTpl(
      globby.sync(this.templatePath('**'), { dot: true }),
      this.destinationPath(),
      { ...this.props, ctx }
    );
  }
};
