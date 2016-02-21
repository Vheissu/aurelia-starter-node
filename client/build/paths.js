var appRoot = 'public/app/src/';
var outputRoot = 'public/app/dist/';
var exportSrvRoot = 'public/app/export/';

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.js',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  style: 'public/app/styles/**/*.css',
  output: outputRoot,
  exportSrv: exportSrvRoot,
  doc: './doc',
  e2eSpecsSrc: 'public/app/test/e2e/src/**/*.js',
  e2eSpecsDist: 'public/app/test/e2e/dist/'
};
