import '@components/common/Seperator/Seperator.scss';

export type SeperatorProps = Record<string, never>;

export const Seperator = (_props: SeperatorProps) => {
  return <div className="seperator"></div>;
};
