import { Container, Box } from '@mui/material';
import styled from '@emotion/styled';

export const Wrapper = styled(Container)`
    display: flex;
    height: fill-available;
    align-items: center;
    justify-content: space-between;
`;

export const Presentation = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;