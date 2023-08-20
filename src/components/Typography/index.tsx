export const H1 = ({
  children,
  customClass,
}: {
  children: string | JSX.Element | JSX.Element[];
  customClass?: string;
}) => (
  <h1
    className={`${
      customClass ?? ''
    } xl:text-[40px] xl:leading-[50px] lg:text-3xl text-2xl font-crimson-text`}
  >
    {children}
  </h1>
);

export const H2 = ({
  children,
  customClass,
}: {
  children: string | JSX.Element | JSX.Element[];
  customClass?: string;
}) => (
  <h1
    className={`${
      customClass ?? ''
    } lg:text-base text-sm font-bold md:tracking-[5px] tracking-[3px] uppercase`}
  >
    {children}
  </h1>
);

export const H3 = ({
  children,
  customClass,
}: {
  children: string | JSX.Element | JSX.Element[];
  customClass?: string;
}) => (
  <h3
    className={`${
      customClass ?? ''
    } lg-xl:text-2xl lg:text-xl md-lg:text-lg text-base font-bold capitalize`}
  >
    {children}
  </h3>
);

export const P = ({
  children,
  customClass,
}: {
  children: string | JSX.Element | JSX.Element[];
  customClass?: string;
}) => (
  <p
    className={`${
      customClass ?? ''
    } lg:text-[15px] lg:leading-[18px] text-[13px] leading-[16px]`}
  >
    {children}
  </p>
);
