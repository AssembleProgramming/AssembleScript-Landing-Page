import React, { useEffect, useState } from 'react';
import './PopupModal.scss';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import CA from '../../assets/images/PopUpBG/1.png';
import HULK from '../../assets/images/PopUpBG/2.png';
import BP from '../../assets/images/PopUpBG/3.png';
import STRANGE from '../../assets/images/PopUpBG/4.png';
import IM from '../../assets/images/PopUpBG/5.png';
import WIDOW from '../../assets/images/PopUpBG/6.png';
import SPIDER from '../../assets/images/PopUpBG/7.png';

const images = [CA, HULK, BP, STRANGE, IM, WIDOW, SPIDER];

const PopupModal = () => {
    const [modalImage, setModalImage] = useState(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const currentImg = Math.floor(Math.random() * 7);
        setModalImage(currentImg);

        const img = new Image();
        img.src = images[currentImg];

        // When the current image is loaded, set the modal image
        img.onload = () => {
            setTimeout(() => {
                setVisible(true);
            }, 4000);
        };

        // If the current image fails to load, log an error
        img.onerror = (error) => {
            console.error('Error loading current image:', error);
        };
    }, []);

    const closePopUP = () => {
        setVisible(false);
    };

    return (
        isVisible && (
            <motion.div
                className="popup-modal-bg"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        duration: 0.3
                    }
                }}
                exit={{ opacity: 0 }}
            >
                <motion.div
                    style={{
                        backgroundImage: `url(${images[modalImage]})`,
                    }}
                    className="popup-modal-container"
                    initial={{ scale: 0 }}
                    animate={{
                        scale: 1,
                        transition: {
                            duration: 0.3
                        }
                    }}
                    exit={{ scale: 0 }}
                >
                    <i onClick={closePopUP} className="close-popup-modal fa-regular fa-circle-xmark"></i>
                </motion.div>
                <motion.button
                    className="pop-up-more-btn"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    LEARN MORE
                </motion.button>
            </motion.div>
        )
    );
};

export default PopupModal;
