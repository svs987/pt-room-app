import React from 'react';
import renderer from 'react-test-renderer';

import ChangePasswordScreenRenderer from './ChangePasswordScreenRenderer';


it('renders the Forgotten Password Screen', () => {
    expect(renderer.create(
        <ChangePasswordScreenRenderer
            handleSubmit={() => { }}
        />
    )).toMatchSnapshot();
});
