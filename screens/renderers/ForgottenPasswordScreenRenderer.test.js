import React from 'react';
import renderer from 'react-test-renderer';

import ForgottenPasswordScreenRenderer from './ForgottenPasswordScreenRenderer';


it('renders the Forgotten Password Screen', () => {
    expect(renderer.create(
        <ForgottenPasswordScreenRenderer
            handleSubmit={() => { }}
        />
    )).toMatchSnapshot();
});
