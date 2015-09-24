# Multi-emberapp-htmlbars-inline-precompile-bug

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## How To Recreate

1. clone the repo
2. run `scripts/desktop t` and you'll see the error.
3. For the quickest fix just remove one of the EmberApp's (so now there is only 1 EmberApp again)...so just comment out line 8 in ember-cli-build.js https://github.com/alexdiliberto/multi-emberapp-htmlbars-inline-precompile-bug/blob/master/ember-cli-build.js#L8. Now run `scripts/desktop t` and it works because there is only 1 EmberApp.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

