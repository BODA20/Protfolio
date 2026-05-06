import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const DownloadCVButton = () => {
  return (
    <motion.a
      href="/Abdurrahman_Saber_CV.pdf"
      download="Abdurrahman_Saber_CV.pdf"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex w-fit items-center gap-3 rounded border border-aws-orange/40 bg-aws-navy px-6 py-4 font-mono text-sm text-aws-orange shadow-[0_0_10px_rgba(255,153,0,0.1)] transition-all duration-300 hover:border-aws-orange hover:bg-aws-orange/10 hover:shadow-[0_0_20px_rgba(255,153,0,0.6)]"
    >
      {/* Subtle Terminal Scanline Overlay (visible on hover) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="h-full w-full bg-[linear-gradient(transparent_50%,rgba(255,153,0,0.15)_50%)] bg-[length:100%_4px]" />
      </div>

      <Download size={18} className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5" />
      
      <span className="relative z-10">{"> ./download_cv.sh"}</span>
      
      {/* Blinking Terminal Cursor */}
      <motion.span 
        animate={{ opacity: [1, 0, 1] }} 
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="relative z-10 ml-1 h-4 w-2 bg-aws-orange"
      />
    </motion.a>
  );
};

export default DownloadCVButton;
