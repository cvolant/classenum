import React, { ReactNode } from 'react';

import styled from 'styled-components';

type IChaptersProps = {
  chapter: number;
  duration: number;
  size: number;
}
type IHorizontalStoryProps = Partial<IChaptersProps> & {
  children: ReactNode[];
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: hidden;
`;

const Chapters = styled.div<IChaptersProps>`
  ${({ chapter, duration, size }): string => `
    height: 100%;
    width: ${size}00%;
    transition: transform ${duration}ms ease;
    transform: translateX(-${(100 * chapter) / size}%);
    display: flex;

    & > * {
      width: ${100 / size}%;
    }
  `}
`;

const HorizontalStory: React.FC<IHorizontalStoryProps> = ({ duration, chapter, children }) => (
  <Container>
    <Chapters size={children.length} chapter={chapter || 0} duration={duration || 300}>
      {children}
    </Chapters>
  </Container>
);

export default HorizontalStory;
