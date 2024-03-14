import { useMediaQuery } from '@react-hook/media-query';

const useDeviceType = () => {
    const isMobileDevice = useMediaQuery('only screen and (max-width: 767px)');
    const isTabletDevice = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
    const isLaptop = useMediaQuery('(min-width: 1024px) and (max-width: 1199px)');
    const isDesktop = useMediaQuery('(min-width: 1200px) and (max-width: 1600px)');
    const isBigScreen = useMediaQuery('(min-width: 1601px)');

    if (isMobileDevice) {
        return 'mobile';
    } else if (isTabletDevice) {
        return 'tablet';
    } else if (isLaptop) {
        return 'laptop';
    } else if (isDesktop) {
        return 'desktop';
    } else if (isBigScreen) {
        return 'bigScreen';
    } else {
        return 'unknown';
    }
};

export default useDeviceType;
