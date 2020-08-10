import React from 'react';
import renderer from 'react-test-renderer';

import VerifyScreenRenderer from './VerifyScreenRenderer';


  it('renders the Verify Screen', () => {
    expect(renderer.create(
      <VerifyScreenRenderer
        confirm={() =>{}}
        code=""
        email=""
        signUpUser={()=>{}}
        handleResendCode={()=>{}}
        verifyError={false} />
    )).toMatchSnapshot();
  });

  it('renders an error on the Verify Screen', () => {
    expect(renderer.create(
      <VerifyScreenRenderer
        confirm={() =>{}}
        code=""
        email=""
        signUpUser={()=>{}}
        handleResendCode={()=>{}}
        verifyError='There is an error' />
    )).toMatchSnapshot();
  });