'use client'
import {motion} from 'framer-motion';

export const ApiLoader = ({isLoading}: { isLoading: boolean }) => (
    <AnimatePresence>
        {isLoading && (
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
            >
                <motion.div
                    animate={{rotate: 360}}
                    transition={{repeat: Infinity, duration: 1}}
                    className="w-20 h-20 border-4 border-purple-500 rounded-full"
                />
                <p className="mt-4 text-white">Идёт расчёт матрицы...</p>
            </motion.div>
        )}
    </AnimatePresence>
);