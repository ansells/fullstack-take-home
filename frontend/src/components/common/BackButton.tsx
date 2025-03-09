import { Link, useCanGoBack, useRouter } from '@tanstack/react-router';
import BackArrow from '@assets/back.svg';

const BackButton = () => {
  const canGoBack = useCanGoBack();
  const router = useRouter();
  return (
    <Link
      className="cursor-pointer"
      to={canGoBack ? '.' : '/'}
      onClick={() => canGoBack && router.history.back()}
    >
      <img className="w-10 h-10" src={BackArrow} alt="back" />
    </Link>
  );
};

export default BackButton;
