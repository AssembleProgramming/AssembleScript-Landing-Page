import React, { useEffect, useState } from 'react';
import './PopupModal.scss';
import { motion } from 'framer-motion';
import Cookies from "universal-cookie";
import CA from '../../assets/images/PopUpBG/1.png';
import HULK from '../../assets/images/PopUpBG/2.png';
import BP from '../../assets/images/PopUpBG/3.png';
import STRANGE from '../../assets/images/PopUpBG/4.png';
import IM from '../../assets/images/PopUpBG/5.png';
import WIDOW from '../../assets/images/PopUpBG/6.png';
import SPIDER from '../../assets/images/PopUpBG/7.png';
import { Link } from 'react-router-dom';

const images = [CA, HULK, BP, STRANGE, IM, WIDOW, SPIDER];
const cookies = new Cookies();

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
            const lastPopupDate = cookies.get('lastPopupDate');
            const currentDate = new Date().toDateString();

            // Check if the modal was shown today
            if (lastPopupDate !== currentDate) {
                setTimeout(() => {
                    setVisible(true);
                    document.body.classList.add('modal-open');
                    cookies.set('lastPopupDate', currentDate, { path: '/', expires: new Date(new Date().setDate(new Date().getDate() + 1)) });
                }, 4000);
            }
        };

        // If the current image fails to load, log an error
        img.onerror = (error) => {
            console.error('Error loading current image:', error);
        };
    }, []);

    const closePopUP = () => {
        document.body.classList.remove('modal-open');
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
                >
                    <i onClick={closePopUP} className="close-popup-modal fa-regular fa-circle-xmark"></i>
                </motion.div>
                <Link to="/contest" >
                    <motion.button
                        onClick={closePopUP}
                        className="pop-up-more-btn"
                        initial={{ scale: 0 }}
                        animate={{
                            scale: 1,
                            transition: {
                                duration: 0.3
                            }
                        }}
                    >
                        LEARN MORE
                    </motion.button>
                </Link>
            </motion.div>
        )
    );
};

export default PopupModal;
