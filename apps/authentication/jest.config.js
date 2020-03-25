module.exports = {
  name: 'authentication',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/authentication',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
