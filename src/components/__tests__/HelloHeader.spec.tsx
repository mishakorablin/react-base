import * as React from 'react';
import { render } from '/tests/utils';

import { HelloHeader } from '../HelloHeader';

describe('HelloHeader', () => {
  it('should display its children', () => {
    const testID = 'fake-test-id';
    const testElement = <div data-testid={testID} />;
    const { getByTestId} = render(
      <HelloHeader>
        {testElement}
      </HelloHeader>
    );
    expect(getByTestId(testID)).toBeDefined();
  });
});
