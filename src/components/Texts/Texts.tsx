import { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

interface TextsProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
  className?: string;
}

interface LinksProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
  className?: string;
  href: string;
  target?: string;
}

export function Title(props: TextsProps): React.JSX.Element {
  const { children, className, ...textProps } = props;
  return (
    <TitleStyled className={className} {...textProps}>
      {children}
    </TitleStyled>
  );
}

export function H1(props: TextsProps): React.JSX.Element {
  const { children, className, ...textProps } = props;
  return (
    <H1Styled className={className} {...textProps}>
      {children}
    </H1Styled>
  );
}

export function H2(props: TextsProps): React.JSX.Element {
  const { children, className, ...textProps } = props;
  return (
    <H2Styled className={className} {...textProps}>
      {children}
    </H2Styled>
  );
}

export function H3(props: TextsProps): React.JSX.Element {
  const { children, className, ...textProps } = props;
  return (
    <H3Styled className={className} {...textProps}>
      {children}
    </H3Styled>
  );
}

export function H4(props: TextsProps): React.JSX.Element {
  const { children, className, ...textProps } = props;
  return (
    <H4Styled className={className} {...textProps}>
      {children}
    </H4Styled>
  );
}

export function P24(props: TextsProps): React.JSX.Element {
  const { children, className, ...textProps } = props;
  return (
    <P24Styled className={className} {...textProps}>
      {children}
    </P24Styled>
  );
}

export function P18(props: TextsProps): React.JSX.Element {
  const { children, className, ...textProps } = props;
  return (
    <P18Styled className={className} {...textProps}>
      {children}
    </P18Styled>
  );
}

export function P16(props: TextsProps): React.JSX.Element {
  const { children, className, ...textProps } = props;
  return (
    <P16Styled className={className} {...textProps}>
      {children}
    </P16Styled>
  );
}

export function P14(props: TextsProps): React.JSX.Element {
  const { children, className, ...textProps } = props;
  return (
    <P14Styled className={className} {...textProps}>
      {children}
    </P14Styled>
  );
}

export function P12(props: TextsProps): React.JSX.Element {
  const { children, className, ...textProps } = props;
  return (
    <P12Styled className={className} {...textProps}>
      {children}
    </P12Styled>
  );
}

export function P10(props: TextsProps): React.JSX.Element {
  const { children, className, ...textProps } = props;
  return (
    <P10Styled className={className} {...textProps}>
      {children}
    </P10Styled>
  );
}

export function Link(props: LinksProps): React.JSX.Element {
  const { children, className, ...textProps } = props;
  return (
    <LinkStyled className={className} {...textProps}>
      {children}
    </LinkStyled>
  );
}

const TitleStyled = tw.h1`
  text-4xl md:text-6xl
  font-title
  font-black
  uppercase
  text-foreground
`;

const H1Styled = tw.h1`
  text-2xl md:text-4xl
  font-title
  font-black
  uppercase
  text-foreground
`;

const H2Styled = tw.h2`
  text-7xl
  font-primary
  text-foreground
  tangerine-bold
`;

const H3Styled = tw.h3`
  text-xl
  font-title
  font-black
  uppercase
  text-foreground
`;

const H4Styled = tw.h4`
  text-lg
  font-title
  font-black
  uppercase
  text-foreground
`;

const P24Styled = tw.p`
  text-[18px] md:text-[24px]
  font-sans
  font-normal
  text-foreground
`;

const P18Styled = tw.p`
  text-[15px] md:text-[18px]
  font-sans
  font-normal
  text-foreground
`;

const P16Styled = tw.p`
  text-[16px] 
  font-sans
  font-normal
  text-foreground
`;

const P14Styled = tw.p`
  text-[14px]
  font-sans
  font-normal
  text-foreground
`;

const P12Styled = tw.p`
  text-[12px]
  font-sans
  font-normal
  text-foreground
`;

const P10Styled = tw.p`
  text-[10px]
  font-sans
  font-normal
  text-foreground
`;

const LinkStyled = tw.a`
  flex 
  items-center 
  gap-1
  group 
  cursor-pointer
  w-fit
`;
