import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-foo', 'Integration | Component | x foo', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{x-foo}}`);

  assert.equal(this.$().text().trim(), '~ no block ~');

  // Template block usage:
  this.render(hbs`
    {{#x-foo}}
      template block text
    {{/x-foo}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
