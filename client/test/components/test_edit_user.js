import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import EditUser from '../../src/components/edit_user';
import {expect} from 'chai';

describe('edit User', () => {

  it('look at prargraph', () => {
    const component = renderIntoDocument(
      <EditUser />
    );
    const forms = scryRenderedDOMComponentsWithTag(component, 'form');

    expect(forms.length).to.equal(1);
    const form = forms[0];
    console.log(form.children[1]);
    expect(form.children.length).equal(10);
    expect(form.children[0].children.length).equal(2);
    expect(form.children[0].tagName).equal('DIV');
    expect(form.children[0].children[0].tagName).equal('LABEL');
    expect(form.children[0].children[1].tagName).equal('INPUT')
  });

});
