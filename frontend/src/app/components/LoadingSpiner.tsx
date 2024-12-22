import hand from '../../../public/hand.svg';

const LoadingSpinner2 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="animate-waving-hand opacity-100 transform translate-y-0 duration-300">
        <img src={hand} alt="Welcome" className="w-52 h-52" />
      </div>
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold text-gray-700">Loading...</p>
        <p className="text-sm text-gray-500">We're preparing your content.</p>
      </div>
    </div>
  );
};

export default LoadingSpinner2;
