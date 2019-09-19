import { styled } from '~/theme';

export const HelloHeader = styled.h2`;
  font-family: Georgia;
  color: ${props => props.theme.palette.secondaryLight};
  border-color: ${props => props.theme.palette.secondaryLight};

  &:hover {
    background-color: rgba(159, 200, 287, 0.08);
  }

  &:focus {
    color: ${props => props.theme.palette.secondaryHighlight};
    border: 2px solid ${props => props.theme.palette.secondaryHighlight};
    padding: 5px 16px 4px;
    margin-top: -1px;
  }
`;
