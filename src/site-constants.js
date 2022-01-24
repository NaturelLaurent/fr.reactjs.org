/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @providesModule site-constants
 * @flow
 */

// NOTE: We can't just use `location.toString()` because when we are rendering
// the SSR part in node.js we won't have a proper location.
<<<<<<< HEAD
const urlRoot = 'https://fr.reactjs.org';
=======
const urlRoot = 'https://reactjs.org';
>>>>>>> 69bd27a3d558d6633e4f0adc61ecb8bb3d5f2edf
const version = '17.0.2';
const babelURL = 'https://unpkg.com/babel-standalone@6.26.0/babel.min.js';

export {babelURL, urlRoot, version};
