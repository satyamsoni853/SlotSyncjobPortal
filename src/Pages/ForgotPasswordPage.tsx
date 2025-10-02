
import React from 'react';
import ForgotPassword from '../Components/SignupLogin/ForgotPassword';
import { IconSnowboarding } from '@tabler/icons-react';
import { motion, Transition } from 'framer-motion';

const brandingContainerClasses =
  'hidden lg:flex w-2/5 bg-gradient-to-br from-faded-jade-100 via-white to-faded-jade-200 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 text-faded-jade-700 dark:text-white flex-col justify-center items-center p-8 transition-transform duration-1000 ease-in-out shadow-[0px_20px_40px_rgba(19,121,111,0.12)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)]';

function BrandingSection() {
  return (
    <>
      <div className="flex items-center rounded-full bg-white/80 dark:bg-gray-900 shadow-[0px_10px_30px_rgba(19,121,111,0.15)] dark:shadow-[0px_0px_30px_rgba(255,255,255,0.05)] p-4 space-x-4 transition-colors">
        <IconSnowboarding className="text-faded-jade-500 dark:text-faded-jade-300" size={48} />
        <p className="text-4xl font-bold text-faded-jade-600 dark:text-faded-jade-300 font-sans-serif">SlotSync</p>
      </div>
      <p className="text-2xl text-faded-jade-600 dark:text-gray-300 font-serif mt-4 text-center">
        Find a Job Made for You
      </p>
    </>
  );
}

const ForgotPasswordPage: React.FC = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 },
  };

  const pageTransition: Transition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="relative flex w-full h-screen items-center justify-center bg-gradient-to-br from-faded-jade-50 via-white to-faded-jade-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      <div className="flex w-full overflow-hidden">
        <div className={brandingContainerClasses}>
          <BrandingSection />
        </div>
        <div className="w-full lg:w-3/5 bg-white dark:bg-gray-900 flex justify-center items-center">
          <ForgotPassword />
        </div>
      </div>
    </motion.div>
  );
};

export default ForgotPasswordPage;
