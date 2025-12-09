import React from "react";
import { motion } from "framer-motion";
import { FaAtom, FaWaveSquare, FaDna } from "react-icons/fa";
import "./RadionicSpinner.css";

const RadionicSpinner = () => {
    const iconVariants = {
        rotate: {
            rotate: 360,
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    const pulseVariants = {
        scale: {
            scale: [1, 1.2, 1],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="radionic-wrapper">
            <motion.div
                className="radionic-container"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                <motion.div
                    className="ring-outer"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="ring-inner"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="core-atom"
                    variants={pulseVariants}
                    animate="scale"
                >
                    <FaAtom />
                </motion.div>
                <motion.div
                    className="orbit-icon-1"
                    variants={iconVariants}
                    animate="rotate"
                >
                    <FaWaveSquare />
                </motion.div>
                <motion.div
                    className="orbit-icon-2"
                    variants={iconVariants}
                    animate="rotate"
                >
                    <FaDna />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default RadionicSpinner;
