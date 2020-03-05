import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core';

type IScreenKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'smdown' | 'mddown' | 'lgdown' | 'smup' | 'mdup' | 'lgup';
type IScreen = Record<IScreenKey, boolean>;

const useScreen = (): IScreen => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only('xs'));
  const sm = useMediaQuery(theme.breakpoints.only('sm'));
  const md = useMediaQuery(theme.breakpoints.only('md'));
  const lg = useMediaQuery(theme.breakpoints.only('lg'));
  const xl = useMediaQuery(theme.breakpoints.only('xl'));
  return {
    xs,
    sm,
    md,
    lg,
    xl,
    smdown: xs || sm,
    mddown: xs || sm || md,
    lgdown: !xl,
    smup: !xs,
    mdup: md || lg || xl,
    lgup: lg || xl,
  };
};

export default useScreen;
