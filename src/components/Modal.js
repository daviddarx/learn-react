import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
    const elRef = useRef(null); // useRef = container for state you want to survive past render cycle

    if (!elRef.current) {
        // if the ref isn't initaliazied, we'll create one div
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        modalRoot.appendChild(elRef.current); // add child to the modal
        return () => modalRoot.removeChild(elRef.current); // cleanup once we're done
    }, []); //we only want to happen once -> empty array

    return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
